import { useEffect, useState } from "react";

type Blog = {
  title: string;
  brief: string;
  url: string;
  coverImage?: {
    url: string;
  };
};

function Blog() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  const query = `
{
  publication(host: "blog.shwetacodes.pro") {
    posts(first: 6) {
      edges {
        node {
          title
          brief
          url
          coverImage {
            url
          }
        }
      }
    }
  }
}
`;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("https://gql.hashnode.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        });

        const data = await res.json();

        console.log("FULL API RESPONSE", data); 

        const posts =
          data?.data?.publication?.posts?.edges?.map(
            (edge: any) => edge.node,
          ) || [];

        console.log("blog data", posts);

        setBlogs(posts);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-center mb-12">Blogs</h2>

        {/* Loading */}
        {loading ? (
          <p className="text-center text-gray-400">Loading blogs...</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => (
              <a
                key={index}
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-white/10 bg-[#0a0a0a] overflow-hidden hover:-translate-y-2 transition duration-300"
              >
                {/* Image */}
                {blog.coverImage?.url && (
                  <div className="h-40 w-full overflow-hidden">
                    <img
                      src={blog.coverImage.url}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-2 group-hover:text-purple-400 transition">
                    {blog.title}
                  </h3>

                  <p className="text-sm text-gray-400 line-clamp-3">
                    {blog.brief}
                  </p>

                  <span className="inline-block mt-4 text-sm text-purple-400">
                    Read More →
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://your-hashnode-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-purple-500 px-6 py-2 rounded-lg text-purple-400 hover:bg-purple-500 hover:text-white transition"
          >
            View All Blogs →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Blog;

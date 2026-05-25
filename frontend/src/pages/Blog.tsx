import { useEffect, useState } from "react";
import { ExternalLink, BookOpen } from "lucide-react";

type Blog = {
  title: string;
  brief: string;
  url: string;
  coverImage?: string;
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
            coverImage
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

        console.log("data of hasnode", data)

        const posts =
          data?.data?.publication?.posts?.edges?.map(
            (edge: any) => edge.node,
          ) || [];

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
    <section
      className="
        relative overflow-hidden
        py-28 px-6
        bg-[var(--color-bg)]
        text-[var(--color-text)]
        border border-[var(--border-accent)]
        rounded-[32px]
      "
    >
      {/* BACKGROUND PATTERN */}
      <div
        className="
          absolute inset-0
          opacity-[0.04]
          pointer-events-none
        "
        style={{
          backgroundImage: `var(--gradient-primary)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-20">
          <div
            className="
              inline-flex items-center gap-2
              px-5 py-2.5
              rounded-full
              border border-[var(--border-accent)]
              bg-white/[0.03]
              text-[var(--color-primary)]
              backdrop-blur-xl
            "
          >
            <BookOpen size={16} />

            <span className="text-sm font-medium">
              Technical Writing
            </span>
          </div>

          <h2
            className="
              mt-6
              text-5xl md:text-7xl
              font-bold tracking-tight
            "
          >
            Latest{" "}
            <span className="text-[var(--color-primary)]">
              Blogs
            </span>
          </h2>

          <p
            className="
              max-w-3xl mx-auto
              mt-6
              text-white/60
              text-lg
              leading-8
            "
          >
            Sharing insights about full-stack development,
            React, backend systems, TypeScript, and modern
            web engineering.
          </p>
        </div>

        {/* LOADER */}
        {loading ? (
          <div className="flex justify-center py-24">
            <div
              className="
                h-14 w-14
                rounded-full
                border-4
                border-white/10
                border-t-[var(--color-primary)]
                animate-spin
              "
            />
          </div>
        ) : (
          <div
            className="
              grid gap-8
              md:grid-cols-2
              xl:grid-cols-3
            "
          >
            {blogs.map((blog, index) => (
              <a
                key={index}
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group relative
                  flex flex-col
                  overflow-hidden
                  rounded-[28px]
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  transition-all duration-500
                  hover:-translate-y-3
                  hover:border-[var(--border-accent)]
                  hover:shadow-[0_20px_60px_rgba(85,247,185,0.15)]
                "
              >
                {/* TOP GLOW */}
                <div
                  className="
                    absolute inset-0
                    opacity-0
                    transition-opacity duration-500
                    group-hover:opacity-100
                    pointer-events-none
                  "
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(85,247,185,0.08), transparent)",
                  }}
                />

                {/* IMAGE */}
                {blog.coverImage && (
                  <div
                    className="
                      h-[240px]
                      overflow-hidden
                    "
                  >
                    <img
                      src={blog.coverImage}
                      alt={blog.title}
                      className="
                        w-full h-full
                        object-cover
                        transition-transform duration-700
                        group-hover:scale-110
                      "
                    />
                  </div>
                )}

                {/* CONTENT */}
                <div className="flex flex-col flex-1 p-7">
                  <h3
                    className="
                      text-2xl
                      font-semibold
                      leading-[1.5]
                      transition-colors duration-300
                      group-hover:text-[var(--color-primary)]
                    "
                  >
                    {blog.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-white/60
                      leading-8
                      line-clamp-3
                    "
                  >
                    {blog.brief}
                  </p>

                  <div
                    className="
                      mt-auto pt-8
                      flex items-center justify-between
                      text-[var(--color-primary)]
                      font-medium
                    "
                  >
                    <span>Read Article</span>

                    <ExternalLink
                      size={18}
                      className="
                        transition-transform duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-20">
          <a
            href="https://blog.shwetacodes.pro"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center
              px-8 py-4
              rounded-2xl
              border border-[var(--border-accent)]
              bg-white/[0.03]
              text-[var(--color-primary)]
              font-medium
              transition-all duration-300
              hover:bg-[var(--color-primary)]
              hover:text-black
              hover:-translate-y-1
              hover:shadow-[0_12px_30px_rgba(85,247,185,0.2)]
            "
          >
            View All Blogs
          </a>
        </div>
      </div>
    </section>
  );
}

export default Blog;
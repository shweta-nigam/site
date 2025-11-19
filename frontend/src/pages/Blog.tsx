import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Blog = () => {
  // Later you can fetch this from Hashnode API, for now static links
  const blogs = [
    {
      title: "Polyfills In Javascript",
      desc: "Article simply explaining polyfills in fun way referencing cartoon.",
      link: "https://aronamic.hashnode.dev/polyfills-in-javascript",
    },
    {
      title: "loops in JavaScript",
      desc: "loops are almost available in every language and JavaScript is no exception. Loops are just like its name suggest looping a task number of times.",
      link: "https://aronamic.hashnode.dev/loops-in-javascript",
    },
    {
      title: "Node.js Internals: How Node.js Works Behind The Scene",
      desc: "Node.js is a JavaScript runtime environment. It is built on V8 engine of Google Chrome, plus C++ bindings",
      link: "https://aronamic.hashnode.dev/nodejs-internals-how-nodejs-works-behind-the-scene",
    },
    {
      title: "Var, Const and Let In JS : From beginner to Advance",
      desc: "var, let, and const are three keywords you’ll encounter from the very beginning of your JavaScript journey and continue to use throughout.In this article everything is explained in details",
      link: "https://aronamic.hashnode.dev/var-const-and-let-in-js-from-beginner-to-advance",
    },
    {
      title: "The Magic of DNS: How the Internet Knows Where to Go",
      desc: "DNS (Domain Name System) is like the phone book of the internet. Instead of remembering complex IP addresses (e.g., 172.217.169.78), DNS lets you type human-friendly domain names (like google.com) and magically finds the correct address for your request.",
      link: "https://aronamic.hashnode.dev/the-magic-of-dns-how-the-internet-knows-where-to-go",
    },
    {
      title: "Blocking Code VS Non-blocking code in Node.js",
      desc: "Let’s learn about the blocking and non-blocking code in node.js in such a simple way in this article",
      link: "https://aronamic.hashnode.dev/blocking-code-vs-non-blocking-code-in-nodejs",
    },
  ];

  return (
    <section
      className="min-h-screen w-full px-6 py-20 text-white bg-D-purple"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-4"
      >
        My Blogs
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto text-center mb-12"
      >
        I write beginner-friendly blogs on Web Development, MERN Stack, and
        JavaScript concepts. Read my thoughts and learnings here.
      </motion.p>

      {/* Blog Cards */}
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <motion.a
            key={index}
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className="block bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg hover:scale-[1.03] transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-gray-400 mb-4">{blog.desc}</p>

            <div className="flex items-center text-white font-semibold">
              Read More <ArrowRight className="ml-2 w-4 h-4" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Blog;

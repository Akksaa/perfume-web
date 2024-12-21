import BlogCard from "../components/BlogCard";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "The Art of Perfumery",
      description: "Discover the history and evolution of perfumery.",
      image: "/about1.jpeg",
      date: "December 20, 2024",
    },
    {
      id: 2,
      title: "Top Fragrance Trends",
      description: "Explore the latest trends in the fragrance world.",
      image: "/about2.jpeg",
      date: "December 18, 2024",
    },
    {
      id: 3,
      title: "How to Choose Your Signature Scent",
      description: "Tips to find the perfect fragrance for you.",
      image: "/about3.jpeg",
      date: "December 15, 2024",
    },
  ];

  return (
    <div>
      <header className="py-16 text-center  text-gray-900">
        <h1 className="text-4xl font-bold gravitas">Our Blogs</h1>
        <p className="mt-2 text-lg crimson">Explore the world of fragrances</p>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </main>

    </div>
  );
};

export default Blog;

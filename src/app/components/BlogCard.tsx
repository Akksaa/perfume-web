import Image from "next/image";

interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
}

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <div className="relative w-full h-48">
        <Image
          src={blog.image}
          alt={blog.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 crimson">{blog.title}</h3>
        <p className="text-sm text-gray-500 mt-1 roboto">{blog.date}</p>
        <p className="mt-4 text-gray-600 poppins">{blog.description}</p>
        <button className="mt-4 text-sm text-indigo-600 crimson hover:underline">
          Read More →
        </button>
      </div>
    </div>
  );
};

export default BlogCard;

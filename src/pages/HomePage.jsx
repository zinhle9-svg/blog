import React, { useState } from "react";
import {
  Carblog,
  Fashionblog,
  Foodblog,
  iPhoneblog,
  Softwareblog
} from "../assets/images";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([
    {
      blogName: "Fashion",
      image: Fashionblog,
      author: "Alice",
      date: "2025-07-01",
      category: "Lifestyle",
      content: "Latest fashion trends for 2025."
    },
    {
      blogName: "Dev",
      image: Softwareblog,
      author: "Bob",
      date: "2025-06-15",
      category: "Technology",
      content: "Exploring the newest in software development."
    },
    {
      blogName: "Food",
      image: Foodblog,
      author: "Charlie",
      date: "2025-05-10",
      category: "Food",
      content: "Delicious recipes from around the world."
    },
    {
      blogName: "Cars",
      image: Carblog,
      author: "Dana",
      date: "2025-04-20",
      category: "Cars",
      content: "Reviewing the latest car models."
    },
    {
      blogName: "iPhone",
      image: iPhoneblog,
      author: "Eve",
      date: "2025-03-01",
      category: "iPhone",
      content: "Everything about the newest iPhone."
    }
  ]);

  const [selectedBlog, setSelectedBlog] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const imageClick = (blog, index) => {
    setSelectedBlog(blog);
    setSelectedIndex(index);
  };

  const deletePost = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) return;

    setBlogs((prevBlogs) => prevBlogs.filter((_, i) => i !== index));
    setSelectedBlog(null);
    setSelectedIndex(null);
  };

  return (
    <div className="flex min-h-screen p-6 bg-gray-100">
      {/* Blog list */}
      <div className="w-1/2 pr-6">
        <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
        <ul className="space-y-4">
          {blogs.map((blog, index) => (
            <li
              key={index}
              onClick={() => imageClick(blog, index)}
              className="cursor-pointer bg-white shadow rounded-lg p-4 hover:bg-pink-100 transition"
            >
              <h2 className="text-lg font-semibold">{blog.blogName}</h2>
              <img src={blog.image} alt={blog.blogName} className="mt-2 w-48 rounded" />
            </li>
          ))}
        </ul>
      </div>

      {/* Blog details */}
      <div className="w-1/2 pl-6">
        {selectedBlog ? (
          <div className="bg-white shadow rounded-lg p-6 space-y-3">
            <h2 className="text-xl font-bold">{selectedBlog.blogName}</h2>
            <p><strong>Author:</strong> {selectedBlog.author}</p>
            <p><strong>Date:</strong> {selectedBlog.date}</p>
            <p><strong>Category:</strong> {selectedBlog.category}</p>
            <p>{selectedBlog.content}</p>

            <div className="flex space-x-3 mt-4">
              <button
                onClick={() => setSelectedBlog(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Close
              </button>
              <button
                onClick={() => navigate(`/edit/${selectedIndex}`)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Edit
              </button>
              <button
                onClick={() => deletePost(selectedIndex)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500 italic">
            Select a blog to view details
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;

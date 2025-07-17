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

  const blogs = [
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
  ];

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
    <div>
      <h1>Blog Posts</h1>

      <ul>
        {blogs.map((blog, index) => (
          <li key={index} onClick={() => imageClick(blog, index)}>
            <h2>{blog.blogName}</h2>
            <img src={blog.image} alt={blog.blogName} width="200" />
          </li>
        ))}
      </ul>

      {selectedBlog && (
        <div>
          <h2>{selectedBlog.blogName}</h2>
          <p><strong>Author:</strong> {selectedBlog.author}</p>
          <p><strong>Date:</strong> {selectedBlog.date}</p>
          <p><strong>Category:</strong> {selectedBlog.category}</p>
          <p><strong>Content:</strong> {selectedBlog.content}</p>

          <button onClick={() => setSelectedBlog(null)}>Close</button>
          <button onClick={() => navigate(`/edit/${selectedIndex}`)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Home;

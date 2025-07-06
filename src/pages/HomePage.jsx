import React, { useState } from "react";
import {
  Carblog,
  Fashionblog,
  Foodblog,
  iPhoneblog,
  Softwareblog
} from "../assets/images";

// Simple Home component showing blog cards and a details popup
function Home() {
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
      category: "Automotive",
      content: "Reviewing the latest car models."
    },
    {
      blogName: "iPhone",
      image: iPhoneblog,
      author: "Eve",
      date: "2025-03-01",
      category: "Technology",
      content: "Everything about the newest iPhone."
    }
  ];

  const [selectedBlog, setSelectedBlog] = useState(null);

  const imageClick = (blog) => {
    setSelectedBlog(blog);
  };

  return (
    <>
      <div>
        <h1>Blog Posts</h1>
      </div>

      <div id="pics">
        <ul style={{ listStyle: "none", padding: 0, display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {blogs.map((blog, index) => (
            <li key={index} onClick={() => imageClick(blog)} style={{ cursor: "pointer" }}>
              <h2>{blog.blogName}</h2>
              <img
                src={blog.image}
                alt={blog.blogName}
                style={{ width: "200px", height: "auto" }}
              />
            </li>
          ))}
        </ul>
      </div>

      {selectedBlog && (
        <div >
          <h2>{selectedBlog.blogName}</h2>
          <p><strong>Author:</strong> {selectedBlog.author}</p>
          <p><strong>Date:</strong> {selectedBlog.date}</p>
          <p><strong>Category:</strong> {selectedBlog.category}</p>
          <p><strong>Content:</strong> {selectedBlog.content}</p>
          <button onClick={() => setSelectedBlog(null)}>Close</button>
        </div>
      )}
    </>
  );
}

export default Home;

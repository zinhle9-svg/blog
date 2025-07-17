// EditPost.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Carblog,
  Fashionblog,
  Foodblog,
  iPhoneblog,
  Softwareblog
} from "../assets/images";

const dummyBlogs = [
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
    category: "iphone",
    content: "Everything about the newest iPhone."
  }
];

function EditPost() {
  const { id } = useParams(); // Expecting `id` to be the index of the blog
  const navigate = useNavigate();
  const [form, setForm] = useState({
    blogName: "",
    author: "",
    date: "",
    category: "",
    content: ""
  });

  useEffect(() => {
    const blog = dummyBlogs[id];
    if (blog) {
      setForm(blog);
    } else {
      alert("Blog not found");
      navigate("/");
    }
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated blog post:", form);
    // Ideally send the updated data to the backend or global store here
    navigate("/");
  };

  return (
    <div>
      <h1>Edit Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Blog Name:
          <input name="blogName" value={form.blogName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Author:
          <input name="author" value={form.author} onChange={handleChange} />
        </label>
        <br />
        <label>
          Date:
          <input name="date" value={form.date} onChange={handleChange} />
        </label>
        <br />
        <label>
          Category:
          <input name="category" value={form.category} onChange={handleChange} />
        </label>
        <br />
        <label>
          Content:
          <textarea name="content" value={form.content} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Save Changes</button>
        <button type="button" onClick={() => navigate("/")}>Cancel</button>
      </form>
    </div>
  );
}

export default EditPost;

import React, { useState } from "react";

function Create({ selectedPostId }) {
  // You can also pass `selectedPostId` as a prop from parent
  const [formData, setFormData] = useState({
    blogName: "",
    category: "",
    publicationDate: "",
    author: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedPostId) {
      console.log("Updating post:", selectedPostId, formData);
      // call PUT /api/blogs/:id
    } else {
      console.log("Creating new post:", formData);
      // call POST /api/blogs
    }
  };

  const handleDelete = () => {
    console.log("Deleting post:", selectedPostId);
    // call DELETE /api/blogs/:id
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-pink-500 text-white w-full max-w-md rounded-lg shadow-md p-6 space-y-4"
      >
        <h2 className="text-2xl font-bold mb-4">
          {selectedPostId ? "Edit Blog Post" : "Create a Blog Post"}
        </h2>

        {/* Blog Name */}
        <div className="flex flex-col">
          <label htmlFor="blogName" className="mb-1 font-medium">
            Blog Name:
          </label>
          <input
            type="text"
            id="blogName"
            name="blogName"
            value={formData.blogName}
            onChange={handleChange}
            className="p-2 rounded text-black"
          />
        </div>

        {/* Category */}
        <div className="flex flex-col">
          <label htmlFor="category" className="mb-1 font-medium">
            Category:
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="p-2 rounded text-black"
          >
            <option value="Dev">Technology</option>
            <option value="Cars">Cars</option>
            <option value="iPhone">iPhone</option>
            <option value="Fashion">Fashion</option>
            <option value="Food">Food</option>
          </select>
        </div>

        {/* Publication Date */}
        <div className="flex flex-col">
          <label htmlFor="publicationDate" className="mb-1 font-medium">
            Publication Date:
          </label>
          <input
            type="date"
            id="publicationDate"
            name="publicationDate"
            value={formData.publicationDate}
            onChange={handleChange}
            className="p-2 rounded text-black"
          />
        </div>

        {/* Author */}
        <div className="flex flex-col">
          <label htmlFor="author" className="mb-1 font-medium">
            Author:
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="p-2 rounded text-black"
          />
        </div>

        {/* Submit + Delete side by side */}
        <div className="flex justify-between space-x-4">
          <button
            type="submit"
            className="flex-1 bg-red-600 text-white font-semibold px-4 py-2 rounded hover:bg-red-700 transition"
          >
            {selectedPostId ? "Update" : "Submit"}
          </button>

          {selectedPostId && (
            <button
              type="button"
              onClick={handleDelete}
              className="flex-1 bg-gray-800 text-white font-semibold px-4 py-2 rounded hover:bg-gray-900 transition"
            >
              Delete
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default Create;

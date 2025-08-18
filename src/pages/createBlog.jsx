import React from "react";

function Create() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <form className="bg-pink-500 text-white w-full max-w-md rounded-lg shadow-md p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-4">Create a Blog Post</h2>

        <div className="flex flex-col">
          <label htmlFor="blogName" className="mb-1 font-medium">Blog Name:</label>
          <input
            type="text"
            id="blogName"
            name="blogName"
            className="p-2 rounded text-black"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="category" className="mb-1 font-medium">Category:</label>
          <select
            id="category"
            name="category"
            className="p-2 rounded text-black"
          >
            <option value="Dev">Technology</option>
            <option value="Cars">Cars</option>
            <option value="iphone">iPhone</option>
            <option value="Fashion">Fashion</option>
            <option value="food">Food</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="publicationDate" className="mb-1 font-medium">Publication Date:</label>
          <input
            type="date"
            id="publicationDate"
            name="publicationDate"
            className="p-2 rounded text-black"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="author" className="mb-1 font-medium">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            className="p-2 rounded text-black"
          />
        </div>

        <button
          type="submit"
          className="bg-red-600 text-white- font-semibold px-4 py-2 rounded hover:bg-gray-200 transition"
        >
          Submit
        </button>
      </form>

      <div className="mt-4">
        <button
          type="button"
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Create;

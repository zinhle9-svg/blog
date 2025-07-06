import React from "react";


function Create() {
  return (
    <div>
      <form>
       {/* user input blog name */}
        <div>
          <label>Blog Name:</label>
          <input  type="text" id="blogName" name="blogName" />
        </div>
{/* user choose category (theres gonna be a dropdown) */}
        <div>
          <label>Category:</label>
          <select id="category" name="category">
            <option value="Dev">Technology</option>
            <option value="Cars">Cars</option>
            <option value="iphone">iPhone</option>
            <option value="Fashion">Fashion</option>
            <option value="food">Food</option>
          </select>
        </div>
{/* date when the blog was created */}
        <div>
          <label>Publication Date:</label>
          <input type="date" id="publicationDate" name="publicationDate" />
        </div>
{/* who created the blog */}
        <div>
          <label>Author:</label>
          <input type="text" id="author" name="author" />
        </div>
{/* submit the information to DB */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Create;

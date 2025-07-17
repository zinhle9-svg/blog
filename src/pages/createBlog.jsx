import React from "react";


function Create() {
  return (
    <div id="createform">
      <form>
      
        <div>
          <label>Blog Name:</label>
          <input  type="text" id="blogName" name="blogName" />
        </div>

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

        <div>
          <label>Publication Date:</label>
          <input type="date" id="publicationDate" name="publicationDate" />
        </div>

        <div>
          <label>Author:</label>
          <input type="text" id="author" name="author" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Create;

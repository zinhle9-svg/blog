import React from "react";
import { useState } from "react";
import { Carblog, Fashionblog, Foodblog, iPhoneblog, Softwareblog } from "../assets/images";
//list of blog post, with no details as theres a page with details


function Home() {
  const blogs = [
    {
      blogName: "Fashion",
      image: Fashionblog
    },
     {
      blogName: "dev",
      image: Softwareblog
    },
       {
      blogName: "Food",
      image: Foodblog
    },
       {
      blogName: "cars",
      image: Carblog
    },
       {
      blogName: "iphone",
      image: iPhoneblog 
    },
    
  ];
  //clicking the image to show details
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
      <ul>
        {blogs.map((blog, index) => (
      <>
         <h2>{blog.blogName}</h2>
            <img src={blog.image} 
            alt={blog.blogName} 
            style={{ width: '200px', height: 'auto' }} />
      </> 
        ))} 
        </ul>
    </div>
 
    </>
  );
}
export default Home;

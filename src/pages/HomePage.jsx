
//list of blog post, with no details as theres a page with details


function Home() {
  const blogs = [
    {
      blogName: "Fashion",
      image: "path/to/image.jpg" 
    }
  ];
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index}>
            <h2>{blog.blogName}</h2>
            <img src={blog.image} alt={blog.blogName} style={{ width: '200px', height: 'auto' }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Home;

import React from "react";
import { blogPosts } from "../modules";


const BlogPosts = () => {
  return (
    <section className="blog-section">
      <div className="container">
        <h2 className="section-title">Blog Posts</h2>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div className="blog-card" key={post.id}>
              <img src={post.img} alt={post.title} />
              <div className="blog-card-content">
                <span>{post.date}</span>
                <h3>{post.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;

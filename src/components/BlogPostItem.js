import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BlogPostItem.css';

const BlogPostItem = ({ post }) => {
  return (
    <div className="blog-post-item">
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <small>{new Date(post.publishedAt).toLocaleDateString()}</small>
      <Link to={`/post/${encodeURIComponent(post.url)}`}>Read More</Link>
    </div>
  );
};

export default BlogPostItem;

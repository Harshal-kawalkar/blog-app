import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/BlogPostDetails.css';

const BlogPostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`https://newsapi.org/v2/everything?q=react&apiKey=YOUR_API_KEY`);
      const foundPost = res.data.articles.find(article => encodeURIComponent(article.url) === id);
      setPost(foundPost);
    };

    fetchPost();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="blog-post-details">
      <h1>{post.title}</h1>
      <img src={post.urlToImage} alt={post.title} />
      <p>{post.content}</p>
      <small>{new Date(post.publishedAt).toLocaleDateString()}</small>
      <Link to="/">Back</Link>
    </div>
  );
};

export default BlogPostDetails;

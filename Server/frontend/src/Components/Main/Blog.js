
import './Blog.css'
import React, { useEffect, useState } from 'react';
import './Blog.css';
import axios from 'axios';

const Blog = () => {
  const [myData, setMyData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Added loading state

  const getNews = () => {
    axios
      .get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b2298f11ef1a417bbf377c98097aec9e")
      .then((res) => {
        setMyData(res.data.articles);
        setIsLoading(false); // Set loading to false after data is fetched
      });
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="container mt-5 mb-5">
      {isLoading ? ( // Check if loading
        <div className="spinner-container">
        <div className="spinner"></div>
        </div>
      ) : (
        <div className="row pt-3">
          {myData.map((val) => (
            <div className="col-4" key={val.title}>
              <div className="card" style={{ width: "18rem" }}>
                <img src={val.urlToImage} alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{val.title}</h5>
                  <p className="card-text">{val.description}</p>
                  <p className="card-text">{val.publishedAt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;

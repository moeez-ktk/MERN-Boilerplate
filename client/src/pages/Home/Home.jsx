import React, { useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    //use axios to get /posts
    const getPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/posts");
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  });

  return (
    <div className="homepage">
      <Header />
      <div className="main-content">
        <h1>Multi Page Front End Application With Routes</h1>
        <p>This is a simple home page.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

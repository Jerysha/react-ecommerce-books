import React from "react";
import mainImage from "../images/mainImage.png";
import { FaLightbulb, FaBookOpen, FaTags } from "react-icons/fa";

const Home_Hero = () => {
  return (
    <>
      <header>
        <div className="header_title">
          <span>America's most awarded online library platform</span>
          <h2>
            Find your dream book with <span>Library</span>
          </h2>
        </div>
        <button className="header_btn">Browse Boks</button>
        <div className="header_img_container">
          <img src={mainImage} alt="" className="header_img" />
        </div>
      </header>
      <section className="section_desc">
        <h1 className="section_desc_title">
          Why choose <span>Library</span>
        </h1>
        <div className="section_highlight">
          <div className="highlight_container">
            <div className="highlight_icon">
              <FaLightbulb className="section_desc_icon" />
            </div>
            <h2>Easy and Quick</h2>
            <p>Get access to the book you purchased online instantly.</p>
          </div>

          <div className="highlight_container">
            <div className="highlight_icon">
              <FaBookOpen className="section_desc_icon" />
            </div>
            <h2>10,000+ Books</h2>
            <p>Library has books in all your favorite categories.</p>
          </div>

          <div className="highlight_container">
            <div className="highlight_icon">
              <FaTags className="section_desc_icon" />
            </div>
            <h2>Afforable</h2>
            <p>Get your hands on popular books for as little as $10.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home_Hero;

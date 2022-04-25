import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

const SingleBookDesc = () => {
  return (
    <>
      <main className="main_single_book">
        <div className="main_single_link">
          <FaLongArrowAltLeft className="left_arrow"/>
          <a href="">Books</a>
        </div>
        <div className="single_book_container">
          <div className="single_book_container_img">
            <img src="" alt="Book" />
          </div>
          <div className="single_book_container_desc">
            <h1>Title</h1>
            <h1>Rating</h1>
            <p>Price</p>
            <h2>Author</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo illo
              asperiores distinctio assumenda molestias incidunt cupiditate
              explicabo quisquam non ipsum?
            </p>
            <button className="header_btn">Checkout</button>
          </div>
        </div>
        <div className="main_recommended_books">
          <h1>Recommended Books</h1>
          <div className="main_single_books_list">
            <img src="" alt="" />
          </div>
        </div>
      </main>
    </>
  );
};

export default SingleBookDesc;

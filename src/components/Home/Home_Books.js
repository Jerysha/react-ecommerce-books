import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";

const Home_Books = () => {
  const url = "https://api.jsonbin.io/b/62649ec238be296761f708ed";
  console.log(url);

  const {id} = useParams();
  const [books, setBooks] = useState([]);
  const [starts, setStars] = useState();

  const colors = { orange: "FFBA5A", grey: "a9a9a9" };
  const stars = Array(5).fill(0);

  const fetchData = async () => {
    const response = await fetch(url);
    const booksList = await response.json();
    setBooks(booksList);
    console.log(booksList);
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setStars(stars);
  }, []);

  return (
    <>
      <section className="feature_books">
        <h1>Feature Books</h1>
        <div className="feature_books_container">
          {books.map((book) => {
            const { id, title, img, rating, price } = book;
            return (
              <div className="book" key={id}>
                <Link to={`/singlebook/:${id}`}/>
                <img src={img} alt={title} className="book_img" />
                <div className="book_stars_container">
                  {stars.map((_, index) => {
                    return (
                      <FaStar
                        className="book_stars"
                        key={index}
                        color={stars > rating ? colors.orange : colors.grey}
                      />
                    );
                  })}
                </div>
                <p className="book_price">${price}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section_discounted_books">
        <h1>Discounted Books</h1>
        <div className="feature_books_container">
          {books.map((book) => {
            const { id, title, img, rating, price } = book;
            return (
              <div className="book" key={id}>
                <Link to={`/singlebook/:${id}`}></Link>
                <img src={img} alt={title} className="book_img" />
                <div className="book_stars_container">
                  {stars.map((_, index) => {
                    return (
                      <FaStar
                        className="book_stars"
                        key={index}
                        color={stars > rating ? colors.orange : colors.grey}
                      />
                    );
                  })}
                </div>
                <p className="book_price">${price}</p>
              </div>
            );
          })}
        </div>
        <h1>
          Explore more <span>Books</span>
        </h1>
        <Link to="/books" className="link">Explore Books</Link>
      </section>
    </>
  );
};

export default Home_Books;

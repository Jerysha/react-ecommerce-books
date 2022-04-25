import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Loading from "../../pages/Loading";
import { FaStar } from "react-icons/fa";

const Sort_Books = () => {
  const url = "https://api.jsonbin.io/b/62649ec238be296761f708ed";
  console.log(url);

  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [starts, setStars] = useState();

  const colors = { orange: "FFBA5A", grey: "a9a9a9" };
  const stars = Array(5).fill(0);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(url);
    const booksList = await response.json();
    setBooks(booksList);
    setIsLoading(false);
    console.log(booksList);
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setStars(stars);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <header className="header_sort_books">
        <div className="header_sort_books_title">
          <h2>All Books</h2>
        </div>
        <div className="header_sort_books_selected_container">
          <select id="filter" className="header_sort_books_selected">
            <option defaultValue="DEFAULT" disabled selected>
              Sort
            </option>
            <option value="LOW-TO-HIGH">Price, Low To High</option>
            <option value="HIGH-TO-LOW">Pricem High-To-Low</option>
            <option value="RATING">Rating</option>
          </select>
        </div>
      </header>
      <section className="feature_books">
        <div className="feature_books_container">
          {books.map((book) => {
            const { id, title, img, rating, price } = book;
            return (
              <div className="book" key={id}>
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
    </>
  );
};

export default Sort_Books;

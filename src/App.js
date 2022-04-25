import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Books from "./pages/Books";
import ShoppingCart from "./pages/ShoppingCart";
import SingleBook from "./components/SingleBook/SingleBookDesc";
import Error from "./pages/Error";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/books" element={<Books />}></Route>
        <Route path="/singlebook/:id" element={<SingleBook />}></Route>
        <Route path="/shoppingcart/:id" element={<ShoppingCart />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

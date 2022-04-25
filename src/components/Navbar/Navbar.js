import React from "react";
import { GiBookAura } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="logo_container footer_logo">
        <div className="logo_icon">
          <GiBookAura className="nav_icon" />
        </div>
        <div className="logo_text">
          <h1>Library</h1>
          <p>Founded 1995</p>
        </div>
      </div>
      <div className="nav_links">
        <ul className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/shoppingcart/:id">
              <FaShoppingCart className="nav_cart" />
              <span className="cart_num">0</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

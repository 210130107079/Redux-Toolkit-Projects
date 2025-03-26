import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.product.cart);
  return (
    <nav>
      <p></p>
      <div>
      </div>
    </nav>
  );
};

export default Navbar;
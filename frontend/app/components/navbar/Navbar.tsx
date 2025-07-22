import React from "react";
//Components
import InputSearch from "./InputSearch";
import { Link } from "react-router";
import { ShoppingBag, ShoppingBasket, User } from "lucide-react";

type Props = {};

function Navbar({}: Props) {
  return (
    <nav className="bg-amber-100 h-24 w-full flex items-center justify-between px-20">
      <div className="flex items-center gap-2">
        <ShoppingBasket size={50} />
        <h2>Shop cart</h2>
      </div>

      <div>
        <ul className="flex items-center gap-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div>
        <InputSearch />
      </div>

      <div className="flex gap-5">
        <Link to="/admin" className="flex items-center gap-1">
          <User />
          Account
        </Link>
        <p className="flex items-center gap-1">
          <ShoppingBag />
          Cart
        </p>
      </div>
    </nav>
  );
}

export default Navbar;

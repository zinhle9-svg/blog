import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-purple-600 text-white px-6 py-4 shadow-md">
      <ul className="flex space-x-6">
        <li>
          <Link
            to="/homePage"
            className="hover:text-gray-200 font-semibold transition"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/createBlog"
            className="hover:text-gray-200 font-semibold transition"
          >
            Create
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

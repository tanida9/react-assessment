import React from "react";
import { Outlet, Link } from "react-router-dom";


const Layout = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav className="bg-gray-50 text-gray-900 font-bold p-4 border-b-1">
        <ul className="flex gap-4 justify-end ">
          <li>
            <Link to="/" className="hover:text-blue-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/owner" className="hover:text-blue-400">
              Owner
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-6 max-w-4xl mx-auto w-full">
        <Outlet />
      </div>
    </div>
    );
};

export default Layout;
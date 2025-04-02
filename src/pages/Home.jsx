import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateUser = () => {
    navigate("/user");
  };

  const handleNavigateAdmin = () => {
    navigate("/admin");
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Generation Thailand <br />React - Assessment</h1>
      <div className="flex justify-center gap-16">
      <button
        onClick={handleNavigateUser}
        className="px-4 py-2 bg-white font-medium text-gray-900 rounded-md hover:bg-blue-400 transition shadow-md"
      >
        User Home Sector
      </button>
      <button
        onClick={handleNavigateAdmin}
        className="px-4 py-2 bg-white font-medium text-gray-900 rounded-md hover:bg-blue-400 transition shadow-md"
      >
        Admin Home Sector
      </button>
      </div>
    </div>
  );
};

export default Home;



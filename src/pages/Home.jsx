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
      <h1 className="text-3xl font-bold mb-4">Generation Thailand <br />React - Assessment</h1>
      <div className="flex justify-center gap-4">
      <button
        onClick={handleNavigateUser}
        className="px-4 py-2 bg-white font-medium text-gray-900 rounded-md hover:bg-blue-400 transition"
      >
        User
      </button>
      <button
        onClick={handleNavigateAdmin}
        className="px-4 py-2 bg-white font-medium text-gray-900 rounded-md hover:bg-blue-400 transition"
      >
        Admin
      </button>
      </div>
    </div>
  );
};

export default Home;



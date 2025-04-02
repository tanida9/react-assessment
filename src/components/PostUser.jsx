import { useState, useEffect } from "react";
import axios from "axios";

const PostUser = () => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [position, setPosition] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const createUser = async () => {
      if (!submitted || !name || !lastname|| !position) return;

      setError("");
      setResponse(null);

      try {
        const res = await axios.post(
          "https://jsd5-mock-backend.onrender.com/members",
          { name , lastname , position }
        );
        setResponse(res.data);
      } catch (err) {
        console.error(err);
        setError("❌ Failed to create user. Please try again.");
      } finally {
        setSubmitted(false);
      }
    };

    createUser();
  }, [submitted, name, lastname, position]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Create User Here</h2>

      <form onSubmit={handleSubmit} className="flex justify-between items-center ">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="bg-white text-gray-900 rounded-md px-2 py-1 block shadow-xs"
        />
        <input
          type="text"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          className="bg-white text-gray-900 rounded-md px-2 py-1 block shadow-xs"
        />
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          placeholder="Position"
          className="bg-white text-gray-900 rounded-md px-2 py-1 block shadow-xs"
        />
        <button
          type="submit"
          className="bg-blue-400 text-gray-900 rounded-md px-4 py-1 hover:bg-blue-700 hover:text-white"
        >
          Save
        </button>
      </form>

      {response && (
        <p className="mt-2 text-green-600">✅ Created</p>
      )}

      {error && (
        <div className="mt-2 text-red-600 bg-red-100 p-2 rounded">
          <p>
            <strong>Error:</strong> {error}
          </p>
        </div>
      )}
    </div>
  );
};

export default PostUser;

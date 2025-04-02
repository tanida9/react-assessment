import { useState, useEffect } from "react";
import axios from "axios";

const DeleteUser = () => {
  const [id, setId] = useState("");
  //const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const deleteUser = async () => {
      if (!submitted || !id) return;

      setError("");
      //setStatus("");

      try {
        await axios.delete(
          `https://jsd5-mock-backend.onrender.com/member/${id}`
        );
        //setStatus(`✅ User with ID ${id} has been deleted.`);
      } catch (err) {
        console.error(err);
        setError("❌ Failed to delete user. Please check the ID and try again.");
      } finally {
        setSubmitted(false);
      }
    };

    deleteUser();
  }, [submitted, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div >
      {/*<h2 className="text-xl font-bold mb-2">Delete User (DELETE)</h2>*/}

      <form onSubmit={handleSubmit}>
        {/*<input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="User ID"
          className="border px-2 py-1 block w-full"
        />*/}
        <button
          type="submit"
          onClick={(e) => setId(e.target.value)}
          className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
        >
          Delete User
        </button>
      </form>

      {/*status && <p className="mt-2 text-green-600">{status}</p>*/}

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

export default DeleteUser;

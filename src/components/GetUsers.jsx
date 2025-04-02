import { useEffect, useState } from "react";
import axios from "axios";

const GetUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      setError("");
      setLoading(true);

      try {
        const res = await axios.get(
          "https://jsd5-mock-backend.onrender.com/members"
        );
        setUsers(res.data);
      } catch (err) {
        console.error(err);
        setError("❌ Failed to fetch users. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);


  return (
    <div className="mt-12">

      {loading && <p className="text-blue-600">Loading users...</p>}

      {error && (
        <div className="mt-2 text-red-600 bg-red-100 p-2 rounded">
          <p>
            <strong>Error:</strong> {error}
          </p>
        </div>
      )}

      {!loading && !error && (
        <table className="min-w-full">
          <thead>
            <tr className="text-center text-sm ">
              <th className="border border-gray-300 py-2 px-4">Name</th>
              <th className="border border-gray-300 py-2 px-4">Last Name</th>
              <th className="border border-gray-300 py-2 px-4">Position</th>
              <th className="border border-gray-300 py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="text-center text-xs">
                <td className="border border-gray-300 py-2 px-4">{user.name}</td>
                <td className="border border-gray-300 py-2 px-4">{user.lastname}</td>
                <td className="border border-gray-300 py-2 px-4">{user.position}</td>
                <td className="border border-gray-300 py-2 px-4">
                  <button type="submit" className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700">
                    Delete
                  </button>
                </td>
              </tr>
            )
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GetUsers;

import React, { useEffect, useState } from "react";
import { getAllUsers } from "../api/auth";
import type { AllUsersDto } from "../types/auth";


const AllUseres: React.FC = () => {
  const [users, setUsers] = useState<AllUsersDto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const data = await getAllUsers(1, 10);
        setUsers(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>All Users</h2>
      <ul>
        {users.map(u => (
          <li key={u.id}>
            {u.name} - {u.email} - {u.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllUseres;
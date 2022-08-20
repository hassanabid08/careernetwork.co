import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  let navigate = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/signup", { replace: true });
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div class="flex flex-col justify-center h-screen absolute w-screen  items-center">
       <img class="mb-10 object-contain w-1/2" src="https://careernetwork.co/static/media/logo.6475592d1903c4541a52f475ffaf32eb.svg" alt=".." />
      <h2 className="text-center mb:10 text-2xl sm:mb-4 sm:text-5xl">Hello,</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <h4 className="text-center mb-10 text-2xl sm:text-5xl sm:mb-4">{currentUser.email}</h4>

      <div className="w-100 text-center mt-2">
        <button
          class="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 mt-8 rounded-full"
          variant="link"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

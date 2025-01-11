import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import handleLogout from "../utils/handleLogout";

const LogoutButton = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleClick = () => {
    handleLogout(navigate, setError, setSuccess);
  };

  return (
    <div>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <button
        onClick={handleClick}
        className="bg-red-500 text-white px-4 py-2 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;

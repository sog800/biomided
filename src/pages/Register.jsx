import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("All fields are required.");
      setSuccess("");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      setSuccess("");
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must be at least 8 characters long.");
      setSuccess("");
      return;
    }

    const userData = { username, email, password };

    try {
      const response = await axios.post(
        "https://biomidedbackend.onrender.com/auth/register", // Fixed URL
        userData
      );
      setSuccess("Registration successful! Please log in.");
      setError(null);
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.detail || "Registration failed! Please try again.");
      } else {
        setError("An error occurred. Please try again later.");
      }
      setSuccess("");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        {success && <p className="text-green-500 mb-2">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

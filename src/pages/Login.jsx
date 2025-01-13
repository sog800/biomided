import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {
  const [username, setUsername] = useState(""); // State for username
  const [password, setPassword] = useState(""); // State for password
  const [error, setError] = useState(null); // State for error messages
  const [success, setSuccess] = useState(""); // State for success messages
  const [isLoading, setIsLoading] = useState(false); // State to manage loading status

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!username || !password) {
      setError("Username and password are required.");
      setSuccess("");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      setSuccess("");
      return;
    }

    const loginData = { username, password }; // Send username and password in the request body
    setIsLoading(true);

    try {
      const response = await fetch("https://biomidedbackend.onrender.com/auth/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccess("Login successful!"); // Display success message
        setError(null);

        localStorage.setItem("token", data.token); // Store the token
        alert("Login successful!");
        // Redirect to the home page after a successful login
        navigate("/"); // Use navigate to redirect
        window.location.reload();
      } else {
        const errorData = await response.json();
        setError(errorData.detail || "Login failed! Please try again.");
        setSuccess("");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
      setSuccess("");
    } finally {
      setIsLoading(false); // Stop loading after the request is complete
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        {success && <p className="text-green-500 mb-2">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium">Username</label>
            <input
              type="text"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={isLoading} // Disable input while loading
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading} // Disable input while loading
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md"
            disabled={isLoading} // Disable button while loading
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

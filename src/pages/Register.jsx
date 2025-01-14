import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { username, email, password, confirm_password: confirmPassword };

    try {
      const response = await fetch("https://biomidedbackend.onrender.com/auth/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrors(errorData); // Set field-specific errors
        setSuccess("");
        return;
      }

      const data = await response.json();
      setSuccess("Registration successful! Redirecting to login...");
      setErrors({});
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      // Navigate to the login page after a short delay
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      setErrors({ general: "An error occurred. Please try again later." });
      setSuccess("");
    }
  };

  const handleInputChange = (field, value) => {
    if (errors[field]) {
      // Clear the error for the specific field as the user types
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (field === "username") setUsername(value);
    if (field === "email") setEmail(value);
    if (field === "password") setPassword(value);
    if (field === "confirmPassword") setConfirmPassword(value);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        {errors.general && <p className="text-red-500 mb-2">{errors.general}</p>}
        {success && <p className="text-green-500 mb-2">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium">Username</label>
            <input
              type="text"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              value={username}
              onChange={(e) => handleInputChange("username", e.target.value)}
            />
            {errors.username && <p className="text-red-500 text-sm">{errors.username[0]}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              value={email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email[0]}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              value={password}
              onChange={(e) => handleInputChange("password", e.target.value)}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password[0]}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Confirm Password</label>
            <input
              type="password"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              value={confirmPassword}
              onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
            />
            {errors.confirm_password && (
              <p className="text-red-500 text-sm">{errors.confirm_password[0]}</p>
            )}
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

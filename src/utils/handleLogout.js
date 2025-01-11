import axios from "axios";

const handleLogout = async (navigate, setError, setSuccess) => {
  try {
    // Send POST request to the logout endpoint
    const response = await axios.post(
      "https://biomidedbackend.onrender.com/auth/logout/", // Update with the correct URL
      {},
      {
        headers: {
          Authorization: `Token ${localStorage.getItem("authToken")}`, // Include token in headers
        },
      }
    );

    // Handle successful logout
    localStorage.removeItem("authToken"); // Remove token from storage
    setSuccess("Logged out successfully.");
    setError(null);

    // Redirect to login page or homepage
    navigate("/login"); // Replace "/login" with the appropriate route
  } catch (error) {
    if (error.response && error.response.data) {
      setError(error.response.data.message || "Logout failed. Please try again.");
    } else {
      setError("An error occurred. Please try again later.");
    }
    setSuccess(null);
  }
};

export default handleLogout;

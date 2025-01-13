const handleLogout = async (navigate, setError, setSuccess) => {
  try {
    // Send POST request to the logout endpoint using fetch
    const response = await fetch("https://biomidedbackend.onrender.com/auth/logout/", {
      method: "POST",
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`, // Correct capitalization
        "Content-Type": "application/json", // Add content type for consistency
      },
      body: JSON.stringify({}), // Send an empty body
    });

     // Log to confirm token presence
    if (response.ok) {
      // Handle successful logout
      localStorage.removeItem("token"); // Remove token from storage
      setSuccess("Logged out successfully.");
      window.location.reload();
      setError(null);

      // Redirect to login page or homepage
      navigate("/"); // Replace "/login" with the appropriate route
    } else {
      const data = await response.json();
      setError(data.message || "Logout failed. Please try again.");
      setSuccess(null);
    }
  } catch (error) {
    setError("An error occurred. Please try again later.");
    setSuccess(null);
  }
};

export default handleLogout;

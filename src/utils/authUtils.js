// src/utils/authUtils.js

export const refreshAccessToken = async () => {
    const refreshToken = document.cookie.split('; ').find(row => row.startsWith('refresh_token=')).split('=')[1];
    
    if (!refreshToken) {
      throw new Error("No refresh token found. Please log in again.");
    }
  
    try {
      const response = await fetch("http://127.0.0.1:8000/auth/refresh/", {
        method: "POST",
        credentials: "include",
      });
  
      if (response.ok) {
        const data = await response.json();
        localStorage.removeItem("access_token");
        localStorage.removeItem("access_expiry");
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("access_expiry", data.access_expiry); // Store new expiry time
        return true;
      } else {
        throw new Error("Session expired. Please log in again.");
      }
    } catch (error) {
      throw new Error("Error refreshing token. Please log in again.");
    }
  };
  
import React, { useState, useEffect } from "react";

export default function Profile({ theme }) {
  const [profile, setProfile] = useState(null);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null); // To handle and display errors

  // Fetch the profile data
  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await fetch("https://biomidedbackend.onrender.com/auth/profile/", {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${localStorage.getItem("token")}`, // Include the token
          },
        });
        const data = await response.json();
        if (response.ok) {
          setProfile(data);
        } else {
          console.error("Error fetching profile:", data);
          setError("Failed to fetch profile data.");
        }
      } catch (error) {
        console.error("Error:", error.message);
        setError("An error occurred while fetching profile data.");
      }
    }
    fetchProfile();
  }, []);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("profile_picture", file);

    try {
      const response = await fetch("http://127.0.0.1:8000/auth/profile/", {
        method: "PUT",
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`, // Include the token
        },
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        alert("Upload successful");
        setProfile(data); // Update the profile with new data
      } else {
        alert("Error uploading image: " + JSON.stringify(data));
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">User Profile</h1>
        <div className="flex items-center space-x-6 mb-6">
          <div>
            <img
              src={profile.profile_picture || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-24 h-24 rounded-full border border-gray-300"
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold">
              {profile.user?.username || "Username not available"}
            </h2>
            <p className="text-gray-600">{profile.user?.email || "Email not available"}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Location</h3>
            <p>{profile.location || "Not provided"}</p>
          </div>
          <div>
            <h3 className="font-semibold">Bio</h3>
            <p>{profile.bio || "Not provided"}</p>
          </div>
          <div>
            <h3 className="font-semibold">Website</h3>
            <p>
              {profile.website ? (
                <a
                  href={profile.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {profile.website}
                </a>
              ) : (
                "Not provided"
              )}
            </p>
          </div>
        </div>
        <hr className="my-6" />
        <div>
          <h2 className="text-xl font-semibold mb-4">Upload Profile Picture</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="file"
              onChange={handleFileChange}
              className="block w-full border border-gray-300 p-2 mb-4"
            />
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
            >
              Upload
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

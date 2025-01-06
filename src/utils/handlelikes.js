function handleLikes(isLiked, likes, setLikes, setIsLiked, id) {
  const url = `http://127.0.0.1:8000/hobbies/blog/${id}/likes/`; // Ensure trailing slash

  fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ isLiked: !isLiked }), // Send the opposite of the current state
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to update likes.");
      }
      return response.json();
    })
    .then((data) => {
      setLikes(data.likes); // Update likes from backend response
      setIsLiked(!isLiked); // Toggle the like state
    })
    .catch((error) => {
      console.error("Error updating likes:", error);
    });
}


export default handleLikes;
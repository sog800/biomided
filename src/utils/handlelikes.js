function handleLikes(isLiked, likes, setLikes, setIsLiked, id) {
  const url = `http://127.0.0.1:8000/bloggs/api/like-blog/${id}/`;

  fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ isLiked }), // Send the current like state
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to update likes.');
      }
      return response.json();
    })
    .then((data) => {
      // Update the frontend with the response from the backend
      setLikes(data.likes);
      setIsLiked(!isLiked); // Toggle the like state after successful response
    })
    .catch((error) => {
      console.error('Error updating likes:', error);
    });
}



export default handleLikes;
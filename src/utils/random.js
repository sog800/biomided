
function getRandomLinks() {
    const imageLinks = [
        "https://picsum.photos/300/200?random=1",
        "https://picsum.photos/300/200?random=2",
        "https://picsum.photos/300/200?random=3",
        "https://picsum.photos/300/200?random=4",
        "https://picsum.photos/300/200?random=5",
        "https://picsum.photos/300/200?random=6",
        "https://picsum.photos/300/200?random=7",
        "https://picsum.photos/300/200?random=8",
        "https://picsum.photos/300/200?random=9",
        "https://picsum.photos/300/200?random=10"
      ];
      ;
    return imageLinks[Math.floor(Math.random() * imageLinks.length)];
}

export default getRandomLinks;
const jsonString = `
[
  {
    "author": "Dr. Jane Doe",
    "education": "PhD in Nutrition",
    "bio": "Dr. Jane Doe is a certified nutritionist with over 10 years of experience in the field. She is passionate about helping people improve their health through proper nutrition and lifestyle changes.",
    "id": 1,
    "image": "https://picsum.photos/300/200?random=1",
    "title": "The Secret to Radiant Skin",
    "description": "Discover how natural remedies can enhance your beauty."
  },
  {
    "author": "Dr. John Smith",
    "education": "MD in Internal Medicine",
    "bio": "Dr. John Smith is a licensed physician specializing in internal medicine. He has a keen interest in preventive care and holistic health.",
    "id": 2,
    "image": "https://picsum.photos/300/200?random=2",
    "title": "Healthy Eating Habits",
    "description": "Learn the essentials of a balanced diet for wellness."
  },
  {
    "author": "Dr. Jane Doe",
    "education": "PhD in Nutrition",
    "bio": "Dr. Jane Doe is a certified nutritionist with over 10 years of experience in the field. She is passionate about helping people improve their health through proper nutrition and lifestyle changes.",
    "id": 3,
    "image": "https://picsum.photos/300/200?random=3",
    "title": "Staying Active",
    "description": "Fitness tips to keep you healthy and energized."
  },
  {
    "author": "Cyrus Longwe",
    "education": "Certified Yoga Instructor",
    "bio": "Cyrus Longwe is a yoga instructor and mindfulness coach. He believes in the power of meditation to transform lives and bring about inner peace.",
    "id": 4,
    "image": "https://picsum.photos/300/200?random=4",
    "title": "Mindful Living",
    "description": "Reduce stress and find peace through mindfulness."
  }
]
`;

try {
  const data = JSON.parse(jsonString);
  console.log("JSON is valid:", data);
} catch (error) {
  console.error("JSON is invalid:", error);
}

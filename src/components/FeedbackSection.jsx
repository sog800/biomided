import React, { useState } from "react";

const FeedbackSection = () => {
  const [feedback, setFeedback] = useState("");
  const [message, setMessage] = useState("");

  const handleFeedbackSubmit = () => {
    if (feedback.trim()) {
      setMessage("Thank you for your feedback!");
      setFeedback("");
    } else {
      setMessage("Please enter your feedback before submitting.");
    }
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-emerald-600 mb-4">We Value Your Feedback</h2>
        <p className="text-lg text-gray-700 mb-6">
          Share your thoughts and help us improve!
        </p>
        <div className="max-w-2xl mx-auto">
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Write your feedback here..."
            className="w-full h-32 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 mb-4"
          />
          <button
            onClick={handleFeedbackSubmit}
            className="px-6 py-3 bg-sky-500 text-white text-lg font-bold rounded-lg hover:bg-sky-600 transition"
          >
            Submit Feedback
          </button>
          {message && (
            <p className={`mt-4 text-lg ${message.includes("Thank you") ? "text-green-500" : "text-red-500"}`}>
              {message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
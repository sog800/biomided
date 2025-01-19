import React, { useState } from "react";

const FeedbackSection = ({ theme }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [feedback, setFeedback] = useState("");
  const [message, setMessage] = useState("");

  const handleFeedbackSubmit = async () => {
    if (!name.trim()) {
      setMessage("Please enter your name.");
      return;
    }

    if (feedback.trim()) {
      try {
        const response = await fetch("https://biomidedbackend.onrender.com/blog/feedback/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, phone, feedback }),
        });

        const data = await response.json();

        if (response.ok) {
          setMessage("Thank you for your feedback!");
        } else {
          setMessage(data.detail || "An error occurred while submitting feedback.");
        }
      } catch (error) {
        setMessage("An error occurred: " + error.message);
      }

      setName("");
      setEmail("");
      setPhone("");
      setFeedback(""); // Clear the feedback after submission
    } else {
      setMessage("Please enter your feedback before submitting.");
    }
  };

  return (
    <section
      className={`py-16 mt-16 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
    >
      <div className="container mx-auto px-4 text-center">
        <h2
          className={`text-4xl font-bold mb-4 ${
            theme === "dark" ? "text-emerald-400" : "text-emerald-600"
          }`}
        >
          We Value Your Feedback
        </h2>
        <p
          className={`text-lg mb-6 ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Share your thoughts and help us improve!
        </p>
        <div className="max-w-2xl mx-auto">
          {/* Name */}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name (Required)"
            className={`w-full p-4 border rounded-lg focus:outline-none focus:ring-2 mb-4 ${
              theme === "dark"
                ? "bg-gray-700 text-white border-gray-600 focus:ring-sky-400"
                : "bg-white text-gray-900 border-gray-300 focus:ring-sky-500"
            }`}
            required
          />
          
          {/* Email */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email (Optional)"
            className={`w-full p-4 border rounded-lg focus:outline-none focus:ring-2 mb-4 ${
              theme === "dark"
                ? "bg-gray-700 text-white border-gray-600 focus:ring-sky-400"
                : "bg-white text-gray-900 border-gray-300 focus:ring-sky-500"
            }`}
          />

          {/* Phone */}
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Your Phone Number (Optional)"
            className={`w-full p-4 border rounded-lg focus:outline-none focus:ring-2 mb-4 ${
              theme === "dark"
                ? "bg-gray-700 text-white border-gray-600 focus:ring-sky-400"
                : "bg-white text-gray-900 border-gray-300 focus:ring-sky-500"
            }`}
          />

          {/* Feedback Textarea */}
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Write your feedback here..."
            className={`w-full h-32 p-4 border rounded-lg focus:outline-none focus:ring-2 mb-4 ${
              theme === "dark"
                ? "bg-gray-700 text-white border-gray-600 focus:ring-sky-400"
                : "bg-white text-gray-900 border-gray-300 focus:ring-sky-500"
            }`}
            required
          />
          
          {/* Submit Button */}
          <button
            onClick={handleFeedbackSubmit}
            className="px-6 py-3 bg-sky-500 text-white text-lg font-bold rounded-lg hover:bg-sky-600 transition"
          >
            Submit Feedback
          </button>
          {message && (
            <p
              className={`mt-4 text-lg ${
                message.includes("Thank you") ? "text-green-500" : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;

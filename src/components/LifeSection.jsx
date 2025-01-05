import React, { useRef, useEffect, useState } from "react";

const LifeSection = ({ theme }) => {
  const videoRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={videoRef}
      className={`py-16 mt-6 ${
        theme === "dark" ? "bg-gray-800" : "bg-emerald-50"
      }`}
    >
      <div className="container mx-auto px-4 text-center">
        <h2
          className={`text-4xl font-bold ${
            theme === "dark" ? "text-emerald-400" : "text-emerald-600"
          } mb-4`}
        >
          Healthy Living
        </h2>
        <p
          className={`text-lg ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          } mb-8`}
        >
          Discover the transformative power of healthy living and natural beauty
          solutions. From practical tips to expert advice, we bring you content
          that inspires and empowers.
        </p>

        {/* YouTube Video */}
        <div className="relative w-full max-w-3xl mx-auto">
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/Y8HIFRPU6pM?autoplay=${isInView ? 1 : 0}&mute=1`}
            title="Healthy Living Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LifeSection;

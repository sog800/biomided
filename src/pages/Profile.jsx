export default function LoginRedirect() {
    const handleRedirect = () => {
      window.location.href = "https://biomided.onrender.com/api/login"; // Replace with your backend endpoint
    };
  
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <button
          onClick={handleRedirect}
          className="p-4 bg-blue-500 text-white rounded shadow-md"
        >
          Go to Login Page
        </button>
      </div>
    );
  }
  
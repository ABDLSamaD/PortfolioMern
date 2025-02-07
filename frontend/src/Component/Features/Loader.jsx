import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="loader">
        <svg
          className="animate-spin h-10 w-10 text-purple-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 0a6 6 0 016-6V0C7.477 0 0 7.477 0 14h2zm2 0a4 4 0 014-4V0C9.477 0 0 9.477 0 16h2zm2 0a2 2 0 012-2V0C11.477 0 0 11.477 0 18h2z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Loader;

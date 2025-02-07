import React from "react";

export function Background({ children }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[radial-gradient(circle,rgba(10,25,47,0.9),rgba(0,0,0,1))]">
      {/* Animated blurred orbs */}
      <div className="absolute inset-0">
        <div className="absolute left-[8%] top-[8%] h-56 w-56 rounded-full bg-blue-900/75 blur-xl" />
        <div className="absolute right-[8%] top-[8%] h-56 w-56 rounded-full bg-green-900/75 blur-xl" />
        <div className="absolute bottom-[8%] left-[8%] h-56 w-56 rounded-full bg-purple-900/75 blur-xl" />
        <div className="absolute bottom-[8%] right-[8%] h-56 w-56 rounded-full bg-cyan-900/75 blur-xl" />
      </div>

      {/* Center divider with blur effect */}
      <div className="absolute left-1/2 h-full w-32 sm:w-72 -translate-x-1/2 bg-black/25 sm:bg-black/75 shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] backdrop-blur-md" />

      {/* Content container */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

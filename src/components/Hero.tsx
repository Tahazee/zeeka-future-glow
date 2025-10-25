import React from "react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center bg-black overflow-hidden">
      {/* Soft animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0ff2_0%,_transparent_70%)] opacity-10 animate-pulse" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/10 to-black" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
          Welcome to the Future
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-8">
          Build your next-gen experience with clean motion, depth, and light.
        </p>
        <Button className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all duration-500 hover:scale-105">
          Get Started
        </Button>
      </div>
    </section>
  );
}

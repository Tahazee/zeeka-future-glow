export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Welcome to My World
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-8">
          Building modern web experiences with React and Tailwind CSS.
        </p>
        <button className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition">
          Get Started
        </button>
      </div>
    </section>
  );
}

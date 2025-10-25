export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <div className="max-w-4xl text-right">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Welcome to zeeKA
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-8">
          Building modern web experiences.
        </p>
        <button className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition">
          Get Started
        </button>
      </div>
    </section>
  );
}

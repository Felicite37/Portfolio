// components/PortfolioHeader.tsx
"use client";

export default function PortfolioHeader() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <header className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 via-transparent to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full border-4 border-yellow-500 shadow-2xl shadow-yellow-500/50 overflow-hidden">
              <img
                src="/joy.jpeg"
                alt="Felicite"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-500 text-sm font-medium">
                Frontend Developer
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent mb-8 leading-tight">
              Hi, I&apos;m Felicite
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
              Crafting beautiful digital experiences
            </p>
            <div className="text-lg text-gray-400 space-y-2 mb-12">
              <p>
                I transform designs into pixel-perfect, responsive web
                applications.
              </p>
              <p>
                Specializing in HTML & CSS, React, Next.js, and modern frontend
                technologies.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:justify-start justify-center gap-6">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 hover:scale-105"
              >
                Let&apos;s Talk
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                View My Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

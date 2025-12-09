// components/AboutSection.tsx
"use client";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-500 text-sm font-semibold tracking-wider uppercase mb-6">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Your Vision, My Code
          </h2>
        </div>

        <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-3xl p-10 mb-8 hover:border-yellow-500/50 transition-all duration-500">
          <p className="text-gray-300 text-lg leading-relaxed text-center mb-6">
            I'm a dedicated Frontend Developer who transforms ideas into stunning, high-performance web applications. 
            With a keen eye for design and a commitment to clean code, I deliver solutions that not only look amazing 
            but also drive real business results.
          </p>
          <p className="text-gray-400 text-center">
            Whether you need a modern website, a complex web application, or a complete digital transformation, 
            I bring the technical expertise and creative vision to make your project a success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:border-yellow-500 hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-yellow-500 mb-2">10+</div>
            <div className="text-gray-400 text-sm mb-2">Projects Delivered</div>
            <div className="text-gray-500 text-xs">On time & on budget</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:border-yellow-500 hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-yellow-500 mb-2">100%</div>
            <div className="text-gray-400 text-sm mb-2">Client Satisfaction</div>
            <div className="text-gray-500 text-xs">Quality guaranteed</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:border-yellow-500 hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-yellow-500 mb-2">24/7</div>
            <div className="text-gray-400 text-sm mb-2">Support Available</div>
            <div className="text-gray-500 text-xs">Always here to help</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/30 rounded-2xl p-8 text-center">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg shadow-yellow-500/30 hover:scale-105"
          >
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  );
}

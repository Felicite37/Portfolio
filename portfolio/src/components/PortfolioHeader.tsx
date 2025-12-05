// components/PortfolioHeader.tsx
export default function PortfolioHeader() {
  return (
    <header className="py-12 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Web Design & Development
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        Creating modern, responsive websites with passion and precision
      </p>
      <div className="mb-10">
        <span className="inline-block bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-lg font-medium">
          I do what I love with passion
        </span>
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition duration-300"
        >
          Contact Me
        </a>
        <a
          href="#portfolio"
          className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg text-lg font-medium transition duration-300"
        >
          View Portfolio
        </a>
      </div>
    </header>
  );
}

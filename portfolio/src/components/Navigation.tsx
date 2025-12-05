// components/Navigation.tsx
"use client";

export default function Navigation() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">Portfolio</div>
          <div className="flex space-x-6">
            <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-blue-600 transition">Home</button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-blue-600 transition">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-blue-600 transition">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition">Contact</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
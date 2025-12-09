// components/SkillsSection.tsx
interface SkillCategory {
  title: string;
  skills: string[];
  description: string;
}

export default function SkillsSection() {
  const categories: SkillCategory[] = [
    {
      title: "Frontend Development",
      skills: ["HTML & CSS", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS"],
      description: "Building responsive and interactive user interfaces"
    },
    {
      title: "Backend & Database",
      skills: ["Firebase", "PostgreSQL", "API Integration"],
      description: "Server-side development and data management"
    },
    {
      title: "Development Tools",
      skills: ["Git & GitHub", "npm/yarn", "Terminal", "Jest & Cypress"],
      description: "Version control, testing, and workflow optimization"
    },
    {
      title: "Design & Optimization",
      skills: ["Figma", "Adobe XD", "SEO", "Responsive Design"],
      description: "UI/UX design and performance optimization"
    }
  ];

  return (
    <section className="py-20 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-500 text-sm font-semibold tracking-wider uppercase mb-6">Expertise</span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Technical Arsenal
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">A comprehensive toolkit for building modern web applications</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-yellow-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/5 group-hover:to-transparent rounded-2xl transition-all duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 mb-6 bg-yellow-500/10 rounded-xl flex items-center justify-center group-hover:bg-yellow-500/20 transition-all duration-300">
                  <div className="w-8 h-8 bg-yellow-500 rounded-lg group-hover:scale-110 transition-transform duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors duration-300">{category.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 text-sm font-medium group-hover:border-yellow-500/50 group-hover:text-yellow-500 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

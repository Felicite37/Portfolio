// components/ProjectsGrid.tsx
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
}

export default function ProjectsGrid() {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Website",
      description:
        "A modern online store with cart functionality and payment integration",
      technologies: ["Next.js", "TypeScript", "Stripe"],
      imageUrl: "/project1.jpg",
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description:
        "Real-time weather application with location-based forecasts",
      technologies: ["React", "API Integration", "Chart.js"],
      imageUrl: "/project2.jpg",
    },
    {
      id: 3,
      title: "Task Manager App",
      description:
        "Productivity application for managing daily tasks and projects",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      imageUrl: "/project3.jpg",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Responsive portfolio for a creative professional",
      technologies: ["React", "CSS3", "Framer Motion"],
      imageUrl: "/project4.jpg",
    },
  ];

  return (
    <section id="portfolio" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          My Recent Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-blue-100">{project.description}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-gray-800 hover:bg-black text-white py-3 rounded-lg font-medium transition duration-300">
                  View Project Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

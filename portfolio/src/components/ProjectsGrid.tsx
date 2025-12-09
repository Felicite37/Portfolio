// components/ProjectsGrid.tsx
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

export default function ProjectsGrid() {
  const projects: Project[] = [
    {
      id: 1,
      title: "To-Do List App",
      description:
        "A productivity application for managing daily tasks and projects",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      imageUrl: "/project1.jpg",
      githubUrl: "https://github.com/Felicite37/To-do-list-app.git",
      liveUrl: "https://to-do-list-app-phi-lemon.vercel.app/",
    },
    {
      id: 2,
      title: "Static E-commerce",
      description:
        "A modern online store with product catalog and shopping features",
      technologies: ["HTML", "CSS", "JavaScript"],
      imageUrl: "/project2.jpg",
      githubUrl: "https://github.com/Felicite37/capstone-e-commerce-project.git",
      liveUrl: "https://capstone-e-commerce-project.vercel.app/",
    },
    {
      id: 3,
      title: "Book Explorer",
      description:
        "A web application for discovering and exploring books",
      technologies: ["HTML", "CSS", "JavaScript"],
      imageUrl: "/project3.jpg",
      githubUrl: "https://github.com/Felicite37/Phase-One-Capstone-Project.git",
      liveUrl: "https://phase-one-capstone-project-two.vercel.app/index.html",
    },
    {
      id: 4,
      title: "Movie Explorer",
      description: "A web application for discovering and exploring movies",
      technologies: ["React", "API Integration", "CSS3"],
      imageUrl: "/project4.jpg",
      githubUrl: "https://github.com/Felicite37/Movie-explorer-project.git",
      liveUrl: "https://movie-explorer-project-kappa.vercel.app/",
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-6 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 via-transparent to-transparent"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-yellow-500 text-sm font-semibold tracking-wider uppercase mb-4 block">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">Showcasing my best work</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900/50 backdrop-blur-sm border-2 border-gray-800 rounded-xl shadow-2xl shadow-yellow-500/10 overflow-hidden hover:border-yellow-500 hover:shadow-yellow-500/30 transition-all duration-500 group"
            >
              <div className="h-48 flex items-center justify-center border-b-2 border-yellow-500">
                <div className="text-white text-center p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 border border-yellow-500 text-yellow-500 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.githubUrl || project.liveUrl ? (
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-800 hover:bg-gray-700 text-yellow-500 py-3 rounded-lg font-medium transition duration-300 shadow-lg text-center border border-yellow-500/30"
                      >
                        View Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-black py-3 rounded-lg font-medium transition duration-300 shadow-lg text-center"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                ) : (
                  <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-black py-3 rounded-lg font-medium transition duration-300 shadow-lg">
                    View Project Details
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

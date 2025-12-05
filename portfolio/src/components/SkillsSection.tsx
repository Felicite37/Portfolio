// components/SkillsSection.tsx
interface Skill {
  name: string;
  level: number;
}

export default function SkillsSection() {
  const skills: Skill[] = [
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "React", level: 90 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Responsive Design", level: 90 },
    { name: "Git & GitHub", level: 75 },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          My Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">{skill.name}</span>
                <span className="font-medium text-blue-600">
                  {skill.level}%
                </span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

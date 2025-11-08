import { Code, Database, Wrench, Brain, Layers, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "JavaScript/TypeScript", level: 95 },
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "Go", level: 75 },
        { name: "C++", level: 70 }
      ]
    },
    {
      icon: Layers,
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "Vue.js", level: 80 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Redux/Zustand", level: 85 }
      ]
    },
    {
      icon: Database,
      title: "Backend & Databases",
      skills: [
        { name: "Node.js/Express", level: 90 },
        { name: "FastAPI/Django", level: 85 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 90 },
        { name: "Redis", level: 75 }
      ]
    },
    {
      icon: Wrench,
      title: "DevOps & Tools",
      skills: [
        { name: "Docker/Kubernetes", level: 85 },
        { name: "AWS/Azure", level: 80 },
        { name: "CI/CD (GitHub Actions)", level: 85 },
        { name: "Git/GitHub", level: 95 },
        { name: "Linux", level: 80 }
      ]
    },
    {
      icon: Brain,
      title: "AI/ML & Data Science",
      skills: [
        { name: "TensorFlow/PyTorch", level: 80 },
        { name: "Scikit-learn", level: 85 },
        { name: "Natural Language Processing", level: 75 },
        { name: "Data Analysis (Pandas)", level: 85 },
        { name: "Computer Vision", level: 70 }
      ]
    },
    {
      icon: Zap,
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", level: 95 },
        { name: "Team Collaboration", level: 90 },
        { name: "Communication", level: 90 },
        { name: "Project Management", level: 85 },
        { name: "Agile/Scrum", level: 85 }
      ]
    }
  ];

  return (
    <div className="page-container" data-testid="skills-page">
      <div>
        <h1 className="page-title" data-testid="page-title">Skills & Expertise</h1>
        <p className="page-subtitle" data-testid="page-subtitle">Technical proficiencies and competencies</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8" data-testid="skills-grid">
        {skillCategories.map((category, categoryIndex) => {
          const IconComponent = category.icon;
          return (
            <div key={categoryIndex} className="card" data-testid={`skill-category-${categoryIndex}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#F5F1ED] rounded-lg">
                  <IconComponent size={24} className="text-[#8B7355]" />
                </div>
                <h3 className="section-heading" data-testid={`category-title-${categoryIndex}`}>{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} data-testid={`skill-${categoryIndex}-${skillIndex}`}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-900" data-testid={`skill-name-${categoryIndex}-${skillIndex}`}>{skill.name}</span>
                      <span className="text-[#8B7355] font-semibold" data-testid={`skill-level-${categoryIndex}-${skillIndex}`}>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-[#8B7355] to-[#D4AF87] h-2.5 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                        data-testid={`skill-bar-${categoryIndex}-${skillIndex}`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;

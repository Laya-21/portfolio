import { ExternalLink, Github, Calendar, Tag } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with real-time inventory management, payment processing, and advanced search capabilities.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      date: "2023",
      github: "https://github.com",
      live: "https://example.com",
      highlights: [
        "Handles 10,000+ daily transactions",
        "Reduced page load time by 60%",
        "Integrated with 5+ payment gateways"
      ]
    },
    {
      title: "AI-Powered Chatbot",
      description: "Intelligent chatbot using natural language processing to provide customer support and automate responses with 95% accuracy.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
      technologies: ["Python", "TensorFlow", "Flask", "React", "OpenAI API"],
      date: "2023",
      github: "https://github.com",
      live: "https://example.com",
      highlights: [
        "Serves 5,000+ users monthly",
        "Reduced support tickets by 40%",
        "Multi-language support"
      ]
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates, kanban boards, and team analytics dashboard.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "WebSockets"],
      date: "2022",
      github: "https://github.com",
      live: "https://example.com",
      highlights: [
        "Used by 50+ teams",
        "Real-time collaboration",
        "Advanced analytics dashboard"
      ]
    },
    {
      title: "Fitness Tracking Mobile App",
      description: "Cross-platform mobile application for tracking workouts, nutrition, and health metrics with social features.",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
      technologies: ["React Native", "Firebase", "Redux", "Node.js", "MongoDB"],
      date: "2022",
      github: "https://github.com",
      live: "https://example.com",
      highlights: [
        "10,000+ downloads",
        "4.8-star rating",
        "Integrated with wearables"
      ]
    },
    {
      title: "Real Estate Listing Platform",
      description: "Comprehensive platform for property listings with advanced search filters, virtual tours, and mortgage calculators.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      technologies: ["Vue.js", "Django", "PostgreSQL", "Google Maps API", "AWS S3"],
      date: "2021",
      github: "https://github.com",
      live: "https://example.com",
      highlights: [
        "5,000+ property listings",
        "Virtual tour integration",
        "AI-powered recommendations"
      ]
    },
    {
      title: "Social Media Analytics Dashboard",
      description: "Analytics platform for tracking social media metrics across multiple platforms with AI-powered insights.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      technologies: ["React", "D3.js", "Python", "FastAPI", "Redis"],
      date: "2021",
      github: "https://github.com",
      live: "https://example.com",
      highlights: [
        "Tracks 10+ social platforms",
        "Real-time data processing",
        "Custom report generation"
      ]
    }
  ];

  return (
    <div className="page-container" data-testid="projects-page">
      <div>
        <h1 className="page-title" data-testid="page-title">Projects</h1>
        <p className="page-subtitle" data-testid="page-subtitle">Featured work and personal projects</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8" data-testid="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="card group" data-testid={`project-card-${index}`}>
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                data-testid={`project-image-${index}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
              <Calendar size={16} />
              <span data-testid={`project-date-${index}`}>{project.date}</span>
            </div>
            
            <h3 className="section-heading mb-3" data-testid={`project-title-${index}`}>{project.title}</h3>
            <p className="text-gray-700 mb-4" data-testid={`project-description-${index}`}>{project.description}</p>
            
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Tag size={16} className="text-[#8B7355]" />
                Key Highlights:
              </h4>
              <ul className="space-y-1">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 text-sm" data-testid={`project-highlight-${index}-${i}`}>
                    <span className="text-[#8B7355] mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="badge" data-testid={`project-tech-${index}-${i}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-3">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#F5F1ED] text-[#8B7355] rounded-md hover:bg-[#8B7355] hover:text-white transition-all font-medium text-sm"
                data-testid={`project-github-${index}`}
              >
                <Github size={18} />
                Code
              </a>
              <a 
                href={project.live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#8B7355] text-white rounded-md hover:bg-[#6B5E50] transition-all font-medium text-sm"
                data-testid={`project-live-${index}`}
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

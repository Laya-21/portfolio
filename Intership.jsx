import { Briefcase, MapPin, Calendar } from "lucide-react";

const Internship = () => {
  const internships = [
    {
      role: "Senior Software Engineer Intern",
      company: "Google",
      location: "Mountain View, CA",
      period: "Summer 2021",
      duration: "3 months",
      description: "Worked on Google Search infrastructure, focusing on improving query performance and relevance algorithms.",
      responsibilities: [
        "Developed and optimized search indexing algorithms, reducing query time by 25%",
        "Collaborated with a team of 8 engineers on microservices architecture",
        "Implemented A/B testing framework for new features",
        "Wrote comprehensive unit tests achieving 95% code coverage"
      ],
      technologies: ["Python", "Go", "TensorFlow", "Kubernetes", "BigQuery"]
    },
    {
      role: "Full Stack Developer Intern",
      company: "Microsoft",
      location: "Redmond, WA",
      period: "Summer 2020",
      duration: "3 months",
      description: "Contributed to Azure DevOps platform, enhancing CI/CD pipeline capabilities and user experience.",
      responsibilities: [
        "Built new features for Azure Pipelines using React and TypeScript",
        "Integrated third-party tools and services into the platform",
        "Improved deployment success rate by 30% through better error handling",
        "Participated in code reviews and agile development practices"
      ],
      technologies: ["React", "TypeScript", "Node.js", "Azure", "MongoDB"]
    },
    {
      role: "Software Development Intern",
      company: "Amazon",
      location: "Seattle, WA",
      period: "Summer 2019",
      duration: "3 months",
      description: "Worked on Amazon Web Services (AWS) Lambda, focusing on serverless computing solutions.",
      responsibilities: [
        "Developed serverless applications using AWS Lambda and API Gateway",
        "Created automated deployment scripts reducing deployment time by 40%",
        "Optimized database queries improving application response time",
        "Documented technical specifications and API endpoints"
      ],
      technologies: ["Python", "AWS Lambda", "DynamoDB", "CloudFormation", "Docker"]
    }
  ];

  return (
    <div className="page-container" data-testid="internship-page">
      <div>
        <h1 className="page-title" data-testid="page-title">Internship Experience</h1>
        <p className="page-subtitle" data-testid="page-subtitle">Professional experience and contributions</p>
      </div>

      <div className="timeline" data-testid="internship-timeline">
        {internships.map((internship, index) => (
          <div key={index} className="timeline-item" data-testid={`internship-item-${index}`}>
            <div className="card">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-[#F5F1ED] rounded-lg">
                  <Briefcase size={28} className="text-[#8B7355]" />
                </div>
                <div className="flex-1">
                  <h3 className="section-heading" data-testid={`role-${index}`}>{internship.role}</h3>
                  <p className="text-[#8B7355] font-semibold text-lg mb-2" data-testid={`company-${index}`}>{internship.company}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center gap-1" data-testid={`location-${index}`}>
                      <MapPin size={16} />
                      {internship.location}
                    </span>
                    <span className="flex items-center gap-1" data-testid={`period-${index}`}>
                      <Calendar size={16} />
                      {internship.period} ({internship.duration})
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4" data-testid={`description-${index}`}>{internship.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                <ul className="space-y-2">
                  {internship.responsibilities.map((responsibility, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700" data-testid={`responsibility-${index}-${i}`}>
                      <span className="text-[#8B7355] mt-1 font-bold">•</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {internship.technologies.map((tech, i) => (
                    <span key={i} className="badge" data-testid={`technology-${index}-${i}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internship;

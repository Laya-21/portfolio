import { GraduationCap, Award, BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Stanford University",
      location: "California, USA",
      period: "2020 - 2022",
      gpa: "3.9/4.0",
      description: "Specialized in Artificial Intelligence and Machine Learning. Thesis on Deep Learning applications in Computer Vision.",
      achievements: [
        "Dean's List - All Semesters",
        "Graduate Research Assistant",
        "Published 2 research papers"
      ]
    },
    {
      degree: "Bachelor of Technology in Computer Engineering",
      institution: "MIT",
      location: "Massachusetts, USA",
      period: "2016 - 2020",
      gpa: "3.8/4.0",
      description: "Comprehensive study of computer systems, algorithms, and software engineering principles.",
      achievements: [
        "Summa Cum Laude",
        "President, Computer Science Society",
        "Best Capstone Project Award"
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023"
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022"
    },
    {
      name: "Advanced React & Redux",
      issuer: "Udemy",
      date: "2021"
    }
  ];

  return (
    <div className="page-container" data-testid="education-page">
      <div>
        <h1 className="page-title" data-testid="page-title">Education</h1>
        <p className="page-subtitle" data-testid="page-subtitle">My academic journey and qualifications</p>
      </div>

      {/* Education Timeline */}
      <div className="timeline mb-16" data-testid="education-timeline">
        {education.map((edu, index) => (
          <div key={index} className="timeline-item" data-testid={`education-item-${index}`}>
            <div className="card">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-[#F5F1ED] rounded-lg">
                  <GraduationCap size={28} className="text-[#8B7355]" />
                </div>
                <div className="flex-1">
                  <h3 className="section-heading" data-testid={`degree-${index}`}>{edu.degree}</h3>
                  <p className="text-[#8B7355] font-semibold mb-1" data-testid={`institution-${index}`}>{edu.institution}</p>
                  <p className="text-gray-600 text-sm mb-2" data-testid={`location-${index}`}>
                    {edu.location} | {edu.period}
                  </p>
                  <div className="inline-block px-3 py-1 bg-[#8B7355] text-white rounded-full text-sm font-medium mb-3" data-testid={`gpa-${index}`}>
                    GPA: {edu.gpa}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4" data-testid={`description-${index}`}>{edu.description}</p>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Award size={18} className="text-[#8B7355]" />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700" data-testid={`achievement-${index}-${i}`}>
                      <span className="text-[#8B7355] mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="mb-16" data-testid="certifications-section">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3" style={{ fontFamily: "'Playfair Display', serif" }}>
          <BookOpen className="text-[#8B7355]" size={32} />
          Certifications
        </h2>
        <div className="grid-3">
          {certifications.map((cert, index) => (
            <div key={index} className="card" data-testid={`certification-${index}`}>
              <div className="p-2 bg-[#F5F1ED] rounded-lg w-fit mb-3">
                <Award size={24} className="text-[#8B7355]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2" data-testid={`cert-name-${index}`}>{cert.name}</h3>
              <p className="text-gray-600 text-sm mb-1" data-testid={`cert-issuer-${index}`}>{cert.issuer}</p>
              <p className="text-[#8B7355] text-sm font-medium" data-testid={`cert-date-${index}`}>{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;

import { Award, Users, Heart, Trophy, Star, Target } from "lucide-react";

const ExtraCurricular = () => {
  const activities = [
    {
      icon: Users,
      title: "Tech Community Leadership",
      role: "President, Computer Science Society",
      period: "2019 - 2020",
      description: "Led a community of 500+ students, organizing hackathons, workshops, and tech talks. Increased membership by 150% during tenure.",
      achievements: [
        "Organized 15+ technical workshops",
        "Hosted annual hackathon with 200+ participants",
        "Established mentorship program connecting 50+ student pairs"
      ]
    },
    {
      icon: Trophy,
      title: "Competitive Programming",
      role: "Team Lead",
      period: "2018 - 2020",
      description: "Participated in national and international programming competitions, representing university at various levels.",
      achievements: [
        "ACM ICPC Regional Finalist (2019)",
        "Google Code Jam Round 2 qualifier",
        "Solved 1000+ problems on competitive platforms",
        "Mentored 20+ students for competitive programming"
      ]
    },
    {
      icon: Heart,
      title: "Volunteer Teaching",
      role: "Coding Instructor",
      period: "2018 - 2022",
      description: "Volunteered to teach programming basics to underprivileged students through non-profit organizations.",
      achievements: [
        "Taught 100+ students basic programming",
        "Developed curriculum for beginner Python courses",
        "Contributed to educational content creation"
      ]
    },
    {
      icon: Award,
      title: "Open Source Contributions",
      role: "Active Contributor",
      period: "2019 - Present",
      description: "Regular contributor to various open-source projects, focusing on web development tools and libraries.",
      achievements: [
        "500+ contributions on GitHub",
        "Maintainer of 3 open-source projects",
        "Contributed to React, Next.js documentation",
        "Google Summer of Code participant (2020)"
      ]
    }
  ];

  const awards = [
    {
      title: "Best Innovation Award",
      event: "University Tech Fest 2020",
      description: "Recognized for developing an AI-powered accessibility tool"
    },
    {
      title: "Outstanding Leadership Award",
      event: "Student Council 2020",
      description: "For exceptional contribution to student community"
    },
    {
      title: "Hackathon Winner",
      event: "TechCrunch Disrupt 2019",
      description: "First place among 150+ teams for social impact project"
    },
    {
      title: "Community Champion",
      event: "Dev Community Awards 2021",
      description: "For active participation and helping fellow developers"
    }
  ];

  const interests = [
    { icon: "💻", name: "Coding & Development" },
    { icon: "📚", name: "Reading Tech Blogs" },
    { icon: "🎮", name: "Gaming" },
    { icon: "🏃", name: "Running & Fitness" },
    { icon: "📸", name: "Photography" },
    { icon: "🎵", name: "Music Production" },
    { icon: "✈️", name: "Traveling" },
    { icon: "🎨", name: "UI/UX Design" }
  ];

  return (
    <div className="page-container" data-testid="extra-curricular-page">
      <div>
        <h1 className="page-title" data-testid="page-title">Extra Curricular</h1>
        <p className="page-subtitle" data-testid="page-subtitle">Beyond academics - activities, achievements and interests</p>
      </div>

      {/* Activities */}
      <div className="mb-16" data-testid="activities-section">
        <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
          Activities & Leadership
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {activities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <div key={index} className="card" data-testid={`activity-${index}`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-[#F5F1ED] rounded-lg">
                    <IconComponent size={24} className="text-[#8B7355]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="section-heading mb-1" data-testid={`activity-title-${index}`}>{activity.title}</h3>
                    <p className="text-[#8B7355] font-semibold" data-testid={`activity-role-${index}`}>{activity.role}</p>
                    <p className="text-gray-600 text-sm" data-testid={`activity-period-${index}`}>{activity.period}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4" data-testid={`activity-description-${index}`}>{activity.description}</p>
                <ul className="space-y-2">
                  {activity.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 text-sm" data-testid={`activity-achievement-${index}-${i}`}>
                      <span className="text-[#8B7355] mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Awards */}
      <div className="mb-16" data-testid="awards-section">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3" style={{ fontFamily: "'Playfair Display', serif" }}>
          <Star className="text-[#8B7355]" size={32} />
          Awards & Recognition
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <div key={index} className="card" data-testid={`award-${index}`}>
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 bg-[#8B7355] rounded-lg">
                  <Trophy size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1" data-testid={`award-title-${index}`}>{award.title}</h3>
                  <p className="text-[#8B7355] font-medium text-sm" data-testid={`award-event-${index}`}>{award.event}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm" data-testid={`award-description-${index}`}>{award.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Interests */}
      <div data-testid="interests-section">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3" style={{ fontFamily: "'Playfair Display', serif" }}>
          <Target className="text-[#8B7355]" size={32} />
          Interests & Hobbies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {interests.map((interest, index) => (
            <div 
              key={index} 
              className="card text-center hover:shadow-xl transition-all cursor-pointer"
              data-testid={`interest-${index}`}
            >
              <div className="text-4xl mb-3">{interest.icon}</div>
              <p className="font-medium text-gray-900" data-testid={`interest-name-${index}`}>{interest.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExtraCurricular;

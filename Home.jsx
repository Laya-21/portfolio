import { Link } from "react-router-dom";
import { ArrowRight, Mail, Github, Linkedin, Download } from "lucide-react";

const Home = () => {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <div className="min-h-[80vh] flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          <div data-testid="hero-content">
            <p className="text-lg text-[#8B7355] mb-4 font-medium" data-testid="greeting-text">Hello, I'm</p>
            <h1 className="text-6xl md:text-7xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }} data-testid="name-heading">
              John Doe
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-8" data-testid="title-text">
              Full Stack Developer & Designer
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed" data-testid="bio-text">
              Passionate about creating elegant solutions to complex problems. 
              I specialize in building modern web applications with a focus on 
              user experience and clean code architecture.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/projects" data-testid="view-projects-btn">
                <button className="btn-primary flex items-center gap-2">
                  View My Work <ArrowRight size={18} />
                </button>
              </Link>
              <button className="btn-secondary flex items-center gap-2" data-testid="download-resume-btn">
                <Download size={18} /> Download Resume
              </button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a href="mailto:john@example.com" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110" data-testid="email-link">
                <Mail size={20} className="text-[#8B7355]" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110" data-testid="github-link">
                <Github size={20} className="text-[#8B7355]" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110" data-testid="linkedin-link">
                <Linkedin size={20} className="text-[#8B7355]" />
              </a>
            </div>
          </div>
          
          <div className="relative" data-testid="hero-image-container">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3NjI2MjM2NTh8MA&ixlib=rb-4.1.0&q=85" 
                alt="Professional Portrait"
                className="w-full h-[500px] object-cover"
                data-testid="profile-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#8B7355]/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D4AF87] rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-[#8B7355] rounded-full opacity-10 blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 mb-20" data-testid="stats-section">
        <div className="card text-center" data-testid="stat-experience">
          <h3 className="text-4xl font-bold text-[#8B7355] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>3+</h3>
          <p className="text-gray-600">Years Experience</p>
        </div>
        <div className="card text-center" data-testid="stat-projects">
          <h3 className="text-4xl font-bold text-[#8B7355] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>20+</h3>
          <p className="text-gray-600">Projects Completed</p>
        </div>
        <div className="card text-center" data-testid="stat-clients">
          <h3 className="text-4xl font-bold text-[#8B7355] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>15+</h3>
          <p className="text-gray-600">Happy Clients</p>
        </div>
        <div className="card text-center" data-testid="stat-awards">
          <h3 className="text-4xl font-bold text-[#8B7355] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>5+</h3>
          <p className="text-gray-600">Awards Won</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-sans">
      {/* ===== HEADER ===== */}
      <header className="flex justify-between items-center p-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-white">Mohamed Taha</h1>
        <nav className="flex gap-6">
          <a href="#about" className="hover:text-teal-400">
            About
          </a>
          <a href="#projects" className="hover:text-teal-400">
            Projects
          </a>
          <a href="#skills" className="hover:text-teal-400">
            Skills
          </a>
          <a href="#contact" className="hover:text-teal-400">
            Contact
          </a>
        </nav>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="text-center py-20">
        <h2 className="text-5xl font-bold mb-4 text-white">
          Machine Learning Engineer
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-lg">
          Former Navy Instructor & Developer | Dell Technologies 1st Place Winner |  
          Building AI-driven automation & computer vision systems.
        </p>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="py-16 px-8 max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-teal-400">About Me</h3>
        <p className="text-gray-300 text-lg leading-relaxed">
          I'm a passionate <b>AI & Machine Learning Engineer</b> with a strong
          background in automation, data science, and LLM-based applications.
          I served two years as an <b>Instructor and Developer</b> in the
          Egyptian Navy, where I worked on automation systems and technical
          training.  
          <br /> My graduation project <b>“EyeCG”</b> won 1st place at the{" "}
          <b>Dell Technologies competition</b>. I love building intelligent systems
          that solve real-world problems.
        </p>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="py-16 px-8 bg-[#111]">
        <h3 className="text-3xl font-bold mb-10 text-teal-400 text-center">
          Featured Projects
        </h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Warm Lead Bot */}
          <div className="bg-[#1a1a1a] rounded-2xl p-6 shadow-md hover:-translate-y-1 transition">
            <h4 className="text-xl font-semibold mb-2 text-white">
              Warm Lead Generation Bot
            </h4>
            <p className="text-gray-400 mb-4">
              Automated bot for generating leads from online platforms using NLP
              and sentiment analysis with LangChain & OpenAI APIs.
            </p>
            <a
              href="#"
              className="text-teal-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </div>

          {/* Telegram Voice to Text */}
          <div className="bg-[#1a1a1a] rounded-2xl p-6 shadow-md hover:-translate-y-1 transition">
            <h4 className="text-xl font-semibold mb-2 text-white">
              Telegram Voice-to-Text Bot
            </h4>
            <p className="text-gray-400 mb-4">
              Converts Telegram voice messages to text, detects sender info,
              analyzes quality, and integrates with Trello for automation.
            </p>
            <a
              href="#"
              className="text-teal-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </div>

          {/* EyeCG */}
          <div className="bg-[#1a1a1a] rounded-2xl p-6 shadow-md hover:-translate-y-1 transition">
            <h4 className="text-xl font-semibold mb-2 text-white">EyeCG</h4>
            <p className="text-gray-400 mb-4">
              Computer Vision project for eye gaze tracking and control, winner
              of 1st place in Dell Technologies graduation competition.
            </p>
            <a
              href="https://github.com/Mohamedtahaahmedtaha/Graduation-Project"
              className="text-teal-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section id="skills" className="py-16 px-8 max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-8 text-teal-400">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
          <span>Python</span>
          <span>SQL</span>
          <span>TensorFlow</span>
          <span>PyTorch</span>
          <span>Scikit-learn</span>
          <span>OpenCV</span>
          <span>LangChain</span>
          <span>FastAPI</span>
          <span>Streamlit</span>
          <span>Pandas</span>
          <span>NumPy</span>
          <span>Matplotlib</span>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-16 px-8 bg-[#111] text-center">
        <h3 className="text-3xl font-bold mb-6 text-teal-400">Get In Touch</h3>
        <p className="text-gray-400 mb-8">
          I'm open to collaborations, freelance projects, and AI/ML roles.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="mailto:MohamedTahaAhmedTaha@gmail.com"
            className="hover:text-teal-400"
          >
            <Mail />
          </a>
          <a
            href="https://github.com/Mohamedtahaahmedtaha"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamedtahaahmed/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400"
          >
            <Linkedin />
          </a>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} Mohamed Taha — All Rights Reserved.
      </footer>
    </div>
  );
}

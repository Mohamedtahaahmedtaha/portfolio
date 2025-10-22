import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-sans scroll-smooth">
      {/* ===== HEADER ===== */}
      <header className="flex justify-between items-center p-6 border-b border-gray-800 sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-md z-50">
        <h1 className="text-2xl font-bold text-white tracking-wide">
          Mohamed Taha
        </h1>
        <nav className="flex gap-6 text-gray-300">
          <a href="#about" className="hover:text-teal-400">
            About
          </a>
          <a href="#achievements" className="hover:text-teal-400">
            Achievements
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
      <section className="flex flex-col items-center justify-center text-center py-28 px-4">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          AI Engineer & Data Scientist
        </motion.h2>

        <motion.p
          className="text-gray-400 max-w-xl text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Passionate about building intelligent systems that create real impact
          using Machine Learning, Computer Vision, and Automation.
        </motion.p>

        <motion.a
          href="/Mohamed Taha Resume-.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl bg-teal-500 text-black font-semibold hover:bg-teal-400 transition"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          View My Resume
        </motion.a>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="py-20 px-8 max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-teal-400">About Me</h3>
        <p className="text-gray-300 text-lg leading-relaxed">
          I’m <b>Mohamed Taha</b>, an <b>AI Engineer</b> and{" "}
          <b>Data Scientist</b>
          with a strong background in <b>automation</b> and{" "}
          <b>machine learning</b>. I served two years in the{" "}
          <b>Egyptian Navy</b> as an Instructor and Developer, where I built and
          deployed automation systems and trained officers on advanced
          technologies.
          <br />I enjoy turning complex data and ideas into practical,
          intelligent solutions that improve efficiency and user experience.
        </p>
      </section>

      {/* ===== ACHIEVEMENTS ===== */}
      <section id="achievements" className="py-20 px-8 bg-[#111]">
        <h3 className="text-3xl font-bold mb-10 text-teal-400 text-center">
          Achievements
        </h3>
        <div className="max-w-4xl mx-auto text-gray-300 space-y-6">
          <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg">
            <h4 className="text-xl font-semibold text-white mb-2">
              🏆 1st Place — Dell Technologies AI Competition
            </h4>
            <p>
              Won the Dell Technologies graduation competition with the project
              <b> EyeCG</b>, an AI-based eye gaze control and cognitive state
              detection system using deep learning and computer vision.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg">
            <h4 className="text-xl font-semibold text-white mb-2">
              📊 Kaggle Projects & AI Research
            </h4>
            <p>
              Worked on several data-driven projects involving medical AI,
              sentiment analysis, and automation, focusing on building
              real-world deployable ML systems, one time gold , one time
              siliver, four times bronze medals in Kaggle.
            </p>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="py-20 px-8 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-10 text-teal-400 text-center">
          Projects
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {/* EyeCG */}
          <ProjectCard
            title="EyeCG (Dell Winner)"
            description="Computer Vision project for eye gaze tracking and cognitive state detection using deep learning."
            link="https://github.com/Mohamedtahaahmedtaha/Graduation-Project"
          />
          {/* Warm Leads Bot */}
          <ProjectCard
            title="Warm Lead Generation Bot"
            description="Automated NLP bot that extracts and qualifies leads from online platforms using LangChain & OpenAI."
            link="https://github.com/Mohamedtahaahmedtaha/Automation-Warm-Leads-Bot"
          />
          {/* Telegram Voice to Text */}
          <ProjectCard
            title="Telegram Voice-to-Text Bot"
            description="AI-powered Telegram bot that converts voice messages into text, analyzes audio quality, and integrates with Trello."
            link="https://github.com/Mohamedtahaahmedtaha/Telegram-voice-to-text-"
          />
          {/* Sentiment Analysis */}
          <ProjectCard
            title="Sentiment Analysis for Mental Health"
            description="NLP project analyzing tweets to detect emotional states like stress, anxiety, or depression."
            link="https://github.com/Mohamedtahaahmedtaha/Sentiment-Analysis-for-Mental-Health"
          />
          {/* Bone Fracture */}
          <ProjectCard
            title="Bone Fracture Detection"
            description="Deep learning project that classifies X-ray images to detect bone fractures using CNN architectures."
            link="https://github.com/Mohamedtahaahmedtaha/Bone-Fracture-Detection"
          />
          {/* Football OCR */}
          <ProjectCard
            title="Football Match OCR & YOLO"
            description="Computer Vision system for player, referee, and ball detection in football matches using YOLOv8 and OpenCV."
            link="https://github.com/Mohamedtahaahmedtaha/match-OCR"
          />
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section id="skills" className="py-20 px-8 bg-[#111] max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-10 text-teal-400">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
          <span>Python</span>
          <span>C++</span>
          <span>C#</span>
          <span>Dart</span>
          <span>OOP</span>
          <span>SQL</span>
          <span>Scikit-learn</span>
          <span>TensorFlow</span>
          <span>PyTorch</span>
          <span>LangChain</span>
          <span>OpenCV</span>
          <span>YOLO</span>
          <span>HuggingFace</span>
          <span>GANS</span>
          <span>NLTK</span>
          <span>Spacy</span>
          <span>MLFlow</span>
          <span>MLOPS</span>
          <span>AzureML</span>
          <span>Spark</span>
          <span>FastAPI</span>
          <span>Docker</span>
          <span>Kubernetes</span>
          <span>Streamlit</span>
          <span>Pandas</span>
          <span>NumPy</span>
          <span>Matplotlib</span>
          <span>Plotly-express</span>
          <span>PandasProfiling</span>
          <span>WordCloud</span>
          <span>PowerBI</span>
          <span>Tableau</span>
          <span>Altreyx</span>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-20 px-8 text-center">
        <h3 className="text-3xl font-bold mb-6 text-teal-400">Get In Touch</h3>
        <p className="text-gray-400 mb-8">
          I’m open to collaborations, freelance projects, and AI/ML roles.
        </p>
        <div className="flex justify-center gap-6 text-gray-300">
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

/* ===== Project Card Component ===== */
function ProjectCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <motion.div
      className="bg-[#1a1a1a] rounded-2xl p-6 shadow-md hover:-translate-y-1 transition"
      whileHover={{ scale: 1.02 }}
    >
      <h4 className="text-xl font-semibold mb-2 text-white">{title}</h4>
      <p className="text-gray-400 mb-4 text-sm">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-teal-400 hover:underline"
      >
        View on GitHub →
      </a>
    </motion.div>
  );
}

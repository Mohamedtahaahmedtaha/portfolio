import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Mohamed Taha</h1>
        <p>Machine Learning Engineer | Data Scientist | Automation Developer</p>
      </header>

      <section className="projects">
        <h2>Projects</h2>

        <div className="project">
          <h3>Automation Warm Leads Bot</h3>
          <p>
            Reddit scraping bot that filters job posts and sends qualified leads
            automatically.
          </p>
          <a
            href="https://github.com/Mohamedtahaahmedtaha/Automation-Warm-Leads-Bot"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>

        <div className="project">
          <h3>Telegram Voice to Text Bot</h3>
          <p>
            A Telegram bot that converts voice messages into text and sends the
            result to Trello.
          </p>
          <a
            href="https://github.com/Mohamedtahaahmedtaha/Telegram-voice-to-text-"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>

        <div className="project">
          <h3>Sentiment Analysis for Mental Health</h3>
          <p>
            NLP & ML project classifying tweets into emotions like Anxiety,
            Depression, Stress, Suicidal, etc., helping analyze public mental
            health trends.
          </p>
          <a
            href="https://github.com/Mohamedtahaahmedtaha/Sentiment-Analysis-for-Mental-Health"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>

        <div className="project">
          <h3>Football OCR YOLO</h3>
          <p>
            Computer Vision project detecting players, referees, and ball in
            football matches using YOLO and OpenCV.
          </p>
          <a
            href="https://github.com/Mohamedtahaahmedtaha/match-OCR"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>

        <div className="project">
          <h3>Bone Fracture Detection</h3>
          <p>
            Deep learning model analyzing X-ray images to detect bone fractures
            accurately using CNNs.
          </p>
          <a
            href="https://github.com/Mohamedtahaahmedtaha/Bone-Fracture-Detection"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>
          Contact:{" "}
          <a href="mailto:MohamedTahaAhmedTaha@gmail.com">
            MohamedTahaAhmedTaha@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}

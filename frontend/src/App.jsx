
import './App.css'

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <a href="#home" className="logo">StudyBuddy 📚</a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="tagline">YOUR LEARNING COMPANION</p>

            <h1>
              Study smarter,
              <br />
              <span>not harder.</span>
            </h1>

            <p className="hero-description">
              Welcome to StudyBuddy! Explore study resources,
              organize your learning, and make your study journey easier.
            </p>

            <a href="#features" className="primary-btn">
              Get Started →
            </a>
          </div>

          <div className="hero-illustration">
            <div className="book-icon">📚</div>
            <h2>Your Study Space</h2>
            <p>Learn • Organize • Grow</p>
          </div>
        </section>

        <section className="features" id="features">
          <div className="section-heading">
            <p className="tagline">WHAT YOU CAN DO</p>
            <h2>Everything for your studies</h2>
            <p>Explore the tools designed to support your learning.</p>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-icon">📖</div>
              <h3>Study Resources</h3>
              <p>
                Keep useful notes, learning materials, and study links
                organized in one place.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">🗓️</div>
              <h3>Study Planner</h3>
              <p>
                Plan your study sessions and organize the topics
                you want to learn.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Study Tips</h3>
              <p>
                Discover helpful ideas for better focus, revision,
                and productive study habits.
              </p>
            </article>
          </div>
        </section>

        <section className="about" id="about">
          <h2>About StudyBuddy</h2>
          <p>
            StudyBuddy is a student-focused web project designed
            to make study-related information easier to understand,
            access, and organize.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 StudyBuddy. Built for students, by students.</p>
      </footer>
    </div>
  )
}

export default App

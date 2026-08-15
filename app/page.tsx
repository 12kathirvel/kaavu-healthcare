 "use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const features = [
  ["🧠", "AI Health Guidance", "Understand symptoms and health concerns through a simple conversational experience."],
  ["🫀", "Wellness Insights", "Build healthier daily habits with practical, easy-to-understand guidance."],
  ["🌿", "Environment Aware", "Connect everyday wellness advice with weather and environmental conditions."],
];

export default function Home() {
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      }),
      { threshold: 0.14 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <nav className="nav">
        <Link href="/" className="brand">
          <span className="brand-mark">♥</span>
          <span><strong>Kaavu</strong><small>Healthcare</small></span>
        </Link>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <Link href="/dashboard">Dashboard</Link>
        </div>
        <Link href="/assistant" className="nav-button">Talk to Kaavu ↗</Link>
      </nav>

      <section className="hero">
        <div className="hero-copy reveal">
          <div className="eyebrow">✦ AI-POWERED HEALTHCARE</div>
          <h1>Understand your health.<br /><em>Live better.</em></h1>
          <p>Kaavu helps you explore symptoms, wellness and everyday health decisions through a calm, intelligent health experience.</p>
          <div className="hero-actions">
            <Link href="/assistant" className="primary-button">Start a health check <span>→</span></Link>
            <a href="#features" className="secondary-button">Explore Kaavu</a>
          </div>
          <div className="trust">✓ General health guidance &nbsp; • &nbsp; Not a replacement for a doctor</div>
        </div>

        <div className="hero-visual reveal">
          <div className="orb orb-one">✚</div>
          <div className="orb orb-two">♡</div>
          <div className="medical-card">
            <div className="pulse-ring"><div className="heart">♥</div></div>
            <div className="card-title">Your health, simplified.</div>
            <div className="mini-line"></div>
            <div className="mini-line short"></div>
            <div className="metric-row"><span>Wellness</span><strong>Good</strong></div>
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <div className="section-heading reveal">
          <div className="eyebrow">WHAT KAAVU DOES</div>
          <h2>A smarter way to care<br /><em>for yourself.</em></h2>
        </div>
        <div className="feature-grid">
          {features.map(([icon,title,text], i) => (
            <article className="feature-card reveal" style={{transitionDelay:`${i*90}ms`}} key={title}>
              <div className="feature-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="card-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="health-story">
        <div className="story-visual reveal">
          <div className="scan-circle"><span>+</span><div className="scan-line"></div></div>
          <div className="floating-pill">● HEALTH INSIGHT</div>
        </div>
        <div className="story-copy reveal">
          <div className="eyebrow">DESIGNED AROUND YOU</div>
          <h2>Healthcare that feels <em>human.</em></h2>
          <p>From your first question to your next healthy decision, Kaavu is designed to make health information clearer, calmer and easier to understand.</p>
          <Link href="/assistant" className="text-link">Meet your AI health assistant →</Link>
        </div>
      </section>

      <section className="cta reveal">
        <div>
          <div className="eyebrow">YOUR HEALTH JOURNEY STARTS HERE</div>
          <h2>Have a health question?</h2>
          <p>Talk to Kaavu and start with a simple conversation.</p>
        </div>
        <Link href="/assistant" className="primary-button light">Talk to Kaavu →</Link>
      </section>

      <footer className="footer">
        <div className="footer-main">
          <div>
            <Link href="/" className="brand"><span className="brand-mark">♥</span><span><strong>Kaavu</strong><small>Healthcare</small></span></Link>
            <p className="footer-note">AI-powered health guidance,<br />designed with care.</p>
          </div>
          <div className="creator">
            <span>CREATED BY</span>
            <strong>N. Kathirvel</strong>
          </div>
          <div className="socials">
            <a href="https://www.linkedin.com/in/kathirvel12" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/12kathirvel" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://instagram.com/ig_kathir_12" target="_blank" rel="noreferrer">Instagram</a>
            <a href="mailto:nirmalkathir979@gmail.com">Email</a>
          </div>
        </div>
        <div className="copyright">© 2026 All Rights Reserved.</div>
      </footer>
    </main>
  );
}

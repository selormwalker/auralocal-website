import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <div className="background"></div>
      
      <div className="container">
        <nav>
          <div className="logo">✨ AuraLocal</div>
          <a href="https://github.com/selormwalker/AuraLocal" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View on GitHub</a>
        </nav>

        <section className="hero">
          <div className="hero-tag">AuraLocal 2.0 Ultimate Edition</div>
          <h1>
            Your Private, Local <br />
            <span className="gradient-text">AI Companion</span>
          </h1>
          <p>
            Powered by Qwen2.5 (1.5B). Experience OS control, web reading, advanced knowledge, agents, data analysis, voice, and vision—100% offline.
          </p>
          <div className="hero-buttons">
            <a href="https://github.com/selormwalker/AuraLocal/releases/download/v2.0.0/AuraLocal_Setup.exe" className="btn btn-large">Download Setup.exe</a>
            <a href="#features" className="btn btn-large btn-secondary">Explore Features</a>
          </div>
        </section>

        <section id="features" className="features">
          <div className="features-header">
            <h2>The Ultimate Capabilities</h2>
            <p>Everything you need, running directly on your hardware.</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3>Aura Automator</h3>
              <p>Proactively creates, edits, and saves local files. Generates full scripts, reports, or logs autonomously.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🖥️</div>
              <h3>System Controller</h3>
              <p>OS-level powers. Ask Aura to open local apps, check system vitals, or open specific websites.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">👁️</div>
              <h3>In-Chat Vision</h3>
              <p>Upload photos directly in the main chat to discuss them alongside your project using the Moondream VLM.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>Web Reader & Search</h3>
              <p>Visit and analyze specific web links, or perform real-time web searches via DuckDuckGo.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🧠</div>
              <h3>Advanced Knowledge</h3>
              <p>RAG support for Word (.docx), PDF, and TXT indexing. Ask questions about your entire codebase.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📅</div>
              <h3>Productivity Suite</h3>
              <p>Manage your life with a persistent Todo List, Notes Manager, and native System Notifications.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Data Analyst</h3>
              <p>Professional exploration with Interactive Charts (Seaborn) and Data Tables (Pandas) rendered in chat.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎙️</div>
              <h3>Aura Voice</h3>
              <p>Talk naturally with local Speech-to-Text (Whisper) and real-time Text-to-Speech (gTTS).</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Aura Imagine</h3>
              <p>Generate high-quality images locally in seconds using Stable Diffusion (SD-Turbo).</p>
            </div>
          </div>
        </section>

        <footer>
          <p>© {new Date().getFullYear()} AuraLocal. Built for privacy and performance.</p>
        </footer>
      </div>
    </>
  )
}

export default App

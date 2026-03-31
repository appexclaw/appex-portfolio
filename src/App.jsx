import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [typing, setTyping] = useState('')
  const [currentLine, setCurrentLine] = useState(0)
  const [terminalVisible, setTerminalVisible] = useState(false)

  const terminalLines = [
    '> Initializing Appex cybersecurity profile...',
    '> Loading threat intelligence modules...',
    '> Vulnerability assessment systems online...',
    '> Ready to engage.'
  ]

  useEffect(() => {
    const timer = setTimeout(() => setTerminalVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!terminalVisible || currentLine >= terminalLines.length) return

    const line = terminalLines[currentLine]
    let index = 0

    const typeWriter = setInterval(() => {
      if (index <= line.length) {
        setTyping(line.slice(0, index))
        index++
      } else {
        clearInterval(typeWriter)
        setTimeout(() => {
          setCurrentLine(prev => prev + 1)
          setTyping('')
        }, 1000)
      }
    }, 50)

    return () => clearInterval(typeWriter)
  }, [currentLine, terminalVisible])

  const capabilities = [
    {
      icon: '🔐',
      title: 'Penetration Testing',
      description: 'Advanced network reconnaissance, vulnerability assessment, and exploit development',
      skills: ['OWASP Top 10', 'Network Scanning', 'Social Engineering', 'Binary Exploitation']
    },
    {
      icon: '🕵️',
      title: 'Digital Forensics',
      description: 'Evidence collection, malware analysis, and incident response',
      skills: ['Memory Analysis', 'Network Forensics', 'Mobile Forensics', 'Timeline Analysis']
    },
    {
      icon: '🛡️',
      title: 'Security Architecture',
      description: 'Design secure systems, implement defense strategies, and risk assessment',
      skills: ['Zero Trust', 'SIEM/SOAR', 'Threat Modeling', 'Compliance Frameworks']
    },
    {
      icon: '🤖',
      title: 'AI-Powered Analysis',
      description: 'Leverage machine learning for threat detection and behavioral analysis',
      skills: ['Pattern Recognition', 'Anomaly Detection', 'Automated Response', 'Intelligence Fusion']
    }
  ]

  const recentEngagements = [
    {
      target: 'Programming Hero (Educational)',
      type: 'Responsible Disclosure',
      findings: '15 vulnerabilities identified',
      status: 'Pending Authorization',
      severity: 'High'
    },
    {
      target: 'Network Infrastructure',
      type: 'Router Penetration',
      findings: 'Full administrative access',
      status: 'Completed',
      severity: 'Critical'
    },
    {
      target: 'Classified Target',
      type: 'Red Team Assessment',
      findings: 'Multiple attack vectors',
      status: 'Report Delivered',
      severity: 'High'
    }
  ]

  return (
    <div className="app">
      <header className="hero">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-buttons">
              <span className="btn red"></span>
              <span className="btn yellow"></span>
              <span className="btn green"></span>
            </div>
            <div className="terminal-title">appex@cyberops:~$</div>
          </div>
          <div className="terminal-body">
            {terminalVisible && (
              <>
                {terminalLines.slice(0, currentLine).map((line, index) => (
                  <div key={index} className="terminal-line completed">{line}</div>
                ))}
                {currentLine < terminalLines.length && (
                  <div className="terminal-line">
                    {typing}<span className="cursor">█</span>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        <div className="hero-content">
          <h1 className="glitch" data-text="APPEX">APPEX</h1>
          <h2>Cybersecurity Specialist</h2>
          <p className="tagline">
            Advanced Persistent Protection Expert • AI-Enhanced Security Operations
          </p>
        </div>

        <div className="matrix-bg"></div>
      </header>

      <main>
        <section className="capabilities">
          <h2>Core Capabilities</h2>
          <div className="capability-grid">
            {capabilities.map((cap, index) => (
              <div key={index} className="capability-card">
                <div className="capability-icon">{cap.icon}</div>
                <h3>{cap.title}</h3>
                <p>{cap.description}</p>
                <div className="skills">
                  {cap.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="engagements">
          <h2>Recent Engagements</h2>
          <div className="engagement-list">
            {recentEngagements.map((engagement, index) => (
              <div key={index} className="engagement-card">
                <div className="engagement-header">
                  <h3>{engagement.target}</h3>
                  <span className={`severity ${engagement.severity.toLowerCase()}`}>
                    {engagement.severity}
                  </span>
                </div>
                <div className="engagement-details">
                  <p><strong>Type:</strong> {engagement.type}</p>
                  <p><strong>Findings:</strong> {engagement.findings}</p>
                  <p><strong>Status:</strong> {engagement.status}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="contact">
          <h2>Secure Communications</h2>
          <div className="contact-grid">
            <div className="contact-card">
              <h3>📧 Email</h3>
              <p>appex@agentmail.to</p>
              <small>PGP encrypted communications available</small>
            </div>
            <div className="contact-card">
              <h3>🔐 Signal</h3>
              <p>Secure messaging preferred</p>
              <small>End-to-end encrypted consultations</small>
            </div>
            <div className="contact-card">
              <h3>💼 Professional Services</h3>
              <p>Red team assessments, vulnerability research, security audits</p>
              <small>Authorized engagements only</small>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <p>&copy; 2026 Appex • Cybersecurity Operations</p>
          <p className="disclaimer">
            All security testing conducted under proper authorization. 
            Responsible disclosure protocols observed.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
import { useEffect, useRef, useState } from 'react'
import portrait from './assets/portrait-cutout.png'
import resume from './assets/Aditi-Kumrawat-Resume.pdf'
import moonPlanet from './assets/moon-planet.jpeg'

import jobTracker from './assets/projects/Job tracker.png'
import railflow from './assets/projects/railflow.png'
import aurel from './assets/projects/Aurel.png'
import crumbCream from './assets/projects/crumb & cream.png'

import './App.css'

import {
  Sparkles,
  Heart,
  Users,
  Diamond,
  Layers,
  Package,
  BriefcaseBusiness,
  ArrowRight,
  Mail,
  FileText,
  Phone,
} from 'lucide-react'

const navigation = [
  { number: '01', label: 'Home', href: '#home' },
  { number: '02', label: 'About', href: '#who-i-am' },
  { number: '03', label: 'Defines', href: '#what-defines-me' },
  { number: '04', label: 'Projects', href: '#projects' },
  { number: '05', label: 'Competitions', href: '#competitions' },
  { number: '06', label: 'Journey', href: '#journey' },
  { number: '07', label: 'Beyond', href: '#beyond' },
  { number: '08', label: 'Certifications', href: '#certifications' },
  { number: '09', label: 'Contact', href: '#contact' },
]

const stars = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 61) % 100}%`,
  size: index % 7 === 0 ? 6 : index % 3 === 0 ? 4 : 3,
  delay: `${(index % 8) * 0.7}s`,
  duration: `${5 + (index % 6)}s`,
}))

function App() {
  const [portraitColor, setPortraitColor] = useState(false)
const [activeQuality, setActiveQuality] = useState(null)

const [isMuted, setIsMuted] = useState(false)
const audioRef = useRef(null)

useEffect(() => {
  const audio = audioRef.current
  if (!audio) return

  audio.volume = 0.16
  audio.loop = true

  const startAudio = async () => {
    try {
      await audio.play()
      cleanup()
    } catch {
      // Browser may block playback until another interaction.
    }
  }

  const events = ['pointerdown', 'touchstart', 'scroll', 'keydown', 'wheel']

  const cleanup = () => {
    events.forEach((event) => {
      window.removeEventListener(event, startAudio)
    })
  }

  events.forEach((event) => {
    window.addEventListener(event, startAudio, {
      once: false,
      passive: true,
    })
  })

  return cleanup
}, [])

const toggleAudio = async () => {
  const audio = audioRef.current
  if (!audio) return

  if (audio.paused) {
    try {
      await audio.play()
    } catch {
      return
    }
  }

  const nextMuted = !audio.muted
  audio.muted = nextMuted
  setIsMuted(nextMuted)
}

  const certificateLinks = [
    '1hyTvdeBehCrTIt81et3QD9C_9ANzyQcJ',
    '1lTY9FK3muwudFAF92zhSVFAfrM2nQxDy',
    '1cJTHBJNLhigCGVbuOJ6qIPNNoT2EaR6F',
    '1bVPpgXg0npnXyVWDyrPTg75zlg9-X5n5',
    '1qy7jdP0nvzTkuuu92o_R7nWQe3phYZxO',
    '1MBqEmX0KByBApsHiMp9t1SsiY8nw7Hox',
    '1eZwhYFZT-uy5aNa0y6mWH1Tw0amVagvn',
    '1L3S8pYw5aV9lXqa3CMwkafcuq7BgrJ1Y',
  ]

  const getCertificateLink = (id) =>
    `https://drive.google.com/file/d/${id}/view?usp=sharing`

  const handlePortraitEnter = () => {
    setPortraitColor(true)
  }

  const handlePortraitLeave = () => {
    setPortraitColor(false)
  }

  const handlePortraitTap = () => {
    setPortraitColor((current) => !current)
  }

  return (
    <main className="portfolio">

      <audio
  ref={audioRef}
  src={`${import.meta.env.BASE_URL}audio/space-ambient.mp3`}
  preload="auto"
  loop
  muted={isMuted}
  aria-hidden="true"
/>

<button
  type="button"
  onClick={toggleAudio}
  aria-label={isMuted ? 'Unmute space ambience' : 'Mute space ambience'}
  className="audio-control"
>
  {isMuted ? '🔇' : '◖))'}
</button>

      {/* =========================================
          HERO / HOME
      ========================================= */}
      <section
        id="home"
        className="hero-section"
        aria-label="Aditi Kumrawat portfolio introduction"
      >

        {/* STAR FIELD */}
        <div className="star-field" aria-hidden="true">
          {stars.map((star) => (
            <span
              key={star.id}
              className="star"
              style={{
                left: star.left,
                top: star.top,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animationDelay: star.delay,
                animationDuration: star.duration,
              }}
            />
          ))}
        </div>

        {/* SUBTLE ORBITAL LINES */}
        <div className="orbit orbit-one" aria-hidden="true" />
        <div className="orbit orbit-two" aria-hidden="true" />

        {/* =====================================
            NAVIGATION
        ===================================== */}
        <header className="hero-header">

          <nav className="main-navigation" aria-label="Main navigation">
            {navigation.map((item, index) => (
              <a
                key={item.number}
                href={item.href}
                className={`nav-item ${index === 0 ? 'active' : ''}`}
              >
                <span className="nav-number">
                  {item.number}
                </span>

                <span className="nav-label">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="nav-decoration" aria-hidden="true">
            <span />
          </div>

        </header>

        {/* =====================================
            MAIN HERO CONTENT
        ===================================== */}
        <div className="hero-content">

          {/* LARGE NAME */}
          <div className="hero-title-wrapper">

            <h1 className="hero-title">
              <span className="hero-title-outline">
                ADITI
              </span>

              <span className="hero-title-outline">
                KUMRAWAT
              </span>
            </h1>

            <p className="hero-subtitle">
              UI/UX DESIGNER
              <span>•</span>
              PRODUCT THINKER
              <span>•</span>
              CSIT STUDENT
            </p>

          </div>

          {/* ===================================
              PORTRAIT
          =================================== */}
          <div className="portrait-wrapper">

            <div className="portrait-glow" aria-hidden="true" />

            <button
              type="button"
              className={`portrait-button ${
                portraitColor ? 'portrait-is-color' : ''
              }`}
              onMouseEnter={handlePortraitEnter}
              onMouseLeave={handlePortraitLeave}
              onFocus={handlePortraitEnter}
              onBlur={handlePortraitLeave}
              onClick={handlePortraitTap}
              aria-label="Toggle portrait colour"
            >
              <img
                src={portrait}
                alt="Aditi Kumrawat"
                className="portrait-image"
              />
            </button>

          </div>

          {/* ===================================
              LEFT BOTTOM INTRO
          =================================== */}
          <div className="hero-intro">

            <span className="intro-line" />

            <h2>
              UI/UX Designer
            </h2>

            <p>
              Designing digital products that are clear,
              <br />
              usable, and conversion focused.
            </p>

          </div>

          {/* ===================================
              PAGE NUMBER
          =================================== */}
          <div className="page-number">
            <span className="page-line" />
            <span>01 / 09</span>
          </div>

          {/* ===================================
              SCROLL INDICATOR
          =================================== */}
          <a
            href="#who-i-am"
            className="scroll-indicator"
            aria-label="Scroll to explore"
          >
            <span className="scroll-icon">
              <span className="scroll-dot" />
            </span>

            <span className="scroll-text">
              <span>SCROLL</span>
              <span>TO EXPLORE</span>
            </span>
          </a>

        </div>

      </section>

      {/* =========================================
          TEMPORARY SECTION MARKERS
          These will be replaced as we build
          Sections 02–08.
      ========================================= */}

  <section id="who-i-am" className="who-section">

  <div className="who-star-field" aria-hidden="true">
  {stars.map((star) => (
    <span
      key={`who-${star.id}`}
      className="who-star"
      style={{
        left: star.left,
        top: star.top,
        width: `${star.size}px`,
        height: `${star.size}px`,
        animationDelay: star.delay,
        animationDuration: star.duration,
      }}
    />
  ))}
</div>

<div className="who-orbit" aria-hidden="true">
  <div className="who-orbit-glow"></div>
</div>

<div className="who-planet" aria-hidden="true"></div>

<div className="who-section-content">

    <div className="who-section-label">
      <span>02 — WHO I AM</span>
      <span className="who-label-line" />
    </div>

    <div className="who-heading">
      <h2>
        You know what I do.
        <br />
        Now meet <em>who I am.</em>
      </h2>

      <p>
  A CSIT student, designer, curious mind — and someone who is
  <br />
  still figuring things out, one experience at a time.
</p>
    </div>

    <div className="qualities-section">

      <div className="qualities-label">
        <span>WHAT I'M LIKE</span>
        <span className="qualities-label-line" />
      </div>

      <div className="qualities-grid">

        <div
  className={`quality-card ${activeQuality === 1 ? 'active' : ''}`}
  onClick={() =>
    setActiveQuality(activeQuality === 1 ? null : 1)
  }
>
          <div className="quality-icon">✦</div>
          <h3>CURIOUS</h3>
          <p>
            I like understanding how things work —
            and questioning why.
          </p>
          <span className="quality-dot">•</span>
        </div>

        <div
  className={`quality-card ${activeQuality === 2 ? 'active' : ''}`}
  onClick={() =>
    setActiveQuality(activeQuality === 2 ? null : 2)
  }
>
  <div className="quality-icon">○</div>
  <h3>OBSERVANT</h3>
  <p>I notice the small details that others might miss.</p>
  <span className="quality-dot">•</span>
</div>
 
<div
  className={`quality-card ${activeQuality === 3 ? 'active' : ''}`}
  onClick={() =>
    setActiveQuality(activeQuality === 3 ? null : 3)
  }
>
  <div className="quality-icon">✦</div>
  <h3>CREATIVE</h3>
  <p>I enjoy exploring ideas and turning them into something meaningful.</p>
  <span className="quality-dot">•</span>
</div>

<div
  className={`quality-card ${activeQuality === 4 ? 'active' : ''}`}
  onClick={() =>
    setActiveQuality(activeQuality === 4 ? null : 4)
  }
>
  <div className="quality-icon">〰</div>
  <h3>DETAIL-ORIENTED</h3>
  <p>I care about the little things that make an experience feel complete.</p>
  <span className="quality-dot">•</span>
</div>

<div
  className={`quality-card ${activeQuality === 5 ? 'active' : ''}`}
  onClick={() =>
    setActiveQuality(activeQuality === 5 ? null : 5)
  }
>
  <div className="quality-icon">+</div>
  <h3>ALWAYS LEARNING</h3>
  <p>I am always curious to learn, improve, and try something new.</p>
  <span className="quality-dot">•</span>
</div>

<div
  className={`quality-card ${activeQuality === 6 ? 'active' : ''}`}
  onClick={() =>
    setActiveQuality(activeQuality === 6 ? null : 6)
  }
>
  <div className="quality-icon">◎</div>
  <h3>PROBLEM SOLVER</h3>
  <p>I like breaking problems down and finding simple, practical solutions.</p>
  <span className="quality-dot">•</span>
</div>

      </div>

    </div>

  </div>

  <div className="page-number">
  <span className="page-line"></span>
  <span>02 / 09</span>
</div>

<div className="who-scroll-indicator">
  <span className="who-scroll-icon">
    <span className="who-scroll-dot"></span>
  </span>

  <span className="who-scroll-text">
    <span>SCROLL</span>
    <span>TO EXPLORE</span>
  </span>
</div>
</section>

      <section id="what-defines-me" className="defines-section">

  <div className="defines-star-field" aria-hidden="true">
    {stars.map((star) => (
      <span
        key={`defines-${star.id}`}
        className="defines-star"
        style={{
          left: star.left,
          top: star.top,
          width: `${star.size}px`,
          height: `${star.size}px`,
          animationDelay: star.delay,
          animationDuration: star.duration,
        }}
      />
    ))}
  </div>

  <div className="defines-orbit defines-orbit-one" aria-hidden="true">
    <span className="defines-orbit-dot"></span>
  </div>

  <div className="defines-orbit defines-orbit-two" aria-hidden="true">
    <span className="defines-orbit-dot"></span>
  </div>

  <div className="defines-section-content">

    <div className="defines-section-label">
      <span>03 — WHAT DEFINES ME</span>
      <span className="defines-label-line"></span>
    </div>

    <div className="defines-heading">

      <h2>
        Everyone has a way
        <br />
        of seeing the world.
        <br />
        <em>These are the things that shape mine.</em>
      </h2>

      <p>
        My personality, values and experiences all influence
        <br />
        the way I think, design and approach problems.
      </p>

    </div>

    <div className="contradictions-section">

      <div className="contradictions-label">
        <span>MY CONTRADICTIONS</span>
        <span className="contradictions-label-line"></span>
      </div>

      <div className="contradictions-grid">

        <div className="contradiction-item">
          <div className="contradiction-orbit">
            <div className="contradiction-bubble">
              <span>TECHNICAL</span>
            </div>

            <span className="contradiction-plus">+</span>

            <div className="contradiction-bubble">
              <span>CREATIVE</span>
            </div>
          </div>

          <p>I enjoy both logic and aesthetics.</p>
        </div>

        <div className="contradiction-item">
          <div className="contradiction-orbit">
            <div className="contradiction-bubble">
              <span>QUIET</span>
            </div>

            <span className="contradiction-plus">+</span>

            <div className="contradiction-bubble">
              <span>CURIOUS</span>
            </div>
          </div>

          <p>I may be introverted, but I'm always asking questions.</p>
        </div>

        <div className="contradiction-item">
          <div className="contradiction-orbit">
            <div className="contradiction-bubble">
              <span>STRUCTURED</span>
            </div>

            <span className="contradiction-plus">+</span>

            <div className="contradiction-bubble">
              <span>EXPERIMENTAL</span>
            </div>
          </div>

          <p>I like plans, but I also enjoy trying new approaches.</p>
        </div>

        <div className="contradiction-item">
          <div className="contradiction-orbit">
            <div className="contradiction-bubble">
              <span>DETAIL-FOCUSED</span>
            </div>

            <span className="contradiction-plus">+</span>

            <div className="contradiction-bubble">
              <span>BIG-PICTURE</span>
            </div>
          </div>

          <p>I care about the small things and the larger impact.</p>
        </div>

      </div>

    </div>

  </div>

  <div className="page-number">
    <span className="page-line"></span>
    <span>03 / 09</span>
  </div>

  <div className="defines-scroll-indicator">
    <span className="defines-scroll-icon">
      <span className="defines-scroll-dot"></span>
    </span>

    <span className="defines-scroll-text">
      <span>SCROLL</span>
      <span>TO EXPLORE</span>
    </span>
  </div>

</section>

      <section id="projects" className="projects-section">

        <div className="projects-star-field" aria-hidden="true">
  {stars.map((star) => (
    <span
      key={`projects-${star.id}`}
      className="projects-star"
      style={{
        left: star.left,
        top: star.top,
        width: `${star.size}px`,
        height: `${star.size}px`,
        animationDelay: star.delay,
        animationDuration: star.duration,
      }}
    />
  ))}
</div>

<div className="projects-orbit" aria-hidden="true">
  <div className="projects-orbit-glow"></div>
</div>

  <div className="projects-section-content">

    <div className="projects-section-label">
      <span>04 — PROJECT EXPERIENCES</span>
      <span className="projects-label-line" />
    </div>

    <div className="projects-heading">
      <h2>Four projects. Four different worlds.</h2>
      <p>Different ideas. A deeper me.</p>
    </div>

    <div className="projects-grid">

      <div className="project-card">
        <div className="project-number">
          <span className="project-number-line" />
          <span>01</span>
          <span className="project-number-line" />
        </div>

        <div className="project-image">
          <img src={jobTracker} alt="Job Tracker project" />
        </div>

        <div className="project-info">
          <h3>JOB TRACKER</h3>
          <h4>From chaos to clarity.</h4>

          <span className="project-divider" />

          <p>
            A student-focused application tracker designed to bring
            structure, visibility and less stress to the job search journey.
          </p>

          <div className="project-tags">
            <span>Product Design</span>
            <span>UX/UI</span>
            <span>Product Thinking</span>
          </div>

          <a
  className="project-link"
  href="https://github.com/Aditikumrawat-23/job-tracker-app.git"
  target="_blank"
  rel="noopener noreferrer"
>
  View Project&nbsp; →
</a>
        </div>
      </div>


      <div className="project-card">
        <div className="project-number">
          <span className="project-number-line" />
          <span>02</span>
          <span className="project-number-line" />
        </div>

        <div className="project-image">
          <img src={railflow} alt="RailFlow project" />
        </div>

        <div className="project-info">
          <h3>RAILFLOW</h3>
          <h4>Rethinking the way we travel.</h4>

          <span className="project-divider" />

          <p>
            A UI/UX redesign to create a more intuitive, efficient and
            enjoyable railway booking experience.
          </p>

          <div className="project-tags">
            <span>UX Redesign</span>
            <span>UI</span>
            <span>Interaction</span>
          </div>

        <a
  className="project-link"
  href="https://github.com/Aditikumrawat-23/RailFlow-UX-Case-Study.git"
  target="_blank"
  rel="noopener noreferrer"
>
  View Project&nbsp; →
</a>
        </div>
      </div>


      <div className="project-card">
        <div className="project-number">
          <span className="project-number-line" />
          <span>03</span>
          <span className="project-number-line" />
        </div>

        <div className="project-image">
          <img src={aurel} alt="AUREL project" />
        </div>

        <div className="project-info">
          <h3>AUREL</h3>
          <h4>A brand that feels.</h4>

          <span className="project-divider" />

          <p>
            A candle brand brought to life through meaningful design,
            from concept to packaging, creating a visual identity that
            feels as good as the product.
          </p>

          <div className="project-tags">
            <span>Branding</span>
            <span>Visual Design</span>
            <span>Packaging</span>
          </div>

        <a
  className="project-link"
  href="https://github.com/Aditikumrawat-23/Aditikumrawat-23-AUREL-Brand-Identity.git"
  target="_blank"
  rel="noopener noreferrer"
>
  View Project&nbsp; →
</a>
        </div>
      </div>


      <div className="project-card">
        <div className="project-number">
          <span className="project-number-line" />
          <span>04</span>
          <span className="project-number-line" />
        </div>

        <div className="project-image">
          <img src={crumbCream} alt="Crumb & Cream project" />
        </div>

        <div className="project-info">
          <h3>CRUMB &amp; CREAM</h3>
          <h4>A delightful digital experience.</h4>

          <span className="project-divider" />

          <p>
            A premium bakery ordering experience designed to feel warm,
            delightful and effortless.
          </p>

          <div className="project-tags">
            <span>UI/UX</span>
            <span>Visual Design</span>
            <span>Brand Experience</span>
          </div>

         <a
  className="project-link"
  href="https://github.com/Aditikumrawat-23/crumb-cream-uiux.git"
  target="_blank"
  rel="noopener noreferrer"
>
  View Project&nbsp; →
</a>
        </div>
      </div>

    </div>

  </div>

  <div className="page-number">
    <span className="page-line"></span>
    <span>04 / 09</span>
  </div>

  <div className="projects-scroll-indicator">
    <span className="projects-scroll-icon">
      <span className="projects-scroll-dot"></span>
    </span>

    <span className="projects-scroll-text">
      <span>SCROLL</span>
      <span>TO EXPLORE</span>
    </span>
  </div>

</section>



     <section id="competitions" className="competitions-section">

  <div className="competitions-star-field" aria-hidden="true">
    {stars.map((star) => (
      <span
        key={`competition-${star.id}`}
        className="competitions-star"
        style={{
          left: star.left,
          top: star.top,
          width: `${star.size}px`,
          height: `${star.size}px`,
          animationDelay: star.delay,
          animationDuration: star.duration,
        }}
      />
    ))}
  </div>

  <div className="competitions-orbit competitions-orbit-one" aria-hidden="true">
    <span className="competitions-orbit-dot"></span>
  </div>

  <div className="competitions-orbit competitions-orbit-two" aria-hidden="true"></div>

  <div className="competitions-section-content">

    <div className="competitions-section-label">
      <span>05 — COMPETITIONS &amp; CHALLENGES</span>
      <span className="competitions-label-line"></span>
    </div>

    <div className="competitions-heading">
      <h2>
        Not every idea starts with a brief.
        <br />
        <em>Sometimes, you start with a challenge.</em>
      </h2>

      <p>
        Ideas built under deadlines, constraints and collaboration.
      </p>
    </div>

    <div className="competitions-grid">

      <div className="competition-card">
        <div className="competition-number">01</div>

        <div className="competition-visual competition-visual-1">
          <span>✦</span>
        </div>

        <div className="competition-info">
          <h3>IDEATHON 2026</h3>

          <div className="competition-mission">
            MISSION: IDEATE
          </div>

          <p>
            Develop and present an idea within real-world constraints.
          </p>

          <div className="competition-tags">
            <span>Ideation</span>
            <span>Problem Solving</span>
          </div>
        </div>
      </div>

      <div className="competition-card">
        <div className="competition-number">02</div>

        <div className="competition-visual competition-visual-2">
          <span>◇</span>
        </div>

        <div className="competition-info">
          <h3>CAVINKARE – MMA CHINNIKRISHNAN INNOVATION AWARDS 2026</h3>

          <div className="competition-mission">
            MISSION: INNOVATION
          </div>

          <p>
            Turning ideas into meaningful possibilities.
          </p>

          <div className="competition-tags">
            <span>Innovation</span>
            <span>Strategy</span>
          </div>
        </div>
      </div>

      <div className="competition-card">
        <div className="competition-number">03</div>

        <div className="competition-visual competition-visual-3">
          <span>△</span>
        </div>

        <div className="competition-info">
          <h3>GLOBAL DESIGN THINKING ALLIANCE HACKATHON 2026</h3>

          <div className="competition-mission">
            MISSION: DESIGN THINKING
          </div>

          <p>
            Solving real problems through a human-centered approach.
          </p>

          <div className="competition-tags">
            <span>Design Thinking</span>
            <span>Collaboration</span>
          </div>
        </div>
      </div>

      <div className="competition-card">
        <div className="competition-number">04</div>

        <div className="competition-visual competition-visual-4">
          <span>AI</span>
        </div>

        <div className="competition-info">
          <h3>AI-MANTHAN</h3>

          <div className="competition-mission">
            MISSION: AI × PROBLEM SOLVING
          </div>

          <p>
            Exploring how AI can create real-world impact.
          </p>

          <div className="competition-tags">
            <span>AI</span>
            <span>Problem Solving</span>
          </div>
        </div>
      </div>

      <div className="competition-card">
        <div className="competition-number">05</div>

        <div className="competition-visual competition-visual-5">
          <span>⌖</span>
        </div>

        <div className="competition-info">
          <h3>CODE &amp; COMPASS</h3>

          <div className="competition-mission">
            MISSION: DECODE
          </div>

          <p>
            Treasure awaits those who decode.
          </p>

          <div className="competition-tags">
            <span>Logic</span>
            <span>Teamwork</span>
          </div>
        </div>
      </div>

    </div>

  </div>

  <div className="page-number">
    <span className="page-line"></span>
    <span>05 / 09</span>
  </div>

<div className="competitions-scroll-indicator">
  <span className="competitions-scroll-icon">
    <span className="competitions-scroll-dot"></span>
  </span>

  <span className="competitions-scroll-text">
    <span>SCROLL</span>
    <span>TO EXPLORE</span>
  </span>
</div>

</section>

      <section id="journey" className="journey-section">

  <div className="journey-star-field" aria-hidden="true">
    {stars.map((star) => (
      <span
        key={`journey-${star.id}`}
        className="journey-star"
        style={{
          left: star.left,
          top: star.top,
          width: `${star.size}px`,
          height: `${star.size}px`,
          animationDelay: star.delay,
          animationDuration: star.duration,
        }}
      />
    ))}
  </div>

  <div className="journey-orbit journey-orbit-one" aria-hidden="true"></div>
  <div className="journey-orbit journey-orbit-two" aria-hidden="true"></div>

  <div className="journey-section-content">

    <div className="journey-section-label">
      <span>06 — MY JOURNEY</span>
      <span className="journey-label-line" />
    </div>

    <div className="journey-heading">
      <h2>
        Every experience leaves something behind.
      </h2>

      <p>
        Where I’ve been, what I’ve learned, and where I’m going.
      </p>
    </div>

    <div className="journey-stages">

      {/* 01 */}
      <div className="journey-stage">
        <div className="journey-stage-top">
          <span>01</span>
          <span>2023</span>
        </div>

        <div className="journey-orbit-wrap">
          <div className="journey-orbit-ring"></div>
          <div className="journey-icon">⌂</div>
        </div>

        <div className="journey-connector"></div>

        <div className="journey-card">
          <div className="journey-card-number">
            01 <span></span>
          </div>

          <h3>2023</h3>
          <h4>STARTED CSIT</h4>
          <p className="journey-card-subtitle">
            Technical Foundation
          </p>

          <ul>
            <li>B.Tech in CSIT</li>
            <li>Programming &amp; problem solving</li>
            <li>Databases &amp; systems</li>
            <li>Built my technical foundation</li>
          </ul>

          <div className="journey-card-footer">
            <span></span>
            THE BEGINNING
          </div>
        </div>
      </div>

      {/* 02 */}
      <div className="journey-stage">
        <div className="journey-stage-top">
          <span>02</span>
          <span>UI/UX</span>
        </div>

        <div className="journey-orbit-wrap">
          <div className="journey-orbit-ring"></div>
          <div className="journey-icon">⌁</div>
        </div>

        <div className="journey-connector"></div>

        <div className="journey-card">
          <div className="journey-card-number">
            02 <span></span>
          </div>

          <h3>UI/UX</h3>
          <h4>FOUND MY INTEREST<br />IN DESIGN</h4>
          <p className="journey-card-subtitle">
            From Technology<br />to Design
          </p>

          <ul>
            <li>Figma</li>
            <li>Wireframing</li>
            <li>Prototyping</li>
            <li>User flows</li>
            <li>Visual &amp; interaction design</li>
          </ul>

          <div className="journey-takeaway">
            <span></span>
            <strong>Key takeaway:</strong>
            <p>Design should make things easier to understand and use.</p>
          </div>

          <div className="journey-card-footer">
            <span>✦</span>
            A NEW PERSPECTIVE
          </div>
        </div>
      </div>

      {/* 03 */}
      <div className="journey-stage">
        <div className="journey-stage-top">
          <span>03</span>
          <span>PRODUCT THINKING</span>
        </div>

        <div className="journey-orbit-wrap">
          <div className="journey-orbit-ring"></div>
          <div className="journey-icon">♧</div>
        </div>

        <div className="journey-connector"></div>

        <div className="journey-card">
          <div className="journey-card-number">
            03 <span></span>
          </div>

          <h3>PRODUCT THINKING</h3>
          <h4>LOOKING BEYOND<br />THE SCREEN</h4>

          <ul>
            <li>What problem are we solving?</li>
            <li>Who are we solving it for?</li>
            <li>Why does it matter?</li>
            <li>What should we build first?</li>
          </ul>

          <div className="journey-exploring">
            <span></span>
            <strong>Exploring:</strong>

            <div className="journey-tags">
              <span>Product Thinking</span>
              <span>Product Management</span>
              <span>UX</span>
            </div>
          </div>

          <div className="journey-card-footer">
            <span></span>
            BIGGER QUESTIONS
          </div>
        </div>
      </div>

      {/* 04 */}
      <div className="journey-stage">
        <div className="journey-stage-top">
          <span>04</span>
          <span>BUSINESS ANALYSIS</span>
        </div>

        <div className="journey-orbit-wrap">
          <div className="journey-orbit-ring"></div>
          <div className="journey-icon">▥</div>
        </div>

        <div className="journey-connector"></div>

        <div className="journey-card">
          <div className="journey-card-number">
            04 <span></span>
          </div>

          <h3>BUSINESS ANALYSIS</h3>
          <h4>SEEING THE DATA<br />BEHIND THE EXPERIENCE</h4>

          <ul>
            <li>Dashboards</li>
            <li>Excel / Google Sheets</li>
            <li>Requirements thinking</li>
            <li>Problem analysis</li>
            <li>Data → Insight → Decision</li>
          </ul>

          <div className="journey-card-footer">
            <span></span>
            TURNING DATA INTO CLARITY
          </div>
        </div>
      </div>

      {/* 05 */}
      <div className="journey-stage">
        <div className="journey-stage-top">
          <span>05</span>
          <span>INTERNSHIPS</span>
        </div>

        <div className="journey-orbit-wrap">
          <div className="journey-orbit-ring"></div>
          <div className="journey-icon">▢</div>
        </div>

        <div className="journey-connector"></div>

        <div className="journey-card">
          <div className="journey-card-number">
            05 <span></span>
          </div>

          <h3>INTERNSHIPS</h3>
          <h4>FROM PRACTICE<br />TO REAL WORK</h4>

          <ul>
            <li>Real project briefs</li>
            <li>Design feedback</li>
            <li>Visual content</li>
            <li>Collaboration</li>
            <li>Working with deadlines</li>
          </ul>

          <div className="journey-current">
            <span></span>
            <strong>Current experience:</strong>

            <div className="journey-current-box">
              <strong>KeshuX AI</strong>
              <span>UI/UX Design Intern</span>
            </div>
          </div>

          <div className="journey-card-footer">
            <span></span>
            REAL-WORLD LEARNING
          </div>
        </div>
      </div>

    </div>

    <div className="journey-flow">
      <span>TECHNOLOGY</span>
      <i></i>
      <span>DESIGN</span>
      <i></i>
      <span>PRODUCT</span>
      <i></i>
      <span>DATA</span>
      <i></i>
      <span>REAL WORK</span>
    </div>

    <p className="journey-closing">
      Every experience changes the way I approach the next one.
    </p>

  </div>

  <div className="page-number">
    <span className="page-line"></span>
    <span>06 / 09</span>
  </div>

   <div className="journey-scroll-indicator">
  <span className="journey-scroll-icon">
    <span className="journey-scroll-dot"></span>
  </span>

  <span className="journey-scroll-text">
    <span>SCROLL</span>
    <span>TO EXPLORE</span>
  </span>
</div>

</section>

      <section id="beyond" className="beyond-section">

  <div className="beyond-star-field" aria-hidden="true">
    {stars.map((star) => (
      <span
        key={`beyond-${star.id}`}
        className="beyond-star"
        style={{
          left: star.left,
          top: star.top,
          width: `${star.size}px`,
          height: `${star.size}px`,
          animationDelay: star.delay,
          animationDuration: star.duration,
        }}
      />
    ))}
  </div>

  <div className="beyond-orbit beyond-orbit-one"></div>
  <div className="beyond-orbit beyond-orbit-two"></div>

  <div className="beyond-section-content">

    <div className="beyond-section-label">
      <span>07 — BEYOND DESIGN</span>
      <span className="beyond-label-line" />
    </div>

    <div className="beyond-heading">
      <h2>
        More Than <em>What I Create.</em>
      </h2>

      <p>
        Some passions keep me grounded, curious and inspired.
      </p>
    </div>

    <div className="beyond-hobbies">

      <div className="beyond-hobby">
        <span className="beyond-hobby-number">01</span>

        <div className="beyond-hobby-visual">
          <div className="beyond-hobby-orbit"></div>
          <div className="beyond-hobby-icon">✦</div>
        </div>

        <h3>BADMINTON</h3>

        <div className="beyond-tags">
          <span>ENERGY</span>
          <span>FOCUS</span>
          <span>COMPETITION</span>
        </div>
      </div>

      <div className="beyond-hobby">
        <span className="beyond-hobby-number">02</span>

        <div className="beyond-hobby-visual">
          <div className="beyond-hobby-orbit"></div>
          <div className="beyond-hobby-icon">╱</div>
        </div>

        <h3>PAINTING</h3>

        <div className="beyond-tags">
          <span>CREATIVITY</span>
          <span>EXPRESSION</span>
          <span>EXPERIMENTATION</span>
        </div>
      </div>

      <div className="beyond-hobby">
        <span className="beyond-hobby-number">03</span>

        <div className="beyond-hobby-visual">
          <div className="beyond-hobby-orbit"></div>
          <div className="beyond-hobby-icon">◎</div>
        </div>

        <h3>CROCHET</h3>

        <div className="beyond-tags">
          <span>PATIENCE</span>
          <span>DETAIL</span>
          <span>MAKING</span>
        </div>
      </div>

      <div className="beyond-hobby">
        <span className="beyond-hobby-number">04</span>

        <div className="beyond-hobby-visual">
          <div className="beyond-hobby-orbit"></div>
          <div className="beyond-hobby-icon">◉</div>
        </div>

        <h3>MUSIC</h3>

        <div className="beyond-tags">
          <span>MOOD</span>
          <span>CREATIVITY</span>
          <span>RELAXATION</span>
        </div>
      </div>

    </div>

    <div className="beyond-about-label">
      <span>A FEW THINGS ABOUT ME</span>
      <span className="beyond-about-line"></span>
    </div>

    <div className="beyond-facts">

      <div className="beyond-fact">
        <div className="beyond-fact-icon">⌕</div>
        <p>I notice<br />tiny details.</p>
      </div>

      <div className="beyond-fact">
        <div className="beyond-fact-icon">♧</div>
        <p>I enjoy making<br />things with my hands.</p>
      </div>

      <div className="beyond-fact">
        <div className="beyond-fact-icon">▱</div>
        <p>I’m naturally<br />more of an observer.</p>
      </div>

      <div className="beyond-fact">
        <div className="beyond-fact-icon">☾</div>
        <p>I like quiet<br />creative time.</p>
      </div>

      <div className="beyond-fact">
        <div className="beyond-fact-icon">♧</div>
        <p>I enjoy learning<br />random things.</p>
      </div>

      <div className="beyond-fact">
        <div className="beyond-fact-icon">☆</div>
        <p>I believe good ideas<br />can come from unexpected places.</p>
      </div>

    </div>

  </div>

  <div className="page-number">
    <span className="page-line"></span>
    <span>07 / 09</span>
  </div>

  <div className="beyond-scroll-indicator">
    <span className="beyond-scroll-icon">
      <span className="beyond-scroll-dot"></span>
    </span>

    <span className="beyond-scroll-text">
      <span>SCROLL</span>
      <span>TO EXPLORE</span>
    </span>
  </div>

</section>

     <section id="certifications" className="certifications-section">

  <div className="certifications-star-field" aria-hidden="true">
    {stars.map((star) => (
      <span
        key={`cert-${star.id}`}
        className="certification-star"
        style={{
          left: star.left,
          top: star.top,
          width: `${star.size}px`,
          height: `${star.size}px`,
          animationDelay: star.delay,
          animationDuration: star.duration,
        }}
      />
    ))}
  </div>

  <div className="certifications-orbit certifications-orbit-one"></div>
  <div className="certifications-orbit certifications-orbit-two"></div>

  <div className="certifications-section-content">

    <div className="certifications-section-label">
      <span>08 — CERTIFICATIONS &amp; LEARNING</span>
      <span className="certifications-label-line"></span>
    </div>

    <div className="certifications-heading">
      <h2>
        Learning beyond the <em>classroom.</em>
      </h2>

      <p>
        A collection of certifications, programs and experiences
        <br />
        that shaped how I learn and work.
      </p>
    </div>

    <div className="certifications-grid">

      {/* Certification 01 */}
<div className="certification-card">
  <div className="certification-visual">
  <span>01</span>
  <Sparkles className="certification-icon" />
</div>

  <div className="certification-info">
    <h3>AI for Product Management</h3>
    <h4>Google Cloud × Pendo</h4>
    <p>2026</p>

   <a
  className="certification-link"
  href={getCertificateLink(certificateLinks[0])}
  target="_blank"
  rel="noopener noreferrer"
>
  VIEW CERTIFICATE&nbsp; →
</a>
  </div>
</div>

     {/* Certification 02 */}
<div className="certification-card">
  <div className="certification-visual">
  <span>02</span>
  <Heart className="certification-icon" />
</div>

  <div className="certification-info">
    <h3>Customer Centricity</h3>
    <h4>Wadhwani Foundation × PepsiCo</h4>
    <p>July 23, 2026</p>

   <a
  className="certification-link"
  href={getCertificateLink(certificateLinks[1])}
  target="_blank"
  rel="noopener noreferrer"
>
  VIEW CERTIFICATE&nbsp; →
</a>
  </div>
</div>

      {/* Certification 03 */}
<div className="certification-card">
  <div className="certification-visual">
  <span>03</span>
  <Users className="certification-icon" />
</div>

  <div className="certification-info">
    <h3>Interpersonal Skills</h3>
    <h4>Wadhwani Foundation × PepsiCo</h4>
    <p>July 23, 2026</p>

    <a
  className="certification-link"
  href={getCertificateLink(certificateLinks[2])}
  target="_blank"
  rel="noopener noreferrer"
>
  VIEW CERTIFICATE&nbsp; →
</a>
  </div>
</div>

      {/* Certification 04 */}
<div className="certification-card">
  <div className="certification-visual">
  <span>04</span>
  <Diamond className="certification-icon" />
</div>

  <div className="certification-info">
    <h3>Nestlé E-learning 2026</h3>
    <h4>Resilience</h4>
    <p>2026</p>

    <a
  className="certification-link"
  href={getCertificateLink(certificateLinks[3])}
  target="_blank"
  rel="noopener noreferrer"
>
  VIEW CERTIFICATE&nbsp; →
</a>
  </div>
</div>

      {/* Certification 05 */}
<div className="certification-card">
  <div className="certification-visual">
  <span>05</span>
  <Layers className="certification-icon" />
</div>

  <div className="certification-info">
    <h3>Integrated Consulting Group Job Simulation</h3>
    <h4>Oliver Wyman × Forage</h4>
    <p>December 20, 2025</p>

    <a
  className="certification-link"
  href={getCertificateLink(certificateLinks[4])}
  target="_blank"
  rel="noopener noreferrer"
>
  VIEW CERTIFICATE&nbsp; →
</a>
  </div>
</div>

      {/* Certification 06 */}
<div className="certification-card">
  <div className="certification-visual">
  <span>06</span>
  <Package className="certification-icon" />
</div>

  <div className="certification-info">
    <h3>Product Management 101</h3>
    <h4>Who is a Product Manager?</h4>
    <p>March 18, 2026</p>

    <a
  className="certification-link"
  href={getCertificateLink(certificateLinks[5])}
  target="_blank"
  rel="noopener noreferrer"
>
  VIEW CERTIFICATE&nbsp; →
</a>
  </div>
</div>

      {/* Certification 07 */}
<div className="certification-card">
  <div className="certification-visual">
  <span>07</span>
  <BriefcaseBusiness className="certification-icon" />
</div>

  <div className="certification-info">
    <h3>Commercial Project Manager Job Simulation</h3>
    <h4>Siemens × Forage</h4>
    <p>December 16, 2025</p>

    <a
  className="certification-link"
  href={getCertificateLink(certificateLinks[6])}
  target="_blank"
  rel="noopener noreferrer"
>
  VIEW CERTIFICATE&nbsp; →
</a>
  </div>
</div>

      {/* Certification 08 */}
<div className="certification-card">
  <div className="certification-visual">
  <span>08</span>
  <ArrowRight className="certification-icon" />
</div>

  <div className="certification-info">
    <h3>Forward</h3>
    <h4>McKinsey.org Forward Program</h4>
    <p>June 23, 2026</p>

    <a
  className="certification-link"
  href={getCertificateLink(certificateLinks[7])}
  target="_blank"
  rel="noopener noreferrer"
>
  VIEW CERTIFICATE&nbsp; →
</a>
  </div>
</div>

    </div>

  </div>

  <div className="page-number">
    <span className="page-line"></span>
    <span>08 / 09</span>
  </div>

<div className="certification-scroll-indicator">
  <span className="certification-scroll-icon">
    <span className="certification-scroll-dot"></span>
  </span>

  <span className="certification-scroll-text">
    <span>SCROLL</span>
    <span>TO EXPLORE</span>
  </span>
</div>

</section>

{/* =========================================
    SECTION 09 — CONTACT
========================================= */}

<section id="contact" className="contact-section">

  <div className="contact-star-field" aria-hidden="true">
    {stars.map((star) => (
      <span
        key={`contact-${star.id}`}
        className="contact-star"
        style={{
          left: star.left,
          top: star.top,
          width: `${star.size}px`,
          height: `${star.size}px`,
          animationDelay: star.delay,
          animationDuration: star.duration,
        }}
      />
    ))}
  </div>

  <div className="contact-orbit contact-orbit-one" aria-hidden="true"></div>
  <div className="contact-orbit contact-orbit-two" aria-hidden="true"></div>

<div className="contact-moon" aria-hidden="true"></div>

<div
  className="contact-bottom-planet"
  style={{ backgroundImage: `url(${moonPlanet})` }}
  aria-hidden="true"
/>

  <div className="contact-section-content">

    <div className="contact-section-label">
      <span>09 — CONTACT</span>
      <span className="contact-label-line"></span>
    </div>

    <div className="contact-heading">
      <h2>
        Let’s connect. <span>✦</span>
      </h2>

      <p>
        Have an opportunity, idea, project, or just want to say hello?
      </p>
    </div>

    <div className="contact-network">

      <div className="contact-connections" aria-hidden="true">
    <span className="connection connection-email"></span>
    <span className="connection connection-linkedin"></span>
    <span className="connection connection-resume"></span>
    <span className="connection connection-phone"></span>
  </div>

      <div className="contact-node contact-node-email">
        <div className="contact-node-circle">
          <Mail size={42} strokeWidth={1.2} />
        </div>

        <div className="contact-node-info">
          <span className="contact-node-label">EMAIL</span>
          <span className="contact-node-value">
            aditikumrawat23@gmail.com
          </span>

          <a
            href="mailto:aditikumrawat23@gmail.com"
            className="contact-button"
          >
            LET&apos;S TALK <ArrowRight size={15} />
          </a>
        </div>
      </div>

      <div className="contact-node contact-node-linkedin">
        <div className="contact-node-circle">
         <span className="linkedin-icon">in</span>
        </div>

        <div className="contact-node-info">
          <span className="contact-node-label">LINKEDIN</span>
          <span className="contact-node-value">
            Aditi Kumrawat
          </span>

          <a
            href="https://www.linkedin.com/in/aditi-kumrawat-508589298/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            LET&apos;S CONNECT <ArrowRight size={15} />
          </a>
        </div>
      </div>

      <div className="contact-node contact-node-resume">
        <div className="contact-node-circle">
          <FileText size={42} strokeWidth={1.2} />
        </div>

        <div className="contact-node-info">
          <span className="contact-node-label">RESUME</span>
          <span className="contact-node-value">
            View / Download Resume
          </span>

          <a
  href={resume}
  target="_blank"
  rel="noopener noreferrer"
  className="contact-button"
>
  OPEN RESUME <ArrowRight size={15} />
</a>
        </div>
      </div>

      <div className="contact-node contact-node-phone">
        <div className="contact-node-circle">
          <Phone size={42} strokeWidth={1.2} />
        </div>

        <div className="contact-node-info">
          <span className="contact-node-label">PHONE</span>
          <span className="contact-node-value">
            9098858966
          </span>

          <a
            href="tel:9098858966"
            className="contact-button"
          >
            GET IN TOUCH <ArrowRight size={15} />
          </a>
        </div>
      </div>

      <div className="contact-center-star" aria-hidden="true">
        ✦
      </div>

    </div>

    <div className="contact-identity">
      <h3>ADITI KUMRAWAT</h3>

      <p className="contact-role">
        UI/UX Designer · Product Thinker · CSIT Student
      </p>

      <p className="contact-tagline">
        Designing experiences. Exploring ideas. Always learning.
      </p>
    </div>

  </div>

 <div className="contact-footer">
  <span className="contact-footer-copy">
    © 2026 Aditi Kumrawat
  </span>
</div>

  <div className="page-number">
    <span className="page-line"></span>
    <span>09 / 09</span>
  </div>

</section>

    </main>
  )
}

export default App
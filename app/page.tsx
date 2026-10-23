import { ArrowRight, Linkedin, Mail } from "lucide-react"
import { PhotoCarousel } from "../components/photo-carousel"
import { PlusBackground } from "../components/plus-background"
import styles from "./page.module.css"

const press = [
  {
    company: "OpenAI",
    title: "Codex Originals",
    description: "Partnered with OpenAI to promote Finnie AI",
    url: "https://openai.com/codex-originals/",
  },
  {
    company: "OpenAI",
    date: "May 2026",
    dateTime: "2026-05",
    title: "Introducing ChatGPT Futures: Class of 2026",
    description: "Recipient of ChatGPT Futures",
    url: "https://openai.com/index/introducing-chatgpt-futures-class-of-2026/",
  },
  {
    company: "EBX",
    date: "Apr. 2026",
    dateTime: "2026-04",
    title: "'All People Powered' stages the future",
    description: "Winner of Co-Founder Musical Pitch Competition",
    url: "https://eastbayexpress.com/all-people-powered-stages-the-future/",
  },
  {
    company: "The New York Times",
    date: "Aug. 2025",
    dateTime: "2025-08",
    title: "8 Women, 4 Bedrooms and 1 Cause: Breaking A.I.'s Glass Ceiling",
    description: "Featured on the cover of the Technology section.",
    url: "https://www.nytimes.com/2025/08/23/business/ai-female-hackers-foundher-house.html",
  },
  {
    company: "USA Today",
    date: "Aug. 2025",
    dateTime: "2025-08",
    title: "Their rent is VC-backed and they're blasting Taylor Swift: Inside this all-female hacker house",
    description: "Featured on the cover.",
    url: "https://www.usatoday.com/story/money/2025/08/20/silicon-valley-tech-women-hacker-houses/85521246007/",
  },
]

export default function Home() {
  return (
    <div className={styles.site}>
      <PlusBackground />
      <a className={styles.skipLink} href="#about">Skip to content</a>
      <header className={styles.header}>
        <a className={styles.wordmark} href="#about">Chloe Akiko Hughes</a>
        <nav className={styles.navigation} aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#press">Press</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <section id="about" className={styles.hero} aria-labelledby="name">
          <PhotoCarousel />
          <div className={styles.hashtags} aria-label="Hashtags">
            <span>#OpenAIPartner</span>
            <span>#SanFrancisco</span>
            <span>#YOLO</span>
          </div>
          <h1 id="name" className={styles.name}>Chloe Akiko Hughes</h1>
          <p className={styles.story}>
            Rural Ohio → Stanford University Data Science → building AI solutions to make slow-moving industries fast
          </p>
          <ul className={styles.achievements}>
            <li><strong>Pollution tracking</strong> - grew organization to 100+ members, partnered with Fortune 500 companies and international nonprofits</li>
            <li><strong>Energy Mapping</strong> - built interactive energy map for nonprofit used by 17,000+ people</li>
            <li>
              <a href="https://findmescholarships.com/" target="_blank" rel="noopener noreferrer"><strong>Finnie AI</strong></a>
              {" - experience-based campaigns via scholarship platform of 15,000+ users"}
            </li>
          </ul>
        </section>
        <section id="press" className={styles.press} aria-labelledby="press-title">
          <div className={styles.sectionInner}>
            <h2 id="press-title" className={styles.sectionTitle}>Press</h2>
            <div className={styles.pressGrid}>
              {press.map((article) => (
                <article className={styles.pressCard} key={article.url}>
                  <div className={styles.publisher}>
                    <h3>{article.company}</h3>
                    {article.date && <time dateTime={article.dateTime}>{article.date}</time>}
                  </div>
                  <h4>{article.title}</h4>
                  <p>{article.description}</p>
                  <a href={article.url} target="_blank" rel="noopener noreferrer" aria-label={`Read ${article.title} on ${article.company}`}>
                    Read Article <ArrowRight size={16} aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className={styles.contact} aria-labelledby="contact-title">
          <h2 id="contact-title" className={styles.sectionTitle}>Contact</h2>
          <div className={styles.contactLinks}>
            <a href="https://www.linkedin.com/in/chloeahughes/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={21} aria-hidden="true" /> LinkedIn <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a href="mailto:cahughes@stanford.edu">
              <Mail size={21} aria-hidden="true" /> Email <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>© {new Date().getFullYear()} Chloe Akiko Hughes.</footer>
    </div>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans flex">
      <nav className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <div className="flex flex-col gap-4 p-4">
          <a href="#about" className="text-[#2F195F] hover:text-[#2F195F]/80 transition-colors font-medium">
            About
          </a>
          <a href="#press" className="text-[#2F195F] hover:text-[#2F195F]/80 transition-colors font-medium">
            Press
          </a>
          <a href="#contact" className="text-[#2F195F] hover:text-[#2F195F]/80 transition-colors font-medium">
            Contact
          </a>
        </div>
      </nav>

      <div className="flex-1 mr-20">
        {/* Hero Section */}
        <section id="about" className="py-20 px-6">
          <div className="max-w-6xl">
            <div className="space-y-8">
              <div className="flex items-center justify-between gap-12 mb-12">
                <h1 className="text-[144px] font-normal leading-none" style={{ color: "#2F195F" }}>
                  Chloe Akiko Hughes
                </h1>
                <div className="relative flex-shrink-0">
                  <div className="w-72 h-72 rounded-full bg-[#2F195F] p-2">
                    <div className="w-full h-full rounded-full bg-white p-2">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/headshot-JERM8WuYGQhUkZHzvL50n4kXxJdOZd.png"
                        alt="Chloe Akiko Hughes"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 text-xl leading-relaxed" style={{ color: "#2F195F" }}>
                <p>I grew up in a small town in Ohio.</p>

                <p>I now study Data Science at Stanford University.</p>

                <p>I build data solutions to make slow moving industries fast:</p>

                <p>
                  Environmental Impact Tracking - Environmental organization focused on creating and tracking pollution
                  impact through cleanups, recycling, etc.
                </p>

                <p>Energy Equity Mapping - Energy equity map for a local environmental nonprofit.</p>

                <p>
                  <a
                    href="https://cardinnect.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-2 underline-offset-4 hover:opacity-80 transition-opacity"
                    style={{ color: "#2F195F" }}
                  >
                    Cardinnect
                  </a>{" "}
                  - Social networking tool for Stanford seniors.
                </p>

                <p>
                  <a
                    href="https://findmescholarships.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-2 underline-offset-4 hover:opacity-80 transition-opacity"
                    style={{ color: "#2F195F" }}
                  >
                    Finnie AI
                  </a>{" "}
                  - Scholarship-matching tool with 5,000 student users, 4,500 Common App uploads, and 30,000 scholarships matched.
                </p>


              </div>
            </div>
          </div>
        </section>

        {/* Press Section */}
        <section id="press" className="py-16 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: "#2F195F" }}>
              Press
            </h2>
            <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
              <Card className="border-border bg-card hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-bold" style={{ color: "#2F195F" }}>
                        The New York Times
                      </h3>
                      <span className="text-sm" style={{ color: "#2F195F" }}>
                        Aug. 2025
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold" style={{ color: "#2F195F" }}>
                      8 Women, 4 Bedrooms and 1 Cause: Breaking A.I.'s Glass Ceiling
                    </h4>
                    <p className="text-sm" style={{ color: "#2F195F" }}>
                      Featured on the cover of the Technology section.
                    </p>
                    <a
                      href="https://www.nytimes.com/2025/08/23/business/ai-female-hackers-foundher-house.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity font-medium"
                      style={{ color: "#2F195F" }}
                    >
                      Read Article
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-bold" style={{ color: "#2F195F" }}>
                        USA Today
                      </h3>
                      <span className="text-sm" style={{ color: "#2F195F" }}>
                        Aug. 2025
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold" style={{ color: "#2F195F" }}>
                      Their rent is VC-backed and they're blasting Taylor Swift: Inside this all-female hacker house
                    </h4>
                    <p className="text-sm" style={{ color: "#2F195F" }}>
                      Featured on the cover.
                    </p>
                    <a
                      href="https://www.usatoday.com/story/money/2025/08/20/silicon-valley-tech-women-hacker-houses/85521246007/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity font-medium"
                      style={{ color: "#2F195F" }}
                    >
                      Read Article
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: "#2F195F" }}>
              Contact
            </h2>
            <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
              <Card className="border-border bg-card hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div className="flex items-center gap-3">
                      <Linkedin className="h-6 w-6" style={{ color: "#2F195F" }} />
                      <span className="font-medium" style={{ color: "#2F195F" }}>
                        LinkedIn
                      </span>
                    </div>
                    <a
                      href="https://www.linkedin.com/in/chloeahughes/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity font-medium"
                      style={{ color: "#2F195F" }}
                    >
                      Connect with me
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-border bg-card hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div className="flex items-center gap-3">
                      <Mail className="h-6 w-6" style={{ color: "#2F195F" }} />
                      <span className="font-medium" style={{ color: "#2F195F" }}>
                        Email
                      </span>
                    </div>
                    <a
                      href="mailto:cahughes@stanford.edu"
                      className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity font-medium"
                      style={{ color: "#2F195F" }}
                    >
                      Chat with me
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-border bg-card/50">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm" style={{ color: "#2F195F" }}>
              © 2025 Chloe Hughes.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

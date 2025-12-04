import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { Mail, Github, Linkedin } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-6 md:px-12 max-w-6xl">
          <div className="flex items-center gap-2">
            <span className="text-lg font-serif font-medium tracking-tight text-foreground">Momoyo Kataoka</span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-6 md:px-12 py-20 max-w-6xl">
        {/* Profile Section */}
        <section className="mb-32">
          <div className="grid md:grid-cols-[240px_1fr] gap-12 items-start">
            <Avatar className="h-48 w-48 border-2 border-foreground/10">
              <AvatarImage src="/profile.png" alt="Momoyo Kataoka" />
              <AvatarFallback className="text-3xl font-serif">MK</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-6">
              <h1 className="text-5xl md:text-7xl font-serif font-light text-foreground leading-[1.1] text-balance tracking-tight">
                Momoyo Kataoka
              </h1>
              {/* Updated title from Healthcare Technology-Focused Aspiring Developer to Web Developer */}
              <p className="text-xl md:text-2xl text-foreground/70 font-light tracking-wide uppercase text-balance">
                Web Developer
              </p>
              <p className="text-foreground/80 leading-relaxed text-lg max-w-3xl text-pretty">
                As a Registered Dietitian, I recognized the potential for IT to improve operational efficiency in my
                field, which motivated my career shift. Leveraging the{" "}
                <span className="text-foreground font-medium">user-centric perspective and planning skills</span> gained
                in healthcare, I am now focused on acquiring IT skills to develop practical solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-32">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-12 tracking-tight">
            Skills & Technical Competencies
          </h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {/* Frontend & Frameworks */}
            <div className="space-y-4">
              <h3 className="text-sm text-foreground/50 uppercase tracking-widest mb-6 font-medium">
                Frontend & Frameworks
              </h3>
              <div className="flex flex-wrap gap-3">
                {["HTML", "CSS", "JavaScript (Learning)", "React (Learning)", "Next.js (Learning)"].map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="px-5 py-2.5 text-base font-light border-foreground/20 hover:border-foreground/40 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Backend & Database */}
            <div className="space-y-4">
              <h3 className="text-sm text-foreground/50 uppercase tracking-widest mb-6 font-medium">
                Backend & Database
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Python (Learning)", "PHP (Learning)", "MySQL (Learning)"].map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="px-5 py-2.5 text-base font-light border-foreground/20 hover:border-foreground/40 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Tools & Deployment */}
            <div className="space-y-4">
              <h3 className="text-sm text-foreground/50 uppercase tracking-widest mb-6 font-medium">
                Tools & Deployment
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Git (Learning)", "Vercel (Learning)"].map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="px-5 py-2.5 text-base font-light border-foreground/20 hover:border-foreground/40 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-32">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-12 tracking-tight">
            Experience
          </h2>
          <div className="space-y-16">
            {/* Professional Background */}
            <div className="border-l-2 border-foreground/20 pl-8 md:pl-12">
              <h3 className="text-2xl md:text-3xl font-serif font-light text-foreground mb-3 tracking-tight">
                Registered Dietitian Duties
              </h3>
              <p className="text-sm text-foreground/50 mb-4 uppercase tracking-wider">Professional Background</p>
              <p className="text-foreground/80 leading-relaxed text-lg max-w-3xl text-pretty">
                Engaged in preventive health care, including specific health guidance. I developed{" "}
                <span className="font-medium text-foreground">individualized nutrition plans collaboratively</span>{" "}
                based on each client's lifestyle and goals. This involved providing{" "}
                <span className="font-medium text-foreground">planned support</span> for diet and blood data
                improvements, which honed my{" "}
                <span className="font-medium text-foreground">user needs assessment skills</span> and my{" "}
                <span className="font-medium text-foreground">data-driven execution abilities</span>.
              </p>
            </div>

            {/* Academic & IT Focus */}
            <div className="border-l-2 border-foreground/20 pl-8 md:pl-12">
              <h3 className="text-2xl md:text-3xl font-serif font-light text-foreground mb-3 tracking-tight">
                Enrolled in Diploma of IT, ECA College
              </h3>
              <p className="text-sm text-foreground/50 mb-4 uppercase tracking-wider">2024 – Present · Australia</p>
              <p className="text-foreground/80 leading-relaxed text-lg max-w-3xl text-pretty">
                Began IT studies in 2024, focusing on web development fundamentals, database management, and networking.
                Expected graduation in 2026.
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-32">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-12 tracking-tight">Education</h2>
          <div className="space-y-12">
            <div className="border-l-2 border-foreground/20 pl-8 md:pl-12">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl md:text-2xl font-serif font-light text-foreground tracking-tight">
                  Diploma of IT
                </h3>
                <p className="text-foreground/60 text-lg">ECA College, Australia</p>
                <p className="text-sm text-foreground/50 uppercase tracking-wider mt-2">2024 – 2026 (Expected)</p>
              </div>
            </div>

            <div className="border-l-2 border-foreground/20 pl-8 md:pl-12">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl md:text-2xl font-serif font-light text-foreground tracking-tight">
                  Faculty of Health and Nutrition
                </h3>
                <p className="text-foreground/60 text-lg">Nagoya Gakugei University, Japan</p>
                <p className="text-foreground/80 font-medium mt-2">Registered Dietitian National Qualification</p>
                <p className="text-sm text-foreground/50 uppercase tracking-wider mt-2">2022</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-foreground/10 bg-background">
        <div className="container mx-auto px-6 md:px-12 py-16 max-w-6xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="text-sm text-foreground/50 mb-4 uppercase tracking-wider">Contact</p>
              <a
                href="mailto:m.kataoka53@gmail.com"
                className="flex items-center gap-3 text-foreground/80 hover:text-foreground transition-colors text-lg group"
              >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>m.kataoka53@gmail.com</span>
              </a>
            </div>
            <div className="flex gap-6">
              <a
                href="https://github.com/momo23546842"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors group"
              >
                <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/momoyo-kataoka-652b4b34b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors group"
              >
                <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

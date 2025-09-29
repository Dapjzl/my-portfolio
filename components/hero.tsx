import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">Onaolapo <span className="text-primary font-medium">Adedapo Emmanuel</span> </h1>
            <p className="text-xl text-muted-foreground mb-6 text-pretty">
              I build scalable, high-performance backend systems and full-stack web applications using modern
              technologies like PHP( Laravel ), Node, React, and SQL databases.
            </p>
          </div>

          <div className="space-y-4">
            <div className="h-px bg-border w-16"></div>
            <nav className="space-y-2">
              <button className="block text-muted-foreground hover:text-foreground transition-colors text-left">
                ABOUT
              </button>
              <button className="block text-muted-foreground hover:text-foreground transition-colors text-left">
                EXPERIENCE
              </button>
              <button className="block text-muted-foreground hover:text-foreground transition-colors text-left">
                PROJECTS
              </button>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <a href="https://github.com/Dapjzl" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>

            <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>

            <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <a href="mailto:onaolapoadedapo@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="space-y-8">
          <div className="text-pretty">
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a backend engineer passionate about building robust, scalable systems that power modern web
              applications. My expertise lies at the intersection of server-side architecture and full-stack
              development, creating solutions that are both technically sound and user-focused.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Currently, I specialize in <span className="text-primary font-medium">PHP/Laravel and MERN Stack development</span>,
              database design, and API architecture. I contribute to enterprise applications and management systems,
              ensuring optimal performance and maintainability while delivering exceptional user experiences.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              In the past, I've developed software across various domains — from{" "}
              <span className="text-primary font-medium">restaurant management systems</span> and{" "}
              <span className="text-primary font-medium">HR platforms</span> to
              <span className="text-primary font-medium"> real estate CRM solutions</span>. Additionally, I have
              experience in piping design engineering, bringing a unique perspective to technical problem-solving.
            </p>
          </div>

          <div className="border-t border-border pt-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted-foreground">2024 — PRESENT</span>
              <span className="text-sm font-medium text-foreground">
                Project Manager Intern / Web Developer, Jachins Development Ltd
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
             Managing document control procedures to ensure proper organization and tracking of project documentation. 
             Building and maintaining fully responsive company websites to support business visibility and digital presence. 
             Assisting in project management activities through an internship, including coordination, scheduling, and task monitoring.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full">Laravel</span>
              <span className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full">PHP</span>
              <span className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full">AutoCAD</span>
              <span className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full">MySQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

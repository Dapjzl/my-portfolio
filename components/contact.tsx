import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Let's Work Together</h2>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                If you would like to discuss a project or just say hi, I'm always open to new opportunities and
                interesting conversations about backend development and full-stack solutions.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-foreground">onaolapoadedapo@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-foreground">Lagos, Nigeria</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-foreground">Available for remote work</span>
              </div>
            </div>

            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get In Touch</Button>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Current Focus</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Backend Engineering</h4>
                  <p className="text-sm text-muted-foreground">
                    Building scalable APIs, database architectures, and server-side solutions using PHP/Laravel and
                    modern development practices.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">Full-Stack Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Creating end-to-end web applications with React.js frontends and robust backend systems for optimal
                    user experiences.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">System Integration</h4>
                  <p className="text-sm text-muted-foreground">
                    Connecting diverse systems and platforms to create cohesive, efficient workflows for
                    enterprise-level applications.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  Open to freelance projects, full-time opportunities, and technical consulting.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

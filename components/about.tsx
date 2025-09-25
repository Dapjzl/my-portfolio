export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">About</h2>
            <p className="text-muted-foreground leading-relaxed">
              I'm a backend engineer with a passion for building scalable, efficient systems. My journey spans from
              enterprise applications to innovative web solutions, always focusing on clean architecture and optimal
              performance.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Technical Expertise</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I specialize in backend development with PHP and Laravel, creating robust APIs and database
                architectures. My full-stack capabilities include React.js for modern user interfaces and extensive
                experience with SQL databases for data management.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-foreground mb-3">Backend & Databases</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• PHP (Laravel, Livewire)</li>
                    <li>• SQL (MySQL, SQL Server)</li>
                    <li>• MongoDB</li>
                    <li>• API Development</li>
                    <li>• Node.js</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-3">Frontend & Tools</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• React.js</li>
                    <li>• Express.js</li>
                    <li>• JavaScript, HTML, CSS</li>
                    <li>• Git & GitHub</li>
                    <li>• WordPress</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Education & Certifications</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground">
                    Bachelor of Science in Software Engineering 
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Babcock University, Nigeria • Software Engineering Major • 2023
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Post-Graduate Diploma in Piping Design Engineering</h4>
                  <p className="text-sm text-muted-foreground">Udemy Certification • 2024</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Technical Certifications</h4>
                  <p className="text-sm text-muted-foreground">
                    CompTIA A+, Oracle SQL Fundamentals, Java Programming, Android Development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

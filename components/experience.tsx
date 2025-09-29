export function Experience() {
  const experiences = [
    {
      period: "2024 — PRESENT",
      company: "Jachins Development Limited",
      location: "Lagos, Nigeria",
      role: "Project Manager Intern / Web Developer",
      description:
        "Carrying out project management activities, including scheduling, task coordination, and progress tracking, to ensure timely delivery of project milestones.",
      achievements: [
        "Setting up, configuring, and maintaining hardware systems, monitors, and related equipment to ensure reliable performance.",
        "Troubleshooting and resolving technical issues with system hardware and peripheral devices.",
        "Building and deploying a fully responsive website optimized for performance, accessibility, and user experience",
        "Designing professional, visually consistent graphics, logos, and branding materials to support digital identity.",
        "Undergoing professional training in Piping Design Engineering to strengthen technical expertise in industrial systems.",
        "Engaging in document control processes by organizing, managing, and tracking technical and project-related documentation.",
      ],
    },
    {
      period: "2025",
      company: "Global Vision Support International Foundation",
      location: "Ogun, Nigeria",
      role: "Software Engineer (NYSC Service)",
      description:
        "Enhanced organization's digital presence through WordPress optimization and developed a comprehensive web application with blog functionality using Laravel framework.",
      achievements: [
        "Improved website functionality, performance, and user experience",
        "Implemented SEO improvements for enhanced search engine visibility",
        "Built responsive web application with dynamic content rendering",
        "Developed law firm management system with secure authentication",
      ],
    },
    {
      period: "2019",
      company: "Hybridsoft Limited",
      location: "Lagos, Nigeria",
      role: "Full-Stack Web Developer",
      description:
        "Contributed to multiple enterprise-level projects including restaurant management, HR systems, and CRM solutions using PHP, Laravel, and MySQL technologies.",
      achievements: [
        "Built restaurant management system for inventory and sales tracking",
        "Developed comprehensive Human Resources Management System",
        "Created CRM solution for real estate client using Laravel Livewire",
        "Implemented School Management System for universities and colleges",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-6 bg-card/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12">Experience</h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-border pl-8 relative">
              <div className="absolute -left-2 top-0 w-3 h-3 bg-primary rounded-full"></div>

              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                  <span className="text-sm text-muted-foreground font-mono">{exp.period}</span>
                </div>

                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

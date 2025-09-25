import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Projects() {
  const projects = [
    {
      title: "Law Firm Web Application",
      period: "2025",
      description:
        "Full-featured web application for legal document management with secure authentication, role-based access control, and custom dashboards for different user roles.",
      technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Blade Templates"],
      features: [
        "Secure user authentication and role-based access control",
        "Document upload and management with version control",
        "Custom dashboards for admins and clients",
        "Blog module for legal news and announcements",
      ],
    },
    {
      title: "Oil & Gas Construction Services Website",
      period: "2025",
      description:
        "Professional website showcasing JACHINS Development Ltd.'s expertise in oil and gas construction services, enhancing brand visibility and client engagement.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      features: [
        "Project portfolio showcasing industry experience",
        "Service highlighting and technical capabilities",
        "Contact and inquiry system for client communication",
        "Mobile and desktop optimized interface",
      ],
    },
    {
      title: "Learning Management System",
      period: "2024",
      description:
        "Web-based application for managing courses, students, and instructors with comprehensive admin panel and course management features.",
      technologies: ["Laravel", "PHP", "MySQL", "Admin Dashboard"],
      features: [
        "Admin panel for managing categories and courses",
        "Instructor and student management system",
        "Course enrollment and progress tracking",
        "Real-time data management and reporting",
      ],
    },
    {
      title: "Mobile Employee Management System",
      period: "2023",
      description:
        "Cloud-based system designed to replace paper-based forms with electronic management for HR teams, featuring real-time attendance tracking.",
      technologies: ["Mobile Technologies", "Cloud Platform", "Real-time Systems"],
      features: [
        "Electronic form management for HR processes",
        "Real-time employee attendance system",
        "Mobile accessibility from any smart device",
        "Cost-effective solution for SMEs",
      ],
    },
    {
      title: "Real Estate Management System",
      period: "2022",
      description:
        "Comprehensive platform enabling real estate businesses to control communications with consumers and publish property advertisements.",
      technologies: ["Laravel Livewire", "PHP", "MySQL"],
      features: [
        "Property advertisement and management",
        "Consumer communication platform",
        "Customer feedback and business intelligence",
        "Sales performance analytics",
      ],
    },
    {
      title: "Automobile Management System",
      period: "2022",
      description:
        "Platform for car vendors to advertise and manage automobiles while performing sales transactions through the system.",
      technologies: ["Laravel", "PHP", "MySQL", "Responsive Design"],
      features: [
        "Vehicle advertisement and management",
        "Sales transaction processing",
        "Multi-device compatibility",
        "Vendor dashboard and analytics",
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Projects</h2>
          <p className="text-muted-foreground text-pretty">
            A selection of backend systems and full-stack applications I've built, showcasing expertise in
            enterprise-level development and modern web technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-foreground">{project.title}</CardTitle>
                    <CardDescription className="text-muted-foreground mt-1">{project.period}</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 text-xs bg-primary/20 text-primary rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

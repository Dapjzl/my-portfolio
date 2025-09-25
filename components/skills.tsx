export function Skills() {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: [
        { name: "PHP", level: "Expert" },
        { name: "Laravel", level: "Expert" },
        { name: "Livewire", level: "Advanced" },
        { name: "API Development", level: "Advanced" },
        { name: "Server Architecture", level: "Advanced" },
      ],
    },
    {
      title: "Database Management",
      skills: [
        { name: "MySQL", level: "Expert" },
        { name: "SQL Server", level: "Advanced" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "Database Design", level: "Advanced" },
        { name: "Query Optimization", level: "Advanced" },
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "HTML/CSS", level: "Expert" },
        { name: "Responsive Design", level: "Expert" },
        { name: "UI/UX Implementation", level: "Advanced" },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: "Advanced" },
        { name: "WordPress", level: "Advanced" },
        { name: "AutoCAD", level: "Intermediate" },
        { name: "Adobe Photoshop", level: "Intermediate" },
        { name: "Linux/Unix", level: "Intermediate" },
      ],
    },
  ]

  return (
    <section className="py-20 px-6 bg-card/30">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12">Technical Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>

              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}</span>
                    </div>
                    <div className="h-1 bg-border rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-300"
                        style={{
                          width: skill.level === "Expert" ? "90%" : skill.level === "Advanced" ? "75%" : "60%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

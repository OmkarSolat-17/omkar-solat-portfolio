import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/data/portfolio";
import type { Project } from "@/data/portfolio";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="glass rounded-2xl overflow-hidden border border-border/50 hover:border-accent/30 transition-all duration-300 group flex flex-col"
      style={
        {
          "--hover-shadow": `0 0 30px ${project.accentColor}25`,
        } as React.CSSProperties
      }
      data-ocid={`projects.item.${index + 1}`}
    >
      {/* Thumbnail */}
      <div
        className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(${project.accentColor} 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />
        <span className="font-display font-black text-6xl opacity-20 select-none">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: `linear-gradient(90deg, transparent, ${project.accentColor}60, transparent)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-accent transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs font-mono px-2 py-0.5 bg-muted/40 text-muted-foreground border border-border/40"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="flex-1 border-border/60 hover:border-foreground/40 text-xs font-medium"
          >
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              data-ocid={`projects.github_button.${index + 1}`}
            >
              <Github size={13} className="mr-1.5" /> GitHub
            </a>
          </Button>
          <Button
            size="sm"
            asChild
            className="flex-1 text-xs font-medium bg-accent/10 hover:bg-accent/20 text-accent border border-accent/30 hover:border-accent/50"
          >
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              data-ocid={`projects.demo_button.${index + 1}`}
            >
              <ExternalLink size={13} className="mr-1.5" /> Live Demo
            </a>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-card/40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-accent text-sm font-mono font-medium tracking-widest uppercase">
            {"// featured projects"}
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mt-2">
            What I've Built
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl">
            Each project is a step toward mastering intelligent system design.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Cloud Infrastructure Platform',
    description: 'Multi-cloud infrastructure management platform with auto-scaling, monitoring, and cost optimization built on AWS and Terraform.',
    tags: ['AWS', 'Terraform', 'Kubernetes', 'Python'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
    github: '#',
    demo: '#',
    color: 'from-emerald-500/20 to-green-500/20',
  },
  {
    title: 'GitOps Pipeline Framework',
    description: 'Enterprise-grade CI/CD framework using ArgoCD and GitHub Actions with automated testing and rollback capabilities.',
    tags: ['ArgoCD', 'GitHub Actions', 'Docker', 'Helm'],
    image: 'https://images.unsplash.com/photo-558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    github: '#',
    demo: '#',
    color: 'from-teal-500/20 to-cyan-400/20',
  },
  {
    title: 'Observability Stack',
    description: 'Full observability solution with Prometheus, Grafana, and custom alerting for microservices architecture.',
    tags: ['Prometheus', 'Grafana', 'AlertManager', 'Loki'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    github: '#',
    demo: '#',
    color: 'from-lime-400/20 to-green-500/20',
  },
  {
    title: 'Container Security Scanner',
    description: 'Automated container vulnerability scanning integrated into CI/CD with policy-as-code enforcement.',
    tags: ['Trivy', 'OPA', 'Docker', 'Go'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
    github: '#',
    demo: '#',
    color: 'from-amber-400/20 to-lime-400/20',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 relative bg-background">

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Featured Work
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">My </span>
            <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in DevOps and cloud infrastructure
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative card-3d"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <motion.div
                className="card-3d-inner relative glass rounded-2xl overflow-hidden"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Solid color overlay */}
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-card/80" />
                  
                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4"
                  >
                    <motion.a
                      href={project.github}
                      className="p-3 rounded-full glass-strong text-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      className="p-3 rounded-full glass-strong text-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative p-6">
                  {/* Title */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <motion.div
                      className="text-muted-foreground group-hover:text-primary transition-colors"
                      whileHover={{ x: 3, y: -3 }}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </motion.div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Bottom border */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View more button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary bg-card text-foreground font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

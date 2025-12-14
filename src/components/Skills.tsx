import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Terminal, Cloud, GitBranch, Container, Settings, Activity, Shield,
  Server, Database, Code, Cpu, Network, Lock, Layers
} from 'lucide-react';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'linux', label: 'Linux' },
  { id: 'cloud', label: 'Cloud' },
  { id: 'cicd', label: 'CI/CD' },
  { id: 'devops', label: 'DevOps Tools' },
  { id: 'iac', label: 'IaC' },
  { id: 'monitoring', label: 'Monitoring' },
];

const skills = [
  { name: 'Linux', icon: Terminal, category: 'linux', color: 'from-emerald-500 to-green-500' },
  { name: 'Ubuntu', icon: Server, category: 'linux', color: 'from-green-400 to-teal-400' },
  { name: 'CentOS', icon: Cpu, category: 'linux', color: 'from-teal-400 to-emerald-500' },
  { name: 'AWS', icon: Cloud, category: 'cloud', color: 'from-lime-500 to-green-500' },
  { name: 'Azure', icon: Cloud, category: 'cloud', color: 'from-emerald-400 to-cyan-400' },
  { name: 'GCP', icon: Cloud, category: 'cloud', color: 'from-green-400 to-lime-500' },
  { name: 'GitHub Actions', icon: GitBranch, category: 'cicd', color: 'from-amber-400 to-yellow-500' },
  { name: 'Jenkins', icon: Settings, category: 'cicd', color: 'from-teal-500 to-green-500' },
  { name: 'GitLab CI', icon: GitBranch, category: 'cicd', color: 'from-emerald-500 to-teal-400' },
  { name: 'Docker', icon: Container, category: 'devops', color: 'from-cyan-400 to-teal-400' },
  { name: 'Kubernetes', icon: Layers, category: 'devops', color: 'from-green-500 to-emerald-400' },
  { name: 'Helm', icon: Shield, category: 'devops', color: 'from-lime-400 to-green-500' },
  { name: 'Terraform', icon: Code, category: 'iac', color: 'from-emerald-500 to-green-400' },
  { name: 'Ansible', icon: Network, category: 'iac', color: 'from-teal-400 to-emerald-500' },
  { name: 'Pulumi', icon: Code, category: 'iac', color: 'from-green-400 to-teal-400' },
  { name: 'Prometheus', icon: Activity, category: 'monitoring', color: 'from-amber-500 to-yellow-400' },
  { name: 'Grafana', icon: Activity, category: 'monitoring', color: 'from-lime-400 to-amber-500' },
  { name: 'Datadog', icon: Database, category: 'monitoring', color: 'from-teal-400 to-green-500' },
  { name: 'Vault', icon: Lock, category: 'devops', color: 'from-yellow-500 to-amber-400' },
  { name: 'ArgoCD', icon: GitBranch, category: 'cicd', color: 'from-emerald-400 to-green-400' },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring" as const, stiffness: 100 }
    }
  };

  return (
    <section id="skills" className="py-32 px-6 relative bg-background">
      <div className="max-w-6xl mx-auto">
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
            Tech Stack
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">My </span>
            <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build and maintain scalable infrastructure
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'glass text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeCategory}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="group relative"
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="glass rounded-xl p-6 text-center transition-all duration-300 group-hover:bg-muted/50 group-hover:shadow-lg group-hover:shadow-primary/10">
                {/* Solid color glow on hover */}
                <div className="absolute inset-0 rounded-xl bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl" />
                
                <motion.div
                  className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary p-2.5 text-primary-foreground"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <skill.icon className="w-full h-full" />
                </motion.div>
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

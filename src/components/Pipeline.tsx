import { motion } from 'framer-motion';
import { GitCommit, Hammer, FlaskConical, Rocket, MonitorCheck, ArrowRight } from 'lucide-react';

const pipelineSteps = [
  {
    id: 'commit',
    label: 'Commit',
    icon: GitCommit,
    description: 'Push code changes',
    color: 'from-emerald-400 to-green-500',
  },
  {
    id: 'build',
    label: 'Build',
    icon: Hammer,
    description: 'Compile & package',
    color: 'from-green-500 to-teal-500',
  },
  {
    id: 'test',
    label: 'Test',
    icon: FlaskConical,
    description: 'Run test suites',
    color: 'from-teal-400 to-cyan-500',
  },
  {
    id: 'deploy',
    label: 'Deploy',
    icon: Rocket,
    description: 'Ship to production',
    color: 'from-lime-400 to-green-500',
  },
  {
    id: 'monitor',
    label: 'Monitor',
    icon: MonitorCheck,
    description: 'Track performance',
    color: 'from-amber-400 to-lime-500',
  },
];

const Pipeline = () => {
  return (
    <section id="pipeline" className="py-32 px-6 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-border opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
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
            CI/CD Pipeline
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">How I </span>
            <span className="text-primary">Ship Code</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My automated pipeline ensures reliable, fast, and secure deployments
          </p>
        </motion.div>

        {/* Pipeline visualization */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-primary hidden lg:block -translate-y-1/2 opacity-30" />
          
          {/* Pipeline steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {pipelineSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className="relative group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                {/* Arrow connector (desktop) */}
                {index < pipelineSteps.length - 1 && (
                  <motion.div
                    className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-primary"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                )}

                {/* Step card */}
                <motion.div
                  className="relative glass rounded-2xl p-6 text-center cursor-pointer overflow-hidden"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  />
                  
                  {/* Pulse ring animation */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/50`}
                    initial={false}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Step number */}
                  <motion.div
                    className="absolute top-3 right-3 w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-mono text-muted-foreground"
                    whileHover={{ scale: 1.2, backgroundColor: 'hsl(var(--primary))' }}
                  >
                    {index + 1}
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary p-4 text-primary-foreground relative"
                    whileHover={{ 
                      rotate: [0, -5, 5, 0],
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <step.icon className="w-full h-full" />
                  </motion.div>

                  {/* Label */}
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {step.label}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {[
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '< 5min', label: 'Deploy Time' },
            { value: '100+', label: 'Deployments/Week' },
            { value: '0', label: 'Manual Steps' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass rounded-xl p-6 text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pipeline;

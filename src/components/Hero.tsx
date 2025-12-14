import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';
import { Rocket, Mail, Terminal, Cloud, Server, GitBranch } from 'lucide-react';
import { ContactForm } from './ContactForm';

const titles = [
  "DevOps Engineer",
  "Cloud Architect",
  "CI/CD Specialist",
  "Automation Expert",
];

// Generate subtle particles
const generateParticles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 5,
    color: ['bg-primary/20', 'bg-secondary/20', 'bg-accent/20', 'bg-primary/15', 'bg-secondary/15'][Math.floor(Math.random() * 5)],
    opacity: Math.random() * 0.3 + 0.1,
  }));
};

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  
  const particles = useMemo(() => generateParticles(40), []);

  useEffect(() => {
    const title = titles[currentTitle];
    const speed = isDeleting ? 50 : 100;

    if (!isDeleting && displayText === title) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentTitle((prev) => (prev + 1) % titles.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayText(prev => 
        isDeleting 
          ? prev.slice(0, -1)
          : title.slice(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitle]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      
      {/* Subtle sparkle particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full ${particle.color}`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [particle.opacity, particle.opacity * 1.2, 0, particle.opacity],
              scale: [1, 1.3, 0.5, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Subtle background blobs */}
      <motion.div
        className="aurora-blob w-[600px] h-[600px] bg-primary/5 -top-32 -left-32"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ filter: 'blur(100px)' }}
      />
      <motion.div
        className="aurora-blob w-[500px] h-[500px] bg-secondary/5 top-1/4 right-0"
        animate={{
          x: [0, -40, 0],
          y: [0, 50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ filter: 'blur(120px)' }}
      />
      <motion.div
        className="aurora-blob w-[400px] h-[400px] bg-accent/5 bottom-0 left-1/3"
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ filter: 'blur(80px)' }}
      />

      {/* Floating icons */}
      <motion.div
        className="absolute top-20 left-[15%] text-primary/30"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Terminal size={40} />
      </motion.div>
      <motion.div
        className="absolute top-40 right-[20%] text-secondary/30"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Cloud size={48} />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-[10%] text-accent/30"
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <Server size={36} />
      </motion.div>
      <motion.div
        className="absolute bottom-48 right-[15%] text-primary/30"
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <GitBranch size={32} />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Greeting badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.span
              animate={{ rotate: [0, 20, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              className="text-2xl"
            >
              👋
            </motion.span>
            <span className="text-muted-foreground font-medium">Welcome to my portfolio</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-primary">Aditya dakare</span>
          </motion.h1>

          {/* Typing effect */}
          <motion.div
            className="h-12 md:h-16 flex items-center justify-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <span className="text-2xl md:text-4xl font-mono text-primary">
              {displayText}
              <span className="border-r-2 border-primary ml-1 animate-blink">&nbsp;</span>
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Passionate about building scalable infrastructure, automating everything,
            and shipping reliable software through modern CI/CD practices.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.button
              className="group relative px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('projects')}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                See Projects
              </span>
            </motion.button>

            <motion.button
              className="group px-8 py-4 rounded-xl border border-primary bg-card text-foreground font-semibold text-lg transition-all hover:bg-primary hover:text-primary-foreground"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsContactFormOpen(true)}
            >
              <span className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Get in Touch
              </span>
            </motion.button>
            
            <ContactForm open={isContactFormOpen} onOpenChange={setIsContactFormOpen} />
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.2, duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-primary"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from 'motion/react';

export default function MoonPhaseCycle() {
  const phases = [
    // New Moon
    <circle cx="50" cy="50" r="40" fill="#2A213D" opacity="0.3" />,
    // Waxing Crescent
    <path d="M 50 10 A 40 40 0 0 1 50 90 A 30 40 0 0 0 50 10" fill="#FDFBF7" />,
    // First Quarter
    <path d="M 50 10 A 40 40 0 0 1 50 90 L 50 10" fill="#FDFBF7" />,
    // Waxing Gibbous
    <path d="M 50 10 A 40 40 0 0 1 50 90 A 20 40 0 0 1 50 10" fill="#FDFBF7" />,
    // Full Moon
    <circle cx="50" cy="50" r="40" fill="#FDFBF7" />,
    // Waning Gibbous
    <path d="M 50 10 A 40 40 0 0 0 50 90 A 20 40 0 0 0 50 10" fill="#FDFBF7" />,
    // Last Quarter
    <path d="M 50 10 A 40 40 0 0 0 50 90 L 50 10" fill="#FDFBF7" />,
    // Waning Crescent
    <path d="M 50 10 A 40 40 0 0 0 50 90 A 30 40 0 0 1 50 10" fill="#FDFBF7" />,
  ];

  return (
    <div className="flex items-center justify-center gap-1 sm:gap-3 md:gap-6 my-12">
      {phases.map((phase, i) => (
        <motion.svg 
          key={i} 
          viewBox="0 0 100 100" 
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 drop-shadow-[0_0_12px_rgba(253,251,247,0.7)]"
          initial={{ opacity: 0.3, y: 0 }}
          animate={{ 
            opacity: [0.3, 1, 0.3],
            y: [0, -8, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        >
          <circle cx="50" cy="50" r="40" fill="#2A213D" opacity="0.2" />
          {phase}
        </motion.svg>
      ))}
    </div>
  );
}

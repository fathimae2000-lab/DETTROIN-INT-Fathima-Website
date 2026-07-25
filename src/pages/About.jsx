import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, BookOpen, Target, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

import students from '../assets/images/about/students.webp';
import school from '../assets/images/about/school.webp';

// Shared modern easing curve — smoother, more "designed" than default easeOut
const EASE = [0.16, 1, 0.3, 1];

const AboutPage = () => {
  const stats = [
    { icon: Users, value: "2,500+", label: "Active Students" },
    { icon: BookOpen, value: "100+", label: "Expert Faculty" },
    { icon: Award, value: "30+", label: "Years of Excellence" },
    { icon: Target, value: "100%", label: "College Readiness" },
  ];

  const values = [
    "Academic Rigor & Innovation",
    "Compassion & Mutual Respect",
    "Holistic Development",
    "Process-Focused Learning",
  ];

  // Animation variants for container staggering
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: EASE },
    },
  };

  return (
    <div className="bg-background text-text min-h-screen pt-24 sm:pt-28 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5, ease: EASE }}
              className="text-secondary font-poppins font-semibold uppercase tracking-wider text-xs sm:text-sm bg-secondary/10 px-4 py-2 rounded-full inline-flex items-center gap-2 mb-4"
            >
              <motion.span
                animate={{ rotate: [0, 15, -10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
              >
                <Sparkles size={16} />
              </motion.span>
              About Vasant Valley
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7, ease: EASE }}
              className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-primary mb-5 sm:mb-6 leading-tight"
            >
              Inspiring Young Minds, Shaping the Future.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: EASE }}
              className="text-text leading-relaxed text-sm sm:text-base lg:text-lg mb-8"
            >
              Vasant Valley School was established in 1990 by Mr. Aroon Purie and Mrs. Rekha Purie as an initiative of the Education Today Trust.
The school began its journey with around 200 students and 16 teachers in July 1990. It is a self-financing inclusive day school spread over eight acres of land in Vasant Kunj, New Delhi, India.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6, ease: EASE }}
              whileHover={{ scale: 1.03, y: -2 }} 
              whileTap={{ scale: 0.97 }}
              className="inline-block"
            >
              <a 
                href="#mission" 
                className="bg-primary hover:bg-primary-hover text-white font-poppins font-medium px-6 py-3 rounded-lg shadow-lg transition duration-300 flex items-center gap-2 group"
              >
                Our Philosophy 
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
                  <ArrowRight size={18} />
                </motion.span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="relative h-[260px] sm:h-[340px] lg:h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-border group"
          >
            <motion.img 
              src={students} 
              alt="Vasant Valley Campus Life" 
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.4, ease: EASE, delay: 0.2 }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent"></div>
          </motion.div>

        </div>
      </section>

      {/* Stats Counter Section with Stagger Animation */}
      <section className="py-12 sm:py-16 bg-primary text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center"
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.04, transition: { duration: 0.25, ease: EASE } }}
                  className="p-4 sm:p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 220, damping: 14, delay: idx * 0.1 + 0.3 }}
                  >
                    <Icon className="mx-auto text-secondary mb-2 sm:mb-3" size={28} />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.4, duration: 0.5 }}
                    className="text-xl sm:text-2xl lg:text-3xl font-poppins font-bold text-white mb-1"
                  >
                    {stat.value}
                  </motion.h3>
                  <p className="text-gray-300 text-xs sm:text-sm font-inter">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Philosophy / Mission Section */}
      <section id="mission" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
            whileHover={{ y: -4 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl h-[280px] sm:h-[360px] lg:h-[450px] group"
          >
            <img 
              src={school} 
              alt="School Campus" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-secondary/10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-bold text-primary mb-5 sm:mb-6"
            >
              "Excellence in Deed"
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
              className="text-text leading-relaxed mb-6 text-sm sm:text-base"
            >
              Our school's motto sets the benchmark for our daily interactions, academic challenges, and community engagements. Individualized attention and a process-focused framework guarantee that no student is left behind.
            </motion.p>
            
            <div className="space-y-3 sm:space-y-4 mb-8">
              {values.map((val, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 + 0.2, duration: 0.5, ease: EASE }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, damping: 15, delay: i * 0.12 + 0.35 }}
                  >
                    <CheckCircle2 className="text-secondary shrink-0" size={20} />
                  </motion.div>
                  <span className="font-medium text-primary text-sm sm:text-base">{val}</span>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="p-5 sm:p-6 bg-surface border-l-4 border-secondary rounded-r-xl shadow-md"
            >
              <p className="italic text-xs sm:text-sm text-text">
                "The entire campus is a classroom, and learning extends far beyond conventional textbook boundaries."
              </p>
            </motion.div>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default AboutPage;
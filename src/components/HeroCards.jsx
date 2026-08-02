import React from 'react';
import { motion } from 'framer-motion';

// Replace these with your actual image imports or public paths
import education from '../assets/images/card/image1.webp';
import excellence from '../assets/images/card/excellence.webp';
import understand from '../assets/images/card/understand.webp';

// Shared modern easing curve
const EASE = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: EASE },
  },
};

const HeroCards = () => {
    const [activeIndex, setActiveIndex] = React.useState(null);

  const cardsData = [
    {
      title: "Excellence in Deed",
      image: excellence,
      description: "The Schools motto sets the standard for Little Flower School. Individualized attention for each student, a learning framework, equity of all stakeholders and commitment to society are the pillars of the Schools philosophy. We believe that education is an enjoyable and interactive process.",
      badgeBg: "bg-secondary",
      overlayColor: "bg-secondary/95",
    },
    {
      title: "Education is preparation for life.",
      image: education,
      description: "The school day comprises academic and nonacademic Learning Experiences and is planned with special focus on the developmental needs of our students. The entire Campus is a Classroom and learning is continuous",
      badgeBg: "bg-primary",
      overlayColor: "bg-primary/95",
    },
    {
      title: "Learning with Understanding",
      image: understand,
      description: "While high academic achievement is a priority, the school aims to create a community of well-rounded individuals, who are compassionate and confident. This fosters a spirit of cooperation and mutual respect among the students and teachers",
      badgeBg: "bg-secondary",
      overlayColor: "bg-secondary/95",
    },
  ];

 return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {cardsData.map((card, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.4, ease: EASE } }}
                onClick={() =>
                  setActiveIndex(isActive ? null : index)
                }
                className="relative group overflow-hidden rounded-lg shadow-lg h-[440px] sm:h-[480px] bg-surface border border-border cursor-pointer"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className={`absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out ${
                    isActive ? "scale-110" : "group-hover:scale-110"
                  }`}
                />

                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
                    isActive ? "opacity-0" : "group-hover:opacity-0"
                  }`}
                ></div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: EASE, delay: index * 0.15 + 0.4 }}
                  className={`absolute bottom-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between pointer-events-none transition-all duration-300 ${
                    isActive ? "opacity-0" : "group-hover:opacity-0"
                  }`}
                >
                  <div className={`${card.badgeBg} text-white px-4 sm:px-6 py-2.5 sm:py-3 font-['Poppins'] font-bold text-lg sm:text-xl tracking-wider uppercase clip-path-banner shadow-md`}>
                    {card.title}
                  </div>
                </motion.div>

                <div
                  className={`absolute inset-0 ${card.overlayColor} flex flex-col items-center justify-center p-6 sm:p-8 text-center transition-all duration-500 ease-out transform ${
                    isActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0"
                  }`}
                >
                  <h3 className="text-white font-['Poppins'] font-bold text-2xl sm:text-3xl tracking-wide uppercase mb-4 sm:mb-6">
                    {card.title}
                  </h3>
                  <p className="text-white/95 font-['Inter'] text-xs sm:text-sm lg:text-base leading-relaxed">
                    {card.description}
                  </p>
                  <div className="w-12 h-1 bg-white/60 rounded-full mt-6"></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};


export default HeroCards;
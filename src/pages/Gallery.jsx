import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, ChevronLeft, ChevronRight, Eye, Filter } from "lucide-react";
import {
  ZoomIn,
  Sparkles,
} from "lucide-react";

// Local gallery images
import basketball from "../assets/images/gallery/basketball.webp";
import events from "../assets/images/gallery/events.webp";
import graduation from "../assets/images/gallery/graduation.webp";
import laboratory from "../assets/images/gallery/laboratory.webp";
import library from "../assets/images/gallery/library.webp";
import paint from "../assets/images/gallery/paint.webp";
import program from "../assets/images/gallery/program.webp";
import skating from "../assets/images/gallery/skating.webp";
import sports from "../assets/images/gallery/sports.webp";

// Sample gallery data tailored for Little Flower School
const galleryCategories = ["All", "Campus", "Events", "Sports", "Academics"];


const galleryItems = [
    {
        id: 1,
        title: "Science & Robotics Lab",
        category: "Academics",
        image: laboratory,
        desc: "Hands-on experimentation and technical inquiry in progress."
    },
    {
        id: 2,
        title: "Inter-School Basketball Championship",
        category: "Sports",
        image: basketball,
        desc: "High energy competition hosted at our indoor basketball stadium."
    },
    {
        id: 3,
        title: "Roller Skating Session",
        category: "Sports",
        image: skating,
        desc: "Students building balance, focus, and confidence on wheels."
    },
    {
        id: 4,
        title: "Graduation & Awards Ceremony",
        category: "Events",
        image: graduation,
        desc: "Honoring academic milestones and student accomplishments."
    },
    {
        id: 5,
        title: "Modern Library & Resource Center",
        category: "Campus",
        image: library,
        desc: "A quiet sanctuary packed with thousands of books and digital references."
    },
    {
        id: 6,
        title: "Art & Painting Studio",
        category: "Academics",
        image: paint,
        desc: "Where imagination takes physical shape through paint, clay, and craft."
    },
    {
        id: 7,
        title: "Cultural Fest Performances",
        category: "Events",
        image: events,
        desc: "Celebrating creativity and performing arts through student showcases."
    },
    {
        id: 8,
        title: "Annual Day Program",
        category: "Events",
        image: program,
        desc: "A memorable evening of speeches, performances, and celebration."
    },
    {
        id: 9,
        title: "Annual Sports Day",
        category: "Sports",
        image: sports,
        desc: "Students showcasing athletic excellence and team spirit on the field."
    }
];

// Shared modern easing curve
const EASE = [0.16, 1, 0.3, 1];

// Stagger containers
const filterContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const filterItem = {
  hidden: { opacity: 0, y: -10, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: EASE } },
};

const gridContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentIndex, setCurrentIndex] = useState(null);
    const [direction, setDirection] = useState(1);

    // Filter items based on category
    const filteredItems = selectedCategory === "All" 
        ? galleryItems 
        : galleryItems.filter(item => item.category === selectedCategory);

    // Lightbox controls
    const handleOpenLightbox = (index) => {
        setCurrentIndex(index);
    };

    const handleCloseLightbox = () => {
        setCurrentIndex(null);
    };

    const handleNext = (e) => {
        e.stopPropagation();
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    };

    // Keyboard navigation for lightbox
    useEffect(() => {
        if (currentIndex === null) return;
        const handleKey = (e) => {
            if (e.key === "Escape") handleCloseLightbox();
            if (e.key === "ArrowRight") { setDirection(1); setCurrentIndex((p) => (p + 1) % filteredItems.length); }
            if (e.key === "ArrowLeft") { setDirection(-1); setCurrentIndex((p) => (p - 1 + filteredItems.length) % filteredItems.length); }
        };
        window.addEventListener("keydown", handleKey);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", handleKey);
            document.body.style.overflow = "";
        };
    }, [currentIndex, filteredItems.length]);

    return (
        <div className="min-h-screen pt-32 pb-24 bg-surface">
          {/* header */}
                <section className="relative bg-primary py-24 px-6 lg:px-8 clip-path-banner">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="text-secondary font-poppins font-semibold uppercase tracking-wider text-sm bg-white/10 px-4 py-2 rounded-full inline-flex items-center gap-2 mb-5"
          >
            <motion.span
              animate={{ rotate: [0, -12, 12, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
            >
              <Camera size={16} />
            </motion.span>
            Moments &amp; Memories
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold text-white mb-4 max-w-2xl leading-tight"
          >
            Life at Little Flower School, in Pictures.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.22 }}
            className="text-gray-300 text-base sm:text-lg max-w-xl"
          >
            A glimpse into our classrooms, playgrounds, celebrations, and everything
            in between — the everyday moments that make our school community special.
          </motion.p>
        </div>

        {/* Decorative floating accent */}
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="hidden lg:flex absolute top-16 right-16 w-16 h-16 rounded-2xl bg-secondary/20 border border-secondary/30 items-center justify-center"
        >
          <Sparkles className="text-secondary" size={26} />
        </motion.div>
      </section>


            {/* Category Filter Buttons */}
            <motion.div
                variants={filterContainer}
                initial="hidden"
                animate="visible"
                className="max-w-[1400px] mx-auto px-4 py-8 lg:px-0 mb-10 flex flex-wrap items-center justify-center gap-3"
            >
                {galleryCategories.map((category) => (
                    <motion.button
                        key={category}
                        variants={filterItem}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-6 py-2.5 text-sm font-medium transition-colors duration-300 border ${
                            selectedCategory === category
                                ? "bg-secondary text-white border-secondary shadow-md"
                                : "bg-white text-text border-border hover:border-secondary"
                        }`}
                    >
                        {category}
                    </motion.button>
                ))}
            </motion.div>

            {/* Gallery Grid with AnimatePresence */}
            <motion.div
                variants={gridContainer}
                initial="hidden"
                animate="visible"
                className="max-w-[1400px] mx-auto px-4 lg:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence mode="popLayout">
                    {filteredItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9, y: 24 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5, ease: EASE }}
                            whileHover={{ y: -8, transition: { duration: 0.3, ease: EASE } }}
                            onClick={() => handleOpenLightbox(index)}
                            className="group relative bg-white overflow-hidden shadow-md border border-border cursor-pointer aspect-[4/3]"
                        >
                            <motion.img 
                                src={item.image} 
                                alt={item.title} 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <motion.span
                                    initial={{ opacity: 0, y: 10 }}
                                    whileHover={{ opacity: 1, y: 0 }}
                                    className="text-secondary font-semibold text-xs uppercase tracking-wider mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[50ms]"
                                >
                                    {item.category}
                                </motion.span>
                                <h3 className="text-white text-xl font-bold mb-2 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                                    {item.title}
                                </h3>
                                <p className="text-gray-200 text-sm line-clamp-2 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150">
                                    {item.desc}
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-white text-sm font-medium translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                                    <motion.span
                                        whileHover={{ scale: 1.2 }}
                                        className="inline-flex"
                                    >
                                        <Eye size={16} className="text-secondary" />
                                    </motion.span>
                                    View Photo
                                </div>
                            </div>

                            {/* Corner zoom indicator */}
                            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                                <ZoomIn className="text-white" size={16} />
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Fullscreen Lightbox Modal with Slide Transitions */}
            <AnimatePresence>
                {currentIndex !== null && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={handleCloseLightbox}
                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 lg:p-10"
                    >
                        {/* Close Button */}
                        <motion.button 
                            initial={{ opacity: 0, scale: 0.6, rotate: -90 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ delay: 0.15, duration: 0.4, ease: EASE }}
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleCloseLightbox}
                            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-secondary p-3 transition-colors rounded-full z-50"
                        >
                            <X size={24} />
                        </motion.button>

                        {/* Previous Button */}
                        <motion.button 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.15, duration: 0.4, ease: EASE }}
                            whileHover={{ scale: 1.1, x: -3 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handlePrev}
                            className="absolute left-4 lg:left-8 text-white bg-white/10 hover:bg-secondary p-3 transition-colors rounded-full z-50"
                        >
                            <ChevronLeft size={28} />
                        </motion.button>

                        {/* Next Button */}
                        <motion.button 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.15, duration: 0.4, ease: EASE }}
                            whileHover={{ scale: 1.1, x: 3 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleNext}
                            className="absolute right-4 lg:right-8 text-white bg-white/10 hover:bg-secondary p-3 transition-colors rounded-full z-50"
                        >
                            <ChevronRight size={28} />
                        </motion.button>

                        {/* Main Lightbox Content Slide */}
                        <div 
                            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <AnimatePresence mode="wait" custom={direction}>
                                <motion.div
                                    key={currentIndex}
                                    custom={direction}
                                    initial={{ opacity: 0, x: direction > 0 ? 80 : -80, scale: 0.96 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: direction > 0 ? -80 : 80, scale: 0.96 }}
                                    transition={{ duration: 0.4, ease: EASE }}
                                    className="w-full flex flex-col items-center"
                                >
                                    <img 
                                        src={filteredItems[currentIndex].image} 
                                        alt={filteredItems[currentIndex].title} 
                                        className="max-h-[65vh] w-auto object-contain shadow-2xl border border-white/10"
                                    />
                                    <motion.div
                                        initial={{ opacity: 0, y: 16 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.15, duration: 0.4, ease: EASE }}
                                        className="mt-6 text-center bg-white/5 border border-white/10 p-6 backdrop-blur-md w-full max-w-2xl"
                                    >
                                        <span className="text-secondary font-semibold text-xs uppercase tracking-wider mb-1 block">
                                            {filteredItems[currentIndex].category}
                                        </span>
                                        <h3 className="text-white text-2xl font-bold mb-2">
                                            {filteredItems[currentIndex].title}
                                        </h3>
                                        <p className="text-gray-300 text-sm">
                                            {filteredItems[currentIndex].desc}
                                        </p>
                                        <p className="text-gray-500 text-xs mt-3">
                                            {currentIndex + 1} / {filteredItems.length}
                                        </p>
                                    </motion.div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
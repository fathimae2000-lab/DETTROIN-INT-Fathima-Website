import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import laboratory from "../assets/images/gallery/laboratory.webp";
import basketball from "../assets/images/gallery/basketball.webp";
import program from "../assets/images/gallery/program.webp";

// Timeline events data styled with school context
const timelineEvents = [
    {
        id: 1,
        date: "June 2026",
        title: "Inter-House Science Exhibition",
        image: laboratory,
        description: "Innovative model displays and live experiments presented by senior students.",
    },
    {
        id: 2,
        date: "May 2026",
        title: "Annual Community Outreach Program",
        image: program,
        description: "Students engaging with social welfare campaigns and community education.",
    },
    {
        id: 3,
        date: "July 2026",
        title: "Zonal Table Tennis Championship",
        image: basketball,
        description: "Celebrating athletic victory as our school team bags consecutive trophies.",
    },
];

// NOTE: event #3 is dated "July 2026" but there's no "JULY 2026" filter button below —
// it will only ever appear under "VIEW ALL ARCHIVES". Add a July button here if you want
// it independently filterable.
const archiveOptions = [
    { label: "JUNE 2026", value: "JUNE 2026" },
    { label: "MAY 2026", value: "MAY 2026" },
    { label: "VIEW ALL ARCHIVES", value: "ALL" },
];

// Shared modern easing curve
const EASE = [0.16, 1, 0.3, 1];

const RecentEventsTimeline = () => {
    const [selectedArchive, setSelectedArchive] = useState("ALL");

    const filteredEvents = selectedArchive === "ALL" 
        ? timelineEvents 
        : timelineEvents.filter(event => event.date.toUpperCase().includes(selectedArchive));

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-surface overflow-hidden relative">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                    
                    {/* Left Column: Heading & Archive Filters */}
                    <div className="lg:col-span-4 z-10">
                        <motion.h2 
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: EASE }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight"
                        >
                            A Timeline of <br className="hidden sm:block" />Recent Events
                        </motion.h2>

                        {/* Red Dotted Separator Accent */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex items-center gap-1 mb-6 sm:mb-8"
                        >
                            <motion.span
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, ease: EASE, delay: 0.25 }}
                                style={{ originX: 0 }}
                                className="w-12 h-1 bg-secondary inline-block"
                            ></motion.span>
                            <div className="flex-1 border-b border-dashed border-secondary/60"></div>
                        </motion.div>

                        {/* Archives Navigation List */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-row flex-wrap gap-x-6 gap-y-3 lg:flex-col lg:gap-4 mb-10 lg:mb-0"
                        >
                            <span className="text-xs font-bold tracking-widest text-text uppercase block w-full mb-1 lg:mb-2">
                                BROWSE ARCHIVES
                            </span>

                            {archiveOptions.map((option, i) => {
                                const isActive = selectedArchive === option.value;
                                const isLast = i === archiveOptions.length - 1;
                                return (
                                    <motion.button
                                        key={option.value}
                                        onClick={() => setSelectedArchive(option.value)}
                                        whileHover={{ x: 4 }}
                                        whileTap={{ scale: 0.97 }}
                                        className={`flex items-center gap-2 text-sm font-semibold ${
                                            isLast ? "lg:pt-2 lg:border-t lg:border-border lg:w-full" : ""
                                        } ${
                                            isActive ? "text-secondary" : "text-primary hover:text-secondary"
                                        }`}
                                    >
                                        <motion.span
                                            animate={{ x: isActive ? 4 : 0 }}
                                            transition={{ duration: 0.3, ease: EASE }}
                                            className="inline-flex"
                                        >
                                            <ArrowRight size={16} className="text-secondary" />
                                        </motion.span>
                                        {option.label}
                                    </motion.button>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* Right Column: Interactive Staggered Timeline Track */}
                    <div className="lg:col-span-8 relative">
                        
                        {/* Horizontal Central Timeline Line (Dotted Red) */}
                        <motion.div
                            initial={{ scaleX: 0, opacity: 0 }}
                            whileInView={{ scaleX: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: EASE }}
                            style={{ originX: 0.5 }}
                            className="hidden md:block absolute top-1/2 left-0 w-full border-t-2 border-dashed border-secondary/40 -translate-y-1/2 z-0"
                        ></motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6 md:gap-8 relative z-10">
                            <AnimatePresence mode="popLayout">
                                {filteredEvents.slice(0, 3).map((event, index) => (
                                    <motion.div 
                                        key={event.id}
                                        layout
                                        initial={{ opacity: 0, y: index % 2 === 0 ? 40 : -40, scale: 0.9 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.3 } }}
                                        transition={{ duration: 0.6, ease: EASE, delay: index * 0.15 }}
                                        className={`group flex flex-col items-center text-center ${
                                            index === 1 ? "md:-translate-y-12" : "md:translate-y-12"
                                        }`}
                                    >
                                        {/* Octagon / Custom Hex-like Styled Image Frame */}
                                        <motion.div
                                            whileHover={{ scale: 1.06, transition: { duration: 0.3, ease: EASE } }}
                                            className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 mb-6 shadow-xl overflow-hidden bg-white border-4 border-white"
                                        >
                                            <div className="w-full h-full clip-path-octagon overflow-hidden">
                                                <img 
                                                    src={event.image} 
                                                    alt={event.title} 
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                            </div>
                                        </motion.div>

                                        {/* Vertical alignment indicator line */}
                                        <motion.div
                                            initial={{ scaleY: 0 }}
                                            whileInView={{ scaleY: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                                            style={{ originY: 0 }}
                                            className="w-[1px] h-8 bg-border mb-3"
                                        ></motion.div>

                                        {/* Content Details */}
                                        <h3 className="text-base sm:text-lg font-bold text-primary mb-1 group-hover:text-secondary transition-colors duration-300">
                                            {event.title}
                                        </h3>
                                        
                                        <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-secondary uppercase tracking-wider mb-2">
                                            <motion.span
                                                whileHover={{ rotate: 15, scale: 1.15 }}
                                                className="inline-flex"
                                            >
                                                <Calendar size={13} />
                                            </motion.span>
                                            {event.date}
                                        </div>

                                        <p className="text-text text-xs line-clamp-2 max-w-[240px]">
                                            {event.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {filteredEvents.length === 0 && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center text-text py-12 relative z-10"
                            >
                                No events found for this archive.
                            </motion.p>
                        )}

                    </div>

                </div>

            </div>
        </section>
    );
};

export default RecentEventsTimeline;
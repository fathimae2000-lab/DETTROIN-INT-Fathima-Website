import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, CheckCircle2, Sparkles } from "lucide-react";
import international from "../assets/images/academics/internation.webp";
import cbse from "../assets/images/academics/cbse.webp";
import primary from "../assets/images/academics/primary.webp";

const academicStages = [
    {
        id: "primary",
        title: "Primary & Middle Years",
        subtitle: "Foundation to Class 8",
        desc: "An inquiry-based, multi-lingual learning framework focused on concept mastery, critical thinking, and holistic child development.",
        highlights: [
            "Language-rich immersion from Nursery upwards",
            "Trans-disciplinary integrated learning themes",
            "Nourish Lab & hands-on environmental projects",
            "Strong focus on peer collaboration and social-emotional growth"
        ],
        image: primary
    },
    {
        id: "cbse",
        title: "Senior School (CBSE)",
        subtitle: "Classes 9 – 12",
        desc: "Rigorous academic pathways designed to push intellectual boundaries, encourage original thinking, and prepare students for premier global universities.",
        highlights: [
            "Comprehensive elective streams across Sciences, Humanities, and Commerce",
            "Expert college counselling and career mentorship guidance",
            "Process-focused learning prioritizing deep understanding over rote memorization",
            "Leadership development via student-led councils and symposia"
        ],
        image: cbse
    },
    {
        id: "cambridge",
        title: "International Curriculum",
        subtitle: "Cambridge IGCSE & Advanced",
        desc: "Offering world-class international standards starting from Class 8 foundation through IGCSE and AS/A Levels, focusing on inquiry and global perspectives.",
        highlights: [
            "Little Flower School is a registered Cambridge International School offering the Cambridge curriculum for Classes 8–12. Class 8 serves as a foundation year, focusing on developing the skills and attributes essential for the Cambridge IGCSE programme in Classes 9 and 10, which then extend into the Cambridge Advanced programme in Class 11 (AS Level) and Class 12 A Level."
        ],
        image: international
    }
];

const signaturePrograms = [
    {
        title: "Little Flower School Futures Diploma",
        desc: "A rigorous, self-directed pathway for selected students in Grades 8–12 ready to go beyond standard curriculum silos."
    },
    {
        title: "Pastoral Care & Health Education",
        desc: "Dedicated anchor class teachers and pastoral tutors providing a secure environment focusing on mental, social, and emotional health."
    },
    {
        title: "Financial Literacy & Oracy",
        desc: "Practical workshops equipping students with real-world financial acumen, public speaking confidence, and persuasive communication skills."
    },
    {
        title: "Outreach & Community Programs",
        desc: "Instilling social responsibility through active engagement with neighboring community initiatives, school farms, and eco-campaigns."
    }
];

const Academics = () => {
    const [activeTab, setActiveTab] = useState("primary");

    const currentStage = academicStages.find(stage => stage.id === activeTab);

    return (
        <div className="min-h-screen pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-20 bg-surface px-4 sm:px-6 lg:px-8 overflow-hidden">
            
            {/* Header Section */}
            <div className="max-w-[1400px] mx-auto mb-12 sm:mb-16 text-center">
                <motion.span 
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-secondary font-semibold text-xs sm:text-sm uppercase tracking-widest block mb-2"
                >
                    ACADEMIC FRAMEWORK
                </motion.span>
                <motion.h1 
                    initial={{ opacity: 0, y: -25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 font-['Poppins']"
                >
                    Programs & Curriculum
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-text text-base sm:text-lg max-w-2xl mx-auto font-['Inter']"
                >
                    Nurturing cerebral, creative, and compassionate individuals through a balanced, experiential, and world-class educational journey.
                </motion.p>
            </div>

            {/* Academic Stage Tabs Selector with Spring Hover Effects */}
            <div className="max-w-[1400px] mx-auto mb-10 sm:mb-12 flex flex-wrap justify-center gap-3 sm:gap-4">
                {academicStages.map((stage) => (
                    <motion.button
                        key={stage.id}
                        onClick={() => setActiveTab(stage.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold transition-colors duration-300 border cursor-pointer ${
                            activeTab === stage.id
                                ? "bg-primary text-white border-primary shadow-lg"
                                : "bg-white text-text border-border hover:border-primary hover:text-primary"
                        }`}
                    >
                        {stage.title}
                    </motion.button>
                ))}
            </div>

            {/* Active Stage Details Card with Smooth Slide Transition */}
            <div className="max-w-[1400px] mx-auto mb-16 sm:mb-20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 40, scale: 0.98 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -40, scale: 0.98 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-white border border-border shadow-xl grid grid-cols-1 lg:grid-cols-12 overflow-hidden"
                    >
                        {/* Content side */}
                        <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
                            <div>
                                <motion.span 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-secondary font-bold text-xs sm:text-sm uppercase tracking-wider block mb-2"
                                >
                                    {currentStage.subtitle}
                                </motion.span>
                                <motion.h2 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.15 }}
                                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4 font-['Poppins']"
                                >
                                    {currentStage.title}
                                </motion.h2>
                                <motion.p 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-text text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 font-['Inter']"
                                >
                                    {currentStage.desc}
                                </motion.p>

                                <div className="space-y-3 mb-6 sm:mb-8">
                                    {currentStage.highlights.map((highlight, index) => (
                                        <motion.div 
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.25 + (index * 0.08) }}
                                            className="flex items-start gap-3"
                                        >
                                            <CheckCircle2 size={20} className="text-secondary shrink-0 mt-1" />
                                            <span className="text-text text-sm sm:text-base font-medium">{highlight}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="pt-6 border-t border-border flex items-center gap-2 text-primary text-xs sm:text-sm font-semibold"
                            >
                                <Sparkles size={18} className="text-secondary shrink-0" />
                                Benchmarked to global standards for literacy, numeracy, and holistic success.
                            </motion.div>
                        </div>

                        {/* Image side with zoom effect */}
                        <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] lg:min-h-full overflow-hidden group">
                            <motion.img 
                                src={currentStage.image} 
                                alt={currentStage.title} 
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-primary/20"></div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Signature Programs Staggered Grid */}
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-10 sm:mb-12">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary font-['Poppins'] mb-3"
                    >
                        Signature Programmes
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-text text-sm sm:text-base max-w-xl mx-auto px-2"
                    >
                        Special initiatives designed to go beyond the syllabus and develop character, skill, and global awareness.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {signaturePrograms.map((prog, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="bg-white p-6 sm:p-8 border border-border shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                        >
                            <div>
                                <motion.div 
                                    whileHover={{ rotate: 5, scale: 1.1 }}
                                    className="w-12 h-12 bg-surface border border-border text-secondary flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300"
                                >
                                    <Compass size={24} />
                                </motion.div>
                                <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 font-['Poppins'] group-hover:text-secondary transition-colors duration-300">
                                    {prog.title}
                                </h3>
                                <p className="text-text text-sm sm:text-base leading-relaxed">
                                    {prog.desc}
                                </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-border flex items-center gap-1 text-xs font-bold text-secondary uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-300">
                                Explore Programme &rarr;
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Academics;
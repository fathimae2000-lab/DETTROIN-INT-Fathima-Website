import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, Images, Info, Phone, Home, Edit3, Heart, GraduationCap } from "lucide-react";
import logo from "../assets/images/logo/logo.jpg";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.header 
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                    isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-0"
                }`}
            >
                <nav className="max-w-[1400px] mx-auto flex items-center justify-between px-4 lg:px-0">

                    {/* Logo Section */}
                    <Link to="/" className={`bg-white px-4 sm:px-6 py-3 sm:py-4 shadow-lg flex items-center transition-all duration-300 ${
                        isScrolled ? "scale-90" : "scale-100"
                    }`}>
                        <img
                            src={logo}
                            alt="Little Flower School"
                            className={`w-auto object-contain transition-all duration-300 ${
                                isScrolled ? "h-10 sm:h-14" : "h-14 sm:h-20"
                            }`}
                        />
                    </Link>

                    {/* Right Side Navigation Cluster */}
                    <div className="flex items-center shadow-lg">

                        {/* Desktop Regular Links */}
                        <div className={`hidden lg:flex bg-white items-center px-10 gap-8 transition-all duration-300 ${
                            isScrolled ? "h-16" : "h-24"
                        }`}>
                            <Link to="/" className="flex items-center gap-2 font-medium text-primary hover:text-secondary transition text-base">
                                <Home size={18} /> Home
                            </Link>
                         
                            <Link to="/academics" className="flex items-center gap-2 font-medium text-primary hover:text-secondary transition text-base">
                                <GraduationCap size={18} /> Academics
                            </Link>
                               <Link to="/gallery" className="flex items-center gap-2 font-medium text-primary hover:text-secondary transition text-base">
                                <Images size={18} /> Gallery
                            </Link>
                            <Link to="/about" className="flex items-center gap-2 font-medium text-primary hover:text-secondary transition text-base">
                                <Info size={18} /> About
                            </Link>
                            <Link to="/contact" className="flex items-center gap-2 font-medium text-primary hover:text-secondary transition text-base">
                                <Phone size={18} /> Contact
                            </Link>
                            
                        </div>

                        {/* Search Button */}
                        <button className={`bg-white flex items-center justify-center hover:bg-surface transition border-l border-border transition-all duration-300 ${
                            isScrolled ? "w-14 h-14 sm:w-16 sm:h-16" : "w-16 h-16 sm:w-24 sm:h-24"
                        }`}>
                            <Search size={20} className="text-secondary" />
                        </button>

                        {/* Red Hamburger Trigger Button */}
                        <button 
                            onClick={() => setMenuOpen(true)}
                            className={`bg-secondary flex items-center justify-center hover:bg-secondary-hover transition transition-all duration-300 cursor-pointer ${
                                isScrolled ? "w-14 h-14 sm:w-16 sm:h-16" : "w-16 h-16 sm:w-24 sm:h-24"
                            }`}
                        >
                            <Menu size={26} className="text-white" />
                        </button>

                    </div>

                </nav>
            </motion.header>

            {/* Fullscreen Overlay Toggle Menu (Reference Style) */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                        animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
                        exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 z-[100] bg-primary flex flex-col justify-between overflow-y-auto"
                    >
                        {/* Top Control Bar with Close Button */}
                        <div className="max-w-[1400px] w-full mx-auto px-6 py-6 flex justify-end">
                            <button 
                                onClick={() => setMenuOpen(false)}
                                className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center hover:bg-secondary hover:text-white transition duration-300 shadow-xl cursor-pointer"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Center Navigation Links (Big Uppercase Style) */}
                        <div className="max-w-[1200px] w-full mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center my-auto">
                            <div className="flex flex-col space-y-4 lg:space-y-6 text-left">
                                <Link 
                                    to="/" 
                                    onClick={() => setMenuOpen(false)}
                                    className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white hover:text-secondary transition tracking-wide font-['Poppins']"
                                >
                                    HOME
                                </Link>
                              
                                   <Link 
                                    to="/academics" 
                                    onClick={() => setMenuOpen(false)}
                                    className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white hover:text-secondary transition tracking-wide font-['Poppins']"
                                >
                                    ACADAMICS
                                </Link>
                                  <Link 
                                    to="/gallery" 
                                    onClick={() => setMenuOpen(false)}
                                    className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white hover:text-secondary transition tracking-wide font-['Poppins']"
                                >
                                    GALLERY
                                </Link>
                                <Link 
                                    to="/about" 
                                    onClick={() => setMenuOpen(false)}
                                    className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white hover:text-secondary transition tracking-wide font-['Poppins']"
                                >
                                    ABOUT
                                </Link>
                                <Link 
                                    to="/contact" 
                                    onClick={() => setMenuOpen(false)}
                                    className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white hover:text-secondary transition tracking-wide font-['Poppins']"
                                >
                                    CONTACT
                                </Link>
                             
                            </div>

                            {/* Right side decorative vertical boundary line for desktop look */}
                            <div className="hidden lg:block border-l-2 border-white/20 pl-12 py-10">
                                <p className="text-white/80 text-lg leading-relaxed mb-6 font-['Inter']">
                                    Welcome to Little Flower School. Explore our multidimensional academic framework, student archives, and community portals.
                                </p>
                                <Link 
                                    to="/contact" 
                                    onClick={() => setMenuOpen(false)}
                                    className="inline-block bg-secondary hover:bg-secondary-hover text-white px-8 py-4 font-semibold tracking-wider uppercase transition shadow-lg"
                                >
                                    Get in Touch
                                </Link>
                            </div>
                        </div>

                        {/* Bottom Footer Actions Bar */}
                        <div className="w-full bg-secondary text-white py-6 mt-auto">
                           
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
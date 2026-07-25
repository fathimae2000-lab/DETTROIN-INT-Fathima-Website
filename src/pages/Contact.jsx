import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
    return (
        <div className="min-h-screen pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-20 bg-surface px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="max-w-[1400px] mx-auto mb-10 sm:mb-12 text-center">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4"
                >
                    Contact Us
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-text text-base sm:text-lg max-w-2xl mx-auto px-2"
                >
                    We would love to hear from you. Reach out to us using the details below or drop us a message.
                </motion.p>
            </div>

            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                
                {/* Left Side: Contact Information & Map Link */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white p-6 sm:p-8 lg:p-12 shadow-md border border-border flex flex-col justify-between"
                >
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-primary mb-6">Vasant Valley School</h2>
                        
                        <div className="space-y-6">
                            {/* Address */}
                            <div className="flex items-start gap-4">
                                <div className="bg-surface p-3 text-secondary border border-border shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-primary text-base sm:text-lg">Location</h3>
                                    <p className="text-text mt-1 text-sm sm:text-base">Sector C, Vasant Kunj, New Delhi - 110070, India</p>
                                    <a 
                                        href="https://maps.google.com" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-block mt-2 text-secondary font-medium hover:underline text-xs sm:text-sm uppercase tracking-wider"
                                    >
                                        SEE MAP &rarr;
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="bg-surface p-3 text-secondary border border-border shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-primary text-base sm:text-lg">Phone</h3>
                                    <p className="text-text mt-1 text-sm sm:text-base">+91 11 41767940</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="bg-surface p-3 text-secondary border border-border shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-primary text-base sm:text-lg">Email</h3>
                                    <p className="text-text mt-1 text-sm sm:text-base break-all">info@vasantvalley.edu.in</p>
                                </div>
                            </div>

                            {/* Working Hours */}
                            <div className="flex items-start gap-4">
                                <div className="bg-surface p-3 text-secondary border border-border shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-primary text-base sm:text-lg">Office Hours</h3>
                                    <p className="text-text mt-1 text-sm sm:text-base">Monday – Friday: 8:00 AM – 3:30 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 lg:mt-10 pt-6 border-t border-border text-xs sm:text-sm text-text">
                        <p>For admissions queries, please visit our admissions office during working hours or send an email.</p>
                    </div>
                </motion.div>

                {/* Right Side: Contact Form */}
                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white p-6 sm:p-8 lg:p-12 shadow-md border border-border"
                >
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
                    
                    <form onSubmit={(e) => e.preventDefault()} className="space-y-4 sm:space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-primary mb-2">Full Name</label>
                            <input 
                                type="text" 
                                placeholder="Enter your name" 
                                className="w-full px-4 py-3 bg-surface border border-border text-text text-sm sm:text-base focus:outline-none focus:border-secondary transition"
                                required 
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-primary mb-2">Email Address</label>
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="w-full px-4 py-3 bg-surface border border-border text-text text-sm sm:text-base focus:outline-none focus:border-secondary transition"
                                required 
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-primary mb-2">Phone Number</label>
                            <input 
                                type="tel" 
                                placeholder="Enter your phone number" 
                                className="w-full px-4 py-3 bg-surface border border-border text-text text-sm sm:text-base focus:outline-none focus:border-secondary transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-primary mb-2">Message</label>
                            <textarea 
                                rows="4" 
                                placeholder="Type your message here..." 
                                className="w-full px-4 py-3 bg-surface border border-border text-text text-sm sm:text-base focus:outline-none focus:border-secondary transition resize-none"
                                required
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            className="w-full bg-secondary hover:bg-secondary-hover text-white font-semibold py-3.5 sm:py-4 transition flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
                        >
                            <Send size={18} />
                            Send Message
                        </button>
                    </form>
                </motion.div>

            </div>
        </div>
    );
};

export default Contact;
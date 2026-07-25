import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import footerBg from "../assets/images/footer/footerimg.webp";

// Shared modern easing curve
const EASE = [0.16, 1, 0.3, 1];

const listContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
};

const Footer = () => {
  return (
    <footer className="relative overflow-hidden w-full">

      {/* Background Image */}
      <motion.img
        src={footerBg}
        alt="Footer Background"
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: EASE }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-primary/90"></div>

      {/* Content Container */}
      <div className="relative z-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

          {/* Top Grid - Fluid Responsive Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-16">

            {/* Column 1: Brand & Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              viewport={{ once: true }}
              className="flex flex-col items-start"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide font-['Poppins']">
                Vasant Valley
              </h2>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
                style={{ originX: 0 }}
                className="w-16 h-1 bg-secondary mt-3 mb-4 sm:mb-5"
              ></motion.div>

              <p className="text-gray-300 leading-relaxed text-sm sm:text-base max-w-sm">
                Inspiring young minds through academic excellence, innovation, creativity, and lifelong learning.
              </p>
            </motion.div>

            {/* Column 2: Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: EASE }}
              viewport={{ once: true }}
              className="flex flex-col items-start"
            >
              <h3 className="text-xl sm:text-2xl text-white font-semibold font-['Poppins']">
                Contact
              </h3>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.35 }}
                style={{ originX: 0 }}
                className="w-14 h-1 bg-secondary mt-3 mb-4 sm:mb-5"
              ></motion.div>

              <motion.div
                variants={listContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4 text-gray-300 text-sm sm:text-base w-full"
              >
                <motion.div variants={listItem} className="flex items-start gap-3.5">
                  <MapPin className="text-secondary mt-1 shrink-0" size={20} />
                  <p className="leading-snug">
                    Vasant Valley School<br />
                    Sector C, ab street<br />
                    Kerala, India
                  </p>
                </motion.div>

                <motion.div variants={listItem} className="flex items-center gap-3.5">
                  <Phone className="text-secondary shrink-0" size={20} />
                  <p>+91 987893009</p>
                </motion.div>

                <motion.div variants={listItem} className="flex items-center gap-3.5">
                  <Mail className="text-secondary shrink-0" size={20} />
                  <p className="break-all">info@green.com</p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Column 3: Admissions & Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: EASE }}
              viewport={{ once: true }}
              className="flex flex-col items-start md:col-span-2 lg:col-span-1"
            >
              <h3 className="text-xl sm:text-2xl text-white font-semibold font-['Poppins']">
                Admissions
              </h3>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.55 }}
                style={{ originX: 0 }}
                className="w-14 h-1 bg-secondary mt-3 mb-4 sm:mb-5"
              ></motion.div>

              <motion.ul
                variants={listContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3 text-gray-300 text-sm sm:text-base w-full"
              >
                {[
                  "Admission Process",
                  "Apply Now",
                  "Scholarships",
                  "Campus Tour",
                  "Download Brochure",
                ].map((item) => (
                  <motion.li
                    key={item}
                    variants={listItem}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-3 hover:text-white transition duration-300 cursor-pointer group w-fit"
                  >
                    <ArrowRight
                      size={16}
                      className="text-secondary group-hover:translate-x-1 transition shrink-0"
                    />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>

              {/* Social Media Links Row */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.08, delayChildren: 0.75 },
                  },
                }}
                className="flex items-center gap-3.5 mt-6 sm:mt-8 flex-wrap"
              >
                {[
                  { Icon: FaFacebookF, label: "Facebook" },
                  { Icon: FaInstagram, label: "Instagram" },
                  { Icon: FaLinkedinIn, label: "LinkedIn" },
                  { Icon: FaYoutube, label: "YouTube" },
                ].map(({ Icon, label }) => (
                  <motion.a
                    key={label}
                    href="#"
                    aria-label={label}
                    variants={{
                      hidden: { opacity: 0, scale: 0.5 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        transition: { type: "spring", stiffness: 260, damping: 16 },
                      },
                    }}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-secondary hover:border-secondary transition-all duration-300 shadow-sm"
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

          </div>

          {/* Bottom Copyright & Legal Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
            className="border-t border-white/20 mt-12 sm:mt-16 pt-6 sm:pt-8"
          >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
              <p className="text-gray-300 text-xs sm:text-sm">
                © 2026 Vasant Valley School. All Rights Reserved.
              </p>

              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-gray-300 text-xs sm:text-sm">
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition">
                  Terms
                </a>
                <a href="#" className="hover:text-white transition">
                  Sitemap
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
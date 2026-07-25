import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import hero1 from "../assets/images/hero/hero1.webp";
import hero2 from "../assets/images/hero/hero2.webp";
import hero3 from "../assets/images/hero/hero3.webp";

const slides = [
  {
    image: hero1,
    title: "Inspiring Excellence",
    subtitle: "Welcome to Vasant Valley School",
    quote:
      "Education is the foundation upon which we build the future of every child.",
  },
  {
    image: hero2,
    title: "Learning Beyond Classrooms",
    subtitle: "A Campus Full of Opportunities",
    quote:
      "Every student is encouraged to explore, innovate, and grow into a confident leader.",
  },
  {
    image: hero3,
    title: "Creating Future Leaders",
    subtitle: "Academic Excellence Since 1990",
    quote:
      "We nurture curiosity, creativity, and character to prepare students for tomorrow.",
  },
];

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: ".hero-prev",
          nextEl: ".hero-next",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen w-full">

              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                fetchPriority="high"  
                loading="eager"        
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>

              {/* Content Container */}
              <div className="relative z-20 max-w-[1400px] mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">

                <div className="max-w-3xl text-white mt-12 sm:mt-16">

                  <p className="uppercase tracking-[3px] sm:tracking-[4px] text-secondary font-semibold text-xs sm:text-sm mb-2">
                    {slide.subtitle}
                  </p>

                  <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold font-['Poppins'] leading-tight">
                    {slide.title}
                  </h1>

                  <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl italic text-gray-200 leading-relaxed font-['Inter']">
                    &quot;{slide.quote}&quot;
                  </p>

                </div>

              </div>

            </div>
          </SwiperSlide>
        ))}


      </Swiper>

      {/* Navigation Buttons Container - Positioned Bottom Left Responsively */}
      <div className="absolute bottom-6 left-4 sm:bottom-10 sm:left-10 z-30 flex items-center gap-3">
        {/* Previous Button */}
        <button className="hero-prev w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg cursor-pointer hover:bg-white transition-all hover:scale-105">
          <ChevronLeft
            size={20}
            className="text-gray-900"
          />
        </button>

        {/* Next Button */}
        <button className="hero-next w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg cursor-pointer hover:bg-white transition-all hover:scale-105">
          <ChevronRight
            size={20}
            className="text-gray-900"
          />
        </button>
      </div>

    </section>
  );
};

export default Hero;
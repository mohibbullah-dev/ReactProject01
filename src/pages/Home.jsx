import React, { useContext, useEffect, useRef, useState } from "react";
import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import LatestProject from "../sections/LatestProject";
import LatestNews from "../sections/LatestNews";
import Form from "../sections/Form";
import Footer from "../components/Footer";
import { motion, useScroll } from "motion/react";
import { themeContext } from "../contexts/allContext";

const Home = () => {
  const [circleprogShow, setcirCleprogShow] = useState(false);
  const heroRef = useRef(null);

  const CirRef = useRef(null);
  const { scrollYProgress } = useScroll();

  const { theme } = useContext(themeContext);

  useEffect(() => {
    const handleCirBar = () => {
      if (window.scrollY > 100) {
        setcirCleprogShow(true);
      } else {
        setcirCleprogShow(false);
      }
    };

    window.addEventListener("scroll", handleCirBar);

    return () => window.removeEventListener("scroll", handleCirBar);
  }, []);
  // min-h-[200vh]
  return (
    <div className="p-0 m-0 relative">
      <Navbar heroRef={heroRef} />
      <Hero ref={heroRef} />
      <About />
      <Services />
      <LatestProject />
      <LatestNews />
      <Form />
      <Footer />

      <motion.svg
        initial={{ opacity: 0, x: -50 }}
        animate={circleprogShow ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        width="100"
        height="100"
        viewBox="0 0 80 80"
        className="fixed right-6 bottom-6 -rotate-90"
      >
        <circle
          cx="40"
          cy="40"
          r="20"
          stroke={`${theme === "dark" ? "#000" : "#fff"}`}
          strokeWidth="6"
          fill="none"
        />
        <motion.circle
          cx="40"
          cy="40"
          r="20"
          stroke={`${theme === "dark" ? "#fff" : "#000"}`}
          strokeWidth="6"
          fill="none"
          style={{ pathLength: scrollYProgress }} // Animates stroke length
        />
      </motion.svg>
    </div>
  );
};

export default Home;

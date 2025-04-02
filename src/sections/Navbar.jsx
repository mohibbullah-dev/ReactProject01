import React, { useState } from "react";
import Flex from "../components/Flex";
import lofo from "../assets/images/lofo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Button from "../components/Button";
import Title from "../components/Title";
import { motion } from "motion/react";

const Navbar = () => {
  const navLinks = [
    {
      name: "Home",
      link: "home",
    },
    {
      name: "About",
      link: "about",
    },
    {
      name: "Services",
      link: "services",
    },
    {
      name: "Portfolio",
      link: "portfolio",
    },
    {
      name: "Blogs",
      link: "blogs",
    },
    {
      name: "Contact",
      link: "Contact",
    },
  ];

  const [count, setCount] = useState(2);

  return (
    <motion.section
      initial={{ opacity: 0, translateY: "100%" }}
      whileInView={{ opacity: 1, translateY: "0%" }}
      transition={{ duration: 1 }}
      viewport={{ amount: 0.7, delay: 5, once: false }}
      className="fixed bg-[#00000071] w-full z-10"
      id="section"
    >
      <Flex classname=" items-center gap-20 p-5 justify-between">
        <Flex classname="items-center gap-10">
          <div className="flex items-center justify-center gap-4 cursor-pointer">
            <img
              src={lofo}
              alt=""
              className="hover:scale-105 transition-all duration-400 cursor-pointer"
            />
          </div>

          <ul className="flex gap-4 z-50">
            {navLinks.map((item) => (
              <li
                key={item.name}
                className={`text-[16px] text-white cursor-pointer hover:text-primary relative duration-500 transi
                after:absolute after:content-[''] hover:after:h-[4px] 
                after:bg-primary after:-bottom-3 after:left-0 after:rounded-lg after:w-full hover:after:animate-smoothTranslate`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </Flex>

        <Flex classname="items-center gap-14">
          <ul className="flex items-center gap-5 text-white text-[19px] justify-center">
            <li className="hover:cursor-pointer hover:text-primary transform hover:-translate-y-1 transition-all duration-400">
              <FaFacebookF />
            </li>
            <li className="hover:cursor-pointer hover:text-primary transform hover:-translate-y-1 transition-all duration-400">
              <FaTwitter />
            </li>

            <li className="hover:cursor-pointer hover:text-primary transform transition-all duration-400 hover:-translate-y-1">
              <FaLinkedinIn />
            </li>
            <li className="hover:cursor-pointer hover:text-primary transform transition-all duration-400 hover:-translate-y-1">
              <FaInstagram />
            </li>
          </ul>

          <li
            onClick={() => setCount((prev) => prev + 1)}
            className="list-none text-white relative flex items-center cursor-pointer  
          before:absolute before:content-[var(--count)] before:mb-2 before:rounded-full before:top-[-16px] 
          before:right-[-10px] before:w-fit before:h-5 before:px-1 before:bg-primary text-center text-sm"
            style={{ "--count": "${count}" }}
          >
            {/* <div className="absolute bg-black text-white w-4 h-4 rounded-full top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              0
            </div> */}
            <MdOutlineShoppingCart className="text-[24px] " />
          </li>

          <Button
            text="Let's talk"
            classname="border-[#ffffff36] text-white hover:cursor-pointer transform transition-all duration-400 hover:bg-primary hover:-translate-y-1"
          />
        </Flex>
      </Flex>
    </motion.section>
  );
};

export default Navbar;

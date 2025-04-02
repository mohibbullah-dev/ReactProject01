import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
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
import { motion } from "motion/react";

const Navbar = ({ heroRef }) => {
  const navLinks = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Services", link: "services" },
    { name: "Portfolio", link: "portfolio" },
    { name: "Blogs", link: "blogs" },
    { name: "Contact", link: "Contact" },
  ];

  const [showHero, setShowHero] = useState(false);
  const [count, setCount] = useState(2);
  const [navShow, setNavShow] = useState(false);

  useEffect(() => {
    setShowHero(true);
    const handleScroll = () => {
      const heroHeight = heroRef.current?.offsetHeight || 0;
      if (window.scrollY > heroHeight || window.scrollY === 0) {
        setShowHero(true);
      } else {
        setShowHero(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [heroRef]);

  const navHandler = () => {
    setNavShow(!navShow);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={showHero ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed bg-[#00000071] w-full z-10"
      id="section"
    >
      <div className="flex lg:hidden" onClick={navHandler}>
        {navShow ? (
          <RxCross2 className="text-black absolute right-4 top-6 cursor-pointer text-[28px]" />
        ) : (
          <FaBarsStaggered className="text-white absolute right-4 top-6 cursor-pointer text-[24px]" />
        )}
      </div>

      <Flex classname=" items-center gap-20 p-5 justify-evenly lg:justify-between hidden lg:flex">
        <Flex classname="items-center gap-10 flex-col lg:flex-row">
          <div className="flex items-center justify-center gap-4 cursor-pointer">
            <img
              src={lofo}
              alt="Logo"
              className="hover:scale-105 transition-all duration-400 cursor-pointer"
            />
          </div>
          <ul className="flex gap-4 z-50 flex-col lg:flex-row">
            {navLinks.map((item) => (
              <li
                key={item.name}
                className="text-[16px] text-white cursor-pointer hover:text-primary relative duration-500 transition-all
                           after:absolute after:content-[''] hover:after:h-[4px] 
                           after:bg-primary after:-bottom-3 after:left-0 after:rounded-lg after:w-full hover:after:animate-smoothTranslate"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </Flex>

        <Flex classname="items-center gap-14 flex-col lg:flex-row">
          <ul className="flex items-center gap-5 text-white text-[19px] justify-center flex-col lg:flex-row">
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
            style={{ "--count": `'${count}'` }}
          >
            <MdOutlineShoppingCart className="text-[24px]" />
          </li>
          <Button
            text="Let's talk"
            classname="border-[#ffffff36] text-white hover:cursor-pointer transform transition-all duration-400 hover:bg-primary hover:-translate-y-1"
          />
        </Flex>
      </Flex>

      {navShow && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={navShow ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex items-center gap-20 p-5 justify-evenly lg:justify-between bg-white lg:hidden"
        >
          <Flex classname="items-center gap-10 flex-col lg:flex-row">
            <div className="flex items-center justify-center gap-4 cursor-pointer">
              <img
                src={lofo}
                alt="Logo"
                className="hover:scale-105 transition-all duration-400 cursor-pointer"
              />
            </div>
            <ul className="flex gap-4 z-50 flex-col lg:flex-row">
              {navLinks.map((item) => (
                <li
                  key={item.name}
                  className="text-[16px] text-black cursor-pointer hover:text-primary relative duration-500 transition-all
                           after:absolute after:content-[''] hover:after:h-[4px] 
                           after:bg-primary after:-bottom-3 after:left-0 after:rounded-lg after:w-full hover:after:animate-smoothTranslate"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </Flex>

          <Flex classname="items-center gap-14 flex-col lg:flex-row">
            <ul className="flex items-center gap-5 text-black text-[19px] justify-center flex-col lg:flex-row">
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
              className="list-none text-black relative flex items-center cursor-pointer  
                       before:absolute before:content-[var(--count)] before:mb-2 before:rounded-full before:top-[-16px] 
                       before:right-[-10px] before:w-fit before:h-5 before:px-1 before:bg-primary text-center text-sm"
              style={{ "--count": `'${count}'` }}
            >
              <MdOutlineShoppingCart className="text-[24px]" />
            </li>
            <Button
              text="Let's talk"
              classname="border-[#ffffff36] text-black hover:cursor-pointer transform transition-all duration-400 hover:bg-primary hover:-translate-y-1"
            />
          </Flex>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Navbar;

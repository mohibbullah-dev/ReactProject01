import React from "react";
import Flex from "./Flex";
import lofo from "../assets/images/lofo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ amount: 0.7, delay: 2, once: false }}
      className="bg-bgLight p-5"
    >
      <Flex classname="justify-center 2xl:justify-between md:justify-between p-4 gap-7 md:gap-0 2xl:gap-0 flex-wrap 2xl:flex-nowrap md:flex-nowrap">
        <div className="flex">
          <img
            src={lofo}
            alt=""
            className="hover:scale-105 transition-all duration-400 cursor-pointer"
          />
        </div>

        <Flex classname="items-center gap-4">
          <div
            className="w-[50px] h-[50px] border-2 border-white rounded-full flex justify-center items-center
             hover:bg-primary hover:border-primary transition-all duration-400 cursor-pointer"
          >
            <FaFacebookF className="text-white" />
          </div>

          <div
            className="w-[50px] h-[50px] border-2 border-white rounded-full flex justify-center items-center
             hover:bg-primary hover:border-primary transition-all duration-400 cursor-pointer"
          >
            <FaTwitter className="text-white" />
          </div>

          <div
            className="w-[50px] h-[50px] border-2 border-white rounded-full flex justify-center items-center
             hover:bg-primary hover:border-primary transition-all duration-400 cursor-pointer"
          >
            <FaLinkedinIn className="text-white" />
          </div>

          <div
            className="w-[50px] h-[50px] border-2 border-white rounded-full flex justify-center items-center
             hover:bg-primary hover:border-primary transition-all duration-400 cursor-pointer"
          >
            <FaInstagram className="text-white" />
          </div>
        </Flex>

        <div className="text-white flex items-center text-center">
          <p>© 2024. All rights reserved by Rainbow-Themes.</p>
        </div>
      </Flex>
    </motion.section>
  );
};

export default Footer;

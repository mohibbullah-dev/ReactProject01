import React from "react";
import Container from "../components/Container";
import image from "../assets/images/image.png";
import { motion } from "motion/react";
import { forwardRef } from "react";

const Hero = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="h-[700px] lg:h-[752px] bg-bgLight m-0 pt-10 lg:p-0 flex justify-center items-center"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1.2, x: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ amount: 0.1, once: true }}
          className="flex flex-col md:flex-row lg:pl-[100px] items-center p-5 gap-0 lg:gap-20 justify-between"
        >
          <div className=" w-full lg:w-1/2 flex flex-col items-start">
            <p className="text-center text-[12px] lg:text-sm text-gray p-0 m-0">
              MARN STACK DEVELOPER
            </p>
            <h1 className=" text-5xl  lg:text-8xl text-white font-bold text-left  p-0 m-0">
              Hello, I’m{" "}
              <span className="text-primary block text-left m-0 p-0">
                 Mohammed
              </span>
                Welcome to my World.
            </h1>
          </div>

          <div className="w-full lg:w-1/2">
            <img src={image} className="opacity-70 scale-60 lg:scale-125" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
});

export default Hero;

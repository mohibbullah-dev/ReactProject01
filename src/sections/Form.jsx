import React, { useContext } from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Title from "../components/Title";
import Button from "../components/Button";
import formImage from "../assets/images/formImage.png";
import { motion } from "motion/react";
import { themeContext } from "../contexts/allContext";

const Form = () => {
  const { theme } = useContext(themeContext);

  return (
    <section
      className={`lg:py-25 py-5 ${
        theme === "dark" ? "bg-bgDeep" : "bg-lightModeDeepBg"
      }`}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ amount: 0.1, once: true }}
          className="flex-col lg:flex-row flex justify-between gap-12 p-6"
        >
          <Flex classname="flex-col w-[330px] lg:w-auto gap-5 lg:gap-5">
            <div className="flex flex-col items-center lg:items-stretch justify-center gap-5 w-full lg:w-1/2">
              <Title
                text="Hire Me"
                classname="text-5xl  lg:text-6xl text-center lg:text-start"
              />
              <p className="text-gray text-center lg:text-start text-lg lg:text-xl w-full lg:min-w-[664px]">
                I am available for freelance work. Connect with me via phone: 
                <span
                  className={`${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  01912-123456 
                </span>
                or email: 
                <span
                  className={`${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  admin@example.com
                </span>
              </p>
            </div>

            <div className="flex w-full flex-col lg:w-1/2 gap-5">
              <input
                className={`lg:w-[664px] h-[45px] lg:h-[52px] rounded-[7px]
               placeholder-gray lg:px-3.5 ${
                 theme === "dark" ? "text-white" : "text-black"
               } outline-none border-2 border-gray`}
                placeholder="Your name *"
                type="text"
                name=""
                id=""
                required
              />
              <input
                className={`lg:w-[664px] h-[45px] lg:h-[52px] rounded-[7px]
                  placeholder-gray lg:px-3.5 ${
                    theme === "dark" ? "text-white" : "text-black"
                  } outline-none border-2 border-gray`}
                placeholder="Your email *"
                type="email"
                name=""
                id=""
                required
              />
              <input
                className={`lg:w-[664px] h-[45px] lg:h-[52px] rounded-[7px]
                    placeholder-gray lg:px-3.5 ${
                      theme === "dark" ? "text-white" : "text-black"
                    } outline-none border-2 border-gray`}
                placeholder="Write a subject"
                type="email"
                name=""
                id=""
                required
              />
              <textarea
                className={`lg:w-[664px] h-[45px] lg:h-[52px] rounded-[7px] placeholder-gray px-3.5 ${
                  theme === "dark" ? "text-white" : "text-black"
                } outline-none border-2 border-gray`}
                name=""
                id=""
                placeholder="Your message"
              ></textarea>
              <Button
                text="Send message"
                classname="border-primary bg-primary text-white hover:bg-bgDeep
                 hover:text-primary cursor-pointer transform transition-all duration-400 hover:-translate-y-1 w-[330px] lg:w-auto"
              />
            </div>
          </Flex>

          <div className="flex-1g:w-1/2 lg:w-1/2">
            <img src={formImage} alt="" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Form;

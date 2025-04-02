import React, { useState } from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import image2 from "../assets/images/image2.png";
import Title from "../components/Title";
import Skills from "./aboutComponents/Skills";
import Awards from "./aboutComponents/Awards";
import Experiences from "./aboutComponents/Experiences";
import Educations from "./aboutComponents/Educations";
import TitleDes from "../components/TitleDes";

import { motion } from "motion/react";

const About = () => {
  const [clicked, setClicked] = useState("");

  if (clicked === "skills") {
    console.log("This is skills");
  }
  if (clicked === "awards") {
    console.log("This is awards");
  }
  if (clicked === "experiences") {
    console.log("This is experiences");
  }
  if (clicked === "education") {
    console.log("this is education");
  }

  const HandleCliked = (e) => {
    setClicked("");
    setClicked(e.target.id);
  };
  return (
    <section className="bg-bgDeep m-0 p-0 pt-10  pb-0 md:pt-25 md:pb-12">
      <Container>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1.2, x: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ amount: 0.1, once: true }}
          className="flex flex-col 2xl:flex-row md:flex items-center gap-0 2xl:gap-12 md:gap-12 justify-center"
        >
          <div className="md:order-1 2xl:order-1 order-2">
            <img
              className=" w-[388px] h-[574px] md:w-[488px] md:h-[774px]"
              src={image2}
              alt=""
            />
          </div>

          <Flex classname="flex-col gap-7 md:w-[826px] md:gap-9 order-1">
            <div className="text-center 2xl:text-left md:text-left flex gap-7 flex-col">
              <Title text="About Me" classname="text-5xl" />
              <TitleDes
                classname="text-xl md:text-lg"
                text="There are many variations of passages of Lorem Ipsum available,
    but the majority have suffered alteration in some form, by
    injected humour, or randomised words which dont look even
    slightly believable. If you are going to use a passage of Lorem
    Ipsum,"
              />
            </div>

            <ul className="flex justify-center md:justify-normal flex-wrap md:flex-nowrap gap-8 md:gap-10 p-0 m-0 font-semibold">
              <li
                id="skills"
                onClick={HandleCliked}
                className={`text-white cursor-pointer hover:text-primary relative duration-500 transi
            after:absolute after:content-[''] after:h-[3px] md:after:h-[4px] 
            after:bg-primary after:-bottom-3 after:left-0 after:rounded-lg after:w-full hover:after:animate-smoothTranslate`}
              >
                Main skills
              </li>

              <li
                onClick={HandleCliked}
                id="awards"
                className={` after:bg-gray  after:h-[4px] after:w-1/2 text-white cursor-pointer hover:text-primary relative duration-500 
            after:absolute after:content-[''] hover:after:h-[3px] md:after:h-[4px] 
            hover:after:bg-primary after:-bottom-3 after:left-0 after:rounded-lg hover:after:w-full hover:after:animate-smoothTranslate`}
              >
                Awards & Recognitions
              </li>

              <li
                onClick={HandleCliked}
                id="experiences"
                className={` after:bg-gray  after:h-[4px] after:w-1/2 text-white cursor-pointer hover:text-primary relative duration-500 
                    after:absolute after:content-[''] hover:after:h-[3px] md:after:h-[4px] 
                    hover:after:bg-primary after:-bottom-3 after:left-0 after:rounded-lg hover:after:w-full hover:after:animate-smoothTranslate`}
              >
                Experience
              </li>

              <li
                onClick={HandleCliked}
                id="education"
                className={` after:bg-gray  after:h-[4px] after:w-1/2 text-white cursor-pointer hover:text-primary relative duration-500 
                    after:absolute after:content-[''] hover:after:h-[3px] md:after:h-[4px] 
                    hover:after:bg-primary after:-bottom-3 after:left-0 after:rounded-lg hover:after:w-full hover:after:animate-smoothTranslate`}
              >
                Education & Certification
              </li>
            </ul>

            {clicked === "skills" ? (
              <Skills />
            ) : clicked === "awards" ? (
              <Awards />
            ) : clicked === "experiences" ? (
              <Experiences />
            ) : clicked === "education" ? (
              <Educations />
            ) : (
              <Skills />
            )}
          </Flex>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;

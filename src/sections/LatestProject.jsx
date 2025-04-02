import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Title from "../components/Title";
import TitleDes from "../components/TitleDes";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/project6.png";
import Button from "../components/Button";
import { motion } from "motion/react";

const LatestProject = () => {
  return (
    <section className="bg-bgDeep py-5  md:py-12">
      <Container>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1.2, x: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ amount: 0.1, once: true }}
          className="flex flex-col pb-24 md:p-0 justify-center 
          md:justify-evenly items-center gap-93 md:gap-20"
        >
          <div className="flex flex-col gap-4 md:gap-7 justify-center items-center">
            <Title text="My Latest Projects" classname="text-5xl text-center" />

            <TitleDes
              text="There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered alteration in some form, by injected humour, or randomised words
             which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,"
              classname="text-lg md:text-xl  md:text-center md:w-[1000px] text-center"
            />
          </div>

          <Flex classname="gap-93  md:gap-7 md:px-56 flex-wrap 2xl:flex-nowrap">
            <div
              className="p-0 md:p-0 relative group  after:transition-colors hvoer:ease-in-out after:duration-500 
              hover:scale-100 transition-all duration-500 hover:opacity-60 
              h-[560px] md:w-[460px] md:h-[660px]  cursor-pointer
           after:w-full after:h-full after:absolute after:content-['']
            after:top-0 after:left-0 hover:after:bg-gradient-to-b
             hover:after:from-primary after:rounded-[7px]"
            >
              <img src={project1} alt="" className="hover:opacity-10" />
              <Flex classname="flex-col items-center gap-4 md:gap-6 absolute bottom-0 md:bottom-40 transition-all duration-500 left-0 px-7 z-50">
                <TitleDes
                  text="Development"
                  classname="text-primary transition-all duration-400"
                />
                <p className="text-3xl md:text-4xl text-white font-medium text-center">
                  Getting tickets to the next show
                </p>

                <Button
                  text="Case study"
                  classname="border-gray hover:border-primary text-white hover:bg-primary grhover:border-primary cursor-pointer
                 transform transition-all duration-300"
                />
              </Flex>
            </div>

            <div
              className="p-0 md:p-0 relative group  after:transition-colors hvoer:ease-in-out after:duration-500 
              hover:scale-100 transition-all duration-500 hover:opacity-60 
              h-[560px] md:w-[460px] md:h-[660px]  cursor-pointer
           after:w-full after:h-full after:absolute after:content-['']
            after:top-0 after:left-0 hover:after:bg-gradient-to-b
             hover:after:from-primary after:rounded-[7px]"
            >
              <img src={project1} alt="" className="hover:opacity-10" />
              <Flex classname="flex-col items-center gap-4 md:gap-6 absolute bottom-0 md:bottom-40 transition-all duration-500 left-0 px-7 z-50">
                <TitleDes
                  text="Development"
                  classname="text-primary transition-all duration-400"
                />
                <p className="text-3xl md:text-4xl text-white font-medium text-center">
                  Getting tickets to the next show
                </p>

                <Button
                  text="Case study"
                  classname="border-gray hover:border-primary text-white hover:bg-primary grhover:border-primary cursor-pointer
                 transform transition-all duration-300"
                />
              </Flex>
            </div>

            <div
              className="p-0 md:p-0 relative group  after:transition-colors hvoer:ease-in-out after:duration-500 
              hover:scale-100 transition-all duration-500 hover:opacity-60 
              h-[560px] md:w-[460px] md:h-[660px] cursor-pointer
           after:w-full after:h-full after:absolute after:content-['']
            after:top-0 after:left-0 hover:after:bg-gradient-to-b
             hover:after:from-primary after:rounded-[7px]"
            >
              <img src={project1} alt="" className="hover:opacity-10" />
              <Flex classname="flex-col items-center gap-4 md:gap-6 absolute bottom-0 md:bottom-40 transition-all duration-500 left-0 px-7 z-50">
                <TitleDes
                  text="Development"
                  classname="text-primary transition-all duration-400"
                />
                <p className="text-3xl md:text-4xl text-white font-medium text-center">
                  Getting tickets to the next show
                </p>

                <Button
                  text="Case study"
                  classname="border-gray hover:border-primary text-white hover:bg-primary grhover:border-primary cursor-pointer
                 transform transition-all duration-300"
                />
              </Flex>
            </div>
          </Flex>

          <Flex classname="gap-93 md:gap-7 md:px-56 flex-wrap md:flex-nowrap ">
            <div
              className="p-0 md:p-0 relative group  after:transition-colors hvoer:ease-in-out after:duration-500 
              hover:scale-100 transition-all duration-500 hover:opacity-60 
              h-[560px] md:w-[460px] md:h-[660px]  cursor-pointer
           after:w-full after:h-full after:absolute after:content-['']
            after:top-0 after:left-0 hover:after:bg-gradient-to-b
             hover:after:from-primary after:rounded-[7px]"
            >
              <img src={project1} alt="" className="hover:opacity-10" />
              <Flex classname="flex-col items-center gap-4 md:gap-6 absolute bottom-0 md:bottom-40 transition-all duration-500 left-0 px-7 z-50">
                <TitleDes
                  text="Development"
                  classname="text-primary transition-all duration-400"
                />
                <p className="text-3xl md:text-4xl text-white font-medium text-center">
                  Getting tickets to the next show
                </p>

                <Button
                  text="Case study"
                  classname="border-gray hover:border-primary text-white hover:bg-primary grhover:border-primary cursor-pointer
                 transform transition-all duration-300"
                />
              </Flex>
            </div>

            <div
              className="p-0 md:p-0 relative group  after:transition-colors hvoer:ease-in-out after:duration-500 
              hover:scale-100 transition-all duration-500 hover:opacity-60 
              h-[560px] md:w-[460px] md:h-[660px]  cursor-pointer
           after:w-full after:h-full after:absolute after:content-['']
            after:top-0 after:left-0 hover:after:bg-gradient-to-b
             hover:after:from-primary after:rounded-[7px]"
            >
              <img src={project1} alt="" className="hover:opacity-10" />
              <Flex classname="flex-col items-center gap-4 md:gap-6 absolute bottom-0 md:bottom-40 transition-all duration-500 left-0 px-7 z-50">
                <TitleDes
                  text="Development"
                  classname="text-primary transition-all duration-400"
                />
                <p className="text-3xl md:text-4xl text-white font-medium text-center">
                  Getting tickets to the next show
                </p>

                <Button
                  text="Case study"
                  classname="border-gray hover:border-primary text-white hover:bg-primary grhover:border-primary cursor-pointer
                 transform transition-all duration-300"
                />
              </Flex>
            </div>

            <div
              className="p-0 md:p-0 relative group  after:transition-colors hvoer:ease-in-out after:duration-500 
              hover:scale-100 transition-all duration-500 hover:opacity-60 
              h-[560px] md:w-[460px] md:h-[660px] cursor-pointer
           after:w-full after:h-full after:absolute after:content-['']
            after:top-0 after:left-0 hover:after:bg-gradient-to-b
             hover:after:from-primary after:rounded-[7px]"
            >
              <img src={project1} alt="" className="hover:opacity-10" />
              <Flex classname="flex-col items-center gap-4 md:gap-6 absolute bottom-0 md:bottom-40 transition-all duration-500 left-0 px-7 z-50">
                <TitleDes
                  text="Development"
                  classname="text-primary transition-all duration-400"
                />
                <p className="text-3xl md:text-4xl text-white font-medium text-center">
                  Getting tickets to the next show
                </p>

                <Button
                  text="Case study"
                  classname="border-gray hover:border-primary text-white hover:bg-primary grhover:border-primary cursor-pointer
                 transform transition-all duration-300"
                />
              </Flex>
            </div>
          </Flex>
        </motion.div>
      </Container>
    </section>
  );
};

export default LatestProject;

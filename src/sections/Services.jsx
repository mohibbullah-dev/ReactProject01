import React, { useContext } from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Title from "../components/Title";
import TitleDes from "../components/TitleDes";
import { CgWebsite } from "react-icons/cg";
import { FaFileCode } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { LiaNode } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import { FaUikit } from "react-icons/fa";

import { motion } from "motion/react";
import { themeContext } from "../contexts/allContext";

const Services = () => {
  const { theme } = useContext(themeContext);

  const ServicesCards = [
    {
      Title: "Ui/UX Design",
      category: "ui",
    },
    {
      Title: "Website Design",
      category: "design",
    },
    {
      Title: "Website Development",
      category: "development",
    },
    {
      Title: "Data management",
      category: "data",
    },
    {
      Title: "Backend logic with node js",
      category: "logic",
    },
    {
      Title: "Version Control",
      category: "versionControl",
    },
  ];

  return (
    <section
      className={`py-5 lg:py-12 ${
        theme === "dark" ? "bg-bgDeep" : "bg-yellow-50"
      }`}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1.2, x: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ amount: 0.1, once: true }}
          className="flex flex-col"
        >
          <div className="flex flex-col justify-evenly  gap-7 items-center">
            <Title
              text="Awesome Sevice"
              classname="text-5xl xl:text-6xl lg:text-6xl text-center"
            />
            <TitleDes
              classname="text-xl lg:text-lg lg:w-[1000px] text-center"
              text="There are many variations of passages of Lorem Ipsum available,
    but the majority have suffered alteration in some form, by
    injected humour, or randomised words which dont look even
    slightly believable. If you are going to use a passage of Lorem
    Ipsum,"
            />
          </div>

          <Flex classname={`gap-9 justify-evenly px-6 lg:px-20 py-16 flex-col`}>
            <Flex classname="gap-7 flex-wrap 2xl:flex-nowrap">
              <div
                className={`cursor-pointer flex flex-col gap-7 p-6 lg:p-20 w-full xl:w-1/3  lg:w-1/3 h-[400px]  lg:h-[450px] 
  rounded-[7px] ${
    theme === "dark" ? "bg-cardBg" : "bg-white"
  } items-stretch justify-center 
  transition-all duration-300 hover:bg-gradient-to-b hover:from-primary hover:to-secondary`}
              >
                <FaUikit
                  className={`w-[90.83px] h-[90.83px] ${
                    theme === "dark" ? "text-primary" : "text-amber-100"
                  }`}
                />
                {ServicesCards.map((item) =>
                  item.category === "ui" ? (
                    <p
                      key={item.category}
                      className={`text-[24px] ${
                        theme === "dark" ? "text-white" : "text-black"
                      } font-bold`}
                    >
                      {item.Title}
                    </p>
                  ) : (
                    ""
                  )
                )}
                <TitleDes
                  classname=""
                  text="There are many variations of Website Design available, but the majority have suffered alteration."
                />
              </div>

              <div
                className={`cursor-pointer flex flex-col gap-7 p-6 lg:p-20 w-full xl:w-1/3  lg:w-1/3 h-[400px]  lg:h-[450px] 
                  rounded-[7px] ${
                    theme === "dark" ? "bg-cardBg" : "bg-white"
                  } items-stretch justify-center 
                  transition-all duration-300 hover:bg-gradient-to-b hover:from-primary hover:to-secondary`}
              >
                <CgWebsite
                  className={`w-[90.83px] h-[90.83px] ${
                    theme === "dark" ? "text-primary" : "text-amber-100"
                  }`}
                />
                {ServicesCards.map((item) =>
                  item.category === "design" ? (
                    <p
                      key={item.category}
                      className={`text-[24px] ${
                        theme === "dark" ? "text-white" : "text-black"
                      } font-bold`}
                    >
                      {item.Title}
                    </p>
                  ) : (
                    ""
                  )
                )}
                <TitleDes
                  classname=""
                  text="There are many variations of Website Design available, but the majority have suffered alteration."
                />
              </div>

              <div
                className={`cursor-pointer flex flex-col gap-7 p-6 lg:p-20 w-full xl:w-1/3  lg:w-1/3 h-[400px]  lg:h-[450px] 
                    rounded-[7px] ${
                      theme === "dark" ? "bg-cardBg" : "bg-white"
                    } items-stretch justify-center 
                    transition-all duration-300 hover:bg-gradient-to-b hover:from-primary hover:to-secondary`}
              >
                <FaFileCode
                  className={`w-[90.83px] h-[90.83px] ${
                    theme === "dark" ? "text-primary" : "text-amber-100"
                  }`}
                />
                {ServicesCards.map((item) =>
                  item.category === "development" ? (
                    <p
                      key={item.category}
                      className={`text-[24px] ${
                        theme === "dark" ? "text-white" : "text-black"
                      } font-bold`}
                    >
                      {item.Title}
                    </p>
                  ) : (
                    ""
                  )
                )}
                <TitleDes
                  classname=""
                  text="Various styles of website development exist, yet most undergo modifications."
                />
              </div>
            </Flex>

            <Flex classname="gap-7 flex-wrap 2xl:flex-nowrap">
              <div
                className={`cursor-pointer flex flex-col gap-7 p-6 lg:p-20 w-full xl:w-1/3  lg:w-1/3 h-[400px]  lg:h-[450px] 
                  rounded-[7px] ${
                    theme === "dark" ? "bg-cardBg" : "bg-white"
                  } items-stretch justify-center 
                  transition-all duration-300 hover:bg-gradient-to-b hover:from-primary hover:to-secondary`}
              >
                <DiMongodb
                  className={`w-[90.83px] h-[90.83px] ${
                    theme === "dark" ? "text-primary" : "text-amber-100"
                  }`}
                />
                {ServicesCards.map((item) =>
                  item.category === "data" ? (
                    <p
                      key={item.category}
                      className={`text-[24px] ${
                        theme === "dark" ? "text-white" : "text-black"
                      } font-bold`}
                    >
                      {item.Title}
                    </p>
                  ) : (
                    ""
                  )
                )}
                <TitleDes
                  classname=""
                  text="Different types of database management exist, but most undergo changes."
                />
              </div>

              <div
                className={`cursor-pointer flex flex-col gap-7 p-6 lg:p-20 w-full xl:w-1/3  lg:w-1/3 h-[400px]  lg:h-[450px] 
                  rounded-[7px] ${
                    theme === "dark" ? "bg-cardBg" : "bg-white"
                  } items-stretch justify-center 
                  transition-all duration-300 hover:bg-gradient-to-b hover:from-primary hover:to-secondary`}
              >
                <LiaNode
                  className={`w-[90.83px] h-[90.83px] ${
                    theme === "dark" ? "text-primary" : "text-amber-100"
                  }`}
                />
                {ServicesCards.map((item) =>
                  item.category === "logic" ? (
                    <p
                      key={item.category}
                      className={`text-[24px] ${
                        theme === "dark" ? "text-white" : "text-black"
                      } font-bold`}
                    >
                      {item.Title}
                    </p>
                  ) : (
                    ""
                  )
                )}
                <TitleDes
                  classname=""
                  text="Different types of database management exist, but most undergo changes."
                />
              </div>

              <div
                className={`cursor-pointer flex flex-col gap-7 p-6 lg:p-20 w-full xl:w-1/3  lg:w-1/3 h-[400px]  lg:h-[450px] 
                  rounded-[7px] ${
                    theme === "dark" ? "bg-cardBg" : "bg-white"
                  } items-stretch justify-center 
                  transition-all duration-300 hover:bg-gradient-to-b hover:from-primary hover:to-secondary`}
              >
                <FaGithub
                  className={`w-[90.83px] h-[90.83px] ${
                    theme === "dark" ? "text-primary" : "text-amber-100"
                  }`}
                />
                {ServicesCards.map((item) =>
                  item.category === "versionControl" ? (
                    <p
                      key={item.category}
                      className={`text-[24px] ${
                        theme === "dark" ? "text-white" : "text-black"
                      } font-bold`}
                    >
                      {item.Title}
                    </p>
                  ) : (
                    ""
                  )
                )}
                <TitleDes
                  classname=""
                  text="Various forms of version control exist, but GitHub remains widely used."
                />
              </div>
            </Flex>
          </Flex>
        </motion.div>
      </Container>
    </section>
  );
};

export default Services;

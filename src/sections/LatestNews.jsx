import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Title from "../components/Title";
import TitleDes from "../components/TitleDes";
import news1 from "../assets/images/news1.png";
import news2 from "../assets/images/news2.png";
import news3 from "../assets/images/news3.png";
import Button from "../components/Button";
import { motion } from "motion/react";

const LatestNews = () => {
  return (
    <section className="py-12 bg-bgLight">
      <Container>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1.2, x: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ amount: 0.1, once: true }}
          classname="flex-col justify-center items-center "
        >
          <div className="flex flex-col gap-4 lg:gap-5 justify-center items-center">
            <Title text="Latest News" classname="text-5xl text-center" />
            <TitleDes
              text="There are many variations of passages 
                of Lorem Ipsum available, but the majority 
                have suffered alteration."
              classname="text-lg lg:text-xl pb-7  lg:text-center lg:w-[1000px] text-center"
            />
          </div>

          <Flex classname="gap-7 px-4 lg:px-0 items-center justify-evenly flex-wrap lg:flex-none">
            <div
              className="w-[450px] h-[585px] 
               group cursor-pointer rounded-[7px] bg-cardBg relative
             after:absolute after:w-full after:h-full after:content-[''] after:top-0 after:left-0
              hover:after:bg-gradient-to-b hover:after:bg-primary after:rounded-[7px] after:transition-all after:duration-300 after:opacity-65"
            >
              <img
                src={news1}
                alt=""
                className="rounded-[7px] hover:cursor-zoom-in group-hover:opacity-80"
              />
              <div
                className="flex flex-col gap-6 absolute bottom-15 lg:bottom-0 left-0 px-7
               group-hover:bottom-35 lg:group-hover:bottom-35 transition-all duration-300 translate-y-0 group-hover:-translate-y-0"
              >
                <TitleDes text="Development" classname="text-primary" />
                <p className="text-3xl lg:text-3xl text-white font-medium text-start">
                  {/* text-3xl text-white font-medium text-start */}
                  Have You Heard? Agency Is Your Best Bet To Grow
                </p>
                <Button
                  text="read more"
                  classname=" border-blue-500/0 text-blue-500/0  group-hover:text-white group-hover:border-gray"
                />
              </div>
            </div>

            <div
              className="w-[450px] h-[585px] group cursor-pointer rounded-[7px] bg-cardBg relative
             after:absolute after:w-full after:h-full after:content-[''] after:top-0 after:left-0
              hover:after:bg-gradient-to-b hover:after:bg-primary after:rounded-[7px] after:transition-all after:duration-300 after:opacity-65"
            >
              <img
                src={news1}
                alt=""
                className="rounded-[7px] hover:cursor-zoom-in group-hover:opacity-80"
              />
              <div
                className="flex flex-col gap-6 absolute bottom-15 lg:bottom-0 left-0 px-7
               group-hover:bottom-35 lg:group-hover:bottom-20 transition-all duration-300 "
              >
                <TitleDes text="Development" classname="text-primary" />
                <p className="text-3xl text-white font-medium text-start">
                  Have You Heard? Agency Is Your Best Bet To Grow
                </p>
                <Button
                  text="read more"
                  classname=" border-blue-500/0 text-blue-500/0  group-hover:text-white group-hover:border-gray"
                />
              </div>
            </div>

            <div
              className="w-[450px] h-[585px]  group cursor-pointer rounded-[7px] bg-cardBg relative
             after:absolute after:w-full after:min-h-full after:content-[''] after:top-0 after:left-0
              hover:after:bg-gradient-to-b hover:after:bg-primary after:rounded-[7px] after:transition-all after:duration-300 after:opacity-65"
            >
              <img
                src={news1}
                alt=""
                className="rounded-[7px] hover:cursor-zoom-in group-hover:opacity-80"
              />
              <div
                className="flex flex-col gap-6 absolute bottom-15 lg:bottom-0 left-0 px-7
               group-hover:bottom-35 lg:group-hover:bottom-20 transition-all duration-300 translate-y-0 group-hover:-translate-y-0"
              >
                <TitleDes text="Development" classname="text-primary" />
                <p className="text-3xl text-white font-medium text-start">
                  Have You Heard? Agency Is Your Best Bet To Grow
                </p>
                <Button
                  text="read more"
                  classname=" border-blue-500/0 text-blue-500/0  group-hover:text-white group-hover:border-gray"
                />
              </div>
            </div>
          </Flex>
        </motion.div>
      </Container>
    </section>
  );
};

export default LatestNews;

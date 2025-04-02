import React from "react";
import Flex from "../../components/Flex";
const Experiences = () => {
  return (
    <Flex classname="flex-col gap-5 p-4 md:p-4 2xl:p-4">
      <div>
        <p className="text-xl text-gray font-bold">
          MERN Stack Developer | Freelance (Upwork, Fiverr) | 2023-Present
        </p>

        <p className="text-gray text-xl font-normal">
          Master in three language - for design part
        </p>
      </div>

      <div>
        <p className="text-gray text-xl font-normal">
          Built and maintained scalable full-stack applications using MongoDB,
          Express.js, React.js, and Node.js.
        </p>
      </div>

      <div>
        <p className="text-gray text-xl font-normal">
          Integrated RESTful APIs and optimized backend performance for
          high-traffic applications.
        </p>
      </div>

      <div>
        <p className="text-gray text-xl font-normal">
          Worked on authentication, state management (Redux), and real-time
          features with WebSockets.
        </p>
      </div>

      <div>
        <p className="text-xl text-gray m-0 p-0 font-semibold">
          Freelance Web Developer | Freelance (Upwork, Fiverr) | 2023-Present
        </p>

        <p className="text-gray text-xl font-normal">
          Designed and deployed custom eCommerce and portfolio websites for
          international clients.
        </p>

        <p className="text-gray text-xl font-normal">
          Developed and deployed secure, high-performance web apps with Firebase
          and AWS.
        </p>
      </div>
    </Flex>
  );
};

export default Experiences;

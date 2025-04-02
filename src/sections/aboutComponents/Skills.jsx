import React from "react";
import Flex from "../../components/Flex";

const Skills = () => {
  return (
    <Flex classname="flex-col gap-5 p-4 md:p-4 2xl:p-4">
      <div>
        <p className="text-xl text-gray font-bold">
          basic design -
          <span className="m-0 p-0 font-semibold">Html Css JavaScript</span>
        </p>

        <p className="text-gray text-xl font-normal">
          Master in three language - for design part
        </p>
      </div>

      <div>
        <p className="text-xl text-gray font-bold">
          Framworks
          <span className="m-0 p-0 font-semibold">
            - Tailwind css bootstrap reat js express js
          </span>
        </p>

        <p className="text-gray text-xl font-normal">
          We use all framworks what we have to use to complete mern stacd
          projects
        </p>
      </div>

      <div>
        <p className="text-xl text-gray font-bold">
          back-end -
          <span className="m-0 p-0 font-semibold">node js express js</span>
        </p>

        <p className="text-gray text-xl font-normal">
          we use thes two technologies to develop the backend system of our
          application
        </p>
      </div>

      <div>
        <p className="text-xl text-gray font-bold">
          database
          <span className="m-0 p-0 font-semibold">- Mongo DB My-sql</span>
        </p>

        <p className="text-gray text-xl font-normal">
          we these two dataBase system to manage data
        </p>
      </div>

      <div>
        <p className="text-xl text-gray font-bold">
          extra
          <span className="m-0 p-0 font-semibold">
            - Redux fireBase React native Git github
          </span>
        </p>

        <p className="text-gray text-xl font-normal">
          we use these extra skills if we need
        </p>
      </div>
    </Flex>
  );
};

export default Skills;

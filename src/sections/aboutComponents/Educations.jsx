import React from "react";
import Flex from "../../components/Flex";
const Educations = () => {
  return (
    <Flex classname="flex-col gap-5 p-4 md:p-4 2xl:p-4">
      <div>
        <p className="text-xl text-gray font-bold">
          Bachelor’s in Computer Science
          <span className="m-0 p-0 font-semibold">
            Bachelor’s in Computer Science – Al-Azhar University (Expected 2026)
          </span>
        </p>
      </div>

      <div>
        <p className="text-xl text-gray font-bold">
          Diploma in Web Development
          <span className="m-0 p-0 font-semibold">
            – Creative It institute Daka, Bangladesh (expected 2025)
          </span>
        </p>
      </div>

      <div>
        <p className="text-xl text-gray font-bold">
          Self-Taught Developer
          <span className="m-0 p-0 font-semibold">
            – Learned MERN stack through hands-on projects, documentation, and
            online courses.
          </span>
        </p>
      </div>

      <div>
        <p className="text-xl text-gray font-bold">
          Meta Front-End Developer Professional Certificate
          <span className="m-0 p-0 font-semibold">– Coursera (2021)</span>
        </p>
      </div>

      <div>
        <p className="text-xl text-gray font-bold">
          MongoDB Certified Developer Associate
          <span className="m-0 p-0 font-semibold">
            – MongoDB University (2022)
          </span>
        </p>
      </div>

      <div>
        <p className="text-xl text-gray font-bold">
          JavaScript (Intermediate) Certificate
          <span className="m-0 p-0 font-semibold">– HackerRank (2023)</span>
        </p>
      </div>

      <div>
        <p className="text-xl text-gray font-bold">
          Node.js & Express.js Certification
          <span className="m-0 p-0 font-semibold">– Codecademy (2024)</span>
        </p>
      </div>
    </Flex>
  );
};

export default Educations;

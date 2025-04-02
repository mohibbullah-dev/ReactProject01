import React from "react";
import Flex from "../../components/Flex";
const Awards = () => {
  return (
    <Flex classname="flex-col gap-5 p-4 md:p-4 2xl:p-4">
      <div>
        <p className="text-xl text-gray font-bold">
          Top Contributor Award
          <span className="m-0 p-0 font-semibold">open-source</span>
        </p>

        <p className="text-gray text-xl font-normal">
          Recognized for exceptional contributions to open-source MERN projects.
        </p>
      </div>

      <div>
        <p className="text-xl text-gray font-bold">
          Hackathon Winner
          <span className="m-0 p-0 font-semibold">
            - real-time chat app using MERN
          </span>
        </p>

        <p className="text-gray text-xl font-normal">
          Led a team to develop a real-time chat app using MERN, winning first
          place.
        </p>
      </div>

      <div>
        <p className="text-xl text-gray font-bold">
          Best Developer of the Month
          <span className="m-0 p-0 font-semibold">
            Awarded for outstanding problem-solving{" "}
          </span>
        </p>

        <p className="text-gray text-xl font-normal">
          Awarded for outstanding problem-solving and innovative web solutions
          at Creative it.
        </p>
      </div>
    </Flex>
  );
};

export default Awards;

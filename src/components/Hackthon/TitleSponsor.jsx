import React from "react";

const TitleSponsor = () => {
  return (
    <div className="w-full flex flex-col gap-5 p-5">
      <h3 className="font-medium text-white text-3xl md:py-5 md:text-5xl text-center">
        Title Sponsor
      </h3>

      <div className="flex justify-center items-center gap-x-20 gap-y-10 flex-wrap">
        <img
          src="/sponsor/Grras Nagpur Logo (1).png"
          alt="Grras Nagpur"
          className="w-3/4 h-32 md:w-auto max-w-[250px] md:max-w-[300px]"
        />
      </div>
    </div>
  );
};

export default TitleSponsor;
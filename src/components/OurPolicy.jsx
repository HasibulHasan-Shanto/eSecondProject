import React from "react";
import Image from "../components/Image";
import exchangeIcon from "../assets/exchange_icon.png";
import qualityIcon from "../assets/quality_icon.png";
import supportIcon from "../assets/support_img.png";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div className="">
        <Image
          className={"w-12 m-auto mb-5"}
          imgSrc={exchangeIcon}
          imgAlt={exchangeIcon}
        />
        <p className="font-semibold text-center">Easy Exchange Policy</p>
        <p className="text-gray-400 text-center">We offer hassle free exchange policy</p>
      </div>
      <div className="">
        <Image
          className={"w-12 m-auto mb-5"}
          imgSrc={qualityIcon}
          imgAlt={qualityIcon}
        />
        <p className="font-semibold text-center">7 Days Return Policy</p>
        <p className="text-gray-400 text-center">We provide 7 days free return policy</p>
      </div>
      <div className="">
        <Image
          className={"w-12 m-auto mb-5"}
          imgSrc={supportIcon}
          imgAlt={supportIcon}
        />
        <p className="font-semibold text-center">Best Customer Support</p>
        <p className="text-gray-400 text-center">We provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default OurPolicy;

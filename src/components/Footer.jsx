import React from "react";
import Image from "../components/Image";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className="">
          <Image className={"mb-5 w-32"} imgSrc={logo} imgAlt={logo} />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a gallery of type
            and scrambled it to make a type specimen book
          </p>
        </div>
        <div className="text-xl font-medium mb-5">
          <p>COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+8801912379742</li>
            <li>contact@forever.com</li>
          </ul>
        </div>
      </div>
      <div className="">
        <hr className="text-gray-400"/>
        <p className="py-5 text-sm text-center">
            Copyright 2025@ forever.com - All Right Reserved .
        </p>
      </div>
    </div>
  );
};

export default Footer;

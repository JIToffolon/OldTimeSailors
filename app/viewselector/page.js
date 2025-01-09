import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { Selector } from "../components/Selector";
import {
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import Link from "next/link";
import favicon from "../../public/assets/favicon.ico";
import backgroundImage from "../../public/assets/background.webp";
import "../globals.css";



export const metadata = {
  title: "Tickets - Old Time Sailors",
  description: "Choose your view option",
  other: {
    link: [
      {
        rel: "preload",
        href: "/assets/dibujo.webp",
        as: "image",
        type: "image/webp",
      },
    ],
  },
};

const ViewSelector = () => {
  const socialIconClasses = "text-white text-xl md:text-2xl lg:text-4xl";
  const socialButtonClasses = "p-2 rounded-full";

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-between items-center px-4 py-6 space-y-4"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-2 md:space-x-4">
          <Image
            src={favicon}
            alt="Old Time Sailors Logo"
            width={70}
            height={70}
            className="rounded-full w-[70px] h-[70px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px]"
            priority
          />
          <div className="bg-[#1b344a] text-[#d22a4e] px-2 py-1 rounded-lg">
            <h1 className="text-lg font-times md:text-4xl lg:text-6xl">
              TICKETS
            </h1>
          </div>
        </div>

        <div className="flex space-x-2 md:space-x-4">
          {[
            { href: "/contact", icon: FaEnvelope, bgColor: "bg-[#d22a4e]" },
            { href: "/whatsapp", icon: FaWhatsapp, bgColor: "bg-[#1b344a]" },
            { href: "/instagram", icon: FaInstagram, bgColor: "bg-[#d22a4e]" },
            { href: "/facebook", icon: FaFacebook, bgColor: "bg-[#1b344a]" },
          ].map(({ href, icon: Icon, bgColor }) => (
            <Link
              key={href}
              href={href}
              className={`${bgColor} ${socialButtonClasses}`}
            >
              <Icon className={socialIconClasses} />
            </Link>
          ))}
        </div>
      </div>
       <Selector/>
      {/* Footer */}
      <div className="text-center py-4">
        <p className="text-[#1b344a] font-bold">OLD TIME SAILORS LTD. ®</p>
      </div>
    </div>
  );
};

export default ViewSelector;

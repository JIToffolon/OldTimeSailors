import React from "react";
import Image from "next/image";
import {
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import Link from "next/link";
import favicon from "../../public/assets/favicon.ico";
import backgroundImage from "../../public/assets/background.webp";
import blueFrame from "../../public/assets/blue-frame.png";
import redFrame from "../../public/assets/red-frame.png";
import dibujoTicket from "../../public/assets/dibujo.webp";
import "../globals.css";

const TicketViewSelectorMobile = () => {
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

      {/* Main Content */}
      <div className="w-full font-times flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex flex-col space-y-8 w-full lg:w-[1000px] lg:h-[550px] items-center lg:justify-center lg:ml-20">
          {/* MAP  */}
          <Link
            href="/tickets/map"
            className="w-full max-w-[420px] lg:max-w-[620px]"
          >
            <div className="relative">
              <Image
                src={blueFrame}
                alt="Map Option"
                className="w-full h-auto"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h2 className="text-[#d22a4e] text-2xl lg:text-4xl font-bold">
                  VIEW GIGS ON
                </h2>
                <h2 className="text-[#1b344a] text-7xl lg:text-9xl font-bold">
                  MAP
                </h2>
              </div>
            </div>
          </Link>

          {/* CALENDAR  */}
          <Link
            href="/tickets/calendar"
            className="w-full max-w-[420px] lg:max-w-[620px]"
          >
            <div className="relative">
              <Image
                src={redFrame}
                alt="Calendar Option"
                className="w-full h-auto"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h2 className="text-[#1b344a] text-2xl lg:text-4xl font-bold">
                  VIEW GIGS ON
                </h2>
                <h2 className="text-[#d22a4e] text-5xl lg:text-7xl font-bold">
                  CALENDAR
                </h2>
              </div>
            </div>
          </Link>
        </div>

        <div className="w-full  flex justify-center">
          <Image
            src={dibujoTicket}
            alt="Dibujo"
            className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[1000px] lg:h-[auto]"
            loading="lazy"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-4">
        <p className="text-[#1b344a] font-bold">OLD TIME SAILORS LTD. ®</p>
      </div>
    </div>
  );
};

export default TicketViewSelectorMobile;

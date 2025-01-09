import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import backgroundImage from "../../public/assets/background.webp";
import favicon from "../../public/assets/favicon.ico";
import {
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const MobileS = dynamic(
  () => import("../components/MobileS").then((mod) => mod.default),
  {
    ssr: true,
  }
);
const MobileM = dynamic(
  () => import("../components/MobileM").then((mod) => mod.default),
  {
    ssr: true,
  }
);
const MobileL = dynamic(
  () => import("../components/MobileL").then((mod) => mod.default),
  {
    ssr: true,
  }
);
const Tablet = dynamic(
  () => import("../components/Tablet").then((mod) => mod.default),
  {
    ssr: true,
  }
);
const Laptop = dynamic(
  () => import("../components/Laptop").then((mod) => mod.default),
  {
    ssr: true,
  }
);
const LaptopL = dynamic(
  () => import("../components/LaptopL").then((mod) => mod.default),
  {
    ssr: true,
  }
);

const SocialIcons = memo(({ socialIconClasses, socialButtonClasses }) => {
  const socialLinks = [
    { href: "/contact", icon: FaEnvelope, bgColor: "bg-[#d22a4e]" },
    { href: "/whatsapp", icon: FaWhatsapp, bgColor: "bg-[#1b344a]" },
    { href: "/instagram", icon: FaInstagram, bgColor: "bg-[#d22a4e]" },
    { href: "/facebook", icon: FaFacebook, bgColor: "bg-[#1b344a]" },
  ];

  return (
    <div className="flex space-x-2 md:space-x-4 lg:space-x-1">
      {socialLinks.map(({ href, icon: Icon, bgColor }) => (
        <Link
          key={href}
          href={href}
          className={`${bgColor} ${socialButtonClasses}`}
        >
          <Icon className={`${socialIconClasses} lg:text-[20px]`} />
        </Link>
      ))}
    </div>
  );
});

const FamilyTemplate = () => {
  const socialIconClasses = "text-white text-xl md:text-2xl lg:text-4xl";
  const socialButtonClasses = "p-2 rounded-full";
  return (
    <>
      {/* Contenedor del background */}
      <div className="fixed inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          priority
          className="object-cover"
          quality={75}
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col justify-between items-center">
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-2 md:space-x-4">
            <Image
              src={favicon}
              alt="Old Time Sailors Logo"
              width={70}
              height={70}
              className="rounded-full w-[70px] h-[70px] md:w-[100px] md:h-[100px] lg:w-[140px] lg:h-[140px] lg:z-10"
              priority={true}
            />
            <div className="bg-[#1b344a] text-[#d22a4e] px-2 py-1 rounded-lg lg:hidden">
              <h1 className="text-lg font-times md:text-4xl lg:text-6xl">
                TICKETS
              </h1>
            </div>
          </div>

          <SocialIcons
            socialIconClasses={socialIconClasses}
            socialButtonClasses={socialButtonClasses}
          />
        </div>
        <div className="flex-grow w-full">
          {/* Mobile S - 320px */}
          <div className="block min-[375px]:hidden">
            <div className="w-[320px] min-h-screen relative mx-auto">
              <MobileS />
            </div>
          </div>

          {/* Mobile M - 375px */}
          <div className="hidden min-[375px]:block min-[425px]:hidden w-full">
            <div className="w-[375px] min-h-screen relative mx-auto">
              <MobileM />
            </div>
          </div>

          {/* Mobile L - 425px */}
          <div className="hidden min-[425px]:block min-[768px]:hidden">
            <div className="w-[425px] min-h-screen relative mx-auto">
              <MobileL />
            </div>
          </div>

          {/* Tablet - 768px */}
          <div className="hidden min-[768px]:block min-[1024px]:hidden">
            <div className="w-[768px] min-h-screen relative mx-auto">
              <Tablet />
            </div>
          </div>

          {/* Laptop - 1024px */}
          <div className="hidden min-[1024px]:block min-[1440px]:hidden">
            <div className="w-[1024px] min-h-screen relative mx-auto">
              <Laptop />
            </div>
          </div>

          {/* Laptop L - 1440px */}
          <div className="hidden min-[1440px]:block">
            <div className="w-[1440px] min-h-screen relative mx-auto">
              <LaptopL />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FamilyTemplate;

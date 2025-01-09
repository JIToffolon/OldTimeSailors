import React from "react";
import Image from "next/image";
import Link from "next/link";
import buyTickets from "../../public/assets/buytickets.webp";
import recuadroVideo from "../../public/assets/family/recuadrovideo.webp";
import fotoFamily1 from "../../public/assets/family/fotoFamily1.webp";
import fotoFamily2 from "../../public/assets/family/fotoFamily2.webp";
import fotoFamily3 from "../../public/assets/family/fotoFamily3.webp";
import ancla from "../../public/assets/family/ancla.webp";
import flecha from "../../public/assets/family/flecha.webp";
import dibujo from "../../public/assets/family/dibujo.webp";
import { FaCalendar, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

 const Tablet = () => {
  return (
    <>
      {/* Contenedor principal con borde */}
      <div className="border border-[#9e8f73] p-4 mx-6 relative">
        <div className="text-left font-times">
          <h1 className="font-bold">
            <span className="text-[#1b344a] text-[40px]">
              OLD TIME SAILORS{" "}
            </span>
            <span className="text-[#d22a4e] text-[40px]">AT</span>
            <br />
            <span className="text-[#d22a4e] text-[40px]"> NEWQUAY ORCHARD</span>
          </h1>
          <p className="text-gray-700 text-[20px]">NEWQUAY</p>

          <div className="absolute w-64 top-20 -right-4">
            <div className="bg-[#1b344a] p-6 rounded-3xl">
              <h3 className="text-[#d22a4e] text-[25px] font-bold font-times leading-tight">
                MORE ABOUT
                <br />
                THE VENUE
              </h3>
              <div className="mt-0.5">
                <p className="text-white text-[12px] leading-tight">
                  A rural escape built by the community, for the community in
                  the heart of Newquay.
                </p>
                <p className="text-white text-[12px] leading-tight">
                  A venue for the whole family with seating options.
                </p>
                <Link href="/venue-info">
                  <p className="text-white text-[12px] mt-1 font-bold underline">
                    CONTACT DE VENUE FOR + INFO
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-dashed border-[#9e8f73] my-4" />

        {/* Event info */}
        <div className="space-y-6">
          <div className="flex flex-row gap-5">
            <div className="space-y-3">
              {[
                { icon: FaLocationDot, text: "Newquay Orchard, Newquay" },
                { icon: FaCalendar, text: "Saturday, May 12, 2025" },
                { icon: FaClock, text: "7:30PM to 10:30PM" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-[#1b344a] font-semibold"
                >
                  <Icon className="text-[12px]" />
                  <span className="text-[12px]">{text}</span>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="w-full ml-2">
                <Image
                  src={buyTickets}
                  alt="Buy Tickets"
                  className="w-[200px] h-[80px] cursor-pointer"
                  priority={true}
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-start justify-center text-amber-100">
                <h3 className="ml-6 text-[27px] font-times">BUY TICKETS</h3>
              </div>
            </div>
          </div>

          <p className="text-sm text-left text-[#1b344a] leading-8">
            You are invited to board the Sailorette and join the plentiful crew,
            'The Old Time Sailors', for a night of footstomping, dancing and
            singing! You will be sailing back to the 19th century for an
            immersive experience of traditional seafaring music performed in a
            way you have never seen before. The Motley Crew and their plethora
            of traditional and eclectic instruments will take you back to the
            time of clashing tankards, and drunken debauchery. Sing and dance
            along like a drunken sailor as the band perform centuries old folk
            and shanty songs. Fancy dress is encouraged, so pull out your best
            seafaring garments me hearties and join the festivities.
          </p>
        </div>
      </div>

      {/* Media section */}
      <div className="w-full h-[auto] relative">
        <div className="relative h-[220px]">
          {/* Video */}
          <div className="absolute -top-10 -left-4 w-[480px] h-[280px]">
            <Image
              src={recuadroVideo}
              alt="Video frame"
              width={460}
              height={100}
              priority={true}
            />
            <div className="absolute inset-0 flex items-center justify-center -mb-2">
              <video
                controls
                preload="none"
                poster={"/assets/thumbnailvideo.webp"}
                className="-ml-[15px] object-cover w-[84%] border-[#1b344a] border-[10px] rounded-sm z-20 shadow-gray-500 shadow-[2px_-2px_5px_rgba(0,0,0,0.3)]
                hover:opacity-100 [&::-webkit-media-controls]:opacity-0 hover:[&::-webkit-media-controls]:opacity-100 [&::-webkit-media-controls]:transition-opacity"
              >
                <source src="/assets/family/video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Photo 2 */}
          <div className="absolute right-[8px] -top-12 w-[350px] z-10">
            <Image
              src={fotoFamily2}
              alt="Musicians"
              width={140}
              height={140}
              className="w-full shadow-gray-500 shadow-[3px_3px_3px_rgba(0,0,0,0.3)]"
              loading="lazy"
            />
          </div>
        </div>

        {/* Lower photos */}
        <div className="relative h-[750px] mx-5 mb-4">
          <div className="absolute -top-[14px] left-[0px] w-1/2 z-20">
            <Image
              src={fotoFamily1}
              alt="Performance"
              width={300}
              height={280}
              className="z-10 h-[320px] shadow-gray-500 shadow-[0px_3px_20px_rgba(0,0,0,0.3)] ml-2 mt-4"
              loading="lazy"
            />
            <div className="relative">
              <Image
                src={flecha}
                alt="More gigs"
                width={300}
                height={300}
                className="absolute -left-[18px] top-[80px] w-[290px] h-[110px]"
                loading="lazy"
              />
              <p className="absolute inset-0 font-times font-bold text-amber-50 left-11 top-[110px] text-[35px]">
                MORE GIGS
              </p>
            </div>
          </div>

          <div className="absolute -right-[15px] top-[100px] w-[450px] h-[200px] z-10">
            <Image
              src={fotoFamily3}
              alt="Crowd"
              width={400}
              height={400}
              className="w-full h-auto shadow-[5px_0px_5px_rgba(0,0,0,0.3)]"
              loading="lazy"
            />
          </div>
        </div>

        {/* Title */}
        <div className="absolute -bottom-[10px]  left-[15px] z-10 ">
          <div className="flex flex-row items-center gap-3">
            <div className="flex flex-col leading-none mb-10">
              <p className="text-[#1b3441] text-[80px] font-bold font-times">
                FAMILY
              </p>
              <p className="text-[#1b344a] text-[80px] font-bold font-times">
                SHOW
              </p>
            </div>
            <div className="text-[#d22a4e] text-[15px] flex flex-col">
              <Image
                src={ancla}
                alt="Anchor"
                width={60}
                height={60}
                className="ml-[45px] mb-4 rotate-12"
                loading="lazy"
              />
              <div className="-ml-20 mb-5 font-bold font-times leading-none tracking-widest">
                <p>A TRADITIONAL SAILOR SHOW,</p>
                <p>SING ALONG AND DANCE WITH US!</p>
              </div>
            </div>
          </div>
        </div>

        <Image
          src={dibujo}
          alt="Background drawing"
          width={300}
          height={300}
          className="absolute bottom-[0px] right-[0px] z-20"
          loading="lazy"
        />
      </div>
    </>
  );
};

export default Tablet;
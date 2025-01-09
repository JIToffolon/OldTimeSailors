import React from "react";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
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

const VideoComponent = memo(() => (
  <div className="absolute left-1 -top-2 w-[228px] h-[110px]">
    <Image
      src={recuadroVideo}
      alt="Video frame"
      width={228}
      height={125}
      quality={50}
      className="transform-gpu w-[228px] h-[125px]"
      priority={true}
      placeholder="blur"
      sizes="(max-width: 375px) 228px"
    />

    <div className="absolute inset-0 flex items-center justify-center">
      <video
        controls
        preload="none"
        poster={"/assets/thumbnailvideo.webp"}
        className="w-[80%] h-[90%] mt-3 -ml-5 object-cover border-[#1b344a] border-[6px] rounded-sm z-20 shadow-gray-500 shadow-[2px_-2px_5px_rgba(0,0,0,0.3)]
                    hover:opacity-100 [&::-webkit-media-controls]:opacity-0 hover:[&::-webkit-media-controls]:opacity-100 [&::-webkit-media-controls]:transition-opacity"
      >
        <source src="/assets/family/video.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
));

const EventDescription = memo(() => (
  <div className="text-[12px] pb-5 text-[#1b344a]">
    <p className="leading-relaxed [&:not(:last-child)]:mb-0">
      You are invited to board the Sailorette and join the plentiful crew, 'The
      Old Time Sailors', for a night of footstomping, dancing and singing!
    </p>
    <p className="leading-relaxed [&:not(:last-child)]:mb-0">
      You will be sailing back to the 19th century for an immersive experience
      of traditional seafaring music performed in a way you have never seen
      before.
    </p>
    <p className="leading-relaxed [&:not(:last-child)]:mb-0">
      The Motley Crew and their plethora of traditional and eclectic instruments
      will take you back to the time of clashing tankards, and drunken
      debauchery. Sing and dance along like a drunken sailor as the band perform
      centuries old folk and shanty songs.
    </p>
    <p className="leading-relaxed">
      Fancy dress is encouraged, so pull out your best seafaring garments me
      hearties and join the festivities.
    </p>
  </div>
));

const MobileS = () => {
  return (
    <>
      <div className="relative -bottom-[10px]">
        <div className="relative w-full h-full my-[10px]">
          {/* Contenedor principal con borde */}
          <div className="border border-[#9e8f73] p-2 m-4 relative">
            <div className="text-left font-times">
              <h1 className="font-bold">
                <span className="text-[#1b344a] text-xl">
                  OLD TIME SAILORS{" "}
                </span>{" "}
                <span className="text-[#d22a4e] text-xl">AT</span>
                <br />
                <span className="text-[#d22a4e] text-xl">NEWQUAY ORCHARD</span>
              </h1>
              <p className="text-gray-700 text-sm">NEWQUAY</p>
            </div>

            <div className="border-t-2 border-dashed border-[#9e8f73] my-4" />

            <div className="absolute -right-[12px] top-20 w-[160px]">
              <div className="bg-[#1b344a] p-3 py-4 rounded-2xl">
                <h3 className="text-[#d22a4e] text-[15px] font-bold font-times leading-tight">
                  MORE ABOUT
                  <br />
                  THE VENUE
                </h3>
                <div className="mt-0.5">
                  <p className="text-white text-[7px] leading-tight">
                    A rural escape built by the community, for the community in
                    the heart of Newquay.
                  </p>
                  <p className="text-white text-[7px] leading-tight">
                    A venue for the whole family with seating options.
                  </p>
                  <Link href="/venue-info">
                    <p className="text-white text-[8px] mt-1 font-bold underline">
                      CONTACT DE VENUE FOR + INFO
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Event info */}
            <div className="space-y-6">
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
                    <Icon className="text-[10px]" />
                    <span className="text-[7.5px]">{text}</span>
                  </div>
                ))}

                <div className="relative">
                  <div className="w-full">
                    <Image
                      src={buyTickets}
                      alt="Buy Tickets"
                      className="w-[100px] h-[40px] cursor-pointer"
                      priority={true}
                      quality={80}
                    />
                  </div>
                  <div className="absolute inset-0 flex flex-col items-start justify-center text-amber-100">
                    <Link href={"/"}>
                      <h3 className="ml-5 text-[10px] font-times">
                        BUY TICKETS
                      </h3>
                    </Link>
                  </div>
                </div>
                <EventDescription />
              </div>
            </div>
          </div>

          {/* Media section */}
          <div className="w-full h-[400px] relative -top-5 -left-2">
            <div className="relative h-[200px]">
              {/* Video */}
              <VideoComponent />

              {/* Photo 2 */}
              <div className="absolute -right-1 -top-4 w-[130px] h-[130px] z-10">
                <Image
                  src={fotoFamily2}
                  alt="Musicians"
                  width={130}
                  height={130}
                  quality={75}
                  className="w-[130px] h-[130px] shadow-gray-500 shadow-[3px_3px_3px_rgba(0,0,0,0.3)]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Lower photos */}
            <div className="relative h-[200px] bottom-8">
              <div className="absolute left-7 -top-16 w-1/2 z-20">
                <Image
                  src={fotoFamily1}
                  alt="Performance"
                  width={145}
                  height={145}
                  quality={75}
                  className="w-[145px] h-[145px] z-10 shadow-gray-500 shadow-[0px_3px_3px_rgba(0,0,0,0.3)]"
                  loading="lazy"
                />
                <div className="relative">
                  <Image
                    src={flecha}
                    alt="More gigs"
                    width={145}
                    height={40}
                    quality={75}
                    className="absolute right-8 -bottom-12 w-[145px] h-[40px]"
                    loading="lazy"
                  />
                  <Link href={"/"}>
                    <p className="absolute inset-0 font-times font-bold text-amber-50 left-6 top-4 text-[15px]">
                      MORE GIGS
                    </p>
                  </Link>
                </div>
              </div>

              <div className="absolute -right-1 -top-11 w-[156px] h-[156px] z-10">
                <Image
                  src={fotoFamily3}
                  alt="Crowd"
                  width={156}
                  height={154}
                  quality={75}
                  className="w-[156px] h-[156px] shadow-[5px_0px_5px_rgba(0,0,0,0.3)]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Title */}
            <div className="absolute bottom-6 left-4 z-20">
              <div className="flex flex-row items-center gap-3">
                <div className="flex flex-col leading-none">
                  <p className="text-[#1b344a] text-[35px] font-bold font-times">
                    FAMILY
                  </p>
                  <p className="text-[#1b344a] text-[35px] font-bold font-times">
                    SHOW
                  </p>
                </div>
                <div className="text-[#d22a4e] text-[8px] flex flex-col">
                  <Image
                    src={ancla}
                    alt="Anchor"
                    width={22}
                    height={26}
                    quality={75}
                    className="w-[22px] h-[26px] -ml-[5px] rotate-12"
                    loading="lazy"
                  />
                  <div className="-ml-[40px] mt-[19px] leading-none tracking-widest font-bold font-times">
                    <p>A TRADITIONAL SAILOR SHOW,</p>
                    <p>SING ALONG AND DANCE WITH US!</p>
                  </div>
                </div>
              </div>
            </div>

            <Image
              src={dibujo}
              alt="Background drawing"
              width={150}
              height={110}
              quality={75}
              className="w-[150px] h-[110px] absolute bottom-[18px] -right-2 z-10"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileS;

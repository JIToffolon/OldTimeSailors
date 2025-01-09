import React from "react";
import { memo } from "react";
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

const VideoComponent = memo(() => (
  <div className="absolute -left-0 -top-2.5 w-[265px] h-[140px]">
    <Image
      src={recuadroVideo}
      alt="Video frame"
      width={250}
      height={100}
      quality={50}
      className="transform-gpu"
      priority={true}
      placeholder="blur"
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

const MobileM = () => (
  <>
    {/* Contenedor principal con borde */}
    <div className="border border-[#9e8f73] p-4 mx-4 relative">
      <div className="text-left font-times">
        <h1 className="font-bold">
          <span className="text-[#1b344a] text-xl">OLD TIME SAILORS </span>
          <span className="text-[#d22a4e] text-xl">AT</span>
          <br />
          <span className="text-[#d22a4e] text-xl">NEWQUAY ORCHARD</span>
        </h1>
        <p className="text-gray-700 text-sm">NEWQUAY</p>
      </div>

      <div className="border-t-2 border-dashed border-[#9e8f73] my-4" />

      <div className="absolute -right-[12px] top-20 w-44">
        <div className="bg-[#1b344a] p-3 rounded-2xl">
          <h3 className="text-[#d22a4e] text-lg font-bold font-times leading-tight">
            MORE ABOUT
            <br />
            THE VENUE
          </h3>
          <div className="mt-0.5">
            <p className="text-white text-[9px] leading-tight">
              A rural escape built by the community, for the community in the
              heart of Newquay.
            </p>
            <p className="text-white text-[9px] leading-tight">
              A venue for the whole family with seating options.
            </p>
            <Link href="/venue-info">
              <p className="text-white text-[9px] mt-1 font-bold underline">
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
              <span className="text-[9px]">{text}</span>
            </div>
          ))}

          <div className="relative">
            <div className="w-full">
              <Image
                src={buyTickets}
                alt="Buy Tickets"
                className="w-[130px] h-[40px] cursor-pointer"
                width={130}
                height={40}
                priority={true}
                quality={80}
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-start justify-center text-amber-100">
              <Link href={"/"}>
                <h3 className="ml-6 text-sm font-times">BUY TICKETS</h3>
              </Link>
            </div>
          </div>
          <EventDescription />
        </div>
      </div>
    </div>

    {/* Media section */}
    <div className="w-full h-[auto] relative -top-5 -left-2 mb-10">
      <div className="relative h-[200px]">
        {/* Video */}
        <VideoComponent />
        {/* Photo 2 */}
        <div className="absolute -right-[2px] -top-4 w-[155px] h-[155px] z-10">
          <Image
            src={fotoFamily2}
            alt="Musicians"
            width={155}
            height={155}
            quality={75}
            className="w-[155px] h-[155px] shadow-gray-500 shadow-[3px_3px_3px_rgba(0,0,0,0.3)]"
            loading="lazy"
          />
        </div>
      </div>

      {/* Lower photos */}
      <div className="relative h-[200px]">
        <div className="absolute left-[27px] -top-[70px] w-1/2 z-20">
          <Image
            src={fotoFamily1}
            alt="Performance"
            width={160}
            height={160}
            quality={75}
            className="w-[160px] h-[160px] z-10 shadow-gray-500 shadow-[0px_3px_3px_rgba(0,0,0,0.3)]"
            loading="lazy"
          />
          <div className="relative">
            <Image
              src={flecha}
              alt="More gigs"
              width={160}
              height={50}
              quality={75}
              className="w-[160px] h-[50px] absolute right-[40px] -bottom-[60px]"
              loading="lazy"
            />
            <Link href={"/"}>
              <p className="absolute inset-0 font-times font-bold text-amber-50 left-[22px] top-[20px] text-[20px]">
                MORE GIGS
              </p>
            </Link>
          </div>
        </div>

        <div className="absolute -right-[4px] bottom-[59px] w-[197px] h-[190px] z-10">
          <Image
            src={fotoFamily3}
            alt="Crowd"
            width={400}
            height={400}
            quality={75}
            className="w-full h-auto shadow-[5px_0px_5px_rgba(0,0,0,0.3)]"
            loading="lazy"
          />
        </div>
      </div>

      {/* Title */}
      <div className="absolute -bottom-[38px] left-[20px] z-10">
        <div className="flex flex-row items-center gap-3">
          <div className="flex flex-col leading-none">
            <p className="text-[#1b344a] text-[40px] font-bold font-times">
              FAMILY
            </p>
            <p className="text-[#1b344a] text-[40px] font-bold font-times">
              SHOW
            </p>
          </div>
          <div className="text-[#d22a4e] text-[9px] flex flex-col">
            <Image
              src={ancla}
              alt="Anchor"
              width={30}
              height={35}
              quality={75}
              className="w-[30px] h-[35px] mb-3 rotate-12"
              loading="lazy"
            />
            <div className="-ml-[44px] font-bold font-times leading-none tracking-widest">
              <p>A TRADITIONAL SAILOR SHOW,</p>
              <p>SING ALONG AND DANCE WITH US!</p>
            </div>
          </div>
        </div>
      </div>

      <Image
        src={dibujo}
        alt="Background drawing"
        width={160}
        height={115}
        quality={75}
        className="w-[160px] h-[115px] absolute -bottom-[55px] -right-[2px] z-20"
        loading="lazy"
      />
    </div>
  </>
);

export default MobileM;

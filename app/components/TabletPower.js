import React from "react";
import Image from "next/image";
import Link from "next/link";
import buyTickets from "../../public/assets/buytickets.webp";
import recuadroVideo from "../../public/assets/power/recuadrovideo.webp";
import power1 from "../../public/assets/power/power1.webp";
import power2 from "../../public/assets/power/power2.webp";
import power3 from "../../public/assets/power/power3.webp";
import flecha from "../../public/assets/power/flecha.webp";
import dibujo from "../../public/assets/power/dibujo.webp";
import { FaCalendar, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const TabletPower = () => {
  return (
    <>
      {/* Contenedor principal con borde */}
      <div className="border border-[#e9ddc7] p-4 mx-6 relative">
        <div className="text-left font-times">
          <h1 className="font-bold">
            <span className="text-[#d22a4e] text-[40px]">
              OLD TIME SAILORS{" "}
            </span>
            <span className="text-[#e9ddc7] text-[40px]">AT</span>
            <br />
            <span className="text-[#e9ddc7] text-[40px]"> NEWQUAY ORCHARD</span>
          </h1>
          <p className="text-[#d22a4e] text-[20px]">NEWQUAY</p>

          <div className="absolute w-64 top-20 -right-4">
            <div className="bg-[#e9ddc7] p-6 rounded-3xl">
              <h3 className="text-[#d22a4e] text-[25px] font-bold font-times leading-tight">
                MORE ABOUT
                <br />
                THE VENUE
              </h3>
              <div className="mt-0.5">
                <p className="text-[#1b344a] text-[12px] leading-tight">
                  A rural escape built by the community, for the community in
                  the heart of Newquay.
                </p>
                <p className="text-[#1b344a] text-[12px] leading-tight">
                  A venue for the whole family with seating options.
                </p>
                <Link href="/venue-info">
                  <p className="text-[#1b344a] text-[12px] mt-1 font-bold underline">
                    CONTACT DE VENUE FOR + INFO
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-dashed border-[#e9ddc7] my-4" />

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
                  className="flex items-center gap-2 text-[#e9ddc7] font-semibold"
                >
                  <Icon className="text-[12px] text-[#d22a4e]" />
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
                <Link href={"/"}>
                  <h3 className="ml-6 text-[27px] font-times">BUY TICKETS</h3>
                </Link>
              </div>
            </div>
          </div>

          <p className="text-[14px] text-left text-[#e9ddc7] leading-8">
            Heave ho and up she rises! Cast aside your compass, throw your maps
            overboard and join the mutinous crew of The Old Time Sailor as they
            set sail for the wild uninhabited islands of Irish Punk, Shanty
            Punk, Polka Rock, Romani Punk, Dark Cabaret, and Twisted Circus!
            'Rock and row' with our 21 strong crew of rebellious musicians as
            the navigate a voyage through the thrashing seas of Hevay Metal and
            Hard Rock on a genre bending adventure into uncharted waters, join
            in the Wall of Death and thrash it out with your shipmates. Get
            ready for vigorous vocals, emphatic energy, mosh pits and head
            banging: we play it live and we play it loud, but as always with The
            Old Time Sailors... be prepared to expect the unexpected!
          </p>
        </div>
      </div>

      {/* Media section */}
      <div className="w-full h-[auto] relative -bottom-[35px] mb-[50px]">
        <div className="relative h-[220px]">
          {/* Video */}
          {/* Contenedor principal */}
          <div className="relative w-[550px] h-[230px] -left-[8px] z-30">
            {/* Video primero en el DOM pero con z-index menor */}
            <div className="absolute inset-0  flex items-center justify-center z-40">
              <video
                controls
                preload="none"
                poster={"/assets/thumbnailvideoP.webp"}
                className="w-[70%] h-[98%] absolute -top-[19px] left-[41px] object-cover rounded-sm]  hover:opacity-100 [&::-webkit-media-controls]:opacity-0 hover:[&::-webkit-media-controls]:opacity-100 [&::-webkit-media-controls]:transition-opacity"
              >
                <source src="/assets/power/video.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Recuadro después en el DOM y con z-index mayor */}
            <div className="absolute inset-0 z-10 -top-[110px] -left-[15px]">
              <Image
                src={recuadroVideo}
                alt="Video frame"
                width={500}
                height={200}
                className="w-[500px] h-[371px]"
                priority={true}
              />
            </div>
          </div>

          {/* Photo 2 */}
          <div className="absolute right-[8px] -top-12 w-[350px] z-10">
            <Image
              src={power2}
              alt="Musicians"
              width={140}
              height={140}
              className="w-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* Lower photos */}
        <div className="relative h-[750px] mx-5 mb-4">
          <div className="absolute -top-[14px] left-[0px] w-1/2 z-20">
            <Image
              src={power1}
              alt="Performance"
              width={300}
              height={280}
              className="z-10 h-[320px] ml-2 mt-4"
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
              <p className="absolute inset-0 font-times font-bold text-[#1b344a] left-11 top-[110px] text-[35px]">
                MORE GIGS
              </p>
            </div>
          </div>

          <div className="absolute -right-[15px] top-[100px] w-[450px] h-[200px] z-10">
            <Image
              src={power3}
              alt="Crowd"
              width={400}
              height={400}
              className="w-full h-auto shadow-[5px_0px_5px_rgba(0,0,0,0.3)]"
              loading="lazy"
            />
          </div>
        </div>

        {/* Title */}
        <div className="absolute -bottom-[10px]  left-[15px] z-30 ">
          <div className="flex flex-row items-center gap-3">
            <div className="flex flex-col leading-none mb-10">
              <p className="text-[#d22a4e] text-[80px] font-bold font-times">
                POWER
              </p>
              <p className="text-[#d22a4e] text-[80px] font-bold font-times">
                SHOW
              </p>
            </div>
            <div className="text-[#e9ddc7] text-[17px] flex flex-col">
              <div className="-ml-[65px] mt-[70px] font-bold font-times leading-none tracking-widest">
                <p>AN UPBEAT, DARKER SHOW. GET READY TO</p>
                <p>PARTY BELOW DECK LIKE A PIRATE!</p>
              </div>
            </div>
          </div>
        </div>

        <Image
          src={dibujo}
          alt="Background drawing"
          width={300}
          height={300}
          className="absolute -bottom-[20px] -right-[15px] z-20"
          loading="lazy"
        />
      </div>
    </>
  );
};

export default TabletPower;
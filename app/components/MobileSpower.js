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

 const MobileSpower = () => {
  return (
    <>
      <div className="relative -bottom-[10px]">
        <div className="relative w-full h-full my-[10px]">
          {/* Contenedor principal con borde */}
          <div className="border border-[#e9ddc7] p-2 m-4 relative">
            <div className="text-left font-times">
              <h1 className="font-bold">
                <span className="text-[#d22a4e] text-xl">
                  OLD TIME SAILORS{" "}
                </span>{" "}
                <span className="text-[#e9ddc7] text-xl">AT</span>
                <br />
                <span className="text-[#e9ddc7] text-xl">NEWQUAY ORCHARD</span>
              </h1>
              <p className="text-[#d22a4e] text-sm">NEWQUAY</p>
            </div>

            <div className="border-t-2 border-dashed border-[#e9ddc7] my-4" />

            <div className="absolute -right-[12px] top-20 w-[160px]">
              <div className="bg-[#e9ddc7] p-3 py-4 rounded-2xl">
                <h3 className="text-[#d22a4e] text-[15px] font-bold font-times leading-tight">
                  MORE ABOUT
                  <br />
                  THE VENUE
                </h3>
                <div className="mt-0.5">
                  <p className="text-[#1b344a] text-[7px] leading-tight">
                    A rural escape built by the community, for the community in
                    the heart of Newquay.
                  </p>
                  <p className="text-[#1b344a] text-[7px] leading-tight">
                    A venue for the whole family with seating options.
                  </p>
                  <Link href="/venue-info">
                    <p className="text-[#1b344a] text-[8px] mt-1 font-bold underline">
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
                    className="flex items-center gap-2 text-[#e9ddc7] font-semibold"
                  >
                    <Icon className="text-[10px] text-[#d22a4e]" />
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
                    />
                  </div>
                  <div className="absolute inset-0 flex flex-col items-start justify-center text-amber-100">
                    <h3 className="ml-5 text-[10px] font-times">BUY TICKETS</h3>
                  </div>
                </div>
              </div>

              <p className="text-[12px] pb-5 text-[#e9ddc7]">
                Heave ho and up she rises! Cast aside your compass, throw your
                maps overboard and join the mutinous crew of The Old Time Sailor
                as they set sail for the wild uninhabited islands of Irish Punk,
                Shanty Punk, Polka Rock, Romani Punk, Dark Cabaret, and Twisted
                Circus! 'Rock and row' with our 21 strong crew of rebellious
                musicians as the navigate a voyage through the thrashing seas of
                Hevay Metal and Hard Rock on a genre bending adventure into
                uncharted waters, join in the Wall of Death and thrash it out
                with your shipmates. Get ready for vigorous vocals, emphatic
                energy, mosh pits and head banging: we play it live and we play
                it loud, but as always with The Old Time Sailors... be prepared
                to expect the unexpected!
              </p>
            </div>
          </div>

          {/* Media section */}
          <div className="w-full h-[400px] relative -top-5 -left-2">
            <div className="relative h-[200px]">
              {/* Video */}
              {/* Contenedor principal */}
              <div className="relative w-[245px] h-[130px] -left-[5px]">
                {/* Video primero en el DOM pero con z-index menor */}
                <div className="absolute inset-0  flex items-center justify-center z-20">
                  <video
                    controls
                    preload="none"
                    poster={"/assets/thumbnailvideoP.webp"}
                    className="w-[70%] h-[80%] absolute -top-[7px] left-[26px] object-cover rounded-sm]
                    hover:opacity-100 [&::-webkit-media-controls]:opacity-0 hover:[&::-webkit-media-controls]:opacity-100 [&::-webkit-media-controls]:transition-opacity"
                  >
                    <source src="/assets/power/video.mp4" type="video/mp4" />
                  </video>
                </div>

                {/* Recuadro después en el DOM y con z-index mayor */}
                <div className="absolute inset-0 z-10 -top-[45px] left-[5px]">
                  <Image
                    src={recuadroVideo}
                    alt="Video frame"
                    width={215}
                    height={200}
                    className="h-[166px]"
                    priority={true}
                  />
                </div>
              </div>

              {/* Photo 2 */}
              <div className="absolute -right-1 -top-4 w-[130px] h-[130px] z-9">
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
            <div className="relative h-[200px] bottom-8">
              <div className="absolute left-7 -top-16 w-1/2 z-20">
                <Image
                  src={power1}
                  alt="Performance"
                  width={145}
                  height={118}
                  className="z-10 "
                  loading="lazy"
                />
                <div className="relative">
                  <Image
                    src={flecha}
                    alt="More gigs"
                    width={145}
                    height={110}
                    className="absolute right-8 -bottom-12 h-[40px]"
                    loading="lazy"
                  />
                  <p className="absolute inset-0 font-times font-bold text-[#1b344a] left-6 top-4 text-[15px]">
                    MORE GIGS
                  </p>
                </div>
              </div>

              <div className="absolute -right-1 -top-11 w-[156px] h-[154px] z-10">
                <Image
                  src={power3}
                  alt="Crowd"
                  width={200}
                  height={200}
                  className="w-full h-auto shadow-[5px_0px_5px_rgba(0,0,0,0.3)]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Title */}
            <div className="absolute bottom-6 left-4 z-30">
              <div className="flex flex-row items-center gap-3 ">
                <div className="flex flex-col leading-none ">
                  <p className="text-[#d22a4e] text-[35px] font-bold font-times">
                    POWER
                  </p>
                  <p className="text-[#d22a4e] text-[35px] font-bold font-times">
                    SHOW
                  </p>
                </div>
                <div className="text-[#e9ddc7] text-[7px] flex flex-col ">
                  <div className="-ml-[35px] mt-[45px] leading-none tracking-wider font-bold font-times">
                    <p>AN UPBEAT, DARKER SHOW. GET READY TO</p>
                    <p>PARTY BELOW DECK LIKE A PIRATE!</p>
                  </div>
                </div>
              </div>
            </div>

            <Image
              src={dibujo}
              alt="Background drawing"
              width={165}
              height={100}
              className="absolute -bottom-[5px] -right-[16px] z-20"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSpower;
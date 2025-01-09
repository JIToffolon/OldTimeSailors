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

const LaptopPower = () => {
  return (
    <>
      <div className="relative -bottom-[150px]">
        <div className="relative w-full h-full my-[50px]">
          {/* Contenedor principal con borde */}
          <div className="border border-[#e9ddc7] p-2 relative w-[650px] -right-[95px] -top-[310px]">
            <div className="text-left font-times px-10">
              <h1 className="font-bold leading-none">
                <span className="text-[#d22a4e] text-[30px]">
                  OLD TIME SAILORS{" "}
                </span>
                <span className="text-[#e9ddc7] text-[30px]">AT</span>
                <br />
                <span className="text-[#e9ddc7] text-[30px]">
                  {" "}
                  NEWQUAY ORCHARD
                </span>
              </h1>
              <p className="text-[#d22a4e] text-[20px]">NEWQUAY</p>
            </div>
            <div className="absolute w-72 top-[21px] -right-[75px] z-20">
              <div className="bg-[#e9ddc7] p-6 rounded-3xl ">
                <h3 className="text-[#d22a4e] text-[25px] font-bold font-times leading-none">
                  MORE ABOUT
                  <br />
                  THE VENUE
                </h3>
                <div className="mt-0.5 tracking-wide">
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
            <div className="border-t-2 border-dashed border-[#e9ddc7] my-4" />

            {/* Event info */}
            <div className="space-y-6 p-4">
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
                  <div className="w-full -ml-2">
                    <Image
                      src={buyTickets}
                      alt="Buy Tickets"
                      className="w-[200px] h-[80px] cursor-pointer"
                      priority={true}
                    />
                  </div>
                  <div className="absolute inset-0 flex flex-col items-start justify-center text-amber-100">
                    <Link href={"/"}>
                      <h3 className="ml-0.5 text-[27px] font-times">
                        BUY TICKETS
                      </h3>
                    </Link>
                  </div>
                </div>
              </div>

              <p className="text-sm text-left text-[#e9ddc7] leading-8 px-3">
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

          <div className="absolute right-[15px] -top-[230px] z-10">
            <Image
              src={power1}
              alt="Performance"
              width={200}
              height={200}
              className="w-[200px] h-[200px]"
              loading="lazy"
            />
          </div>
          {/* Photo 2 */}
          <div className="absolute right-[25px] -top-[35px] z-30">
            <Image
              src={power2}
              alt="Musicians"
              width={200}
              height={200}
              className="w-[290px]"
              loading="lazy"
            />
          </div>
          {/* Photo 3 */}
          <div className="absolute right-[275px] top-[230px] w-[380px] z-40">
            <Image
              src={power3}
              alt="Crowd"
              width={400}
              height={400}
              className="h-[360px] shadow-[5px_0px_5px_rgba(0,0,0,0.3)]"
              loading="lazy"
            />
          </div>
          <div className="absolute -right-[10px] bottom-[0px]">
            <Image
              src={dibujo}
              alt="Background drawing"
              width={300}
              height={300}
              className="w-[330px] h-[300px]"
              loading="lazy"
            />
          </div>
          <div className="absolute top-[150px] left-[40px] w-[410px] h-[280px] z-50">
            <Image
              src={recuadroVideo}
              alt="Video frame"
              width={430}
              height={100}
              priority={true}
            />
            <div className="absolute inset-0 top-[45px] -left-[10px] -right-[10px] flex items-center justify-center">
              <video
                controls
                preload="none"
                poster={"/assets/thumbnailvideoP.webp"}
                className="object-cover w-[75%] h-[75%] rounded-sm z-20  hover:opacity-100 [&::-webkit-media-controls]:opacity-0 hover:[&::-webkit-media-controls]:opacity-100 [&::-webkit-media-controls]:transition-opacity"
              >
                <source src="/assets/power/video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="relative">
            <Image
              src={flecha}
              alt="More gigs"
              width={300}
              height={300}
              className="absolute left-[25px] -top-[100px] w-[310px] h-[110px]"
              loading="lazy"
            />
            <p className="absolute inset-0 font-times font-bold text-[#1b344a] left-[90px] -top-[72px] text-[40px]">
              MORE GIGS
            </p>
          </div>
          {/* Title */}
          <div className="absolute -bottom-[190px]  left-[45px] z-10 ">
            <div className="flex flex-row items-center gap-3 mb-5">
              <div className="leading-none">
                <p className="text-[#d22a4e] text-[80px] font-bold font-times">
                  POWER
                </p>
                <p className="text-[#d22a4e] text-[80px] font-bold font-times">
                  SHOW
                </p>
              </div>
              <div className="text-[#e9ddc7] text-[20px] -mb-[95px] -ml-[65px]">
                <div className="font-bold font-times leading-tight tracking-widest">
                  <p>AN UPBEAT, DARKER SHOW. GET READY TO</p>
                  <p>PARTY BELOW DECK LIKE A PIRATE!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LaptopPower;

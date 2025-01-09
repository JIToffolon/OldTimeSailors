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

const Laptop = () => {
  return (
    <>
      <div className="relative -bottom-[150px]">
        <div className="relative w-full h-full my-[50px]">
          {/* Contenedor principal con borde */}
          <div className="border border-[#9e8f73] p-2 relative w-[650px] -right-[95px] -top-[310px]">
            <div className="text-left font-times px-10">
              <h1 className="font-bold leading-none">
                <span className="text-[#1b344a] text-[30px]">
                  OLD TIME SAILORS{" "}
                </span>
                <span className="text-[#d22a4e] text-[30px]">AT</span>
                <br />
                <span className="text-[#d22a4e] text-[30px]">
                  {" "}
                  NEWQUAY ORCHARD
                </span>
              </h1>
              <p className="text-gray-700 text-[20px]">NEWQUAY</p>
            </div>
            <div className="absolute w-72 top-[21px] -right-[75px] z-20">
              <div className="bg-[#1b344a] p-6 rounded-3xl ">
                <h3 className="text-[#d22a4e] text-[25px] font-bold font-times leading-none">
                  MORE ABOUT
                  <br />
                  THE VENUE
                </h3>
                <div className="mt-0.5 tracking-wide">
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
            <div className="border-t-2 border-dashed border-[#9e8f73] my-4" />

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
                      className="flex items-center gap-2 text-[#1b344a] font-semibold"
                    >
                      <Icon className="text-[12px]" />
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

              <p className="text-sm text-left text-[#1b344a] leading-8">
                You are invited to board the Sailorette and join the plentiful
                crew, 'The Old Time Sailors', for a night of footstomping,
                dancing and singing! You will be sailing back to the 19th
                century for an immersive experience of traditional seafaring
                music performed in a way you have never seen before. The Motley
                Crew and their plethora of traditional and eclectic instruments
                will take you back to the time of clashing tankards, and drunken
                debauchery. Sing and dance along like a drunken sailor as the
                band perform centuries old folk and shanty songs. Fancy dress is
                encouraged, so pull out your best seafaring garments me hearties
                and join the festivities.
              </p>
            </div>
          </div>
          <div className="absolute right-[230px] -top-[100px]">
            <Image
              src={ancla}
              alt="Anchor"
              width={100}
              height={100}
              className="w-[40px] h-[50px]"
              loading="lazy"
            />
          </div>
          <div className="absolute right-[15px] -top-[230px] z-10">
            <Image
              src={fotoFamily1}
              alt="Performance"
              width={200}
              height={200}
              className="w-[200px] h-[200px] shadow-gray-500 shadow-[0px_3px_20px_rgba(0,0,0,0.3)]"
              loading="lazy"
            />
          </div>
          {/* Photo 2 */}
          <div className="absolute right-[25px] -top-[35px] z-30">
            <Image
              src={fotoFamily2}
              alt="Musicians"
              width={200}
              height={200}
              className="w-[290px] shadow-gray-500 shadow-[3px_3px_3px_rgba(0,0,0,0.3)]"
              loading="lazy"
            />
          </div>
          {/* Photo 3 */}
          <div className="absolute right-[275px] top-[230px] w-[380px] z-40">
            <Image
              src={fotoFamily3}
              alt="Crowd"
              width={400}
              height={400}
              className="h-[360px] shadow-[5px_0px_5px_rgba(0,0,0,0.3)]"
              loading="lazy"
            />
          </div>
          <div className="absolute -right-[0px] bottom-[0px]">
            <Image
              src={dibujo}
              alt="Background drawing"
              width={300}
              height={300}
              className="w-[280px] h-[230px]"
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
            <div className="absolute inset-0 flex items-center justify-center mb-7">
              <video
                controls
                preload="none"
                poster={"/assets/thumbnailvideo.webp"}
                className="object-cover w-[88%] border-[#1b344a] border-[10px] rounded-sm z-20 shadow-gray-500 shadow-[2px_-2px_5px_rgba(0,0,0,0.3)] hover:opacity-100 [&::-webkit-media-controls]:opacity-0 hover:[&::-webkit-media-controls]:opacity-100 [&::-webkit-media-controls]:transition-opacity"
              >
                <source src="/assets/family/video.mp4" type="video/mp4" />
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
            <p className="absolute inset-0 font-times font-bold text-amber-50 left-[90px] -top-[72px] text-[40px]">
              MORE GIGS
            </p>
          </div>
          {/* Title */}
          <div className="absolute -bottom-[190px]  left-[45px] z-10 ">
            <div className="flex flex-row items-center gap-3 mb-5">
              <div className="leading-none">
                <p className="text-[#1b3441] text-[80px] font-bold font-times">
                  FAMILY
                </p>
                <p className="text-[#1b344a] text-[80px] font-bold font-times">
                  SHOW
                </p>
              </div>
              <div className="text-[#d22a4e] text-[20px] -mb-[95px] -ml-[75px]">
                <div className="font-bold font-times leading-tight tracking-widest">
                  <p>A TRADITIONAL SAILOR SHOW,</p>
                  <p>SING ALONG AND DANCE WITH US!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Laptop;

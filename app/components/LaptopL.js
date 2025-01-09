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

const LaptopL = () => {
  return (
    <>
      <div className="relative bottom-[50px]">
        <div className="relative w-full h-full my-[250px]">
          {/* Contenedor principal con borde */}
          <div className="border border-[#9e8f73] p-2 relative w-[950px] -right-[95px] -top-[310px]">
            <div className="text-left font-times px-10">
              <h1 className="font-bold leading-none">
                <span className="text-[#1b344a] text-[55px]">
                  OLD TIME SAILORS{" "}
                </span>
                <span className="text-[#d22a4e] text-[55px]">AT</span>
                <br />
                <span className="text-[#d22a4e] text-[55px]">
                  {" "}
                  NEWQUAY ORCHARD
                </span>
              </h1>
              <p className="text-gray-700 text-[30px]">NEWQUAY</p>
            </div>
            <div className="absolute w-[350px] top-[20px] -right-[100px] z-20">
              <div className="bg-[#1b344a] h-[220px] p-6 rounded-3xl">
                <h3 className="text-[#d22a4e] text-[30px] font-bold font-times leading-none">
                  MORE ABOUT
                  <br />
                  THE VENUE
                </h3>
                <div className="mt-0.5 tracking-wide">
                  <p className="text-white text-[15px] leading-tight">
                    A rural escape built by the community, for the community in
                    the heart of Newquay.
                  </p>
                  <p className="text-white text-[15px] leading-tight">
                    A venue for the whole family with seating options.
                  </p>
                  <Link href="/venue-info">
                    <p className="text-white text-[15px] mt-1 font-bold underline">
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
                      <Icon className="text-[15px]" />
                      <span className="text-[15px]">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="relative">
                  <div className="w-full ml-[50px]">
                    <Image
                      src={buyTickets}
                      alt="Buy Tickets"
                      className="w-[300px] h-[100px] cursor-pointer"
                      priority={true}
                    />
                  </div>
                  <div className="absolute left-[99px] inset-0 flex flex-col items-start justify-center text-amber-100">
                    <Link href={"/"}>
                      <h3 className="text-[33px] font-times">BUY TICKETS</h3>
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
          <div className="absolute right-[325px] -top-[35px]">
            <Image
              src={ancla}
              alt="Anchor"
              width={100}
              height={100}
              className="w-[50px] h-[60px]"
              loading="lazy"
            />
          </div>
          <div className="absolute right-[15px] -top-[230px] z-10">
            <Image
              src={fotoFamily1}
              alt="Performance"
              width={200}
              height={200}
              className="w-[290px] h-[290px] shadow-gray-500 shadow-[0px_3px_20px_rgba(0,0,0,0.3)]"
              loading="lazy"
            />
          </div>
          {/* Photo 2 */}
          <div className="absolute right-[25px] top-[53px] z-20">
            <Image
              src={fotoFamily2}
              alt="Musicians"
              width={200}
              height={200}
              className="w-[390px] shadow-gray-500 shadow-[3px_3px_3px_rgba(0,0,0,0.3)]"
              loading="lazy"
            />
          </div>
          {/* Photo 3 */}
          <div className="absolute left-[520px] top-[268px] z-30">
            <Image
              src={fotoFamily3}
              alt="Crowd"
              width={400}
              height={400}
              className="w-[550px] shadow-[5px_0px_5px_rgba(0,0,0,0.3)]"
              loading="lazy"
            />
          </div>
          <div className="absolute -right-[0px] -bottom-[300px]">
            <Image
              src={dibujo}
              alt="Background drawing"
              width={300}
              height={300}
              className="w-[380px] h-[330px]"
              loading="lazy"
            />
          </div>

          <div className="absolute top-[170px] left-[10px]">
            <Image
              src={recuadroVideo}
              alt="Video frame"
              width={590}
              height={280}
              priority={true}
            />
          </div>

          <div className="absolute inset-0 top-[203px] left-[47px] z-40">
            <video
              controls
              preload="none"
              poster={"/assets/thumbnailvideo.webp"}
              className="object-cover w-[540px] h-[300px] border-[#1b344a] border-[10px] rounded-sm shadow-gray-500 shadow-[2px_-2px_5px_rgba(0,0,0,0.3)]
              hover:opacity-100 [&::-webkit-media-controls]:opacity-0 hover:[&::-webkit-media-controls]:opacity-100 [&::-webkit-media-controls]:transition-opacity"
            >
              <source src="/assets/family/video.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="relative">
            <Image
              src={flecha}
              alt="More gigs"
              width={300}
              height={300}
              className="absolute left-[10px] top-[0px] w-[430px] h-[120px]"
              loading="lazy"
            />
            <p className="absolute inset-0 font-times font-bold text-amber-50 left-[115px] top-[25px] text-[50px]">
              MORE GIGS
            </p>
          </div>
          {/* Title */}
          <div className="absolute -bottom-[420px]  left-[15px] z-10 ">
            <div className="flex flex-row items-center gap-3 mb-5">
              <div className="leading-none">
                <p className="text-[#1b3441] text-[125px] font-bold font-times">
                  FAMILY
                </p>
                <p className="text-[#1b344a] text-[125px] font-bold font-times">
                  SHOW
                </p>
              </div>
              <div className="text-[#d22a4e] text-[30px] -mb-[150px] -ml-[105px]">
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

export default LaptopL;

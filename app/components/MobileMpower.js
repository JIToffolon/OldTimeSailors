import React, { memo } from "react";
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

const EventDescription = memo(() => (
  <p className="text-sm pb-5 text-[#e9ddc7] text-pretty" translate="no">
    Heave ho and up she rises! Cast aside your compass, throw your maps
    overboard and join the mutinous crew of The Old Time Sailor as they set sail
    for the wild uninhabited islands of Irish Punk, Shanty Punk, Polka Rock,
    Romani Punk, Dark Cabaret, and Twisted Circus! 'Rock and row' with our 21
    strong crew of rebellious musicians as the navigate a voyage through the
    thrashing seas of Hevay Metal and Hard Rock on a genre bending adventure
    into uncharted waters, join in the Wall of Death and thrash it out with your
    shipmates. Get ready for vigorous vocals, emphatic energy, mosh pits and
    head banging: we play it live and we play it loud, but as always with The
    Old Time Sailors... be prepared to expect the unexpected!
  </p>
));

const MobileMpower = () => (
  <>
    {/* Contenedor principal con borde */}
    <div className="border border-[#e9ddc7] p-4 mx-4 relative">
      <div className="text-left font-times">
        <h1 className="font-bold">
          <span className="text-[#d22a4e] text-xl">OLD TIME SAILORS </span>
          <span className="text-[#e9ddc7] text-xl">AT</span>
          <br />
          <span className="text-[#e9ddc7] text-xl">NEWQUAY ORCHARD</span>
        </h1>
        <p className="text-[#d22a4e] text-sm">NEWQUAY</p>
      </div>

      <div className="border-t-2 border-dashed border-[#9e8f73] my-4" />

      <div className="absolute -right-[12px] top-20 w-44">
        <div className="bg-[#e9ddc7] p-3 rounded-2xl">
          <h3 className="text-[#d22a4e] text-lg font-bold font-times leading-tight">
            MORE ABOUT
            <br />
            THE VENUE
          </h3>
          <div className="mt-0.5">
            <p className="text-[#1b344a] text-[9px] leading-tight">
              A rural escape built by the community, for the community in the
              heart of Newquay.
            </p>
            <p className="text-[#1b344a] text-[9px] leading-tight">
              A venue for the whole family with seating options.
            </p>
            <Link href="/venue-info">
              <p className="text-[#1b344a] text-[9px] mt-1 font-bold underline">
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
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-start justify-center text-amber-100">
              <Link href={"/"}>
                <h3 className="ml-6 text-sm font-times">BUY TICKETS</h3>
              </Link>
            </div>
          </div>
              <EventDescription/>
        </div>
      </div>
    </div>

    {/* Media section */}
    <div className="w-full h-[auto] relative -top-5 -left-2 mb-10">
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
              className="w-[78%] h-[95%] absolute top-[0px] left-[29px] object-cover rounded-sm]
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
              width={255}
              height={196}
              className="w-[255px] h-[196px]"
              priority={true}
            />
          </div>
        </div>

        {/* Photo 2 */}
        <div className="absolute -right-[3px] -top-[20px] w-[160px] h-[130px] z-9">
          <Image
            src={power2}
            alt="Musicians"
            width={180}
            height={160}
            className="w-[180px] h-[160px]"
            loading="lazy"
          />
        </div>
      </div>

      {/* Lower photos */}
      <div className="relative h-[200px]">
        <div className="absolute left-[27px] -top-[70px] w-1/2 z-20">
          <Image
            src={power1}
            alt="Performance"
            width={160}
            height={160}
            className="w-[160px] h-[160px] z-10"
            loading="lazy"
          />
          <div className="relative">
            <Image
              src={flecha}
              alt="More gigs"
              width={160}
              height={50}
              className="w-[160px] h-[50px] absolute right-[40px] -bottom-[60px]"
              loading="lazy"
            />
            <p className="absolute inset-0 font-times font-bold text-[#1b344a] left-[22px] top-[20px] text-[20px]">
              MORE GIGS
            </p>
          </div>
        </div>

        <div className="absolute -right-[4px] bottom-[59px] w-[197px] h-[190px] z-10">
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
      <div className="absolute -bottom-[38px] left-[20px] z-30">
        <div className="flex flex-row items-center gap-3">
          <div className="flex flex-col leading-none">
            <p className="text-[#d22a4e] text-[40px] font-bold font-times">
              POWER
            </p>
            <p className="text-[#d22a4e] text-[40px] font-bold font-times">
              SHOW
            </p>
          </div>
          <div className="text-[#e9ddc7] text-[8px] flex flex-col">
            <div className="-ml-[35px] mt-[53px] font-bold font-times leading-none tracking-wider">
              <p>AN UPBEAT, DARKER SHOW. GET READY TO</p>
              <p>PARTY BELOW DECK LIKE A PIRATE!</p>
            </div>
          </div>
        </div>
      </div>

      <Image
        src={dibujo}
        alt="Background drawing"
        width={170}
        height={150}
        className="w-[170px] h-[150px] absolute -bottom-[63px] -right-[18px] z-20"
        loading="lazy"
      />
    </div>
  </>
);

export default MobileMpower;

'use client';
import React from "react";
import Image from "next/image";
import { memo } from "react";
import Link from "next/link";
import blueFrame from "../../public/assets/blue-frame.png";
import redFrame from "../../public/assets/red-frame.png";
import dibujoTicket from "../../public/assets/dibujo.webp";
import "../globals.css";


// Componente memoizado para la opción de Map
const MapOption = memo(() => (
  <Link href="/tickets/map" className="w-full max-w-[420px] lg:max-w-[620px]">
    <div className="relative">
      <Image
        src={blueFrame}
        alt="Map Option"
        width={620} // Ancho máximo que necesitarás
        height={300} // Ajusta según el aspect ratio de tu imagen
        className="w-full h-auto"
        quality={75}
        sizes="(max-width: 768px) 420px, 620px"
        placeholder="blur"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="text-[#d22a4e] text-2xl lg:text-4xl font-bold">
          VIEW GIGS ON
        </h2>
        <h2 className="text-[#1b344a] text-7xl lg:text-9xl font-bold">MAP</h2>
      </div>
    </div>
  </Link>
));

// Componente memoizado para la opción de Calendar
const CalendarOption = memo(() => (
  <Link
    href="/tickets/calendar"
    className="w-full max-w-[420px] lg:max-w-[620px]"
  >
    <div className="relative">
      <Image
        src={redFrame}
        alt="Calendar Option"
        width={620}
        height={300}
        className="w-full h-auto"
        quality={75}
        sizes="(max-width: 768px) 420px, 620px"
        placeholder="blur"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="text-[#1b344a] text-2xl lg:text-4xl font-bold">
          VIEW GIGS ON
        </h2>
        <h2 className="text-[#d22a4e] text-5xl lg:text-7xl font-bold">
          CALENDAR
        </h2>
      </div>
    </div>
  </Link>
));

// Componente memoizado para el dibujo
const DrawingImage = memo(() => {
  // Optimización CSS-first
  return (
    <div className="w-full flex justify-center">
      <div className="relative w-full aspect-[5/4] max-w-[400px] md:max-w-[500px] lg:max-w-[1000px]">
        <Image
          src={dibujoTicket}
          alt="Dibujo"
          fill
          sizes="(max-width: 768px) 400px, (max-width: 1024px) 500px, 1000px"
          className="object-contain"
          quality={50} // Reducido aún más
          priority={true}
          loading="eager"
          placeholder="blur"
          onLoadingComplete={(img) => {
            // Opcional: marcar cuando la imagen está completamente cargada
            img.classList.add("loaded");
          }}
        />
      </div>
    </div>
  );
});

export const Selector = () => {
  return (
    <>
      {/* Main Content */}
      <div className="w-full font-times flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex flex-col space-y-8 w-full lg:w-[1000px] lg:h-[550px] items-center lg:justify-center lg:ml-20">
          {/* MAP  */}
          <MapOption />
          <CalendarOption />
        </div>
        <DrawingImage />
      </div>
    </>
  );
};

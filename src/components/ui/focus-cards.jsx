"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(({ card, index, hovered, setHovered }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    // setIsClicked(true);
  };

  return (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      // onClick={handleCardClick}
      className={cn(
        "rounded-lg relative bg-none dark:bg-neutral-900 overflow-hidden h-44 w-44 transition-all duration-300 ease-out transform", 
        hovered === index && "scale-105 rotate-3 shadow-lg", // Tilt and scale effect on hover
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]", // Blur others
        !isClicked && hovered === null && "animate-move" // Keep moving when not clicked and no hover
      )}
      style={{ borderRadius: "12px", border: "1px solid #e0e0e0" }}
    >
      <Image
        src={card.src}
        alt={card.title}
        width={178}
        height={178}
        className="object-cover rounded-md"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end justify-center transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl md:text-2xl font-medium text-white text-center">
          {card.title}
        </div>
      </div>
    </div>
  );
});

Card.displayName = "Card";

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 w-5/6">
      {cards.map((card, index) => (
        <Card key={card.title} card={card} index={index} hovered={hovered} setHovered={setHovered} />
      ))}
    </div>
  );
}

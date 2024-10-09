"use client";
import Image from "next/image";
import React from "react";

interface CardProps {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
}

export const Card = ({ card }: { card: CardProps }) => {
  return (
    <div className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-[10vh] w-56 md:h-[17rem] md:w-[25vw] overflow-hidden flex flex-col items-start justify-start relative z-10">
      <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
      <div className="relative z-40 p-8">
        <p className="text-white text-sm md:text-base font-medium font-sans text-left">
          {card.category}
        </p>
        <p className="text-white text-xl md:text-2xl font-semibold max-w-xs text-left mt-2">
          {card.title}
        </p>
      </div>
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute z-10 inset-0"
      />
    </div>
  );
};

const DummyContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          The first rule of Apple club is that you boast about Apple club.
        </span>{" "}
        Keep a journal, quickly jot down a grocery list, and take amazing class
        notes. Convert those notes to text with ease.
      </p>
      <Image
        src="https://assets.aceternity.com/macbook.png"
        alt="Macbook mockup"
        height="180"
        width="180"
        className="md:w-1/2 md:h-1/2 h-[30vh] w-full mx-auto object-contain"
      />
    </div>
  );
};

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];

export const AppleCardsDemo = () => {
  return (
    <div className="w-full h-[80vh]  py-4">
      <div className="flex gap-4 overflow-x-auto">
        {data.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

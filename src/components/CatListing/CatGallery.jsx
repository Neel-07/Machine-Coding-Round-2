import React from 'react';
import CatCard from './CatCard';

const catData = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b4ccaca593a61d7c3552c28aac6ad1779f9e00b0327b73b4ed4ea93b301a9097?placeholderIfAbsent=true&apiKey=ca25893004784157b7d465cb615c082f",
    name: "Kurilian",
    description: "The character of the Kurilian Bobtail is independent, highly intelligent, clever, inquisitive, sociable, playful, trainable, absent of aggression and very gentle. They are devoted to their humans and when allowed are either on the lap of or sleeping in bed with their owners.",
    origin: "Russia",
    temperaments: ["Independent", "Highly Intelligent", "Clever"],
    lifeSpan: "15 - 20 years",
    learnMoreLink: "#"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/dbb1d1542e03e8b189bd5ca62816bef8089466821ce09dd1d6f79e8b06e9672b?placeholderIfAbsent=true&apiKey=ca25893004784157b7d465cb615c082f",
    name: "Siamese",
    description: "While Siamese cats are extremely fond of their people, they will follow you around and supervise your every move, being talkative and opinionated. They are a demanding and social cat, that do not like being left alone for long periods.",
    origin: "Thailand",
    temperaments: ["Active", "Clever"],
    lifeSpan: "15 - 20 years",
    learnMoreLink: "#"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/128f34acb1235f04f25a5a85cb7a597ab08eaf9c223f7d697862bc33ac5e48a2?placeholderIfAbsent=true&apiKey=ca25893004784157b7d465cb615c082f",
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They're affectionate cats and love both people and other animals.",
    origin: "Egypt",
    temperaments: ["Active", "Energetic", "Independent"],
    lifeSpan: "14 - 15 years",
    learnMoreLink: "#"
  }
];

const CatGallery = () => {
  return (
    <main className="flex overflow-hidden bg-white bg-opacity-60">
      <section className="section flex relative flex-col pt-4 pb-16 pl-10 w-full min-h-[832px] max-md:pl-5 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7615083a4cbb2129312ead281e128af65d1871ef4da45342efca79167839f04a?placeholderIfAbsent=true&apiKey=ca25893004784157b7d465cb615c082f" alt="" className="object-cover absolute inset-0 size-full" />
        <header className="flex relative flex-wrap gap-5 justify-between items-start w-full text-5xl font-bold tracking-tighter text-center text-white max-w-[1214px] max-md:max-w-full max-md:text-4xl">
          <h1 className="mt-5 max-md:text-4xl">Cats around us</h1>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a685dbcfe687c1da00eb66734ac4a95d69a762ef671ac629e6e37e0e41b9c98?placeholderIfAbsent=true&apiKey=ca25893004784157b7d465cb615c082f" alt="Cat icon" className="object-contain shrink-0 rounded-xl aspect-[0.97] w-[60px]" />
        </header>
        <div className="flex relative flex-wrap gap-5 mt-6">
          {catData.map((cat, index) => (
            <CatCard key={index} {...cat} />
          ))}
          <div className="flex shrink-0 mt-1.5 bg-white rounded-2xl h-[643px] shadow-[2px_2px_8px_rgba(0,0,0,0.25)] w-[61px] max-md:hidden" />
        </div>
      </section>
    </main>
  );
};

export default CatGallery;
import React from 'react';

const CatCard = ({ image, name, description, origin, temperaments, lifeSpan, learnMoreLink }) => {
  return (
    <article className="flex flex-col pb-7 bg-white rounded-2xl shadow-[2px_2px_8px_rgba(0,0,0,0.25)]">
      <img loading="lazy" src={image} alt={`${name} cat`} className="object-contain w-full rounded-2xl aspect-[1.15]" />
      <div className="flex flex-col items-start px-3.5 mt-3.5 w-full">
        <h2 className="text-3xl font-medium tracking-tighter text-center text-black">{name}</h2>
        <p className="self-stretch mt-1.5 text-sm tracking-tight text-black">{description}</p>
        <div className="flex gap-5 mt-2 text-sm tracking-tight text-black whitespace-nowrap">
          <div className="flex flex-col font-medium">
            <div className="self-start">Origin</div>
            <div className="mt-2">Temperament</div>
          </div>
          <div className="self-start">{origin}</div>
        </div>
        <div className="flex gap-1 items-start mt-1">
          {temperaments.map((temperament, index) => (
            <span key={index} className="px-2 py-px text-xs tracking-tight whitespace-nowrap rounded-3xl bg-zinc-100 text-neutral-700">
              {temperament}
            </span>
          ))}
        </div>
        <div className="flex flex-col mt-2">
          <span className="font-medium text-black">Life Span</span>
          <span className="text-sm tracking-tight text-black">{lifeSpan}</span>
        </div>
        <a href={learnMoreLink} className="mt-6 text-sm tracking-tight text-indigo-400">Learn More</a>
      </div>
    </article>
  );
};

export default CatCard;
import React from 'react';

const CatCard = ({ image, name, description, origin, temperament, life_span, wikipedia_url }) => {
  return (
    <article className="flex flex-col bg-white rounded-2xl h-[650px] shadow-lg p-4">
      <img
        loading="lazy"
        src={image}
        alt={`${name} cat`}
        className="object-cover w-full rounded-2xl h-48 mb-4"
      />
      <div className="flex flex-col h-full">
        <h2 className="text-2xl font-medium text-center text-black mb-2">{name}</h2>
        <p className="text-sm text-black mb-2 flex-grow">{description}</p>
        <div className="flex flex-col gap-4 mb-2">
          <div className="flex gap-16">
            <span className="font-medium">Origin</span>
            <span>{origin}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-medium">Temperament</span>
            <span>{temperament}</span>
          </div>
        </div>
        <div className="flex gap-10 mb-4">
          <span className="font-medium">Life Span</span>
          <span>{life_span} years</span>
        </div>
        <a
          href={wikipedia_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:underline"
        >
          Learn More
        </a>
      </div>
    </article>
  );
};

export default CatCard;

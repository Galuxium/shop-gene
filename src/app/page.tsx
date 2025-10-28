```typescript
// pages/index.tsx

import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex px-6 items-center justify-between flex-col lg:flex-row">
        <h1 className="text-4xl lg:text-5xl text-gray-800 leading-tight">{title}</h1>
        <p className="text-2xl lg:text-3xl text-gray-800 leading-relaxed mb-6 lg:mb-0">{subtitle}</p>
        <div className="lg:w-1/4 md:w-1/2 w-5/6 mb-12 lg:mb-0">
          <a
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            href={buttonLink}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

interface FeatureProps {
  title: string;
  description: string;
  icon: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col w-full lg:w-1/3 xl:w-1/4 md:px-6 px-4 mb-12">
      <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
        <div className="p-8 text-3xl font-bold text-center border-b-4">{icon}</div>
        <ul className="w-full text-center text-sm">
          <li className="border-b py-4">{title}</li>
          <li className="border-b py-4">{description}</li>
        </ul>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  const featuresData = [
    {
      title: 'Easy to Use',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis.',
      icon: '
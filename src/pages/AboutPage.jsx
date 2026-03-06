import React from 'react';
import foto from '../assets/foto.png';

function AboutPage() {
  return (
    <div className="relative container flex flex-col max-w-6xl mx-auto my-32 px-6 items-center md:px-0">
      <img src={foto} className="w-48 h-64" alt="" />
      <h1 className="text-2xl font-bold">Muhammad Nubli Zulfahmi</h1>
      <p className="text-md max-w-2xl text-justify">
        I'm a passionate Frontend Developer who loves building clean,
        responsive, and user-friendly web interfaces using React, Next.js; and
        Tailwind CSS. 'Always' eager to learn and grow in the world of web
        development.
      </p>
    </div>
  );
}

export default AboutPage;

import React from 'react';

function ProjectItemBody({
  title,
  desc,
  imageUrl,
  typeproject,
  keyachieve,
  tech,
  onVisit,
  onGithub,
}) {
  return (
    <>
      <div className="item">
        {/* Desktop Image */}
        <div className="group relative w-full">
          <div className="item-gradient"></div>
          {/* Dekstop Image */}
          <img
            src={imageUrl}
            alt="porto"
            className="hidden w-full h-44 duration-300 hover:scale-110 md:block"
          />
          {/* Mobile Image */}
          <img src={imageUrl} alt="porto" className="w-full md:hidden" />

          {/* Mobile Image */}
          {/* <img src={imageUrl} alt="porto" className="w-full md:hidden" /> */}

          {/* Item Gradient */}

          {/* Item Text */}
          <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              className="duration-200 px-6 rounded-2xl cursor-pointer  group-hover:bg-sky-700 group-hover:scale-110 hover:text-white"
              onClick={() => window.open(onVisit)}
            >
              Visit
            </button>
            <button
              className="duration-200 px-6 rounded-2xl cursor-pointer  group-hover:bg-sky-700 group-hover:scale-110 hover:text-white"
              onClick={() => window.open(onGithub)}
            >
              Github
            </button>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <h3 className="project-item__title font-bold text-lg">📁 {title}</h3>
          <p className="project-item__desc text-sm">{desc}</p>
          <p className="project-item__desc text-sm">{typeproject}</p>
          <p className="project-item__desc text-sm">{keyachieve}</p>
          <p className="project-item__desc text-sm">{tech}</p>
        </div>
      </div>
    </>
  );
}

export default ProjectItemBody;

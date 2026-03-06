import React from 'react';
import ProjectItem from './ProjectItem';

function ProjectList({porto}) {
  return (
    <div className="project-list">
      {/* Creations Section */}
      <section className="creations">
        {/* Creations Container */}
        <div className="container max-w-6xl mx-auto my-4 px-6 text-gray-900 md:px-0">
          {/* Items Container */}
          <div className="items-container">
            {porto.length === 0 ? (
              <div className="project-list-empty">Tidak ada porto</div>
            ) : (
              porto.map(portos => (
                <ProjectItem key={portos.id} id={portos.id} {...portos} />
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectList;


import React from 'react';
import ProjectList from '../components/ProjectList';
import {getAllPorto} from '../utils/data';

function ProjectPage() {
  const portoData = getAllPorto();
  return (
    <div className="main-project">
      <h1 className="title-project">Project</h1>
      <h4 className="font-bold text-xl">Web Project</h4>
      {/* <div className="card"> */}
      <ProjectList porto={portoData} />
      {/* </div> */}
    </div>
  );
}

export default ProjectPage;

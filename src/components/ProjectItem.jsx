import React from 'react';
import ProjectItemBody from './ProjectItemBody';
// import ProjectItemButton from './ProjectItemButton';

function ProjectItem({
  title,
  desc,
  typeproject,
  keyachieve,
  tech,
  imageUrl,
  id,
  onVisit,
  onGithub,
}) {
  return (
    <>
      {/* <ProjectItemImage imageUrl={imageUrl} /> */}

      <ProjectItemBody
        id={id}
        title={title}
        imageUrl={imageUrl}
        desc={desc}
        typeproject={typeproject}
        keyachieve={keyachieve}
        tech={tech}
        onVisit={onVisit}
        onGithub={onGithub}
      />
    </>
  );
}

export default ProjectItem;

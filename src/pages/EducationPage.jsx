import React from 'react';
import logo from '../assets/logo.png';

function EducationPage() {
  return (
    <div>
      <h1 className="title-project">Education</h1>
      <div className="main-item">
        <div className="item-image"><img src={logo} alt="foto" /></div>
        <div className="item-body">
          <h3>Telkom University</h3>
          <h4>Teknik Informatika</h4>
          <p>Front End Web Developer and UI/UX</p>
        </div>
        <div className="item-delete">
          <p>2019 - 2023</p>
        </div>
      </div>
    </div>
  );
}

export default EducationPage;

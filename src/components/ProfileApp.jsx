import React, {useState} from 'react';
import Navigation from './Navigation';
import AboutPage from '../pages/AboutPage';
import {Routes, Route} from 'react-router-dom';
import EducationPage from '../pages/EducationPage';
import HomePage from '../pages/HomePage';
import ExperiencePage from '../pages/ExperiencePage';
import ProjectPage from '../pages/ProjectPage';
// import '../styles/style.css';
import '../index.jsx';
import VantaComponent from './VantaComponent.jsx';

function ProfileApp() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="hero-section">
        <VantaComponent />
      <div className="profile-app text-white">
        <header className="profile-app__header">
          <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </header>
        <main>
          {/* <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
          </Routes> */}

          <div
            id="homepage"
            className={`container max-w-6xl mx-auto px-6 py-6 ${
              menuOpen ? 'md:block' : 'block'
            }`}
          >
            <section id="about">
              <AboutPage />
            </section>

            <section id="education">
              <EducationPage />
            </section>

            <section id="experience">
              <ExperiencePage />
            </section>

            <section id="project">
              <ProjectPage />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ProfileApp;

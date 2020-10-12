import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import '../styles/pages/landing.css';
import logoImg from '../assets/imgs/Logo.svg';
import { Link } from 'react-router-dom';


const Landing: React.FC = () => {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Logo Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>
            Visite orfanatos
            e mude o dia de muitas crianças.
       </p>

          <div className="location">
            <strong>São Paulo</strong>
            <span>São Bernardo do Campo</span>
          </div>

          <Link to="/app" className="Enter-app">
            <FiArrowRight size={26} color="rgb(0,0,0,0, 0.6)" />
          </Link>
        </main>
      </div>
    </div>
  );
}

export default Landing;

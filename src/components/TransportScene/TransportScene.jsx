

import React from 'react';
import './TransportScene.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCar,
  faHorse,
  faPlane,
  faBus,
  faShip,
  faTruck,
  faMotorcycle,
  faBicycle,
  faTrain
} from '@fortawesome/free-solid-svg-icons';

const TransportAnimation = () => {
  return (
    <div className="transport-scene-wrapper">
      {/* 🎥 Video Background */}
      <video autoPlay muted loop playsInline className="background-video">
        <source src={require('../../images/video-back.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🚗 Icons Layer */}
      <div className="transport-container">
        <FontAwesomeIcon icon={faCar} className="transport-icon car" />
        <FontAwesomeIcon icon={faBicycle} className="transport-icon bicycle" />
        <FontAwesomeIcon icon={faTrain} className="transport-icon train" />
        <FontAwesomeIcon icon={faBus} className="transport-icon bus" />
        <FontAwesomeIcon icon={faShip} className="transport-icon ship" />
        <FontAwesomeIcon icon={faMotorcycle} className="transport-icon motorcycle" />
        <FontAwesomeIcon icon={faHorse} className="transport-icon horse" />
        <FontAwesomeIcon icon={faPlane} className="transport-icon plane" />
        <FontAwesomeIcon icon={faTruck} className="transport-icon truck" />
      </div>
    </div>
  );
};

export default TransportAnimation;

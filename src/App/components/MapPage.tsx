import { FC, Fragment } from 'react';
import React from 'react';
import moment from 'moment';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const MapPage: FC = () => {
  const imageClick = (imageName) => {
    const image = `/assets/${imageName}.svg`;
    const element = document.createElement('img');
    element.setAttribute('src', image);
    element.setAttribute('class', 'profile-image');
    const div = document.getElementById('main-img');
    div?.appendChild(element);
    return;
  };
  return (
    <Fragment>
      <div className="map-image" id="main-img">
        <img className="image1" src="/assets/berlin-u8.svg" alt="u8-map" />
        <img className="image2" src="/assets/hussein.svg" alt="u8-map" onClick={() => imageClick('hussein')} />
        <img className="image3" src="/assets/imran.svg" alt="u8-map" onClick={() => imageClick('imran')} />
        <img className="image4" src="/assets/nora.svg" alt="u8-map" onClick={() => imageClick('nora')} />
      </div>
      <div className="mt-5 text-center">
        <img className="rectangle" src="/assets/rectangle.svg" alt="u8-map" />
      </div>
      <div className="text-center fixed-bottom">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </Fragment >
  );
};

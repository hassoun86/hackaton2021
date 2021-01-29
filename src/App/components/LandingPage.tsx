import { useTranslation } from 'react-i18next';
import { FC, Fragment } from 'react';
import React from 'react';
import { Tab, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const LandingPage: FC = () => {
  return (
      <Fragment>
          <div className="landing-image">
              <img src="/assets/ubahn-d2.svg" />
          </div>
          <div className="mt-5 text-center">
              <h1 className="f-36">Share a Ride</h1>
          </div>
          <div className="mt-5 text-center">
          <Link to="/select-rider"><Button variant="primary">Let's Start</Button></Link>
          </div>
      </Fragment>
  );
};

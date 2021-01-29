import { useTranslation } from 'react-i18next';
import { FC, Fragment } from 'react';
import React from 'react';
import { Tab, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export const SelectRider: FC = () => {
  return (
      <Fragment>
          <div className="p-4">
          <div>
              <h1 className="f-26">What kind of a rider are you?</h1>
          </div>
          <div className="float-left">
              <div className="col p-0 mt-5">
              <Link to="/easy-rider">
                  <Button variant="outline-primary" className="select-button"> <img src="/assets/Group-69.svg" /><span>Easy Rider</span></Button>
               </Link>
              </div>
          </div>
          <div className="float-left p-l-15">
              <div className="col p-0 mt-5">
              <Link to="/pro-rider">
                  <Button variant="outline-primary" className="select-button"><img src="/assets/pro-rider.svg" /><span>Pro Rider</span></Button>
               </Link>
              </div>
          </div>
          </div>
      </Fragment>
  );
};

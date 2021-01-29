import HashTabs from 'App/utils/HashTabs';
import React from 'react';
import { Row, Tab } from 'react-bootstrap';

export const SearchDestination: React.FC = () => {
  return (
    <div>
        <HashTabs className="mb-3 p-0 small text-center justify-content-around flex-wrap-nowrap position-fixed-to-bottom mobile-tabs" variant="tabs" defaultActiveKey="search" id="tab">
            <Tab
                tabClassName="text-transform-none"
                eventKey="berlin-map"
                title={
                    <div className="row no-gutters">
                        <i className="feather icon-map col-12" />
                        <div className="col-12">Berlin map</div>
                    </div>
                }>
                Berlin map
            </Tab>
            <Tab
                tabClassName="text-transform-none"
                eventKey="search"
                title={
                    <div className="row no-gutters">
                        <i className="feather icon-search col-12" />
                        <div className="col-12">Search</div>
                    </div>
                }>
                Search
            </Tab>
            <Tab
                tabClassName="text-transform-none"
                eventKey="offer"
                title={
                    <div className="row no-gutters">
                        <i className="feather icon-plus-circle col-12" />
                        <div className="col-12">Offer</div>
                    </div>
                }>
                Offer
            </Tab>
            <Tab
                tabClassName="text-transform-none"
                eventKey="inbox"
                title={
                    <div className="row no-gutters">
                        <i className="feather icon-inbox col-12" />
                        <div className="col-12">Inbox</div>
                    </div>
                }>
                Inbox
            </Tab>
        </HashTabs>

    </div>
  );
};
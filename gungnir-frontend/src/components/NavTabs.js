import React, { useState } from 'react';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';
import Table from "./Table"
import Card from "./Card"

export default function App() {
const [activeTab, setActiveTab] = useState('tab1');

const handleVerticalClick = (value) => {
    if (value === activeTab) {
    return;
    }

    setActiveTab(value);
};

  return (
    <>
      <MDBRow>
        <MDBCol size='3'>
          <MDBTabs className='flex-column text-center'>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleVerticalClick('tab1')} active={activeTab === 'tab1'}>
                FindAll
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleVerticalClick('tab2')} active={activeTab === 'tab2'}>
                FindById
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleVerticalClick('tab3')} active={activeTab === 'tab3'}>
                Messages
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>
        </MDBCol>
        <MDBCol size='9'>
          <MDBTabsContent>
            <MDBTabsPane show={activeTab === 'tab1'}><Table/></MDBTabsPane>
            <MDBTabsPane show={activeTab === 'tab2'}><Card/></MDBTabsPane>
            <MDBTabsPane show={activeTab === 'tab3'}>Messages content</MDBTabsPane>
          </MDBTabsContent>
        </MDBCol>
      </MDBRow>
    </>
  );
}
import React from 'react';
import { MDBContainer } from "mdb-react-ui-kit";
import NavTabs from "./components/NavTabs"
function App() {
  return (
    <MDBContainer className='py-5'>
      <NavTabs/>
    </MDBContainer>
  );
}

export default App;

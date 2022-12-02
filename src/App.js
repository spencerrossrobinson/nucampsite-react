import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import NucampLogo from './app/assets/img/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color='priamry' sticky='top' expand='md'>
        <Container>
          <NavbarBrand href='/'>
            <img src={NucampLogo} alt='nucamp logo'/>
          </NavbarBrand>
        </Container>
      </Navbar>
      I'm Ready For Workshop
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import { Container, Row, Col, CardDeck } from 'react-bootstrap'
import CurrentRoster from './Components/CurrentRoster'
import SignupForm from './Components/SignupForm'


function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 style={{paddingBottom: 30, paddingTop: 30}}>Valkyrie Raid Signup</h1>
            
          <CurrentRoster />
          <br />
          <SignupForm />
          
        </Col>
      </Row>
  </Container>
  );
}

export default App;

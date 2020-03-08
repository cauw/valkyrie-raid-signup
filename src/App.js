import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import { Container, Row, Col, CardDeck } from 'react-bootstrap'
import CurrentRoster from './Components/CurrentRoster'
import SignupForm from './Components/SignupForm'


function App() {

  const roles = [
    {
        label: 'Tank',
        icon: 'icon-warrior.gif',
        role: 1
    },        
    {
        label: 'Hunter',
        icon: 'icon-hunter.gif',
        role: 2
    },        
    {
        label: 'Druid',
        icon: 'icon-druid.gif',
        role: 3
    },        
    {
        label: 'Warrior',
        icon: 'icon-warrior.gif',
        role: 4
    },        
    {
        label: 'Mage',
        icon: 'icon-mage.gif',
        role: 5
    },        
    {
        label: 'Shaman',
        icon: 'icon-shaman.gif',
        role: 6
    },        
    {
        label: 'Rogue',
        icon: 'icon-rogue.gif',
        role: 7
    },        
    {
        label: 'Warlock',
        icon: 'icon-warlock.gif',
        role: 8
    },        
    {
        label: 'Priest',
        icon: 'icon-priest.gif',
        role: 9
    }
];

  const [attendants, setAttendants] = useState([
    {
        role: 1,
        name: 'Pingo'
    },
    {
        role: 2,
        name: 'Cauw'
    },
    {
        role: 3,
        name: 'Test'
    },
    {
        role: 4,
        name: 'Hey'
    },
    {
        role: 4,
        name: 'SomethingRandom'
    },
    {
        role: 5,
        name: 'Pingo'
    },
    {
        role: 6,
        name: 'Pingo'
    },
    {
        role: 6,
        name: 'Pingo'
    },
    {
        role: 6,
        name: 'Pingo'
    },
    {
        role: 7,
        name: 'Pingo'
    },
    {
        role: 8,
        name: 'Pingo'
    },
    {
        role: 9,
        name: 'Pingo'
    }
  ]);


  const roster = [
    {
      name: 'Cauw',
      role: 5
    },    
    {
      name: 'Pingo',
      role: 1
    },    
    {
      name: 'Dernaus',
      role: 3
    },    
    {
      name: 'Vincenth',
      role: 9
    },    
    {
      name: 'Fork',
      role: 5
    }
  ]
  
  let addAttendant = (attendant) => {
    setAttendants([...attendants, attendant])
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 style={{ paddingBottom: 30, paddingTop: 30 }}>Valkyrie Raid Signup</h1>

          <CurrentRoster roles={roles} attendants={attendants} />
          <br />
          <SignupForm roles={roles} addAttendant={addAttendant} roster={roster} />

        </Col>
      </Row>
    </Container>
  );
}

export default App;

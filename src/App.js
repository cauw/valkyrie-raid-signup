import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import { Container, Row, Col, CardDeck } from 'react-bootstrap'
import CurrentRoster from './Components/CurrentRoster'
import SignupForm from './Components/SignupForm'
import { HubConnectionBuilder } from '@aspnet/signalr';


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

  const [attendants, setAttendants] = useState([]);

  const [roster, setRoster] = useState([]);

  const [hubConnection, setHubConnection] = useState();
  // Set the Hub Connection on mount.
   useEffect(() => {  

       // Set the initial SignalR Hub Connection.
       const createHubConnection = async () => {

           // Build new Hub Connection, url is currently hard coded.
           const hubConnect = new HubConnectionBuilder()
               .withUrl('https://valkfunctionapp.azurewebsites.net/api/?code=J7zUKlRbxuTYmyPF0hJaPrdCBoelBLbcNPNOyMgfvD9dB88x/nyhmQ==')
               .build();
           try {
            hubConnect.on('signup', signup => {
              console.log('wtffffff');
                console.log(signup);
                setAttendants([...attendants, signup])
                // const index = app.stocks.findIndex(s => s.id === updatedStock.id);
                // app.stocks.splice(index, 1, updatedStock);
              });
               await hubConnect.start()
               console.log('Connection successful!')
           }
           catch (err) {
               alert(err);
           }
           
           setHubConnection(hubConnect);
       }

       createHubConnection();
   }, []);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://valkfunctionapp.azurewebsites.net/api/roster?code=rN8hYau2auc49dDfysfZzpzJn8NJSGNB1HoLXVKie12kM121q/cYaA==");
      res.json().then(res => setRoster(res));
    }
    
    fetchData();
  }, []);
  
  let addAttendant = (attendant) => {
    fetch('https://valkfunctionapp.azurewebsites.net/api/HttpTrigger2?code=TOQloRNRROMerkCid1/hKzZaqfyMD4PpZRluOQptDEVLk23vqGJrVA==', {
      method: 'post',
      body: JSON.stringify({ signup: {...attendant, id: 1 }})
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 style={{ paddingBottom: 30, paddingTop: 30, textAlign: 'center' }}>Valkyrie Raid Signup</h1>

          <CurrentRoster roles={roles} attendants={attendants} />
          <br />
          <SignupForm roles={roles} addAttendant={addAttendant} roster={roster} />

        </Col>
      </Row>
    </Container>
  );
}

export default App;

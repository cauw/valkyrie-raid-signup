import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import { Container, Row, Col, CardDeck } from 'react-bootstrap'
import { HubConnectionBuilder } from '@aspnet/signalr';
import Home from './Pages/Home'
import RaidDetails from './Pages/RaidDetails'
import NewRaid from './Pages/NewRaid';


function App() {

  const roles = [
    {
        label: 'Tank',
        icon: '/icon-warrior.gif',
        role: 1
    },        
    {
        label: 'Hunter',
        icon: '/icon-hunter.gif',
        role: 2
    },        
    {
        label: 'Druid',
        icon: '/icon-druid.gif',
        role: 3
    },        
    {
        label: 'Warrior',
        icon: '/icon-warrior.gif',
        role: 4
    },        
    {
        label: 'Mage',
        icon: '/icon-mage.gif',
        role: 5
    },        
    {
        label: 'Shaman',
        icon: '/icon-shaman.gif',
        role: 6
    },        
    {
        label: 'Rogue',
        icon: '/icon-rogue.gif',
        role: 7
    },        
    {
        label: 'Warlock',
        icon: '/icon-warlock.gif',
        role: 8
    },        
    {
        label: 'Priest',
        icon: '/icon-priest.gif',
        role: 9
    }
];


  const [raids, setRaids] = useState([]);
  const [attendants, setAttendants] = useState([]);
  const [signalRattendants, setSignalRattendants] = useState([]);

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
                console.log(attendants);
                setSignalRattendants([...signalRattendants, signup])
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

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://valkfunctionapp.azurewebsites.net/api/GetRaidsHttpTrigger?code=stYBX1UAw00YzZVJmXYR5kKyxgDzdsmv1Yv4jpXHP4ouRZWBD/hd5w==");
      res.json().then(res => setRaids(res));
    }
    
    fetchData();
  }, []);
  
  useEffect(() => {
    async function fetchData() {
    const res = await fetch("https://valkfunctionapp.azurewebsites.net/api/signups/?code=T0kvAdVilPpzsOGf4N/5afzgrH3OLj07PRiZBkx2A8rmL1sqgqMokQ==");
    res.json().then(res => 
        {
            setAttendants([...attendants, ...res]);
        });
    }
    
    fetchData();
  }, []);

  let addAttendant = (attendant) => {
    let newAttendant = {...attendant, id: attendant.raidId + '-' + attendant.playerId };
    fetch('https://valkfunctionapp.azurewebsites.net/api/HttpTrigger2?code=TOQloRNRROMerkCid1/hKzZaqfyMD4PpZRluOQptDEVLk23vqGJrVA==', {
      method: 'post',
      body: JSON.stringify({ signup: newAttendant})
    });
  };

  return (
    <Router>
      <Container>
        <h1 style={{ paddingTop: 30 }}>Valkyrie Raid Signup</h1>
        <Switch>
          <Route path="/raids/:id">
            <RaidDetails raids={raids} roles={roles} attendants={attendants} addAttendant={addAttendant} roster={roster} signalRattendants={signalRattendants}/>
          </Route>
          <Route path="/raids">
            <NewRaid raids={raids} roles={roles} attendants={attendants} addAttendant={addAttendant} roster={roster}/>
          </Route>
          <Route path="/">
            <Home raids={raids} roles={roles} attendants={attendants} addAttendant={addAttendant} roster={roster} />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;

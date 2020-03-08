import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../bootstrap.min.css';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import CurrentRoster from '../Components/CurrentRoster';
import SignupForm from '../Components/SignupForm';


function RaidDetails(props) {
    let { raids, roles, attendants, addAttendant, roster, signalRattendants } = props;
    let { id } = useParams();

    let filteredAttendants = [...attendants, ...signalRattendants].filter(x => x.raidId === id);
    console.log(attendants);

    return (
        <>
            <h2>
                Raid details
            </h2>
            <CurrentRoster roles={roles} attendants={filteredAttendants} />
            <br />
            <SignupForm roles={roles} addAttendant={addAttendant} roster={roster} raidId={id} />
        </>
    );
}

export default RaidDetails;

import React from 'react';
import { useParams } from 'react-router-dom';
import '../bootstrap.min.css';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import CurrentRoster from '../Components/CurrentRoster';
import SignupForm from '../Components/SignupForm';


function RaidDetails(props) {
    let { raids, roles, attendants, addAttendant, roster } = props;
    let { id } = useParams();

    return (
        <>
            <h2>
                Raid details
            </h2>
            <CurrentRoster roles={roles} attendants={attendants} />
            <br />
            <SignupForm roles={roles} addAttendant={addAttendant} roster={roster} />
        </>
    );
}

export default RaidDetails;

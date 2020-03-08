import React, { useState } from 'react';
import '../bootstrap.min.css';
import { Container, Row, Col, Form, Button, Card, ListGroup } from 'react-bootstrap'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function NewRaid(props) {
    let { addAttendant, roster, roles } = props;
    let [raidTime, setRaidTime] = useState(new Date());
    let [raidName, setRaidName] = useState('');

    let raidTimeChanged = (e) => {
        setRaidTime(e);
    };

    let raidNameChanged = (e) => {
        setRaidName(e.currentTarget.value);
    };

    let createRaid = () => {
        console.log('what')
        fetch('https://valkfunctionapp.azurewebsites.net/api/NewRaidHttpTrigger?code=OICDItKnH1WR5PCN2Ah7QXBZKHm6V41pHqMJmle5uQFwqIKA9OxPBg==', {
            method: 'post',
            body: JSON.stringify({ newRaid: { name: raidName, time: raidTime }})
        }).then(() => window.location.href='/');
    };

    return (
        <>
            <Form>
                <Row>
                    <Col lg={4} xs={12}>
                        <Form.Group controlId="raidName">
                            <Form.Label>
                                Enter a name for raid
                            </Form.Label>
                            <Form.Control type="text" placeholder="Just some title" autoComplete="off" 
                                value={raidName} 
                                onChange={raidNameChanged}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group controlId="raidTime">
                    <Form.Label>
                        When is it gonna happen?
                    </Form.Label>
                    <br />
                    <DatePicker
                        selected={raidTime}
                        onChange={raidTimeChanged}
                        showTimeSelect
                        className="form-control"
                        dateFormat="Pp"
                    />
                </Form.Group>
                <Button variant="success" onClick={() => createRaid()}>
                    Create it!
                </Button>
            </Form>
        </>
    );
}

export default NewRaid;

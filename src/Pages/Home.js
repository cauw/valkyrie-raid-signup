import React from 'react';
import '../bootstrap.min.css';
import { Container, Row, Col, Form, Button, Card, CardDeck } from 'react-bootstrap'
import RaidCardColumns from '../Components/RaidCardColumns';


function Home(props) {
    let { raids } = props;

    return (
        <>
            <Button variant="success" onClick={() => {window.location.href='raids'}}>
                Create new raid
            </Button>
            <br />
            <br />
            <Card>
                <Card.Header>
                    Upcoming raids
                </Card.Header>
                <Card.Body>
                    <RaidCardColumns raids={raids} />
                </Card.Body>
            </Card>
            {/* <br />
            <Card>
                <Card.Header>
                    Old raids
                </Card.Header>
                <Card.Body>
                    <RaidCardColumns raids={raids} />
                </Card.Body>
            </Card> */}
        </>
    );
}

export default Home;

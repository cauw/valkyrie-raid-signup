import React from 'react';
import '../bootstrap.min.css';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'


function RaidCard(props) {
    let { raid } = props;

    return (
        <Card>
            <Card.Img variant="top"  src="raid-bwl.png" />
            {/* <Card.Body>
                <Card.Title>
                    {raid.name}
                </Card.Title>
            </Card.Body> */}
            <Card.Footer>
                <small className="text-muted">
                    {raid.time}
                </small>
                <div  className="float-right">
                <Card.Link>
                    <Card.Link href={"raids/" + raid.id}>Check it</Card.Link>
                </Card.Link></div>
            </Card.Footer>
        </Card>
    );
}

export default RaidCard;

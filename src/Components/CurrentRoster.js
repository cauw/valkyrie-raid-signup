import React from 'react';
import '../bootstrap.min.css';
import { Container, Row, Col, Form, Button, Card, CardGroup, CardColumns } from 'react-bootstrap'
import RaidRoleGroup from './RaidRoleGroup'


function CurrentRoster(props) {
    let { attendants, roles } = props;
    return (
        <Card>
            <Card.Header>
                Current signups
            </Card.Header>
            <Card.Body>
                <CardColumns>
                    { roles.map((g) => <RaidRoleGroup groupSettings={g} attendants={attendants} />) }
                </CardColumns>
            </Card.Body>
        </Card>
    );
}

export default CurrentRoster;

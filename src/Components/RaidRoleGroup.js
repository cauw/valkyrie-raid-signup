import React from 'react';
import '../bootstrap.min.css';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'


function RaidRoleGroup(props) {
    let { groupSettings, attendants } = props;
    let filteredAttendants = attendants.filter(x => x.role == groupSettings.role);

    if (filteredAttendants.length === 0) return null;

    return (
            <Card>
                <Card.Header>
                    <img style={{height: 25, width: 25, marginRight: 7 }} src={groupSettings.icon} />
                    {groupSettings.label} ({filteredAttendants.length})
                </Card.Header>
                <Card.Body>
                { 
                    filteredAttendants.map(y => {
                        return  <Card.Text>
                                     { y.name }
                                </Card.Text>
                    })
                }
                </Card.Body>
            </Card>
    );
}

export default RaidRoleGroup;

import React from 'react';
import '../bootstrap.min.css';
import { Container, Row, Col, Form, Button, Card, CardGroup, CardColumns } from 'react-bootstrap'
import RaidRoleGroup from './RaidRoleGroup'


function CurrentRoster() {
    let attendants = [
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
    ];

    const groups = [
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


    return (
        <Card>
            <Card.Header>
                Current signups
            </Card.Header>
            <Card.Body>
                <CardColumns>
                    { groups.map((g) => <RaidRoleGroup groupSettings={g} attendants={attendants} />) }
                </CardColumns>
            </Card.Body>
        </Card>
    );
}

export default CurrentRoster;

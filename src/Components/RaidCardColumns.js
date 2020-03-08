import React from 'react';
import '../bootstrap.min.css';
import { Container, Row, Col, Form, Button, Card, CardColumns } from 'react-bootstrap'
import RaidCard from './RaidCard'


function RaidCardColumns(props) {
    let { raids } = props;

    return (
        <CardColumns>
            { raids.map(x => <RaidCard raid={x} />)}
        </CardColumns>
    );
}

export default RaidCardColumns;

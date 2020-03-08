import React, { useState } from 'react';
import '../bootstrap.min.css';
import { Container, Row, Col, Form, Button, Card, ListGroup } from 'react-bootstrap'


function RaidNewForm(props) {
    let { addAttendant, roster, roles } = props;
    


    return (
        <>
            <Form>
               
                    <fieldset>
                        <Form.Group>
                            <Form.Label as="legend" >
                                Are you in?!
                            </Form.Label>
                            <Form.Check
                                type="radio"
                                label="I will be able to attend fo-sho"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                            />
                            <Form.Check
                                type="radio"
                                label="I might be able to attend.."
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />
                            <Form.Check
                                type="radio"
                                label="I'll bench myself, but will be available if needed"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios3"
                            />
                        </Form.Group>
                    </fieldset>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Anything else on your mind?</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="I have paid Cauw an entry fee of 1g" />
                    </Form.Group>
                    <Form.Group controlId="charName">
                        <Form.Label>
                            Who are you?
                        </Form.Label>
                        <Form.Control type="text" placeholder="Find yourself" 
                            onChange={onCharNameChange}
                            value={charName}
                            autocomplete="off"/>
                        {suggestionList}
                    </Form.Group>
                    <Button variant="primary" onClick={() => register(player)}>
                        Lets go!
                    </Button>
                }
            </Form>
        </>
    );
}

export default RaidNewForm;

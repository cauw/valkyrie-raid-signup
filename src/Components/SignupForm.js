import React from 'react';
import '../bootstrap.min.css';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'


function SignupForm() {
    return (
        <Card>
            <Card.Header>
                Wanna join?
            </Card.Header>
            <Card.Body>
                <Form>
                <Form.Group controlId="charName">
                    <Form.Label>
                        Character name
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter character name" />
                    <Form.Text className="text-muted">
                        Enter your character name here, be honest! cba adding accounts yet
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Anything else on your mind?</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <fieldset>
                    <Form.Group>
                        <Form.Label as="legend">
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
               
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I have paid Cauw an entry fee of 1g" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Lets go!
                </Button>
            </Form>
            </Card.Body>
            
        </Card>
    );
}

export default SignupForm;

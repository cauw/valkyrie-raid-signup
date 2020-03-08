import React, { useState } from 'react';
import '../bootstrap.min.css';
import { Container, Row, Col, Form, Button, Card, ListGroup } from 'react-bootstrap'


function SignupForm(props) {
    let { addAttendant, roster, roles, raidId } = props;
    
    let [charName, setCharName] = useState('');
    let [filteredRoster, setFilteredRoster] = useState([...roster]);
    let [player, setPlayer] = useState(null);
    let [registered, setRegistered] = useState(false);

    console.log(filteredRoster)
    let onCharNameChange = (e) => {
        const userInput = e.currentTarget.value;
    
        setFilteredRoster([...(roster.filter(
          (player) => player.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        ))]);
        setCharName(e.currentTarget.value);
    };

    let suggestionList;
    if (charName.length === 0) {
        suggestionList = <></>;
    } else {
        suggestionList = <ListGroup>
            {filteredRoster.map(p => <ListGroup.Item action onClick={() => setPlayer(p)}>
                <img src={roles.filter(x => x.role === p.role)[0].icon}/>
                {p.name}
            </ListGroup.Item>)}
        </ListGroup>
    }

    let register = (r) => {
        setRegistered(true);
        addAttendant({raidId: raidId, playerId: r.id, role: r.role, name: r.name});
    };

    let signupCard;
    if (registered) {
        signupCard = <Card>
            <Card.Header>
                Great success!
            </Card.Header>
            <Card.Body>
                Your response is registered, thank you!
            </Card.Body>
        </Card>
    } else {
        signupCard = <Card>
            <Card.Header>
                Wanna join? 
            </Card.Header>
            <Card.Body>
                <Form>
                    { player ? 
                        <>
                            <Card.Title>Hi <img style={{height:25, width:25}} src={roles.filter(x => x.role === player.role)[0].icon}/>{player.name}!</Card.Title> 
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
                            <Button variant="primary" onClick={() => register(player)}>
                                Lets go!
                            </Button>
                        </>
                        : 
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
                    }
                </Form>
            </Card.Body>
        </Card>
    }


    return (
        <>
            {signupCard}
        </>
    );
}

export default SignupForm;

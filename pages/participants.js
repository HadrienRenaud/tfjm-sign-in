import React from 'react'
import Layout from "../components/MyLayout";
import {Button, Icon, Menu, Segment} from "semantic-ui-react";
import Participant from "../components/Participant";

class Participants extends React.Component {
    state = {
        selectedParticipant: 0
    }
    selectedParticipant = 0

    constructor(props) {
        super(props)
        this.participants = [
            {
                index: 0
            },
            {
                index: 1
            },
            {
                index: 2
            },
            {
                index: 3
            }
        ]
    }

    selectParticipant = (e, {name}) => {
        this.selectedParticipant = parseInt(name);
        this.setState({selectedParticipant: this.selectedParticipant})
    }

    addParticipant = (e) => {
        let i = this.participants.length;
        this.participants.push({index: i});
        this.selectParticipant({}, {name: String(i)})
    };

    removeParticipant = (e) => {
        this.participants.splice(this.selectedParticipant, 1);
        this.selectParticipant(e, {name: this.selectedParticipant})
    }

    render = () => {
        const {selectedParticipant} = this.state;
        let participant = this.participants[selectedParticipant];

        let plusButton = "";
        if (this.participants.length < 7)
            plusButton = <Menu.Item onClick={this.addParticipant}>
                    <Icon name="plus"/>
            </Menu.Item>

        return (
            <Layout>
                <Menu attached='top' tabular>
                    <Menu.Menu>
                        {this.participants.map(p => (
                            <Menu.Item
                                name={String(p.index)}
                                active={selectedParticipant === p.index}
                                onClick={this.selectParticipant}
                                key={p.index}
                            >
                                Participant {p.index}
                            </Menu.Item>
                        ))}
                    </Menu.Menu>
                    <Menu.Menu position="right">
                        {plusButton}
                    </Menu.Menu>
                </Menu>
                <Segment attached="bottom">
                    {
                        <Participant p={participant} key={selectedParticipant}/>
                    }
                </Segment>
            </Layout>)
    }
}


export default (props) => (
    <Participants {...props}/>
)

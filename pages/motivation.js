import React from 'react'
import Layout from "../components/MyLayout";
import PropTypes from 'prop-types'
import {Form, Button, Header, Dropdown, Divider, Message, Input, TextArea} from "semantic-ui-react";


class Motivation extends React.Component {
    static propTypes = {
        p: PropTypes.object.isRequired
    };

    onSubmit = (values, actions) => {
        console.log("onSubmit");
    };

    render = () => {
        return (
            <Form onSubmit={this.onSubmit}>
                <Header as="h2">
                    Lettre de motivation
                </Header>

                <Form.Field>
                    <label>Tu peux soit téléverser ta lettre de motivation comme un fichier .pdf</label>
                    <Input type="file" name="motivation_file" accept=".application/pdf,.pdf"/>
                </Form.Field>

                <Form.Field>
                    <label>Tu peux aussi la taper directement dans le champ suivant :</label>
                    <TextArea placeholder='Tell us more' style={{ minHeight: 100 }} />
                </Form.Field>

            </Form>
        )
    }
}

export default (props) => (
    <Layout>
        <Motivation {...props}/>
    </Layout>
)

import React from 'react'
import Layout from "../components/MyLayout";
import PropTypes from 'prop-types'
import {ErrorMessage, Field, Form as FForm, Formik} from "formik";
import {Form, Button, Header, Dropdown, Divider, Message} from "semantic-ui-react";


class Encadrant extends React.Component {
    static propTypes = {
        p: PropTypes.object.isRequired
    };

    onSubmit = (values, actions) => {
        console.log("onSubmit");
    };

    renderFormik = (props) => {

        let tournois = [
            {
                id: 1,
                beginDate: "2019-11-11",
                endDate: "2019-11-11",
                description: "Tournoi de Paris"
            },
            {
                id: 2,
                beginDate: "2019-11-11",
                endDate: "2019-11-11",
                description: "Tournoi de Paris"
            },
            {
                id: 3,
                beginDate: "2019-11-11",
                endDate: "2019-11-11",
                description: "Tournoi de Paris"
            }
        ]

        return (
            <Form onSubmit={props.handleSubmit}>
                <Header as="h2">
                    Mon équipe
                </Header>

                <Form.Field>
                    <label>Nom</label>
                    <Field type="text" name="name"/>
                    <ErrorMessage name="name" component={Error}/>
                </Form.Field>
                <Form.Field>
                    <label>Trigramme</label>
                    <Field type="text" name="trigramme"/>
                    <ErrorMessage name="text" component={Error}/>
                </Form.Field>

                <Divider/>

                <Header as="h3">
                    Mon tournoi
                </Header>

                <Form.Field>
                    <label>Choix du tournoi :</label>
                    <Dropdown placeholder='Veuillez sélectionner' fluid selection>
                        <Dropdown.Menu>
                            {tournois.map(t => (
                                <Dropdown.Item text={t.description} description={`du ${t.beginDate} au ${t.endDate}`}/>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </Form.Field>

                <Divider/>

                <Header as="h3">
                    Settings
                </Header>

                <Form.Field>
                    <label>Mot de passe</label>
                    <Field type="password" name="password"/>
                    <ErrorMessage name="password" component="div"/>
                </Form.Field>
                <Form.Field>
                    <label>Répétez le mot de passe</label>
                    <Field type="password" name="password2"/>
                    <ErrorMessage name="password2" component="div"/>
                </Form.Field>



                <Button>Sauvegarder</Button>
            </Form>
        )
    };

    render = () => {
        return (<Formik ui
                        onSubmit={this.onSubmit}
                        render={this.renderFormik}
        />)
    }
}

export default (props) => (
    <Layout>
        <Encadrant {...props}/>
    </Layout>
)

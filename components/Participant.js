import React from 'react'
import PropTypes from 'prop-types'
import {ErrorMessage, Field, Form as FForm, Formik} from "formik";
import {Form, Button, Header, Dropdown, Divider, Message} from "semantic-ui-react";


class Error extends React.Component {
    render = () => {
        return (<Message negative>
            {this.children}
        </Message>)
    }
}

class Participant extends React.Component {

    static propTypes = {
        p: PropTypes.object.isRequired
    };

    onSubmit = (values, actions) => {
        console.log("onSubmit");
    };

    renderFormik = (props) => {
        return (
            <Form onSubmit={props.handleSubmit}>
                <Header as={"h2"}>
                    Participant n°{this.props.p.index}
                </Header>


                <Header as="h3">
                    Moi
                </Header>

                <Form.Field>
                    <label>Prénom</label>
                    <Field type="text" name="firstname"/>
                    <ErrorMessage name="firstname" component={Error}/>
                </Form.Field>
                <Form.Field>
                    <label>Nom</label>
                    <Field type="text" name="name"/>
                    <ErrorMessage name="name" component={Error}/>
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <Field type="email" name="email"/>
                    <ErrorMessage name="email" component={Error}/>
                </Form.Field>
                <Form.Field>
                    <label>Date de naissance</label>
                    <Field type="date" name="date_naissance"/>
                    <ErrorMessage name="date_naissance" component={Error}/>
                </Form.Field>
                <Form.Field>
                    <label>Sexe:</label>
                    <Dropdown placeholder='Veuillez sélectionner' fluid selection options={[
                        {value: "M", text: "M"}, {value: "F", text: "F"}
                    ]}/>
                </Form.Field>
                <Form.Field>
                    <label>Adresse :</label>
                    <Field type="text" name="address"/>
                    <ErrorMessage name="address" component={Error}/>
                </Form.Field>
                <Form.Group>
                    <Form.Field>
                        <label>Code postal :</label>
                        <Field type="number" name="code_postal"/>
                        <ErrorMessage name="code_postal" component={Error}/>
                    </Form.Field>
                    <Form.Field fluid>
                        <label>Ville :</label>
                        <Field type="text" name="ville"/>
                        <ErrorMessage name="ville" component={Error}/>
                    </Form.Field>
                </Form.Group>

                <Divider horizontal/>

                <Header as="h3">
                    Mon Lycée
                </Header>

                <Form.Field>
                    <label>Adresse de l'établissement :</label>
                    <Field type="text" name="address_etabl"/>
                    <ErrorMessage name="address_etabl" component={Error}/>
                </Form.Field>
                <Form.Field>
                    <label>Code postal de l'établissement :</label>
                    <Field type="number" name="code_postal_etabl"/>
                    <ErrorMessage name="code_postal_etabl" component={Error}/>
                </Form.Field>
                <Form.Field>
                    <label>Ma classe :</label>
                    <Field type="text" name="address_etabl"/>
                    <ErrorMessage name="address_etabl" component={Error}/>
                </Form.Field>

                <Divider horizontal/>


                <Header as="h3">
                    Mon Responsable
                </Header>

                <Form.Field>
                    <label>Prénom</label>
                    <Field type="text" name="firstname_resp"/>
                    <ErrorMessage name="firstname_resp" component={Error}/>
                </Form.Field>
                <Form.Field>
                    <label>Nom</label>
                    <Field type="text" name="name_resp"/>
                    <ErrorMessage name="name_resp" component={Error}/>
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <Field type="email" name="email_resp"/>
                    <ErrorMessage name="email_resp" component={Error}/>
                </Form.Field>
                <Form.Field>
                    <label>Adresse :</label>
                    <Field type="text" name="address_resp"/>
                    <ErrorMessage name="address_resp" component={Error}/>
                </Form.Field>
                <Form.Group>
                    <Form.Field>
                        <label>Code postal :</label>
                        <Field type="number" name="code_postal_resp"/>
                        <ErrorMessage name="code_postal_resp" component={Error}/>
                    </Form.Field>
                    <Form.Field fluid>
                        <label>Ville :</label>
                        <Field type="text" name="ville_resp"/>
                        <ErrorMessage name="ville_resp" component={Error}/>
                    </Form.Field>
                </Form.Group>
                <Button>Log In</Button>
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

export default Participant

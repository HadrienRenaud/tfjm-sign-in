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
        return (
            <Form onSubmit={props.handleSubmit}>
                <Header as="h2">
                    Encadrant
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
                    <label>Profession :</label>
                    <Field type="text" name="address"/>
                    <ErrorMessage name="address" component={Error}/>
                </Form.Field>
                <Form.Field>
                    <label>Présence :</label>
                    <Field type="checkbox" name="presence"/>
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

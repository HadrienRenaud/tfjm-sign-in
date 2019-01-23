import React from 'react'
import Layout from "../components/MyLayout";
import {ErrorMessage, Field, Form as sForm, Formik} from "formik";
import {Form, Segment, Header, Grid, Button} from "semantic-ui-react";

function onSubmitLogIn(values, actions) {
    console.log("onSubmit");
}

function renderLogIn({errors, status, touched, isSubmitting}) {
    return (
        <sForm>
            <Form>
                <Form.Field>
                    <label>Email</label>
                    <Field type="email" name="email"/>
                    <ErrorMessage name="email" component="div"/>
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <Field type="password" name="password"/>
                    <ErrorMessage name="password" component="div"/>
                </Form.Field>
                <Button>Log In</Button>
            </Form>
        </sForm>)
}

function onSubmitSignIn(values, actions) {
    console.log("onSubmit");
}

function renderSignIn({errors, status, touched, isSubmitting}) {
    return (
        <sForm>
            <Form>
                <Form.Field>
                    <label>Email</label>
                    <Field type="email" name="email"/>
                    <ErrorMessage name="email" component="div"/>
                </Form.Field>
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
                <Button>Sign In</Button>
            </Form>
        </sForm>)
}


export default () => (
    <Layout>
        <Grid columns={2}>
            <Grid.Column>
                <Segment>
                    <Header as="h2">
                        Sign in
                    </Header>
                    <Formik
                        onSubmit={onSubmitSignIn}
                        render={renderSignIn}
                    />
                </Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment>
                    <Header as="h2">
                        Or log in
                    </Header>
                    <Formik
                        onSubmit={onSubmitLogIn}
                        render={renderLogIn}
                    />
                </Segment>
            </Grid.Column>
        </Grid>
    </Layout>
)

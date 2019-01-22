import "semantic-ui-css/semantic.min.css"
import MyHeader from './MyHeader'
import MyFooter from './MyFooter'
import React from "react";
import {Container} from "semantic-ui-react";

const fullSizedPage = {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column"
}

const fullSizedPageContent = {
    flex: 1
}

const Layout = (props) => (
    <div style={fullSizedPage}>
        <MyHeader/>
        <Container style={fullSizedPageContent}>
            {props.children}
        </Container>
        <MyFooter/>
    </div>
)

export default Layout

import React from "react";
import {Container, Segment} from "semantic-ui-react";

const MyFooter = () => (
    <Segment>
        <Container textAlign="center">
            <p>This site is developped using React, Semantic-UI, Next ...</p>
            <p>Written by Hadrien Renaud</p>
            <p>Copyright © 2019 Tournois Français des Jeunes Mathématiciennes et Mathématiciens</p>
        </Container>
    </Segment>
);

export default MyFooter

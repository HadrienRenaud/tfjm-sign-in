import React from "react";

export class Error extends React.Component {
    render = () => {
        return (<Message negative>
            {this.children}
        </Message>)
    }
}


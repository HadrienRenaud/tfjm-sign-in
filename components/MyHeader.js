import React from "react";
import Link from "next/link";
import {Container, Header, Menu} from "semantic-ui-react";


const MyHeader = () => (
    <Menu>
        <Container>
            <Menu.Menu position="left">
                <Menu.Item>
                    <Link href="/home">
                        Home
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/participants">
                        Participants
                    </Link>
                </Menu.Item>
            </Menu.Menu>
            <Menu.Header as="h3">
                <Link href="https://tfjm.org">
                    TFJM²
                </Link>
            </Menu.Header>
            <Menu.Menu position="right">
                <Menu.Item>
                    <Link href="https://tfjm.org">
                        Règlement
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/login">
                        Log Out
                    </Link>
                </Menu.Item>
            </Menu.Menu>
        </Container>
    </Menu>
)

export default MyHeader

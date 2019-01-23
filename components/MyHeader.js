import React from "react";
import Link from "next/link";
import {Button, Container, Menu} from "semantic-ui-react";


const MyHeader = () => (
    <Menu>
        <Container>
            <Menu.Menu position="left">
                <Menu.Item>
                    <Link href="https://tfjm.org">
                        <a>TFJM²</a>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/home">
                        <a>Home</a>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/participants">
                        <a>Participants</a>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/encadrant">
                        <a>Encadrant</a>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/motivation">
                        <a>Motivation</a>
                    </Link>
                </Menu.Item>
            </Menu.Menu>
            <Menu.Menu position="right">
                <Menu.Item>
                    <Link href="https://tfjm.org">
                        <a>Règlement</a>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Button href="/login" active>
                        Log Out
                    </Button>
                </Menu.Item>
            </Menu.Menu>
        </Container>
    </Menu>
)

export default MyHeader

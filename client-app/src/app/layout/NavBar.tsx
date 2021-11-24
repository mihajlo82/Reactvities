import React from "react";
import { Button, Menu, Container } from "semantic-ui-react";
import { useStore } from "../stores/store";


export default function NavBar(){

    const {activityStore} = useStore();
    return(
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item>
                    <img src="./assets/logo.png" alt="logo" style={{marginRight: '10px'}} />
                    Reactivities
                </Menu.Item>

                <Menu.Item name='activities' />
                <Menu.Item>
                    <Button onClick={()=>activityStore.openForm()} positive content="Create Activity " />
                </Menu.Item>
            </Container>

        </Menu>
    )
}
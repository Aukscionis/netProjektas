import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react'

interface IProps {
  openCreateForm: () => void;
}

export const NavBar: React.FC<IProps> = ({openCreateForm}) => {

    return (
      <Menu fixed='top'>
        <Container>
        <Menu.Item name='Activities' href="#"/>
        <Menu.Item>
        <Button onClick={openCreateForm} positive content='Create activity'/>
        </Menu.Item>
        </Container>
      </Menu>
    )
}

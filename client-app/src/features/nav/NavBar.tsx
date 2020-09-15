import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { NavLink } from 'react-router-dom';


export const NavBar: React.FC = () => {
    return (
      <Menu fixed='top' style={{width: '100%'}}>
        <Container>
        <Menu.Item header name='Home' as={NavLink} exact to='/'/>
        <Menu.Item name='Activities' as={NavLink} to='/activities'/>
        <Menu.Item>
        <Button as={NavLink} to='/createActivity' positive content='Create activity'/>
        </Menu.Item>
        </Container>
      </Menu>
    )
}

export default observer(NavBar);
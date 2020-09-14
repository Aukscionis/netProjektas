import React, { useContext } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import ActivityStore from '../../app/stores/activityStore';
import { observer } from 'mobx-react-lite';


export const NavBar: React.FC = () => {
  const activityStore = useContext(ActivityStore);
    return (
      <Menu fixed='top' style={{width: '100%'}}>
        <Container>
        <Menu.Item name='Activities' href="#"/>
        <Menu.Item>
        <Button onClick={activityStore.openCreateForm} positive content='Create activity'/>
        </Menu.Item>
        </Container>
      </Menu>
    )
}

export default observer(NavBar);
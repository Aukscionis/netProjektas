import React, { useEffect, Fragment, useContext } from 'react';
import { Container } from 'semantic-ui-react';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard'
import { NavBar } from '../../features/nav/NavBar';
import LoadingComponent from './LoadingComponent';
import ActivityStore from '../stores/activityStore';
import {observer} from 'mobx-react-lite';

const App = () => {
 const activityStore = useContext(ActivityStore);

 useEffect(() => {
   activityStore.loadActivities();
 }, [activityStore]);
 
 if(activityStore.loadingInitial) return <LoadingComponent content='Loading activities...' />

 return (
    <Fragment >
      <Container style={{marginTop: '7em', width: '80%'}}>
      <NavBar />
      <ActivityDashboard />
    </Container>
    </Fragment>
  );
}

export default observer(App);

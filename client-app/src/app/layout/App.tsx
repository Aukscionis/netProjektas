import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard'
import { NavBar } from '../../features/nav/NavBar';
import {observer} from 'mobx-react-lite';
import { Route, withRouter, RouteComponentProps, Switch } from 'react-router-dom';
import { HomePage } from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';
import NotFound from './NotFound';

const App: React.FC<RouteComponentProps> = ({location}) => {

 return (
    <Fragment >
      <Route exact path='/' component={HomePage} />
      <Route path={'/(.+)'} render={() => (
        <Fragment >
        <Container style={{marginTop: '7em', width: '70%'}}>
       <NavBar />
       <Switch>
        <Route exact path='/activities' component={ActivityDashboard} />
        <Route path='/activities/:id' component={ActivityDetails} />
       <Route key={location.key} path={['/createActivity', '/manage/:id']} component={ActivityForm} />
       <Route component={NotFound}/>
       </Switch>
          </Container>
        </Fragment>
      )}/>
    </Fragment>
  );
}

export default withRouter(observer(App));

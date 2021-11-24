import React, { useState, useEffect } from 'react';
import { Button, Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import { assertGenericTypeAnnotation } from '@babel/types';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';


//////6less mobx

function App() {
  const {activityStore} = useStore();
  

useEffect(() => {
  activityStore.loadActivities();
}, [activityStore])



if(activityStore.loadingInitial) return <LoadingComponent content='Loading app' />
  return (
    <>
     <NavBar />
     <Container style={{marginTop:'7em'}} >

     <ActivityDashboard />

    </Container>
    
    </>
  );
}

export default observer(App);

import { observer } from "mobx-react-lite";
import React from "react";
import { Grid } from "semantic-ui-react";
import { Activity } from "../../../models/activity";
import { useStore } from "../../../stores/store";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

interface Props {
    activities: Activity[];
    deleteActivity: (id: string)=> void;
    submitting: boolean
}

export default observer(function ActivityDashboard() {

    const {activityStore} = useStore();
    const {selectedActivity, editMode} = activityStore
    return(
        <Grid>
            <Grid.Column width='10'>
              <ActivityList />
            </Grid.Column>

            <Grid.Column width='6'>
                {selectedActivity &&  !editMode &&
                     <ActivityDetails 
                     /> }

                {editMode &&
              <ActivityForm />
                }
            </Grid.Column>
        </Grid>
    )
})
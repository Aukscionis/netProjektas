import React, { SyntheticEvent } from 'react'
import { Grid } from 'semantic-ui-react'
import { IActivity } from '../../../app/modules/activity';
import { ActivityList } from './ActivityList';
import { ActivityDetails } from '../details/ActivityDetails';
import { ActivityForm } from '../form/ActivityForm';

interface IProps {
    activities: IActivity[];
    selectActivity: (id: string) => void;
    selectedActivity: IActivity;
    editMode: boolean;
    setEditMode: (editMode: boolean) => void;
    setSelectedActivity: (selectedActivity: IActivity | null) => void;
    createActivity: (activity: IActivity) => void;
    editActivity: (activity: IActivity) => void;
    deleteActivity: (event: SyntheticEvent<HTMLButtonElement>, id: string) => void;
    submitting: boolean;
    target: string;
}

export const ActivityDashboard: React.FC<IProps> = ({target, submitting, deleteActivity, createActivity, editActivity, activities, selectActivity, selectedActivity, editMode, setEditMode, setSelectedActivity}) => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityList 
                target={target}
                submitting={submitting} activities={activities} selectActivity={selectActivity} deleteActivity={deleteActivity}/>
            </Grid.Column>
            <Grid.Column width={6}>
                {selectedActivity && !editMode &&
            <ActivityDetails activity={selectedActivity} setEditMode={setEditMode} setSelectedActivity={setSelectedActivity}/> }
            {editMode &&
            <ActivityForm 
            key={selectedActivity && (selectedActivity.id || 0)}
            setEditMode={setEditMode} 
            initialFormState={selectedActivity} 
            createActivity={createActivity} 
            editActivity={editActivity} 
            submitting={submitting}/> 
            }
            </Grid.Column>
        </Grid>
    )
}
export default ActivityDashboard;

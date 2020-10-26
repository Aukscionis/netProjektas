import React, {useState, FormEvent, useContext, useEffect} from 'react'
import { Form, Button, Segment, Grid } from 'semantic-ui-react';
import { IActivity } from '../../../app/modules/activity';
import {v4 as uuid} from 'uuid';
import ActivityStore from '../../../app/stores/activityStore';
import { observer } from 'mobx-react-lite';
import { RouteComponentProps } from 'react-router-dom';
import {Form as FinalForm, Field} from 'react-final-form';
import TextInput from '../../../app/common/form/TextInput';
import TextAreaInput from '../../../app/common/form/TextAreaInput';
import { category } from '../../../app/common/options/categoryOptions';
import SelectInput from '../../../app/common/form/SelectInput';

interface DetailParams {
    id: string
}

export const ActivityForm: React.FC<RouteComponentProps<DetailParams>> = ({match, history}) => {
    const activityStore = useContext(ActivityStore);
    const {createActivity, editActivity, submitting, activity: initialFormState, loadActivity, clearActivity} = activityStore;

    const [activity, setActivity] = useState<IActivity>
    ({
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    });

    useEffect(() => {
        if(match.params.id && activity.id.length === 0)
        loadActivity(match.params.id).then(() => initialFormState && setActivity(initialFormState));
        return (() => {
        clearActivity();
        }) 
    }, [loadActivity, clearActivity, match.params.id, initialFormState, activity.id.length]);

    const handleSubmit = () => {
        if(activity.id.length === 0) {
        let newActivity = {
            ...activity,
            id: uuid()
        } 
        createActivity(newActivity).then(() => history.push(`/activities/${newActivity.id}`));
    }
        else {
            editActivity(activity).then(() => history.push(`/activities/${activity.id}`));
        }

    }

    const handleFinalFormSubmit = (values: any) => {
        console.log(values);
    }


    const handleInputChange = (event: FormEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const {name, value} = event.currentTarget;
            setActivity({...activity, [name]: value})
    }

    return (
        <Grid>
            <Grid.Column width={10}>
            <Segment clearing>
                <FinalForm 
                onSubmit={handleFinalFormSubmit}
                render={({handleSubmit}) => (
                    <Form onSubmit={handleSubmit} >
                    <Field name='title' placeholder='Title' value={activity.title} component={TextInput} />
                    <Field component={TextAreaInput} rows={3} name='description' placeholder='Description' value={activity.description}/>
                    <Field component={SelectInput} options={category} placeholder='Category' name='category' value={activity.category}/>
                    <Field component={TextInput}  type='datetime-local' name='date' placeholder='Date' value={activity.date}/>
                    <Field component={TextInput} placeholder='City' name='city' value={activity.city}/>
                    <Field component={TextInput} placeholder='Venue' name='venue' value={activity.venue}/>
                    <Button floated='right' loading={submitting} positive type='Submit' content='Submit'/>
                    <Button floated='right' onClick={() => history.push('/activities')} type='button' content='Cancel'/>
                </Form>
                )}
                />
        </Segment>
            </Grid.Column>
        </Grid>
       
    )
}

export default observer(ActivityForm);
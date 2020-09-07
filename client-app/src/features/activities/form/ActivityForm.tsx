import React, {useState, FormEvent} from 'react'
import { Form, Button, Segment } from 'semantic-ui-react';
import { IActivity } from '../../../app/modules/activity';
import {v4 as uuid} from 'uuid';

interface IProps {
    setEditMode: (editMode: boolean) => void;
    initialFormState: IActivity;
    createActivity: (activity: IActivity) => void;
    editActivity: (activity: IActivity) => void;
    submitting: boolean;
}



export const ActivityForm: React.FC<IProps> = ({submitting, setEditMode, initialFormState, createActivity, editActivity}) => {

    const initializeForm = () => {
        if(initialFormState)
        return initialFormState;
        else
        return {
            id: '',
            title: '',
            category: '',
            description: '',
            date: '',
            city: '',
            venue: ''
        };
    };

    const [activity, setActivity] = useState<IActivity>(initializeForm);

    const handleSubmit = () => {
        if(activity.id.length === 0) {
        let newActivity = {
            ...activity,
            id: uuid()
        } 
        createActivity(newActivity);
    }
        else {
            editActivity(activity);
        }

    }

    const handleInputChange = (event: FormEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const {name, value} = event.currentTarget;
            setActivity({...activity, [name]: value})
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit}>
                <Form.Input onChange={handleInputChange} name='title' placeholder='Title' value={activity.title}/>
                <Form.TextArea onChange={handleInputChange} rows={2} style={{ minHeight: 80 }} name='description' placeholder='Description' value={activity.description}/>
                <Form.Input onChange={handleInputChange} placeholder='Category' name='category' value={activity.category}/>
                <Form.Input onChange={handleInputChange}  type='datetime-local' name='date' placeholder='Date' value={activity.date}/>
                <Form.Input onChange={handleInputChange} placeholder='City' name='city' value={activity.city}/>
                <Form.Input onChange={handleInputChange} placeholder='Venue' name='venue' value={activity.venue}/>
                <Button floated='right' loading={submitting} positive type='Submit' content='Submit'/>
                <Button floated='right' onClick={() => setEditMode(false)} type='button' content='Cancel'/>
            </Form>
        </Segment>
    )
}

export default ActivityForm;
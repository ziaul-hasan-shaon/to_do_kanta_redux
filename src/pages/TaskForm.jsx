/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './TaskForm.css'
import { Box, Button } from '@chakra-ui/react'

function TaskForm({onClose}) {

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const designation = form.designation.value;
        const date = form.date.value;
        const description = form.textarea.value;
        const task = {
            name,
            email,
            designation,
            date,
            description
        }
        console.log(task)
        form.reset()
    }

    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-field'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder='write user name' />
                </div>
                <div className='form-field'>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" placeholder='write user email' />
                </div>
                <div className='form-field'>
                    <label htmlFor="designation">Designation</label>
                    <input type="text" name="designation" id="designation" placeholder='write user designation' />
                </div>
                <div className='form-field'>
                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" id="date" />
                </div>
                <div className='form-field'>
                    <label htmlFor="textarea">Task Details</label>
                    <textarea name="textarea" id="textarea" cols="30" rows="4" placeholder='write task description'></textarea>
                </div>
                <Box display='flex' justifyContent='space-between'>
                    <Button type='submit' colorScheme='blue' mr={3} onClick={onClose}>
                        Submit
                    </Button>
                    <Button colorScheme='red' mr={3} onClick={onClose}>
                        Cancel
                    </Button>
                </Box>
            </form>
        </div>
    )
}

export default TaskForm

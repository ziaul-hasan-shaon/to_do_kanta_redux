/* eslint-disable no-unused-vars */
import { Avatar, Box, Button, Heading, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { BiSearch, BiBell } from "react-icons/bi";
import TaskModal from '../TaskModal';

function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box display='flex' justifyContent='space-between' py='20px' px='40px' bg='blue.400'>
            <Heading color='white'>Task-Manager</Heading>
            <Box display='flex' gap='20px'>
                <BiSearch fontSize='40px' color='white'/>
                <BiBell fontSize='40px' color='white' />
                <Button onClick={onOpen}>Add Task</Button>
                <Avatar bg='teal.500' />
            </Box>
            <TaskModal isOpen={isOpen} onClose={onClose}></TaskModal>
        </Box>
    )
}

export default Navbar

/* eslint-disable no-unused-vars */
import { Avatar, Box, Heading, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'


function Mytask() {
    return (
        <Box bg='antiquewhite' p={5} h='100vh'>
            <Heading mb={5} borderBottom='2px' p={2}>Members</Heading>
            <Wrap p={3} borderBottom='2px'>
                <WrapItem>
                    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                </WrapItem>
                
                <WrapItem>
                    <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                </WrapItem>
                <WrapItem>
                    <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                </WrapItem>
                
                <WrapItem>
                    <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                </WrapItem>
                <WrapItem>
                    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                </WrapItem>
            </Wrap>
            <Box>
                <Heading mb={5} borderBottom='2px' p={2}>My Task</Heading>
            </Box>
        </Box>
    )
}

export default Mytask

/* eslint-disable no-unused-vars */
import { Box } from '@chakra-ui/react'
import React from 'react'
import { BiClipboard, BiSolidUserAccount, BiSolidLayerPlus, BiSolidChat, BiSolidWrench } from "react-icons/bi";

function Sidebar() {
    return (
        <Box bg='gray.100' h='100vh' p={5} display='flex' flexDir='column' alignItems='center' gap='40px'>
            <BiSolidLayerPlus fontSize='40px' color='blue'/>
            <BiClipboard fontSize='40px' color='blue'/>
            <BiSolidUserAccount fontSize='40px' color='blue'/>
            <BiSolidChat fontSize='40px' color='blue'/>
            <BiSolidWrench fontSize='40px' color='blue'/>
        </Box>
    )
}

export default Sidebar

/* eslint-disable no-unused-vars */
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

function Task() {
    return (
        <Box my={6}>
            <SimpleGrid spacing={4} templateColumns='repeat(3, 1fr)'>
                <Box display='flex' justifyContent='space-between' p={5} borderRadius='lg' bg='blue.300' my={5}>
                    <Heading fontSize='20px' fontWeight={600}>Incomplete Task</Heading>
                    <Text fontSize='18px' fontWeight={500}>0</Text>
                </Box>
                <Box display='flex' justifyContent='space-between' p={5} borderRadius='lg' bg='blue.300' my={5}>
                    <Heading fontSize='20px' fontWeight={600}>Task In Progress</Heading>
                    <Text fontSize='18px' fontWeight={500}>0</Text>
                </Box>
                <Box display='flex' justifyContent='space-between' p={5} borderRadius='lg' bg='blue.300' my={5}>
                    <Heading fontSize='20px' fontWeight={600}>Complete Task</Heading>
                    <Text fontSize='18px' fontWeight={500}>0</Text>
                </Box>
            </SimpleGrid>
            <SimpleGrid spacing={4} templateColumns='repeat(3, 1fr)'>
                <Card bg='pink.100'>
                    <CardHeader>
                        <Heading size='md'> Task Name</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter display='flex' justifyContent='space-between' alignItems='center'>
                        <Text fontSize='18px' fontWeight={500}>Status: Pending</Text>
                        <Button>Start</Button>
                    </CardFooter>
                </Card>
                <Card bg='pink.100'>
                    <CardHeader>
                        <Heading size='md'> Task Name</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter display='flex' justifyContent='space-between' alignItems='center'>
                        <Text fontSize='18px' fontWeight={500}>Status: Pending</Text>
                        <Button>Start</Button>
                    </CardFooter>
                </Card>
                <Card bg='pink.100'>
                    <CardHeader>
                        <Heading size='md'> Task Name</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter display='flex' justifyContent='space-between' alignItems='center'>
                        <Text fontSize='18px' fontWeight={500}>Status: Pending</Text>
                        <Button>Start</Button>
                    </CardFooter>
                </Card>
                
            </SimpleGrid>
        </Box>
    )
}

export default Task

/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../shared/Navbar'
import { Grid, GridItem } from '@chakra-ui/react'
import Sidebar from '../shared/Sidebar'
import Task from '../Task'
import Mytask from '../shared/MyTask'
import { Outlet } from 'react-router-dom'

function MainLayout() {
    return (
        <>
            <Navbar></Navbar>
            <Grid
                
                templateColumns='repeat(7, 1fr)'
                gap={4}
            >
                <GridItem  colSpan={1} ><Sidebar></Sidebar></GridItem>
                <GridItem  colSpan={4} ><Outlet></Outlet></GridItem>
                <GridItem  colSpan={2} ><Mytask></Mytask></GridItem>
                
            </Grid>
        </>
    )
}

export default MainLayout

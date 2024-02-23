/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'
import React from 'react'
import TaskForm from './TaskForm'

function TaskModal({isOpen, onClose}) {
    return (
        <Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg='papayawhip'>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <TaskForm onClose={onClose}></TaskForm>
                    </ModalBody>

                    <ModalFooter display='flex' justifyContent='space-between'>
                        {/* <Button type='submit' colorScheme='blue' mr={3} onClick={handleSubmit}>
                            Submit
                        </Button> */}
                        {/* <Button colorScheme='Red' mr={3} onClick={onClose}>
                            Cancel
                        </Button> */}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default TaskModal

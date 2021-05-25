import React, { useState } from 'react'
import {
    Button, Modal, ModalHeader,
    ModalBody, ModalFooter
} from 'reactstrap';
function CreateTask({ modal, toggle, save }) {

    const [state, setState] = useState({
        name: '',
        department: '',
        email: '',
        phone: ''
    });

    // handel Input
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setState({ ...state, [name]: value });

    }

    // Handle Save for modal
    const handleSave = (e) => {
        e.preventDefault();
        save(state)
        console.log(save);
        setState({
            name: '',
            department: '',
            email: '',
            phone: ''
        })
    }

    return (
        <>
            {/* Modal section */}

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create Task</ModalHeader>
                <ModalBody>
                    <form  >
                        <div className="form-group">
                            <label>Task Name</label>
                            <input type="text" className="form-control"
                                value={state.name}
                                onChange={handleInput}
                                name="name" />
                        </div>
                        <div className="form-group">
                            <label>Department</label>
                            <input type="text" className="form-control"
                                value={state.department}
                                onChange={handleInput}
                                name="department" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input row="5" className="form-control"
                                value={state.email}
                                onChange={handleInput}
                                name="email" required />
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <div>
                                <input type="text" className="form-control"
                                    value={state.phone}
                                    onChange={handleInput}
                                    name="phone"
                                />
                            </div>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSave}>Create Task</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default CreateTask;

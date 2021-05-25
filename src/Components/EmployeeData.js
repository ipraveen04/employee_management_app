import React, { useState } from 'react'
import CreateTask from '../Components/CreateTask'
import EmployeeDetails from './EmployeeDetails';

function EmployeeData() {
    const [modal, setModal] = useState(false);

    const [state, setState] = useState([
        {
            id: 1,
            name: "Pradeep",
            department: "Mbbs",
            email: "pradeep@gmail.com",
            phone: "8494912345"
        },
        {
            id: 2,
            name: "Praveen",
            department: "Eng.",
            email: "praveen@gmail.com",
            phone: "8494956345"
        }
    ])

    // modal section
    const toggle = () => {
        setModal(!modal)
    }

    //save task
    const saveTask = (taskObj) => {
        let tempList = state
        tempList.push(taskObj)
        setState(tempList)
        setModal(false)
    }

    return (
        <>

            <div className="header text-center">
                <h3>Daily Tasks Management App</h3>
                <button className="btn btn-primary mt-2 btnr" onClick={() => setModal(true)} >Create Task</button>
            </div>

            <CreateTask toggle={toggle} modal={modal} save={saveTask} />

            <EmployeeDetails details={state} />

        </>
    )
}

export default EmployeeData;

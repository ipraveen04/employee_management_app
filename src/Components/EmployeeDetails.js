import React from 'react'
import {
    TableContainer, Table, TableHead,
    TableRow, TableCell, TableBody
} from '@material-ui/core';


function EmployeeDetails({ details }) {

    return (
        <>
            {/* Table section */}
            <TableContainer >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Department</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone No</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {details.map((ele, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell>{ele.name}</TableCell>
                                    <TableCell>{ele.department}</TableCell>
                                    <TableCell>{ele.email}</TableCell>
                                    <TableCell>{ele.phone}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default EmployeeDetails;

import React from "react";
import { Table } from "react-bootsrap";

const header = <h3>List of notes</h3>;

function Notes() {
    return (
        <div>
            {header}
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Content</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </Table>
        </div>
    )
}
export default Notes;
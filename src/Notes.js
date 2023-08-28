import React from "react";
import { Table } from "react-bootstrap"
import Note from "./Note";

var nodeList = [
    {
        title: "Go to the gym",
        category: "Hobby",
        content: "Leg day",
        date: new Date("2020-06-06")
    },
    {
        title: "Go to the gym",
        category: "Hobby",
        content: "Chest day",
        date: new Date("2020-07-07")
    }
];
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
                    <Note title={1} date={new Date("2020-10-10")}/>
                    <Note 
                    title="Go shopping"
                    category="To do"
                    content="Buy some vegetables"
                    date={new Date("2020-12-12")}
                    />

                    {nodeList.map(note => {
                        return(
                            <Note
                            title={note.title}
                            category={note.category}
                            content={note.content}
                            date={note.date}
                            />
                        )
                    })}
                </thead>
                <tbody>

                </tbody>
            </Table>
        </div>
    )
}
export default Notes;
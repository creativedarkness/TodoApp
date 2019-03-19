import React, { Component } from 'react';

const TaskFilter = (props) => {
    // set any varrables

    return (
        <div className="taskFilter">
            <h4 className="itemsLeft"> {props.itemsLeft.length} item left</h4>
            <ul className="filterList">
                <li className="filterType" onClick={() => {
                    props.showActiveTasks("all")
                }}> 
                    All
                </li>
                <li className="filterType" onClick={() => {
                    props.showActiveTasks("active")
                }}>
                    Active
                    </li>
                <li className="filterType" onClick={() => 
                    props.completedClicked("completed")
                }>
                    Completed
                </li>
            </ul>
        </div>
    )
}

export default TaskFilter
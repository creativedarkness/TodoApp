import React, { Component } from 'react';

const TaskList = (props) => {
    // set any varrables
        const showActive = props.activeTasks.map((tasks, idx) => {
            return (
                <div className="tasklist" key={idx} onClick={() => {
                    props.markComplete(idx)
                }}>
                    <span className="cirIcon"><i className="far fa-circle"></i></span>
                    <h4 className="taskItem">{tasks}</h4>
                </div>)
        })

    const showCompleted = props.compltedTasks.map((tasks, idx) => {
        return (
            <div className="tasklist"  key={idx}>
                <span className="completeIcon"><i className="fas fa-circle"></i></span>
                <h4 className="taskItem">{tasks}</h4>
            </div>)
    })

    return (
        <div>
            {props.view ==='all' || props.view === 'active' ? showActive : null}
            {props.view ==='all' || props.view === 'completed' ? showCompleted : null}
        </div>
    )
}

export default TaskList
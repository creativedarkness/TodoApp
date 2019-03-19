import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import TaskFilter from './TaskFilter';

class TaskApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTasks: ["make bed", "clean house", "feed cats"],
            completedTasks: ["procratinate"],
            view: "all",
            itemsLeft: 3
        }
        this.activeClicked = this.activeClicked.bind(this);
    }

    activeClicked = (view) => {
        // console.log(view);
        // let tempState =Object.assign({}, this.state);
        // tempState.view = view
        this.setState({ view })
    }

    completedClicked = (view) => {
        // console.log(view);
        this.setState({ view })
    }

    allClicked = (view) => {
        // console.log(view);
        this.setState({ view })
    }

    markComplete = (idx) => {
        console.log(`idx is: ${idx} - ${this.state.activeTasks[idx]}`);
        let tempState = Object.assign({}, this.state);
        let tmpArray = [];

        tempState.completedTasks.push(this.state.activeTasks[idx])

        for (let i = 0; i < this.state.activeTasks.length; i++) {
            if (i !== idx) {
                tmpArray.push(this.state.activeTasks[i])
            }
        }

        tempState.activeTasks = tmpArray;

        this.setState(tempState);
    }

    render() {
        return (
            <div className="App">
                <h1 className="taskAppTitle">todos</h1>
                <AddTask />
                <TaskList
                    activeTasks={this.state.activeTasks}
                    compltedTasks={this.state.completedTasks}
                    view={this.state.view}
                    markComplete={this.markComplete}
                />
                <TaskFilter
                    showActiveTasks={this.activeClicked}
                    completedClicked={this.completedClicked}
                    itemsLeft={this.state.activeTasks}
                />

            </div>
        );
    }
}

export default TaskApp;
import React, { Component } from 'react';
import { MTButton } from '../../component/MTForm';
import { TaskManStyle } from './taskManStyle'


class TaskManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <TaskManStyle>
                <div className="heading">
                    <div className="title">TaskManagement</div>
                    <div><MTButton className="createEle">Create</MTButton></div>
                </div>
            </TaskManStyle>
        );
    }
}

export default TaskManagement;
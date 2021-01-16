import React, { useEffect } from 'react';
import Icons from '../../component/Icons/icons';
import { MTButton } from '../../component/MTForm';
import { TaskManStyle } from './taskManStyle'
import { Card, Progress } from 'antd';
import { toDo, progress } from '../../../../core/Redux/Task-Management/taskAction';
import { useDispatch, useSelector } from 'react-redux';

export const TaskManagement = () => {
    let TodoList = useSelector(state => state).TodoList
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(toDo())
    }, [dispatch])

    useEffect(() => {
        dispatch(progress())
    }, [dispatch])

    console.log(TodoList.ProgressList, "maindata")
    return (
        <TaskManStyle>
            <div className="heading">
                <div className="title">List Of Tasks</div>
                <div><MTButton className="createEle">Create</MTButton></div>
            </div>
            <div className="mainContent">
                <div className="toDo-main">
                    <div className="header-todo">
                        <div className="todoTitle">To Do</div>
                        <div className="todoFilter"><Icons type="filter" /></div>
                    </div>
                    {TodoList.TodoList === undefined ? null : TodoList.TodoList.map((menu, index) => (
                        <Card key={index}>
                            <span style={{ display: "flex", justifyContent: "space-between" }}>
                                <div className="taskName">{menu.subject}</div>
                                <div className="play"><Icons type="play" /></div>
                            </span>
                            <div className="footer">
                                <div className="task-left-Content">
                                    <div className="user">
                                        <span className="userIcon"> <Icons type="right" /></span>
                                        <span className="username">{menu.assignedTo}</span>
                                    </div>
                                    <div className="user2">
                                        <span className="userIcon"> <Icons type="user" /></span>
                                        <span className="username">{menu.verifiedBy}</span>
                                    </div>
                                </div>
                                <div className="task-right-Content">
                                    <div className="normalContent">
                                        <span className="normal">{menu.priority}</span>
                                        <span style={{ paddingLeft: "2px" }}> <Icons type={menu.priority} /></span>
                                    </div>
                                    <div className="workProgress">
                                        <span className="workDetails">{menu.statusText}</span>
                                        <span style={{ paddingLeft: "2px" }}> <Icons type="taskList" /></span>
                                    </div>
                                    <div className="calender">
                                        <span className="Date">{menu.startDate}</span>
                                        <span style={{ paddingLeft: "2px" }}> <Icons type="calender" /></span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
                <div className="progress-main">
                    <div className="header-progress">
                        <div className="progressTitle">In Progress</div>
                        <div className="todoFilter"><Icons type="filter" /></div>
                    </div>
                    {TodoList.ProgressList === undefined ? null : TodoList.ProgressList.map((menu, index) => (
                        <Card key={index} className={menu.statusPercentage < 36 ? "card-error" : menu.statusPercentage < 51 ? 'card-warning' : null}>
                            <span style={{ display: "flex", justifyContent: "space-between" }}>
                                <div className="taskName">{menu.statusPercentage < 36 ? <Icons type="error" /> : menu.statusPercentage < 51 ? <Icons type="warning" /> : null} {menu.subject}</div>
                                <div className="play"><Icons type="calender-right" /></div>
                            </span>
                            <div className="footer">
                                <div className="task-left-Content">
                                    <Progress
                                        percent={menu.statusPercentage}
                                        status="active"
                                    />
                                    <div className="user">
                                        <span className="userIcon"> <Icons type="right" /></span>
                                        <span className="username">{menu.assignedTo}</span>
                                    </div>
                                    <div className="user2">
                                        <span className="userIcon"> <Icons type="user" /></span>
                                        <span className="username">{menu.verifiedBy}</span>
                                    </div>
                                </div>
                                <div className="task-right-Content">
                                    <div className="normalContent">
                                        <span className="normal">{menu.priority}</span>
                                        <span style={{ paddingLeft: "2px" }}> <Icons type={menu.priority} /></span>
                                    </div>
                                    <div className="workProgress">
                                        <span className="workDetails">{menu.statusText}</span>
                                        <span style={{ paddingLeft: "2px" }}> <Icons type="taskList" /></span>
                                    </div>
                                    <div className="calender">
                                        <span className="Date">{menu.dueDate}</span>
                                        <span style={{ paddingLeft: "2px" }}> <Icons type="calender" /></span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
                <div className="completed-main">
                    <div className="header-complete">
                        <div className="completedTitle">Completed</div>
                        <div className="todoFilter"><Icons type="filter" /></div>
                    </div>
                    {/* <Card key={index} className={menu.statusPercentage < 36 ? "card-error" : menu.statusPercentage < 51 ? 'card-warning' : null}>
                        <span style={{ display: "flex", justifyContent: "space-between" }}>
                            <div className="taskName">{menu.statusPercentage < 36 ? <Icons type="error" /> : menu.statusPercentage < 51 ? <Icons type="warning" /> : null} {menu.subject}</div>
                            <div className="play"><Icons type="calender-right" /></div>
                        </span>
                        <div className="footer">
                            <div className="task-left-Content">
                                <Progress
                                    percent={menu.statusPercentage}
                                    status="active"
                                />
                                <div className="user">
                                    <span className="userIcon"> <Icons type="right" /></span>
                                    <span className="username">{menu.assignedTo}</span>
                                </div>
                                <div className="user2">
                                    <span className="userIcon"> <Icons type="user" /></span>
                                    <span className="username">{menu.verifiedBy}</span>
                                </div>
                            </div>
                            <div className="task-right-Content">
                                <div className="normalContent">
                                    <span className="normal">{menu.priority}</span>
                                    <span style={{ paddingLeft: "2px" }}> <Icons type={menu.priority} /></span>
                                </div>
                                <div className="workProgress">
                                    <span className="workDetails">{menu.statusText}</span>
                                    <span style={{ paddingLeft: "2px" }}> <Icons type="taskList" /></span>
                                </div>
                                <div className="calender">
                                    <span className="Date">{menu.dueDate}</span>
                                    <span style={{ paddingLeft: "2px" }}> <Icons type="calender" /></span>
                                </div>
                            </div>
                        </div>
                    </Card> */}
                </div>
            </div>
        </TaskManStyle>
    );
}

export default TaskManagement;
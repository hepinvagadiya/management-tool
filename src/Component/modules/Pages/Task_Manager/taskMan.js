import React, { useEffect, useState } from 'react';
import Icons from '../../component/Icons/icons';
import { MTButton } from '../../component/MTForm';
import { TaskManStyle } from './taskManStyle'
import { Card } from 'antd';
import CardContent from './CardContent'
import Filter from './Filter'
import { useDispatch, useSelector } from 'react-redux';
import { ProgressData } from '../../../../core/Redux/Task-Management/taskAction';

export const TaskManagement = () => {
    let TaskList = useSelector(state => state).ProgressList.ProgressList[0]
    const [Todofilter, setTodofilter] = useState(false);
    const [progressFilter, setprogressFilter] = useState(false);
    const [completeFilter, setcompleteFilter] = useState(false);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(ProgressData())
    }, [dispatch])



    const todoFilterOpen = () => {
        setTodofilter(!Todofilter)
    }
    const progressFilterOpen = () => {
        setprogressFilter(!progressFilter)
    }
    const completeFilterOpen = () => {
        setcompleteFilter(!completeFilter)
    }
    const close = () => { }
    const taskList = []
    return (
        <TaskManStyle>
            <div className="heading">
                <div className="title">List Of Tasks</div>
                <div className="sideContent" style={{ display: 'flex' }}>
                    <div className="subject">Subject = {TaskList === undefined ? null : TaskList.globalFilter.Subject} <span className="close" onClick={close}><Icons type="closeFilter" /></span></div>
                    <div className="subject">Assigned To =  {TaskList === undefined ? null : TaskList.globalFilter.AssignedTo}<span className="close" onClick={close}><Icons type="closeFilter" /></span></div>
                    <div className="globalFilter"><Icons type="filter" /></div>
                    <MTButton className="createEle">Create</MTButton>
                </div>
            </div>
            <div className="mainContent">
                <div className="tasklistContent">
                    <div className="header">
                        <div className="title">To Do</div>
                        <div className="filter" onClick={todoFilterOpen}><Icons type="filter" /></div>
                    </div>
                    {Todofilter ? <div className="filterModal"><Filter /></div> : null}
                    <div className="body-content">
                        {taskList.length === 0 ?
                            <span>
                                {TaskList === undefined ? null : TaskList.toDo.map((menu, index) => (
                                    <div key={index}>
                                        <Card><CardContent menu={menu} content={'StartTask'} /></Card>
                                    </div>
                                ))}
                            </span>
                            : <span>
                                <div className="filter">Filter :</div>
                                {taskList.filter(name => name.includes('')).map(filteredName => (
                                    <span>
                                        <div className="subject">Subject = Task 1 <span className="close"><Icons type="closeFilter" /></span></div>
                                        <div className="subject">Verifier = John Smith <span className="close"><Icons type="closeFilter" /></span></div>
                                        <span>
                                            {TaskList === undefined ? null : TaskList.toDo.map((menu, index) => {
                                                < div key={index} >
                                                    {menu.subject === filteredName ? <Card ><CardContent menu={menu} content={'StartTask'} /></Card> : null}
                                                </div>
                                            })}
                                        </span>
                                    </span>
                                ))}
                            </span>}
                    </div>
                </div>
                <div className="tasklistContent">
                    <div className="header">
                        <div className="title">In Progress</div>
                        <div className="filter" onClick={progressFilterOpen}><Icons type="filter" /></div>
                    </div>
                    {progressFilter ? <div className="filterModal"><Filter /></div> : null}
                    {TaskList === undefined ? null : TaskList.inProgress.map((menu, index) => (
                        <div key={index}>
                            <Card className={menu.statusText !== 'In Progress' ? "card-error" : new Date() > new Date(menu.dueDate) ? 'card-warning' : null}>
                                <CardContent menu={menu} content={'Complete'} />
                            </Card>
                        </div>
                    ))}
                </div>
                <div className="tasklistContent">
                    <div className="header">
                        <div className="title">Completed</div>
                        <div className="filter" onClick={completeFilterOpen}><Icons type="filter" /></div>
                    </div>
                    {completeFilter ? <div className="filterModal"><Filter /></div> : null}
                    {TaskList === undefined ? null : TaskList.completed.map((menu, index) => (
                        <div key={index}>
                            <Card style={{ background: 'rgba(138, 216, 155, 0.22)' }}><CardContent menu={menu} content={'FeedBack'} /></Card>
                        </div>
                    ))}
                </div>
            </div>
        </TaskManStyle >
    );
}

export default TaskManagement;
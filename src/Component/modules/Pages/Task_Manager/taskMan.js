import React, { useEffect, useState } from 'react';
import Icons from '../../component/Icons/icons';
import { MTButton } from '../../component/MTForm';
import { TaskManStyle } from './taskManStyle'
import { ProgressData, toDo } from '../../../../core/Redux/Task-Management/taskAction';
import { useDispatch, useSelector } from 'react-redux';
import Complete from '../../../../core/Array/Complete.json'
// import ProgressCard from './Progress'
import CompleteCard from './Complete'
import { Card, Input, Form, Button, Tooltip } from 'antd';
import MTModal from '../../component/MTmodel/modal';

export const TaskManagement = () => {
    let TodoList = useSelector(state => state).TodoList
    const [Todofilter, setTodofilter] = useState(false);
    const [progressFilter, setprogressFilter] = useState(false);
    const [completeFilter, setcompleteFilter] = useState(false);
    const [Task, setTask] = useState(false);
    const [ConfirmTask, setConfirmTask] = useState(false);
    const [form] = Form.useForm();

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(toDo())
    }, [dispatch])
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
    const startTaskModal = () => {
        document.body.classList.add('ReactModal__Body--open')
        setTask(true);
    }
    const TaskOk = () => {
        document.body.classList.add('ReactModal__Body--before-close')
        setTask(false);
    }
    const CompleteTaskOpen = () => {
        document.body.classList.remove('ReactModal__Body--before-close')
        document.body.classList.add('ReactModal__Body--open')
        setConfirmTask(true);
    };

    const CompleteTaskOk = () => {
        document.body.classList.add('ReactModal__Body--before-close')
        setConfirmTask(false);
    };
    const onCancel = () => {
        document.body.classList.add('ReactModal__Body--before-close')
        form.resetFields();
        setTask(false);
        setConfirmTask(false)
    }
    function Filter() {
        return (
            <span>
                <Form form={form} layout="inline" id="create">
                    <span style={{ display: 'flex' }}>
                        <span>
                            <div className="inputs">
                                <div className="label">Filter Field</div>
                                <Form.Item name="field" rules={[{ required: true, message: 'Please input Filter Field!' }]} >
                                    <Input
                                        autoComplete="off"
                                        name="email"
                                        type="text"
                                        placeholder="Select Field"
                                    />
                                </Form.Item>
                            </div>
                            <div className="inputs">
                                <div className="label">Filter Value</div>
                                <Form.Item name="fieldValue" rules={[{ required: true, message: 'Please input Filter Value!' }]} >
                                    <Input
                                        autoComplete="off"
                                        name="email"
                                        type="text"
                                        placeholder="Enter Value"
                                    />
                                </Form.Item>
                            </div>
                        </span>
                        <span className="addField"> <Icons type="Add" /></span>
                    </span>
                </Form>
                <div className="subject">Subject = Task <span className="close"><Icons type="closeFilter" /></span></div>
                <div className="subject">Assigned To = John Deo <span className="close"><Icons type="closeFilter" /></span></div>
                <Button key="submit" form="create" className="search" htmlType="submit">Search</Button>
            </span>
        );
    }
    function CardContent(props) {
        const menu = props.menu
        const content = props.content
        console.log(content)
        return (
            <span>
                <span style={{ display: "flex", justifyContent: "space-between" }}>
                    <div className="taskName">{menu.statusPercentage < 36 ? <Icons type="error" /> : menu.statusPercentage < 51 ? <Icons type="warning" /> : null} {menu.subject}</div>
                    <Tooltip placement="bottom" title="Start Task">
                        <div className="play" onClick={startTaskModal}><Icons type="play" /></div>
                    </Tooltip>
                </span>
                <div className="footer">
                    <div className="task-left-Content">
                        <div className="user" style={{ paddingTop: '22px' }}>
                            <span className="userIcon"> <Icons type="right" /></span>
                            <span className="username">{menu.verifiedBy}</span>
                        </div>
                        <div className="user2">
                            <span className="userIcon"> <Icons type="user" /></span>
                            <span className="username">{menu.assignedTo}</span>
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
                <MTModal
                    visible={Task}
                    title="Start This Task"
                    onOk={TaskOk}
                    closable={false}
                    maskClosable={false}
                    footer={[
                        <Button key="submit" className="deleteEle" onClick={TaskOk}>Start</Button>,
                        <Button key="back" className="cancelEle" onClick={onCancel}>Cancel</Button>
                    ]}
                >
                    <p className="warning">Are you sure to start this task?</p>
                    <Icons type="usersMenu" /> <span className="title">{menu.subject}</span>
                </MTModal>
            </span>
        );
    }

    const taskList = ['Task 1']
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
                        <div className="todoFilter" onClick={todoFilterOpen}><Icons type="filter" /></div>
                    </div>
                    {Todofilter ? <div className="filterModal"><Filter /></div> : null}
                    <div className="body-content">
                        <div className="filter">Filter :</div>
                        {taskList.length === 0 ?
                            <span>
                                {TodoList.TodoList.map((menu, index) => (
                                    <div key={index}>
                                        <Card ><CardContent menu={menu} content={'todoContent'}/></Card>

                                    </div>
                                ))}
                            </span>
                            : taskList.filter(name => name.includes('')).map(filteredName => (
                                <span>
                                    <div className="subject">Subject = {filteredName} <span className="close"><Icons type="closeFilter" /></span></div>
                                    <div className="subject">Verifier = John Smith <span className="close"><Icons type="closeFilter" /></span></div>
                                    <span>
                                        {TodoList.TodoList.map((menu, index) => (
                                            <div key={index}>
                                                {menu.subject === filteredName ? <Card ><CardContent menu={menu} /></Card> : null}
                                            </div>
                                        ))}
                                    </span>
                                </span>
                            ))}
                    </div>
                </div>
                <div className="progress-main">
                    <div className="header-progress">
                        <div className="progressTitle">In Progress</div>
                        <div className="todoFilter" onClick={progressFilterOpen}><Icons type="filter" /></div>
                    </div>
                    {progressFilter ? <div className="filterModal"><Filter /></div> : null}
                    {TodoList.ProgressList === undefined ? null : TodoList.ProgressList.map((menu, index) => (
                        <div key={index}>
                            {/* <ProgressCard menu={menu} /> */}
                            <Card className={menu.statusPercentage < 36 ? "card-error" : menu.statusPercentage < 51 ? 'card-warning' : null}><CardContent menu={menu} content={'progContent'} /></Card>
                        </div>
                    ))}
                </div>
                <div className="completed-main">
                    <div className="header-complete">
                        <div className="completedTitle">Completed</div>
                        <div className="todoFilter" onClick={completeFilterOpen}><Icons type="filter" /></div>
                    </div>
                    {completeFilter ? <div className="filterModal"><Filter /></div> : null}
                    {Complete === undefined ? null : Complete.map((menu, index) => (
                        <div key={index}>
                            <CompleteCard menu={menu} />
                        </div>
                    ))}
                </div>
            </div>
        </TaskManStyle>
    );
}

export default TaskManagement;
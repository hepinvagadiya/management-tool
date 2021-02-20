import React, { useEffect, useState } from 'react';
import Icons from '../../component/Icons/icons';
import { MTButton } from '../../component/MTForm';
import { TaskManStyle } from './taskManStyle'
import { Card, Popover, Button, Input, Form } from 'antd';
import CardContent from './CardContent'
import { useDispatch, useSelector } from 'react-redux';
import { ProgressData } from '../../../../core/Redux/Task-Management/taskAction';
import PropTypes from 'prop-types';

export const TaskManagement = () => {
    let TaskList = useSelector(state => state).ProgressList.ProgressList[0]
    const [FilterItem, setFilterItem] = useState();
    const [form] = Form.useForm();

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(ProgressData())
    }, [dispatch])

    const AddFilterItem = (value) => {
        form.resetFields();
        setFilterItem([value])
    }
    const close = (keyName) => {
        console.log(keyName, "Subject")
        const maindata = Object.fromEntries(Object.entries(TaskList.globalFilter).filter(([key]) => key === keyName))
        // maindata.filter(item => item[index] !== index)
        // TaskList.globalFilter.filter(item => item.Subject !== Subject)
        console.log(maindata, "filter2")
    }
    const text = <span></span>;
    const content = (
        <div className="filterModal">
            <Form form={form} layout="inline" onFinish={AddFilterItem}>
                <span style={{ display: 'flex' }}>
                    <span>
                        <div className="inputs">
                            <div className="label">Filter Field</div>
                            <Form.Item name="fieldname" rules={[{ required: true, message: 'Please input Filter Field!' }]} >
                                <Input
                                    autoComplete="off"
                                    type="text"
                                    placeholder="Select Field"
                                />
                            </Form.Item>
                        </div>
                        <div className="inputs">
                            <div className="label">Filter Value</div>
                            <Form.Item name="fieldvalue" rules={[{ required: true, message: 'Please input Filter Value!' }]} >
                                <Input
                                    autoComplete="off"
                                    type="text"
                                    placeholder="Enter Value"
                                />
                            </Form.Item>
                        </div>
                    </span>
                    <Form.Item>
                        <Button className="addField" htmlType="submit"><Icons type="Add" /></Button>
                    </Form.Item>
                </span>
            </Form>
            {TaskList === undefined ? null : Object.entries(TaskList.globalFilter).map(function (key, index) {
                return <div key={index} className="subject">{key[0]} = {key[1]}<span className="close" onClick={() => close(index)}><Icons type="closeFilter" /></span></div>
            })}
            {FilterItem === undefined ? null : FilterItem.map((menu, index) => (
                <div className="subject" key={index}>{menu.fieldname} = {menu.fieldvalue} <span className="close"><Icons type="closeFilter" /></span></div>
            ))}
            <Button className="search">Search</Button>
        </div>
    );
    return (
        <TaskManStyle>
            <div className="heading">
                <div className="title">List Of Tasks</div>
                <div className="sideContent" style={{ display: 'flex' }}>
                    {TaskList === undefined ? null : Object.entries(TaskList.globalFilter).map(function (key, index) {
                        return <div key={index} className="subject">{key[0]} = {key[1]}<span className="close" onClick={() => close(key[0])}><Icons type="closeFilter" /></span></div>
                    })}
                    <div className="globalFilter"><Icons type="filter" /></div>
                    <MTButton className="createEle">Create</MTButton>
                </div>
            </div>
            <div className="body">
                <div className="mainContent">
                    <div className="content">
                        <div className="tasklistContent">
                            <div className="header">
                                <div className="title">To Do</div>
                                <Popover placement="bottomRight" title={text} content={content} trigger="click" style={{ top: '155px' }}>
                                    <div className="filter">
                                        <Icons type="filter" />
                                    </div>
                                </Popover>
                            </div>
                            <div className="body-content">
                                <span>
                                    <div className="filter">Filter :</div>
                                    {TaskList === undefined ? null : Object.entries(TaskList.toDoFilter).map(function (key, index) {
                                        return <div key={index} className="subject">{key[0]} = {key[1]}<span className="close" onClick={close}><Icons type="closeFilter" /></span></div>
                                    })}
                                </span>
                                <span>
                                    {TaskList === undefined ? null : TaskList.toDo.map((menu, index) => (
                                        <div key={index}>
                                            <Card><CardContent menu={menu} content={'StartTask'} /></Card>
                                        </div>
                                    ))}
                                </span>
                            </div>
                        </div>
                        <div className="tasklistContent">
                            <div className="header">
                                <div className="title">In Progress</div>
                                <Popover placement="bottomRight" title={text} content={content} trigger="click" style={{ top: '155px' }}>
                                    <div className="filter">
                                        <Icons type="filter" />
                                    </div>
                                </Popover>
                            </div>
                            <div className="body-content">
                                <span>
                                    {TaskList === undefined ? null : TaskList.inProgress.map((menu, index) => (
                                        <div key={index}>
                                            <Card className={menu.statusText !== 'In Progress' ? 'card-error' : new Date() > new Date(menu.dueDate) ? 'card-warning' : 'card-normal'}>
                                                <CardContent menu={menu} content={'Complete'} />
                                            </Card>
                                        </div>
                                    ))}
                                </span>
                            </div>
                        </div>
                        <div className="tasklistContent">
                            <div className="header">
                                <div className="title">Completed</div>
                                <Popover placement="bottomRight" title={text} content={content} trigger="click" style={{ top: '155px' }}>
                                    <div className="filter">
                                        <Icons type="filter" />
                                    </div>
                                </Popover>
                            </div>
                            <div className="body-content">

                                <span>
                                    {TaskList === undefined ? null : TaskList.completed.map((menu, index) => (
                                        <div key={index}>
                                            <Card style={{ background: 'rgba(138, 216, 155, 0.22)' }}><CardContent menu={menu} content={'FeedBack'} /></Card>
                                        </div>
                                    ))}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </TaskManStyle >
    );
}

export default TaskManagement;

TaskManagement.propTypes = {
    value: PropTypes.string,
    index: PropTypes.string,
};

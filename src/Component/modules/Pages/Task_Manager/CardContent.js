import React, { useState } from 'react';
import { Progress, Input, Form, Button, Tooltip, Radio } from 'antd';
import Icons from '../../component/Icons/icons';
import MTModal from '../../component/MTmodel/modal';

export const CardContent = (props) => {
    const [form] = Form.useForm();
    const [Task, setTask] = useState(false);
    const [ConfirmTask, setConfirmTask] = useState(false);
    const [FeedTask, setFeedTask] = useState(false);
    const menu = props.menu
    const content = props.content

    const startTaskModal = () => {
        document.body.classList.add('ReactModal__Body--open')
        setTask(true);
    }
    const StartTask = (token) => {
        console.log(token, "startTask")
        document.body.classList.add('ReactModal__Body--before-close')
        setTask(false);
    }
    const CompleteTaskOpen = () => {
        document.body.classList.remove('ReactModal__Body--before-close')
        document.body.classList.add('ReactModal__Body--open')
        setConfirmTask(true);
    };

    const CompleteTaskOk = (value) => {
        console.log(value, "inprogress")
        document.body.classList.add('ReactModal__Body--before-close')
        setConfirmTask(false);
    };
    const FeedTaskOpen = () => {
        document.body.classList.remove('ReactModal__Body--before-close')
        document.body.classList.add('ReactModal__Body--open')
        setFeedTask(true);
    };
    const onCancel = () => {
        document.body.classList.add('ReactModal__Body--before-close')
        form.resetFields();
        setTask(false);
        setFeedTask(false);
        setConfirmTask(false)
    }
    return (
        <span>
            <span style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="taskName">{content === 'Complete' ? new Date() > new Date(menu.dueDate) ? <Icons type="warning" /> : menu.statusText !== 'In Progress' ? <Icons type="error" /> : null : null} {menu.subject}</div>
                <Tooltip placement="bottom" title={content}>
                    <div className="play" onClick={content === 'FeedBack' ? FeedTaskOpen : content === 'StartTask' ? startTaskModal : CompleteTaskOpen}><Icons type={content} /></div>
                </Tooltip>
            </span>
            <div className="footer">
                <div className="task-left-Content">
                    {content === 'Complete' ? <Progress percent={menu.statusPercentage} status="active" /> : null}
                    <div className="user" style={content === 'Complete' ? { paddingTop: '1px' } : { paddingTop: '22px' }}>
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
                        <span className="normal" style={menu.priority === 'High' ? { color: '#E43838' } : menu.priority === 'Low' ? { color: '#88CDFF' } : { color: '#E5E5E5' }}>{menu.priority}</span>
                        <span style={{ paddingLeft: "2px" }}> <Icons type={menu.priority} /></span>
                    </div>
                    <div className="workProgress">
                        <span className="workDetails">{content === 'FeedBack' ? menu.startDate : menu.statusText}</span>
                        <span style={{ paddingLeft: "2px" }}> <Icons type="taskList" /></span>
                    </div>
                    <div className="calender">
                        <span className="Date">{content === 'StartTask' ? menu.startDate : menu.dueDate} </span>
                        <span style={{ paddingLeft: "2px" }}> <Icons type="calender" /></span>
                    </div>
                </div>
            </div>
            <MTModal
                visible={Task}
                title="Start This Task"
                onOk={StartTask}
                closable={false}
                maskClosable={false}
                footer={[
                    <Button key="submit" className="deleteEle" onClick={() => StartTask(menu.taskToken)}>Start</Button>,
                    <Button key="back" className="cancelEle" onClick={onCancel}>Cancel</Button>
                ]}
            >
                <p className="warning">Are you sure to start this task?</p>
                <Icons type="usersMenu" /> <span className="title">{menu.subject}</span>
            </MTModal>
            <MTModal
                visible={ConfirmTask}
                title="Complete This Task"
                onOk={form.submit}
                onCancel={onCancel}
                closable={true}
                maskClosable={false}
                footer={[
                    <Button key="submit" form="create" className="deleteEle" htmlType="submit">Complete</Button>,
                    <Button key="back" className="cancelEle" onClick={onCancel}>Cancel</Button>
                ]}
            >
                <div className="newPostContent">
                    <Form form={form} layout="inline" onFinish={CompleteTaskOk} id="create">
                        <div><Icons type="taskList" /> <span className="taskName">{menu.subject}</span></div>
                        <div className="inputs">
                            <div className="label">Roadblocks faced</div>
                            <Form.Item name="roadblock">
                                <Input.TextArea
                                    autoComplete="off"
                                    placeholder="Write Roadblocks"
                                    autoSize={{ minRows: 3, maxRows: 5 }}
                                />
                            </Form.Item>
                        </div>
                        <div className="inputs">
                            <div className="label">Things Learned</div>
                            <Form.Item name="learning">
                                <Input.TextArea
                                    autoComplete="off"
                                    placeholder="Write Things Learned"
                                    autoSize={{ minRows: 3, maxRows: 5 }}
                                />
                            </Form.Item>
                        </div>
                        <div className="inputs">
                            <div className="label">Feedback</div>
                            <Form.Item name="feedback">
                                <Input.TextArea
                                    autoComplete="off"
                                    placeholder="Write Feedback"
                                    autoSize={{ minRows: 3, maxRows: 5 }}
                                />
                            </Form.Item>
                        </div>
                        <div className="inputs">
                            <div className="label">Happy with your performance?</div>
                            <Form.Item name="happy" rules={[{ required: true, message: 'Please Select for feedback!' }]} >
                                <Radio.Group>
                                    <Radio value="Yes" style={{ padding: "5px" }}>Yes</Radio>
                                    <Radio value="No" style={{ padding: "5px" }}>No</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </div>

                    </Form>
                </div>
            </MTModal>
            <MTModal
                visible={FeedTask}
                title="View Feedback Details"
                onOk={form.submit}
                onCancel={onCancel}
                closable={true}
                maskClosable={false}
                footer={[
                    <Button key="back" className="cancelEle" onClick={onCancel}>Close</Button>
                ]}
            >
                <div className="newPostContent">
                    <div style={{ paddingLeft: "23px" }}><Icons type="taskList" /> <span className="taskName">{menu.subject}</span></div>
                    <div className="mainContent">
                        <div className="feedContent">
                            <div className="topicHading">Roadblocks Faced:</div>
                            <div className="topicDetails">
                                This is sample post created for design make sure if content
                             is bigger then scroll will be automatic generated.<br></br>
                                <br></br>
                             This is sample post created for design make sure if content
                             is bigger then scroll will be automatic generated.</div>
                        </div>
                        <div className="feedContent">
                            <div className="topicHading">Things Learned:</div>
                            <div className="topicDetails">
                                This is sample post created for design make sure if content
                                is bigger then scroll will be automatic generated.
                            </div>
                        </div>
                        <div className="feedContent">
                            <div className="topicHading">Feedback:</div>
                            <div className="topicDetails">
                                This is sample post created for design make sure if content
                             is bigger then scroll will be automatic generated.</div>
                        </div>
                    </div>
                </div>
            </MTModal>
        </span>
    );
}
export default CardContent;
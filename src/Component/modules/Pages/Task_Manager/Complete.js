import React, { useState } from 'react';
import { Card, Progress, Input, Form, Button, Tooltip, Radio } from 'antd';
import Icons from '../../component/Icons/icons';
import MTModal from '../../component/MTmodel/modal';

export const CompleteCard = (props) => {
    const [form] = Form.useForm();
    const [ConfirmTask, setConfirmTask] = useState(false);

    const onCancel = () => {
        form.resetFields();
        document.body.classList.add('ReactModal__Body--before-close')
        setConfirmTask(false)
    }
    const CompleteTaskOpen = () => {
        document.body.classList.remove('ReactModal__Body--before-close')
        document.body.classList.add('ReactModal__Body--open')
        setConfirmTask(true);
    };

    const menu = props.menu
    return (
        <Card>
            <span style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="taskName">{menu.subject}</div>
                <Tooltip placement="bottom" title="Feed Back">
                    <div className="play" onClick={CompleteTaskOpen}><Icons type="feed" /></div>
                </Tooltip>
            </span>
            <div className="footer">
                <div className="task-left-Content">
                    <div className="user" style={{paddingTop: '22px'}}>
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
                        <span className="workDetails">{menu.startDate}</span>
                        <span style={{ paddingLeft: "2px" }}> <Icons type="dueCalander" /></span>
                    </div>
                    <div className="calender">
                        <span className="Date">{menu.dueDate}</span>
                        <span style={{ paddingLeft: "2px" }}> <Icons type="calender" /></span>
                    </div>
                </div>
            </div>
            <MTModal
                visible={ConfirmTask}
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
        </Card>
    );
}
export default CompleteCard;
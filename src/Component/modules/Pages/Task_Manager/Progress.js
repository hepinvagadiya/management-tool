import React, { useState } from 'react';
import { Card, Progress, Input, Form, Button, Tooltip, Radio } from 'antd';
import Icons from '../../component/Icons/icons';
import MTModal from '../../component/MTmodel/modal';

export const ProgressCard = (props) => {
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

    const CompleteTaskOk = () => {
        document.body.classList.add('ReactModal__Body--before-close')
        setConfirmTask(false);
    };

    const menu = props.menu
    return (
        <Card className={menu.statusPercentage < 36 ? "card-error" : menu.statusPercentage < 51 ? 'card-warning' : null}>
            <span style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="taskName">{menu.statusPercentage < 36 ? <Icons type="error" /> : menu.statusPercentage < 51 ? <Icons type="warning" /> : null} {menu.subject}</div>
                <Tooltip placement="bottom" title="Completed">
                    <div className="play" onClick={CompleteTaskOpen}><Icons type="calender-right" /></div>
                </Tooltip>
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
                            <Form.Item >
                                <Input.TextArea
                                    autoComplete="off"
                                    placeholder="Write Roadblocks"
                                    autoSize={{ minRows: 3, maxRows: 5 }}
                                />
                            </Form.Item>
                        </div>
                        <div className="inputs">
                            <div className="label">Things Learned</div>
                            <Form.Item >
                                <Input.TextArea
                                    autoComplete="off"
                                    placeholder="Write Things Learned"
                                    autoSize={{ minRows: 3, maxRows: 5 }}
                                />
                            </Form.Item>
                        </div>
                        <div className="inputs">
                            <div className="label">Feedback</div>
                            <Form.Item >
                                <Input.TextArea
                                    autoComplete="off"
                                    placeholder="Write Feedback"
                                    autoSize={{ minRows: 3, maxRows: 5 }}
                                />
                            </Form.Item>
                        </div>
                        <div className="inputs">
                            <div className="label">Happy with your performance?</div>
                            <Form.Item name="perfomance" rules={[{ required: true, message: 'Please Select for feedback!' }]} >
                                <Radio.Group>
                                    <Radio value="Yes" style={{ padding: "5px" }}>Yes</Radio>
                                    <Radio value="No" style={{ padding: "5px" }}>No</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </div>

                    </Form>
                </div>
            </MTModal>
        </Card>
    );
}
export default ProgressCard;
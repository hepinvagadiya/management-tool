import React, { useState } from 'react';
import { UserGroStyle } from './userGroStyle'
import { MTButton } from '../../component/MTForm';
import MTModal from '../../component/MTmodel/modal';
import { Button, Form, Input, Radio, } from 'antd';
import { Select } from 'antd';

export const UserGroup = () => {
    const [createUserGro, setCreateUserGro] = useState(false);
    const [form] = Form.useForm();
    const { Option } = Select;

    const CreatePostModal = () => {
        document.body.classList.remove('ReactModal__Body--before-close')
        document.body.classList.add('ReactModal__Body--open')
        setCreateUserGro(true)
    };
    const createGroup = () => {
        document.body.classList.add('ReactModal__Body--before-close')
        setCreateUserGro(false)
    };


    return (
        <UserGroStyle>
            <div className="heading">
                <div className="title">UserGroup</div>
                <div ><MTButton className="createEle" onClick={CreatePostModal}>Create</MTButton></div>
            </div>
            <div className="usergrContent">
                <MTModal
                    visible={createUserGro}
                    title="User Group"
                    onOk={form.submit}
                    onCancel={createGroup}
                    closable={true}
                    maskClosable={false}
                    footer={[
                        <Button key="submit" htmlType="submit" form="formgroup" className="deleteEle">Save</Button>,
                    ]}
                >
                    <Form id="formgroup" form={form} onFinish={createGroup}>
                        <div className="inputs">
                            <div className="label">Group Name</div>
                            <Form.Item name="groupname" rules={[{ required: true, message: 'Please input Post Title!' }]} >
                                <Input
                                    name="email"
                                    type="text"
                                    placeholder="Enter Group Name"
                                />
                            </Form.Item>
                        </div>
                        <div className="inputs">
                            <div className="label">Group Type</div>
                            <Form.Item name="radio-button" rules={[{ required: true, message: 'Please pick an item!' }]} >
                                <Radio.Group>
                                    <Radio value="a" style={{ padding: "5px" }}>Public(Readable to user outside group)</Radio>
                                    <Radio value="b" style={{ padding: "5px" }}>Private (Accessible to Group Users Only)</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </div>
                        <div className="inputs">
                            <div className="label">Group Name</div>
                            <Form.Item rules={[{ required: true, message: 'Please input Post Title!' }]} >
                                <Select
                                    mode="multiple"
                                    style={{ width: '100%' }}
                                    placeholder="Select Any Group"
                                    defaultValue={['a']}
                                >
                                    <Option value="a">
                                        <div className="demo-option-label-item">Username1 Lname Selected</div>
                                    </Option>
                                    <Option value="b">
                                        <div className="demo-option-label-item">Simple User</div>
                                    </Option>
                                    <Option value="c">
                                        <div className="demo-option-label-item">hover User</div>
                                    </Option>
                                    <Option value="d">
                                        <div className="demo-option-label-item">Simple User2</div>
                                    </Option>
                                </Select>
                            </Form.Item>
                        </div>
                    </Form>
                </MTModal>
            </div>
        </UserGroStyle>
    );
}

export default UserGroup;
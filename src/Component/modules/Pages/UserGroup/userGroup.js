import React, { useEffect, useState } from 'react';
import { UserGroStyle } from './userGroStyle'
import { MTButton } from '../../component/MTForm';
import { Table } from 'antd';
import MTModal from '../../component/MTmodel/modal';
import { Button, Form, Input, Radio, } from 'antd';
import { UserData } from '../../../../core/Redux/User/userAction';
import { useDispatch, useSelector } from 'react-redux';
import Icons from '../../../modules/component/Icons/icons'

import { Select } from 'antd';

export const UserGroup = () => {
    const [createUserGro, setCreateUserGro] = useState(false);
    const [form] = Form.useForm();
    const { Option } = Select;
    const dispatch = useDispatch()

    const user = useSelector(state => state)

    useEffect(() => {
        dispatch(UserData())
    }, [dispatch])

    const columns = [
        {
            "title": "User Name",
            render: listUsers => `${listUsers.firstName} ${listUsers.lastName}`, 
            "key": "firstName",
            "width": '15%',
        },
        {
            "title": "Designation",
            "dataIndex": "designation",
            "key": "designation",
            "width": '15%',
        },
        {
            "title": "Email",
            "dataIndex": "email",
            "key": "email",
            "width": '20%',
        },
        {
            "title": "Contect",
            "dataIndex": "contact",
            "key": "contact",
            "width": '15%',
        },
        {
            "title": "Created Time",
            "dataIndex": "createdTime",
            "key": "createdTime",
            "width": '25%',
        },
        {
            "title": "Action",
            "dataIndex": "action",
            "key": "action",
            render: (text, record) => (
                <span> <Icons type="post_edit" />   <span><Icons type="post_delete" /> </span></span>
            ),
        },

    ];

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
                            <Form.Item name="select" rules={[{ required: true, message: 'Please input Post Title!' }]} >
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
                <div className="tableContent">
                    <Table
                        sticky
                        pagination={{ pageSize: 12 }}
                        columns={columns}
                        dataSource={user.table.table}
                        scroll={{ y: 'calc(77.5vh - 4em)' }}
                    />
                </div>
            </div>
        </UserGroStyle>
    );
}

export default UserGroup;
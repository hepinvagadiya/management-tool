import React, { useEffect, useState } from 'react';
import { MTButton } from '../../component/MTForm';
import { UserStyle } from './userStyle'
import { Table } from 'antd';
import MTModal from '../../component/MTmodel/modal';
import { Button, Form, Input, Radio, } from 'antd';
import { Select } from 'antd';
import { UserData, Registration, DeleteUser, FindUser, Update } from '../../../../core/Redux/User/userAction';
import { useDispatch, useSelector } from 'react-redux';
import Icons from '../../../modules/component/Icons/icons'

export const User = () => {
    const [form] = Form.useForm();
    const { Option } = Select;

    const dispatch = useDispatch()
    const user = useSelector(state => state)
    const [newUser, setNewUser] = useState(false);
    const [editUser, setEditUser] = useState(false);
    const [contact, setContact] = useState();
    const [delet, setDelete] = useState(false);
    const [title, setTitle] = useState("");
    const [index, setToken] = useState("")
    const [editToken, setEdittoken] = useState("")
    const [loading, setLoading] = useState(false);
    const [select, selectIndex] = useState("")
    const validateMessages = {
        required: 'Email is required!',
        types: { email: 'Email is not a valid email!', },
    };

    useEffect(() => {
        dispatch(UserData())
    }, [dispatch])

    useEffect(() => {
        if (user.table.status === true) {
            setNewUser(false)
            setLoading(false)
            form.resetFields();
        }
        if (user.table.editStatus === true) { form.resetFields(); setLoading(false); setEditUser(false) }
        if (user.table.findUser) {
            setEdittoken(user.table.findUser.data[0].token)
            form.setFieldsValue(user.table.findUser.data[0]);
            if (user.table.findUser.status === true) { setEditUser(true) }
        }
    }, [user.table.status, user.table.findUser, user.table.editStatus])

    const columns = [
        {
            "title": "User Name",
            render: listUsers => `${listUsers.firstName} ${listUsers.lastName}`,
            "key": "firstName",
            "width": '20%',
            "ellipsis": true,
            sorter: (a, b) => a.firstName.length - b.firstName.length,
        },
        {
            "title": "Email",
            "dataIndex": "email",
            "key": "email",
            "width": '20%',
            "ellipsis": true,
        },
        {
            "title": "Contect",
            "dataIndex": "contact",
            "key": "contact",
            "width": '15%',
            "ellipsis": true,
        },
        {
            "title": "Designation",
            "dataIndex": "designation",
            "key": "designation",
            "width": '15%',
            "ellipsis": true,
        },
        {
            "title": "Created Time",
            "dataIndex": "createdTime",
            "key": "createdTime",
            "width": '20%',
            "ellipsis": true,
        },
        {
            "title": "Action",
            "dataIndex": "action",
            "key": "action",
            "ellipsis": true,
            render: (text, record, index) => (
                <span>
                    <span onClick={() => selectRow(record.token, index)}>
                        <Icons type="post_edit" />
                    </span>
                    <span onClick={() => deleteTableRow(record.token, record.firstName + " " + record.lastName)}>
                        <Icons type="post_delete" />
                    </span>
                </span>
            ),
        },
    ];
    const CreateModal = (e) => {
        e.preventDefault();
        document.body.classList.remove('ReactModal__Body--before-close')
        document.body.classList.add('ReactModal__Body--open')
        setNewUser(true)
    }
    const createUser = (value) => {
        document.body.classList.add('ReactModal__Body--before-close')
        dispatch(Registration(value))
        setLoading(true);
    }
    const deleteTableRow = (record, title) => {
        document.body.classList.add('ReactModal__Body--open')
        setDelete(true);
        setTitle(title);
        setToken(record);
    }
    const deleteOk = () => {
        document.body.classList.add('ReactModal__Body--before-close')
        dispatch(DeleteUser(index))
        setDelete(false);
    }
    const selectRow = (record, token) => {
        dispatch(FindUser(record))
        selectIndex(token);
    }
    const editUserModal = (value) => {
        document.body.classList.add('ReactModal__Body--before-close')
        dispatch(Update(value, editToken, select))
        setLoading(true);
    }
    const onCancel = () => {
        form.resetFields();
        document.body.classList.add('ReactModal__Body--before-close')
        setNewUser(false);
        setDelete(false);
        setLoading(false);
        setEditUser(false)
    }

    const checkMobileNo = () => {
        if (contact === "") {
            return Promise.reject('Contect is required');
        }
        if (contact < 9999999999) { return Promise.resolve(); }
        return Promise.reject('Please input valid phone no!');
    };

    return (
        <UserStyle>
            <div className="heading">
                <div className="title">User</div>
                <div><MTButton className="createEle" onClick={CreateModal}>Create</MTButton></div>
            </div>
            {/* Delete Table Raw */}
            <MTModal
                visible={delet}
                title="Delete Post"
                onOk={deleteOk}
                closable={false}
                maskClosable={false}
                footer={[
                    <Button key="submit" className="deleteEle" onClick={deleteOk}>Delete</Button>,
                    <Button key="back" className="cancelEle" onClick={onCancel}>Cancel</Button>
                ]}
            >
                <p className="warning">Are you sure to delete this post permenently?</p>
                <Icons type="usersMenu" /> <span className="title">{title}</span>
            </MTModal>
            {/* Create Table Raw */}
            <MTModal
                visible={editUser === true ? editUser : newUser}
                title={newUser === true ? 'New User' : 'Edit User'}
                onOk={form.submit}
                onCancel={onCancel}
                closable={true}
                maskClosable={false}
                footer={[
                    <Button key="submit" loading={loading} htmlType="submit" form="userform" className="deleteEle">Save</Button>,
                ]}
            >
                <Form layout="inline" validateMessages={validateMessages} id="userform" form={form} onFinish={editUser === true ? editUserModal : createUser}>
                    <div className="inputs-inline">
                        <div className="label">First Name</div>
                        <Form.Item name="firstName" rules={[{ required: true, message: 'Please input First Name!' }]} >
                            <Input
                                name="firstname"
                                type="text"
                                placeholder="Enter First Name"
                            />
                        </Form.Item>
                    </div>
                    <div className="inputs-inline">
                        <div className="label">Last Name</div>
                        <Form.Item name="lastName" rules={[{ required: true, message: 'Please input Last Name!' }]} >
                            <Input
                                name="lastname"
                                type="text"
                                placeholder="Enter Last Name"
                            />
                        </Form.Item>
                    </div>
                    <div className="inputs-inline">
                        <div className="label">Email</div>
                        <Form.Item name="email" rules={[{ type: 'email', required: true }]}>
                            <Input
                                name="email"
                                type="text"
                                placeholder="Enter Email Address"
                            />
                        </Form.Item>
                    </div>
                    <div className="inputs-inline" style={{ padding: "6px 10px 0px 13px" }}>
                        <div className="label">Username</div>
                        <Form.Item name="username" rules={[{ required: true, message: 'Please input Username!' }]} >
                            <Input
                                name="username"
                                type="text"
                                placeholder="Enter User Name"
                            />
                        </Form.Item>
                    </div>
                    <div className="inputs-inline">
                        <div className="label">Contect No.</div>
                        <Form.Item name="contact" rules={[{ validator: checkMobileNo, required: true }]}>
                            <Input
                                name="number"
                                type="number"
                                placeholder="Enter Contect No"
                                onChange={e => setContact(e.target.value)}
                            />
                        </Form.Item>
                    </div>
                    <div className="inputs-inline">
                        <div className="label">Designation</div>
                        <Form.Item name="designation" rules={[{ required: true, message: 'Please Select Any Option!' }]} >
                            <Select placeholder="Select designation">
                                <Option value="Graphic Designer">Graphic Designer</Option>
                                <Option value="Web Devloper">Web Devloper</Option>
                            </Select>
                        </Form.Item>
                    </div>
                    <div className="inputs-inline">
                        <div className="label">Blood Group</div>
                        <Form.Item name="bloodGroup" rules={[{ required: true, message: 'Please Select Any Option!' }]}>
                            <Select placeholder="Select bloodgroup">
                                <Option value="A">A</Option>
                                <Option value="A+">A+</Option>
                                <Option value="AB">AB</Option>
                            </Select>
                        </Form.Item>
                    </div>
                    <div className="inputs-inline" style={{ padding: "6px 10px 0px 13px" }}>
                        <div className="label">Gender</div>
                        <Form.Item name="gender" rules={[{ required: true, message: 'Please pick an item!' }]} >
                            <Radio.Group>
                                <Radio value="Male" style={{ padding: "5px" }}>Male</Radio>
                                <Radio value="female" style={{ padding: "5px" }}>female</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </div>

                    <div className="inputs" style={{ padding: "6px 0px 0px 9px" }}>
                        <div className="label">Address<sup>*</sup></div>
                        <Form.Item name="address" rules={[{ required: true, message: 'Please input your Address!' }]}                        >
                            <Input placeholder="Address" />
                        </Form.Item>
                    </div>
                    <div className="inputs-inline">
                        <div className="label">Password<sup>*</sup></div>
                        <Form.Item
                            name="password"
                            hasFeedback
                            rules={[{
                                required: true,
                                message: 'Please input your password!'
                            }]}
                        >
                            <Input.Password
                                className="username"
                                placeholder="password"
                                type="password"
                                name="newpassword"
                            />
                        </Form.Item>
                    </div>
                    <div className="inputs-inline">
                        <div className="label">Confirm Password<sup>*</sup></div>
                        <Form.Item
                            name="confirmPassword"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject('The passwords are not match!');
                                    },
                                }),
                            ]}
                        >
                            <Input.Password
                                placeholder="confirm password"
                                className="username"
                                type="password"
                                name="confirmpassword"
                            />
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
        </UserStyle >
    );
}

export default User;
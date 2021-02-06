import React, { useEffect, useState } from 'react';
import { MTButton } from '../../component/MTForm';
import { UserStyle } from './userStyle'
import { Table, Tooltip } from 'antd';
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
        if (user.table.delStatus === true) { setLoading(false); setDelete(false) }
        if (user.table.editStatus === true) { form.resetFields(); setLoading(false); setEditUser(false) }
        if (user.table.findUser) {
            setEdittoken(user.table.findUser.data[0].tokenuser)
            form.setFieldsValue(user.table.findUser.data[0]);
            if (user.table.findUser.status === true) { setContact(user.table.findUser.data[0].contact) }
        }
    }, [user.table.status, user.table.findUser, user.table.editStatus, user.table.table, form])
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
                    <Tooltip placement="bottom" title="Edit">
                        <span onClick={() => selectRow(record.tokenuser, index)} style={{ cursor: "pointer" }}>
                            <Icons type="post_edit" />
                        </span>
                    </Tooltip>
                    <Tooltip placement="bottom" title="Delete">
                        <span onClick={() => deleteTableRow(record.tokenuser, record.firstName + " " + record.lastName)} style={{ cursor: "pointer" }}>
                            <Icons type="post_delete" />
                        </span>
                    </Tooltip>
                </span>
            ),
        },
    ];
    const opt = ['A', 'A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']
    const restrict = (event) => {
        const regex = new RegExp("^[a-zA-Z]+$");
        const key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
    }

    const CreateModal = () => {
        document.body.classList.remove('ReactModal__Body--before-close')
        document.body.classList.add('ReactModal__Body--open')
        form.resetFields();
        setNewUser(true)
    }
    const selectRow = (record, token) => {
        document.body.classList.add('ReactModal__Body--before-close')
        document.body.classList.add('ReactModal__Body--open')
        dispatch(FindUser(record))
        selectIndex(token);
        if (user.table.findStatus) { setEditUser(true); }
    }
    const deleteTableRow = (record, title) => {
        document.body.classList.add('ReactModal__Body--open')
        setDelete(true);
        setTitle(title);
        setToken(record);
    }
    const userActions = (value) => {
        document.body.classList.add('ReactModal__Body--before-close')
        if (editUser) {
            dispatch(Update(value, editToken, select))
            setContact(value.contact)
        } else if (newUser) {
            dispatch(Registration(value))
        } else {
            dispatch(DeleteUser(index))
        }
        setLoading(true);
    }
    const onCancel = () => {
        document.body.classList.add('ReactModal__Body--before-close')
        form.resetFields();
        setNewUser(false);
        setDelete(false);
        setLoading(false);
        setEditUser(false)
    }
    const contectValid = (event) => {
        if (event.charCode === 46) {
            event.preventDefault();
        }
    }
    const checkMobileNo = () => {
        if (contact === "") { return Promise.reject('Contect is required'); }
        if (contact < 9999999999) { return Promise.resolve(); }
        return Promise.reject('Please input valid phone no!');
    };

    return (
        <UserStyle>
            <div className="heading">
                <div className="title">User</div>
                <div><MTButton className="createEle" onClick={CreateModal}>Create</MTButton></div>
            </div>
            <MTModal
                visible={delet ? delet : editUser ? editUser : newUser}
                title={delet ? 'Delete User' : newUser ? 'New User' : 'Edit User'}
                onOk={form.submit}
                onCancel={onCancel}
                closable={delet ? false : true}
                maskClosable={false}
                footer={delet ? [
                    <Button key="submit" loading={loading} className="deleteEle" onClick={userActions}>Delete</Button>,
                    <Button key="back" className="cancelEle" onClick={onCancel}>Cancel</Button>
                ] : [<Button key="submit" loading={loading} htmlType="submit" form="userform" className="deleteEle">Save</Button>,]}
            >
                {delet ? <span>
                    <p className="warning">Are you sure to delete this User permenently?</p>
                    <Icons type="usersMenu" /> <span className="title">{title}</span>
                </span> :
                    <Form layout="inline" validateMessages={validateMessages} id="userform" form={form} onFinish={userActions}>
                        <div className="inputs-inline">
                            <div className="label">First Name</div>
                            <Form.Item name="firstName" rules={[{ required: true, message: 'Please input First Name!' }]} >
                                <Input
                                    type="text"
                                    autoComplete="off"
                                    onKeyPress={e => restrict(e)}
                                    placeholder="Enter First Name"
                                />
                            </Form.Item>
                        </div>
                        <div className="inputs-inline">
                            <div className="label">Last Name</div>
                            <Form.Item name="lastName" rules={[{ required: true, message: 'Please input Last Name!' }]} >
                                <Input
                                    name="lastname"
                                    autoComplete="off"
                                    onKeyPress={e => restrict(e)}
                                    type="text"
                                    placeholder="Enter Last Name"
                                />
                            </Form.Item>
                        </div>
                        <div className="inputs">
                            <div className="label">Email</div>
                            <Form.Item name="email" rules={[{ type: 'email', required: true }]}>
                                <Input
                                    name="email"
                                    autoComplete="off"
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
                                    autoComplete="off"
                                    onKeyPress={e => restrict(e)}
                                    type="text"
                                    placeholder="Enter User Name"
                                />
                            </Form.Item>
                        </div>
                        <div className="inputs-inline" style={{ padding: "6px 10px 0px 13px" }}>
                            <div className="label">Role</div>
                            <Form.Item name="role" rules={[{ required: true, message: 'Please Select Role!' }]} >
                                <Select placeholder="Select Role">
                                    <Option value="ROLE_ADMIN">Admin</Option>
                                    <Option value="ROLE_USER">User</Option>
                                </Select>
                            </Form.Item>
                        </div>
                        <div className="inputs-inline">
                            <div className="label">Contact No.</div>
                            <Form.Item name="contact" rules={[{ validator: checkMobileNo, required: true }]}>
                                <Input
                                    type="number"
                                    autoComplete="off"
                                    onKeyPress={e => contectValid(e)}
                                    placeholder="Enter Contact No"
                                    onChange={e => setContact(e.target.value)}
                                />
                            </Form.Item>
                        </div>
                        <div className="inputs-inline">
                            <div className="label">Designation</div>
                            <Form.Item name="designation" rules={[{ required: true, message: 'Please Select Designation!' }]} >
                                <Select placeholder="Select designation">
                                    <Option value="Graphic Designer">Graphic Designer</Option>
                                    <Option value="Web Devloper">Web Devloper</Option>
                                </Select>
                            </Form.Item>
                        </div>
                        <div className="inputs-inline">
                            <div className="label">Blood Group</div>
                            <Form.Item name="bloodGroup" rules={[{ required: true, message: 'Please Select bloodGroup!' }]}>
                                <Select placeholder="Select bloodgroup">
                                    {opt.map((menu, index) => (
                                        <Option key={index} value={menu}>{menu}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </div>
                        <div className="inputs-inline" style={{ padding: "6px 10px 0px 13px" }}>
                            <div className="label">Gender</div>
                            <Form.Item name="gender" rules={[{ required: true, message: 'Please Select Gender!' }]} >
                                <Radio.Group>
                                    <Radio value="Male" style={{ padding: "5px" }}>Male</Radio>
                                    <Radio value="female" style={{ padding: "5px" }}>female</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </div>

                        <div className="inputs" style={{ padding: "6px 0px 0px 9px" }}>
                            <div className="label">Address<sup>*</sup></div>
                            <Form.Item name="address" rules={[{ required: true, message: 'Please input your Address!' }]}                        >
                                <Input placeholder="Enter address" autoComplete="off" onKeyPress={e => restrict(e)} />
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
                                    autoComplete="off"
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
                                    autoComplete="off"
                                    type="password"
                                    name="confirmpassword"
                                />
                            </Form.Item>
                        </div>
                    </Form>
                }
            </MTModal>
            <div className="tableContent">
                <Table
                    sticky
                    pagination={{ position: ['bottomRight'] }}
                    columns={columns}
                    dataSource={user.table.table}
                    scroll={{ y: 'calc(77.5vh - 4em)' }}
                />
            </div>
        </UserStyle >
    );
}

export default User;
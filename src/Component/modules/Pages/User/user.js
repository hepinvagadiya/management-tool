import React, { useEffect, useState } from 'react';
import { MTButton, MTInput, MTSelect } from '../../component/MTForm';
import { UserStyle } from './userStyle'
import { Table, Tooltip } from 'antd';
import MTModal from '../../component/MTmodel/modal';
import { Button, Form, Input, Radio, } from 'antd';
import { UserData, Registration, DeleteUser, FindUser, Update } from '../../../../core/Redux/User/userAction';
import { useDispatch, useSelector } from 'react-redux';
import Icons from '../../../modules/component/Icons/icons'

export const User = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch()
    const user = useSelector(state => state)
    const [newUser, setNewUser] = useState(false);
    const [editUser, setEditUser] = useState(false);
    const [contact, setContact] = useState();
    const [delet, setDelete] = useState(false);
    const [title, setTitle] = useState("");
    const [DeleteIndex, setToken] = useState("")
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
    }, [user.table.status, user.table.findUser, user.table.editStatus, user.table.table, user.table.delStatus, form])
    const columns = [
        {
            render: listUsers => `${listUsers.firstName} ${listUsers.lastName}`,
            "title": "User Name",
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
    const bloodgroup = ['A', 'A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']
    const designation = ['Graphic Designer', 'Web Designer', 'Tester', 'Product Manager']
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
    const deleteTableRow = (record, Title) => {
        document.body.classList.add('ReactModal__Body--open')
        setDelete(true);
        setTitle(Title);
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
            dispatch(DeleteUser(DeleteIndex))
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
                width={580}
                footer={delet ? [
                    <Button key="submit" loading={loading} className="deleteEle" onClick={userActions}>Delete</Button>,
                    <Button key="back" className="cancelEle" onClick={onCancel}>Cancel</Button>
                ] : [<Button key="submit" loading={loading} htmlType="submit" form="userform" className="deleteEle">Save</Button>,]}
            >
                {delet ? <span>
                    <p className="warning">Are you sure to delete this User permenently?</p>
                    <Icons type="usersMenu" /> <span className="title">{title}</span>
                    <p className="note">Note : If you delete this user then it's all data will be deleted and Won't be recovered</p>
                </span> :
                    <Form layout="inline" validateMessages={validateMessages} id="userform" form={form} onFinish={userActions}>
                        <MTInput
                            className="inputs-inline"
                            name="firstName"
                            type="text"
                            label="First Name"
                            placeholder="Enter First Name"
                            errorMessage="Please input First Name!"
                            onKeyPress={true}
                        />
                        <MTInput
                            className="inputs-inline"
                            name="lastName"
                            type="text"
                            label="Last Name"
                            placeholder="Enter Last Name"
                            errorMessage="Please input Last Name!"
                            onKeyPress={true}
                        />
                        <MTInput
                            className="inputs-inline"
                            name="email"
                            type="text"
                            label="Email"
                            placeholder="Enter Email Address"
                            onKeyPress={false}
                            formtype='email'
                        />
                        <MTInput
                            className="inputs-inline"
                            name="username"
                            type="text"
                            label="Username"
                            placeholder="Enter Username"
                            errorMessage="Please input Username!"
                            onKeyPress={true}
                        />
                        <MTInput
                            className="inputs-inline"
                            name="contact"
                            type="number"
                            label="Contact No."
                            placeholder="Enter Contact No"
                            onKeyPress='contect'
                            onChange={e => setContact(e.target.value)}
                            validator={checkMobileNo}
                        />
                        <MTSelect
                            className="inputs-inline"
                            name="designation"
                            label="Designation"
                            errorMessage='Please Select Designation!'
                            placeholder="Select designation"
                            data={designation}
                        />
                        <MTSelect
                            className="inputs-inline"
                            name="bloodGroup"
                            label="Blood Group"
                            errorMessage='Please Select bloodGroup!'
                            placeholder="Select bloodgroup"
                            data={bloodgroup}
                        />
                        <div className="inputs-inline" style={{ padding: "6px 10px 0px 13px" }}>
                            <div className="label">Gender</div>
                            <Form.Item name="gender" rules={[{ required: true, message: 'Please Select Gender!' }]} >
                                <Radio.Group>
                                    <Radio value="Male" style={{ padding: "5px" }}>Male</Radio>
                                    <Radio value="female" style={{ padding: "5px" }}>female</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </div>
                        <MTInput
                            className="inputs"
                            name="address"
                            type="text"
                            label="Address"
                            placeholder="Enter address"
                            message="Please input your Address!"
                            onKeyPress={true}
                        />
                        <div className="inputs-inline">
                            <div className="label">Password</div>
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
                            <div className="label">Confirm Password</div>
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
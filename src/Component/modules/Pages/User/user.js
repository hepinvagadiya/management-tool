import React, { useEffect, useState } from 'react';
import { MTButton } from '../../component/MTForm';
import { UserStyle } from './userStyle'
import { Table, message } from 'antd';
import MTModal from '../../component/MTmodel/modal';
import { Button, Form, Input, Radio, } from 'antd';
import { Select } from 'antd';
import { UserData, Registration, DeleteUser, FindUser } from '../../../../core/Redux/User/userAction';
import { useDispatch, useSelector } from 'react-redux';
import Icons from '../../../modules/component/Icons/icons'

export const User = () => {
    const [form] = Form.useForm();
    const { Option } = Select;

    const dispatch = useDispatch()
    const user = useSelector(state => state)
    const key = 'updatable';
    const [newUser, setNewUser] = useState(false);
    const [username, setUsername] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [contact, setContact] = useState();
    const [designation, setDesignation] = useState();
    const [BloodGroup, setBloodGroup] = useState();
    const [gender, setGender] = useState();
    const [address, setAddress] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const validateMessages = {
        required: 'Email is required!',
        types: { email: 'Email is not a valid email!', },
    };

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
                <span>
                    <span onClick={() => EditTableRow(record.token)}>
                        <Icons type="post_edit" />
                    </span>
                    <span onClick={() => deleteTableRow(record.token)}>
                        <Icons type="post_delete" />
                    </span>
                </span>
            ),
        },

    ];
    const onCancel = () => {
        document.body.classList.add('ReactModal__Body--before-close')
        setNewUser(false);
    }
    const deleteTableRow = (record) => {
        dispatch(DeleteUser(record))
        message.loading({ content: 'Loading...', key });
        setTimeout(() => {
            message.warning({ content: 'Deleted!', key, duration: 2 });
        }, 1000);
    }
    const EditTableRow = (record) => {
        dispatch(FindUser(record))
        console.log(user,"maindata")
    }

    const CreateModal = (e) => {
        e.preventDefault();
        document.body.classList.remove('ReactModal__Body--before-close')
        document.body.classList.add('ReactModal__Body--open')
        setNewUser(true)
    }
    const createUser = () => {
        document.body.classList.add('ReactModal__Body--before-close')
        dispatch(Registration(firstName, lastName, email, username, contact, designation, BloodGroup, gender, address, password, confirmPassword))
        setNewUser(false)
        form.resetFields();
        message.loading({ content: 'Creating User...', key });
        setTimeout(() => {
            message.success({ content: 'Created!', key, duration: 2 });
        }, 1000);
    }

    const checkMobileNo = () => {
        if (contact === "") {
            return Promise.reject('Contect is required');
        }
        if (contact < 9999999999) { return Promise.resolve(); }
        return Promise.reject('Please input valid phone no!');
    };

    function designationChange(value) {
        setDesignation(value)
    }
    function blood(value) {
        setBloodGroup(value)
    }


    return (
        <UserStyle>
            <div className="heading">
                <div className="title">User</div>
                <div><MTButton className="createEle" onClick={CreateModal}>Create</MTButton></div>
            </div>
            <MTModal
                visible={newUser}
                title="New User"
                onOk={form.submit}
                onCancel={onCancel}
                closable={true}
                maskClosable={false}
                footer={[
                    <Button key="submit" htmlType="submit" form="userform" className="deleteEle">Save</Button>,
                ]}
            >
                <Form layout="inline" validateMessages={validateMessages} id="userform" form={form} onFinish={createUser}>
                    <div className="inputs-inline">
                        <div className="label">First Name</div>
                        <Form.Item name="firstname" rules={[{ required: true, message: 'Please input First Name!' }]} >
                            <Input
                                name="firstname"
                                type="text"
                                placeholder="Enter First Name"
                                onChange={e => setFirstName(e.target.value)}
                            />
                        </Form.Item>
                    </div>
                    <div className="inputs-inline">
                        <div className="label">Last Name</div>
                        <Form.Item name={['user', 'lastname']} rules={[{ required: true, message: 'Please input Last Name!' }]} >
                            <Input
                                name="lastname"
                                type="text"
                                placeholder="Enter Last Name"
                                onChange={e => setLastName(e.target.value)}
                            />
                        </Form.Item>
                    </div>
                    <div className="inputs-inline">
                        <div className="label">Email</div>
                        <Form.Item name={['user', 'email']} rules={[{ type: 'email', required: true }]}>
                            <Input
                                name="email"
                                type="text"
                                placeholder="Enter Email Address"
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Form.Item>
                    </div>
                    <div className="inputs-inline">
                        <div className="label">Contect No.</div>
                        <Form.Item name="phone" rules={[{ validator: checkMobileNo, required: true }]}>
                            <Input
                                name="number"
                                placeholder="Enter Contect No"
                                onChange={e => setContact(e.target.value)}
                            />
                        </Form.Item>
                    </div>
                    <div className="inputs-inline">
                        <div className="label">Designation</div>
                        <Form.Item name={['select', 'designation']} rules={[{ required: true, message: 'Please Select Any Option!' }]} >
                            <Select onChange={designationChange} placeholder="Select designation">
                                <Option value="Graphic Designer">Graphic Designer</Option>
                                <Option value="Web Devloper">Web Devloper</Option>
                            </Select>
                        </Form.Item>
                    </div>
                    <div className="inputs-inline">
                        <div className="label">Blood Group</div>
                        <Form.Item name={['select', 'bloodgroup']} rules={[{ required: true, message: 'Please Select Any Option!' }]} >
                            <Select onChange={blood} placeholder="Select bloodgroup">
                                <Option value="A">A</Option>
                                <Option value="A+">A+</Option>
                                <Option value="AB">AB</Option>
                            </Select>
                        </Form.Item>
                    </div>
                    <div className="inputs-inline" style={{ padding: "14px 10px 0px 13px" }}>
                        <div className="label">Gender</div>
                        <Form.Item name="radio-button" rules={[{ required: true, message: 'Please pick an item!' }]} >
                            <Radio.Group onChange={e => setGender(e.target.value)}>
                                <Radio value="Male" style={{ padding: "5px" }}>Male</Radio>
                                <Radio value="female" style={{ padding: "5px" }}>female</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </div>
                    <div className="inputs-inline" style={{ padding: "14px 10px 0px 13px" }}>
                        <div className="label">Username</div>
                        <Form.Item name={['user', 'username']} rules={[{ required: true, message: 'Please input Username!' }]} >
                            <Input
                                name="username"
                                type="text"
                                placeholder="Enter User Name"
                                onChange={e => setUsername(e.target.value)}
                            />
                        </Form.Item>
                    </div>
                    <div className="inputs" style={{ padding: "0px 0px 0px 9px" }}>
                        <div className="label">Address<sup>*</sup></div>
                        <Form.Item name="address" rules={[{ required: true, message: 'Please input your Address!' }]}                        >
                            <Input
                                className="username"
                                placeholder="Address"
                                onChange={e => setAddress(e.target.value)}
                                name="newpassword"
                            />
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
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                                name="newpassword"
                            />
                        </Form.Item>
                    </div>
                    <div className="inputs-inline">
                        <div className="label">Confirm Password<sup>*</sup></div>
                        <Form.Item
                            name="confirm"
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
                                onChange={e => setConfirmPassword(e.target.value)}
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
        </UserStyle>
    );
}

export default User;
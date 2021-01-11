import React, { useEffect, useState } from 'react';
import { MTButton } from '../../component/MTForm';
import { UserStyle } from './userStyle'
import { Table } from 'antd';
import MTModal from '../../component/MTmodel/modal';
import { Button, Form, Input, Radio, } from 'antd';
import { Select } from 'antd';
import { GET } from '../../../../core/Redux/User/userAction';
import { useDispatch, useSelector } from 'react-redux';
import Icons from '../../../modules/component/Icons/icons'

export const User = () => {
    let user = useSelector(state => state)
    const [newUser, setNewUser] = useState(false);
    const [allFields, setAllfields] = useState([{ number: "" }]);
    const [form] = Form.useForm();
    const { Option } = Select;
    const dispatch = useDispatch()
    const Designation = ['Graphic Designer', 'Web Devloper'];
    const bloodGroup = ['A+', 'A', 'AB+'];
    const validateMessages = {
        required: 'Email is required!',
        types: { email: 'Email is not a valid email!', },
    };

    const columns = [
        {
            "title": "User Name",
            render: listUsers => `${listUsers.firstName} ${listUsers.lastName}`,
            "key": "firstName",
            "width": '25%',
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
            "width": '25%',
        },
        {
            "title": "Last Login",
            "dataIndex": "lastLogin",
            "key": "lastLogin",
            "width": '25%',
        },
        {
            "title": "Action",
            "dataIndex": "action",
            "key": "action",
            render: () => (
                <span> <Icons type="post_edit" />   <span onClick={deleteTableRow}><Icons type="post_delete" /> </span></span>
            ),
        }
    ];
    useEffect(() => {
        dispatch(GET())
    }, [dispatch])

    const deleteTableRow = () => {
        console.log("delete")
    }
    const change = (e) => {
        const { name, value } = e.target;
        allFields[0][name] = value;
        setAllfields(allFields)
    }

    const CreateNewUser = () => {
        document.body.classList.remove('ReactModal__Body--before-close')
        document.body.classList.add('ReactModal__Body--open')
        setNewUser(true)
    }

    const createUser = () => {
        document.body.classList.add('ReactModal__Body--before-close')
        setNewUser(false)
    }

    const checkMobileNo = () => {
        if (allFields[0].number === "") {
            return Promise.reject('Contect is required');
        }
        if (allFields[0].number < 9999999999) { return Promise.resolve(); }
        return Promise.reject('Please input valid phone no!');
    };

    return (
        <UserStyle>
            <div className="heading">
                <div className="title">User</div>
                <div><MTButton className="createEle" onClick={CreateNewUser}>Create</MTButton></div>
            </div>
            <MTModal
                visible={newUser}
                title="New User"
                onOk={form.submit}
                onCancel={createUser}
                closable={true}
                maskClosable={false}
                footer={[
                    <Button key="submit" htmlType="submit" form="userform" className="deleteEle">Save</Button>,
                ]}
            >
                <Form layout="inline" validateMessages={validateMessages} id="userform" form={form} onFinish={createUser}>
                    <div className="inputs-inline">
                        <div className="label">First Name</div>
                        <Form.Item name={['user', 'firstname']} rules={[{ required: true, message: 'Please input First Name!' }]} >
                            <Input
                                name="firstname"
                                type="text"
                                placeholder="Enter First Name"
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
                            />
                        </Form.Item>
                    </div>
                    <div className="inputs-inline">
                        <div className="label">Contect No.</div>
                        <Form.Item name="phone" rules={[{ validator: checkMobileNo, required: true }]}>
                            <Input
                                name="number"
                                placeholder="Enter Contect No"
                                onChange={(e) => change(e)}
                            />
                        </Form.Item>
                    </div>
                    <div className="inputs-inline">
                        <div className="label">Designation</div>
                        <Form.Item rules={[{ required: true, message: 'Please Select Any Option!' }]} >
                            <Select defaultValue={Designation[0]} >
                                {Designation.map(province => (
                                    <Option key={province}>{province}</Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </div>
                    <div className="inputs-inline">
                        <div className="label">Blood Group</div>
                        <Form.Item rules={[{ required: true, message: 'Please Select Any Option!' }]} >
                            <Select defaultValue={bloodGroup[0]}>
                                {bloodGroup.map(city => (
                                    <Option key={city}>{city}</Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </div>
                    <div className="inputs" style={{ padding: "14px 10px 0px 13px" }}>
                        <div className="label">Gender</div>
                        <Form.Item name="radio-button" rules={[{ required: true, message: 'Please pick an item!' }]} >
                            <Radio.Group>
                                <Radio value="a" style={{ padding: "5px" }}>Male</Radio>
                                <Radio value="b" style={{ padding: "5px" }}>female</Radio>
                            </Radio.Group>
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
                                onChange={(e) => change(e)}
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
                                onChange={(e) => change(e)}
                                type="password"
                                name="confirmpassword"
                            />
                        </Form.Item>
                    </div>
                </Form>
            </MTModal>
            <div className="tableContent">
                <Table
                    pagination={{ pageSize: 12 }}
                    columns={columns}
                    dataSource={user.userdata.table}
                    scroll={{ y: 'calc(77.5vh - 4em)' }}
                    sticky 
                />
            </div>
        </UserStyle>
    );
}

export default User;
import React from 'react';
import Logo from '../../../../../core/images/logo.svg'
import { MTButton } from '../../../component/MTForm';
import NewpwStyle from "./newpwStyle";
import { Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { ChangePassword } from '../../../../../core/Redux/auth/authAction';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

export const NewPw = () => {
    const dispatch = useDispatch()

    const submit = (value) => {
        dispatch(ChangePassword(value))
    }
    const restrict = (event) => {
        const regex = new RegExp("^[a-zA-Z]+$");
        const key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
    }

    return (
        <NewpwStyle>
            <div className="signinContent">
                <div className="leftContainer">
                    <div className="backButton"> <Link to={{ pathname: "/" }}><ArrowLeftOutlined /></Link></div>
                    <img className="logo" src={Logo} alt="dsff"></img>
                    <div className="login">Change Password</div>
                    <Form onFinish={submit}>
                        <div className="inputs">
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
                        <div className="inputs">
                            <div className="label">New Password<sup>*</sup></div>
                            <Form.Item
                                name="newpassword"
                                hasFeedback
                                rules={[{
                                    required: true,
                                    message: 'Please input your password!'
                                }]}
                            >
                                <Input.Password
                                    autoComplete="off"
                                    className="username"
                                    placeholder="Enter password"
                                    type="password"
                                    name="newpassword"
                                />
                            </Form.Item>
                        </div>
                        <div className="inputs">
                            <div className="label">Confirm Password<sup>*</sup></div>
                            <Form.Item
                                name="confirmpassword"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please confirm your password!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('newpassword') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject('The two passwords that you entered do not match!');
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password
                                    placeholder="Enter confirm password"
                                    className="username"
                                    autoComplete="off"
                                    type="password"
                                    name="confirmpassword"
                                />
                            </Form.Item>
                        </div>
                        <div className="submitContent">
                            <MTButton className="submit" htmlType="submit">Change Password</MTButton>
                        </div>
                    </Form>
                </div>
            </div>
        </NewpwStyle >
    );
}

export default NewPw;
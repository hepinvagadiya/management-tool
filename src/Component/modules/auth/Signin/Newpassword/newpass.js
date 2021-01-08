import React, { Component } from 'react';
import Logo from '../../../../../core/images/logo.svg'
import { MTButton } from '../../../component/MTForm';
import NewpwStyle from "./newpwStyle";
import { Link } from 'react-router-dom';
import { Form, Input } from 'antd';

class NewPw extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allFields: [{ newpassword: "", confirmpassword: "" }],
        };
    }
    change = (e) => {
        const { allFields } = this.state
        const { name, value } = e.target;
        allFields[0][name] = value;
        this.setState({ allFields });
    }
    submit = () => {
        const { allFields } = this.state
        if (allFields[0].newpassword !== "" && allFields[0].confirmpassword !== "") {
            window.location.replace('/')
        }
    }
    render() {
        const { allFields } = this.state
        return (
            <NewpwStyle>
                <div className="signinContent">
                    <div className="leftContainer">
                        <img className="logo" src={Logo} alt="dsff"></img>
                        <div className="login">Change Password</div>
                        <Form onFinish={this.submit}>
                            <div className="inputs">
                                <div className="label">New Password<sup>*</sup></div>
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
                                        placeholder="Enter password"
                                        onChange={(e) => this.change(e)}
                                        type="password"
                                        name="newpassword"
                                    />
                                </Form.Item>
                            </div>
                            <div className="inputs">
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
                                                return Promise.reject('The two passwords that you entered do not match!');
                                            },
                                        }),
                                    ]}
                                    >
                                    <Input.Password
                                        placeholder="Enter confirm password"
                                        className="username"
                                        onChange={(e) => this.change(e)}
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
}

export default NewPw;
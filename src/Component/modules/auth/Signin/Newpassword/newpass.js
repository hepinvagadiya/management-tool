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
    render() {
        const { allFields } = this.state
        return (
            <NewpwStyle>
                <div className="signinContent">
                    <div className="leftContainer">
                        <img className="logo" src={Logo} alt="dsff"></img>
                        <div className="login">Change Password</div>
                        <Form onFinish={this.onFinish}>
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
                                        className="username"
                                        onChange={(e) => this.change(e)}
                                        type="password"
                                        name="confirmpassword"
                                    />
                                </Form.Item>
                            </div>
                            <div className="submitContent" onClick={this.submit}>
                                {!allFields[0].newpassword || !allFields[0].confirmpassword ? <MTButton className="submit">Change Password</MTButton> : <Link to={'/'}><MTButton className="submit">Change Password</MTButton></Link>}
                            </div>
                        </Form>
                    </div>
                </div>
            </NewpwStyle >
        );
    }
}

export default NewPw;
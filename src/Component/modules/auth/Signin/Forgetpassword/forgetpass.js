import React, { Component } from 'react';
import Logo from '../../../../../core/images/logo.svg'
import { MTButton } from '../../../component/MTForm';
import ForgetpwStyle from "./forgetpwStyle";
import { Form, Input } from 'antd';


class Forgetpw extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submit: false,
            allFields: [{ email: "" }],
        };
    }
    change = (e) => {
        const { allFields } = this.state
        const { name, value } = e.target;
        allFields[0][name] = value;
        this.setState({ allFields });
    }

    onFinish = () => {
        const { allFields } = this.state
        if (allFields[0].email !== "") {
            window.location.replace('/OTP')
        }
    };
    render() {
        const validateMessages = {
            required: 'Email is required!',
            types: {
                email: 'Email is not a valid email!',
            },
        };
        return (
            <ForgetpwStyle>
                <div className="signinContent">
                    <div className="leftContainer">
                        <img className="logo" src={Logo} alt="dsff"></img>
                        <div className="login">Forgot Password</div>
                        <Form onFinish={this.onFinish} requiredMark={"requiredMark"} validateMessages={validateMessages}>
                            <div className="inputs">
                                <div className="label">Enter Registered Email<sup>*</sup></div>
                                <Form.Item name={['user', 'email']} rules={[{ type: 'email', required: true }]} >
                                    <Input
                                        className="username"
                                        name="email"
                                        placeholder="Enter email address"
                                        onChange={(e) => this.change(e)}
                                    />
                                </Form.Item>
                            </div>
                            <div className="forgetpw">You’ll receive OTP via email.</div>
                            <span className="submitContent" >
                                <MTButton className="submit" htmlType="submit">Request OTP</MTButton>
                            </span>
                        </Form>
                    </div>
                </div>
            </ForgetpwStyle>
        );
    }
}

export default Forgetpw;
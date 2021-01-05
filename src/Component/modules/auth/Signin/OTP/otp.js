import React, { Component } from 'react';
import Logo from '../../../../../core/images/logo.svg'
import { MTButton } from '../../../component/MTForm';
import OtpStyle from "./OtpStyle";
import { Form, Input } from 'antd';

class Otp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submit: false,
            allFields: [{ otp: "" }],
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
        if (allFields[0].otp !== "") {
            window.location.replace('/NewPassword')
        }
    }
    render() {
        const { allFields } = this.state
        const validateMessages = {
            required: 'Otp is required!',
        };
        const checkPrice = () => {
            if (allFields[0].otp > 99999 && allFields[0].otp < 999999) {
                return Promise.resolve();
            }
            return Promise.reject('Otp must be in 6 digits!');
        };
        return (
            <OtpStyle>
                <div className="signinContent">
                    <div className="leftContainer">
                        <img className="logo" src={Logo} alt="dsff"></img>
                        <div className="login">Verify OTP</div>
                        <div className="welcome">Enter 6 digit OTP received via mail.</div>
                        <Form onFinish={this.submit} requiredMark={"requiredMark"} validateMessages={validateMessages}>
                            <div className="inputs">
                                <div className="label">OTP<sup>*</sup></div>
                                <Form.Item name={['user', 'number']} rules={[{ validator: checkPrice, required: true, }]}>
                                    <Input
                                        className="username"
                                        name="otp"
                                        onChange={(e) => this.change(e)}
                                    />
                                </Form.Item>
                            </div>
                            <div className="submitContent" >
                                <MTButton className="submit" htmlType="submit">Verify OTP</MTButton>
                            </div>
                        </Form>
                    </div>
                </div>
            </OtpStyle >
        );
    }
}

export default Otp;
import React from 'react';
import Logo from '../../../../../core/images/logo.svg'
import { MTButton } from '../../../component/MTForm';
import ForgetpwStyle from "./forgetpwStyle";
import { Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { ForgetPassword } from '../../../../../core/Redux/auth/authAction';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

export const Forgetpw = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = React.useState();

    const onFinish = () => {
        dispatch(ForgetPassword(email))
    };
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
                    <div className="backButton"> <Link to={{ pathname: "/" }}><ArrowLeftOutlined /></Link></div>
                    <img className="logo" src={Logo} alt="dsff"></img>
                    <div className="login">Forgot Password</div>
                    <Form onFinish={onFinish} requiredMark={"requiredMark"} validateMessages={validateMessages}>
                        <div className="inputs">
                            <div className="label">Enter Registered Email<sup>*</sup></div>
                            <Form.Item name={['user', 'email']} rules={[{ type: 'email', required: true }]} >
                                <Input
                                    className="username"
                                    autoComplete="off"
                                    name="email"
                                    placeholder="Enter email address"
                                    onChange={e => setEmail(e.target.value)}
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

export default Forgetpw;
import React from 'react';
import SignInWrapper from './SigninStyle';
import Logo from '../../../../core/images/logo.svg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MTButton } from '../../component/MTForm';
import { Form, Input } from 'antd';
import { Authentication } from '../../../../core/Redux/auth/authAction';

export const SignIn = () => {
    const dispatch = useDispatch()
    const submit = (value) => {
        dispatch(Authentication(value))
    }
    return (
        <SignInWrapper >
            <div className="signinContent">
                <div className="leftContainer">
                    <div className="left">
                        <img className="logo" src={Logo} alt="dsff"></img>
                        <div className="logoInformation">
                            <p>
                                We are Zeronsec, team of passionate security engineers and industry<br></br>
                                    veterans spread across the globe, specializing in niche information security<br></br>
                                    areas. We exist to protect our customers.<br></br>
                                    Our obsession to engineer robust & meaningful solutions drives us forward<br></br>
                                    every day. We are the company where passion meets detailed engineering.
                                </p>
                            <ul>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="rightContainer">
                    <div className="right">
                        <div className="welcome">Welcome back</div>
                        <div className="login">Login to your account</div>
                        <Form onFinish={submit} >
                            <div className="inputs">
                                <div className="label">UserName<sup>*</sup></div>
                                <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]} >
                                    <Input
                                        name="username"
                                        autoComplete="off"
                                        type="text"
                                        placeholder="Username"
                                    />
                                </Form.Item>
                            </div>
                            <div className="inputs">
                                <div className="label">Password<sup>*</sup></div>
                                <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]} >
                                    <Input.Password
                                        className="username"
                                        autoComplete="off"
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Item>
                            </div>
                            <Link to={'/ForgetPassword'} >
                                <div className="forgetpw">Forgot password?</div>
                            </Link>
                            <div className="submitContent">
                                <MTButton className="submit" htmlType="submit">Login now</MTButton>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </SignInWrapper>
    );
}

export default SignIn;
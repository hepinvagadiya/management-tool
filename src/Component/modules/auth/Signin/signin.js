import React from 'react';
import SignInWrapper from './SigninStyle';
import Logo from '../../../../core/images/logo.svg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MTButton, MTInput } from '../../component/MTForm';
import { Form } from 'antd';
import { Authentication } from '../../../../core/Redux/auth/authAction';

export const SignIn = () => {
    const dispatch = useDispatch();
    const Submit = (Value) => {
        dispatch(Authentication(Value))
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
                        <Form onFinish={Submit} >
                            <MTInput
                                className="inputs"
                                name="username"
                                type="text"
                                label="UserName"
                                placeholder="Username"
                                errorMessage="Please input your Username!"
                                onKeyPress={true}
                                id="username"
                            />
                            <MTInput
                                className="inputs"
                                name="password"
                                type="text"
                                label="Password"
                                placeholder="Password"
                                errorMessage="Please input your Password!"
                                onKeyPress={false}
                                id="password"
                            />
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
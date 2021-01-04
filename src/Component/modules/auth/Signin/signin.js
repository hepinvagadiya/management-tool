import React, { Component } from 'react';
import SignInWrapper from './SigninStyle';
import Logo from '../../../../core/images/logo.svg';
import { Link } from 'react-router-dom';
import { MTButton } from '../../component/MTForm';
import details from '../../../../core/Array/array.json'
import Cookies from 'js-cookie';
import { Form, Input } from 'antd';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submit: false,
            allFields: [{ email: "", password: "" }],
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
        if (allFields[0].email !== "" && allFields[0].password !== "") {
            const mainData = details.admin
            if (JSON.stringify(mainData[0].auth) === JSON.stringify(allFields)) {
                Cookies.set('mainData', mainData)
                window.location.replace("/ZeronSec/users");
                Cookies.set('current', 0)
            } else {
                setTimeout(() => { window.location.replace("/"); }, 1000);
            }
        } else {
            this.setState({ submit: true })
        }
    }
    render() {
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
                            </div>
                        </div>
                    </div>
                    <div className="rightContainer">
                        <div className="right">
                            <div className="welcome">Welcome back</div>
                            <div className="login">Login to your account</div>
                            <Form onFinish={this.onFinish} >
                                <div className="inputs">
                                    <div className="label">Email<sup>*</sup></div>
                                    <Form.Item name={['user', 'name']} rules={[{ required: true, message: 'Please input your Username!' }]} >
                                        <Input
                                            name="email"
                                            type="text"
                                            placeholder="Username"
                                            onChange={(e) => this.change(e)}
                                        />
                                    </Form.Item>
                                </div>
                                <div className="inputs">
                                    <div className="label">Password<sup>*</sup></div>
                                    <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]} >
                                        <Input.Password
                                            className="username"
                                            name="password"
                                            type="password"
                                            placeholder="Password"
                                            onChange={(e) => this.change(e)}
                                        />
                                    </Form.Item>
                                </div>

                                <Link to={'/ForgetPassword'} >
                                    <div className="forgetpw">Forgot password?</div>
                                </Link>
                                <div className="submitContent">
                                    <MTButton className="submit" htmlType= "submit" onClick={() => this.submit()}>Login now</MTButton>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </SignInWrapper>
        );
    }
}

export default SignIn;
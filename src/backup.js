
import axios from 'axios';


axios.post(`http://10.1.1.20:8080/login`, {})
    .then(res => {
        console.log(res.data, "res")
    })

const FormData = require('form-data');
const form = new FormData();
form.append('username', 'hepin');
form.append('password', 'hepinvagdiya');

axios.post('http://10.1.1.20:8080/login', form, { headers: form.getHeaders() })
    .then(function (response) {
        console.log(response, "res");
    })
    .catch(function (error) {
        console.log(error, "err");
    });




axios.post('http://10.1.1.20:8080/login', {
    username: 'hepin',
    password: 'hepinvagdiya'
})
    .then(function (response) {
        console.log(response, "res");
    })
    .catch(function (error) {
        console.log(error, "err");
    });



axios.post(`http://10.1.1.20:8080/login`, { "username": "hepin", "password": "hepinvagdiya" })
    .then(res => {
        console.log(res, "res")
        console.log(res.data, " res")
    })


axios({
    method: 'post',
    url: 'http://10.1.1.20:8080/login',
    data: {
        "username": "hepin",
        "password": "hepinvagdiya"
    }
});


axios.post(`http://10.1.1.20:8080/login`, {
    withCredentials: true,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
}, {

    "username": "hepin",
    "password": "hepinvagadiya"
}).then(function (response) {
    console.log('Authenticated', response);
}).catch(function (error) {
    console.log('Error on Authentication', error);
});

// scuss
axios({
    method: 'post',
    url: 'http://10.1.1.20:8080/login',
    data: {
        "username": "hepin",
        "password": "hepinvagadiya"
    }
}).then((response) => {
    console.log(response);
}, (error) => {
    console.log(error);
});



// ===========================================sign in  ===================================
import React, { Component } from 'react';
import SignInWrapper from './SigninStyle';
import Logo from '../../../../core/images/logo.svg';
import { Link } from 'react-router-dom';
import { MTButton } from '../../component/MTForm';
import { Form, Input } from 'antd';
import { connect } from 'react-redux';
// import { GET } from '../../../../core/Redux/auth/authAction';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allFields: [{ userName: "", password: "" }],
        };
    }
    change = (e) => {
        const { allFields } = this.state
        const { name, value } = e.target;
        allFields[0][name] = value;
        this.setState({ allFields });
    }
    submit = () => {
        const { dispatch } = this.props;
        const { allFields } = this.state
        console.log(allFields)
        dispatch((allFields));
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
                                <ul>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="rightContainer">
                        <div className="right">
                            <div className="welcome">Welcome back</div>
                            <div className="login">Login to your account</div>
                            <Form onFinish={this.onFinish} >
                                <div className="inputs">
                                    <div className="label">UserName<sup>*</sup></div>
                                    <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]} >
                                        <Input
                                            name="userName"
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
                                    <MTButton className="submit" htmlType="submit" onClick={() => this.submit()}>Login now</MTButton>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </SignInWrapper>
        );
    }
}

export default connect()(SignIn);
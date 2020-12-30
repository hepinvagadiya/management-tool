import React, { Component } from 'react';
import SignInWrapper from './SigninStyle';
import Logo from '../../../images/logo.svg';
import { Link } from 'react-router-dom';
import { MTButton, MTInput } from '../../component/MTForm';
import { details } from '../../../../core/Array/array'
import Cookies from 'js-cookie';


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
                console.log(mainData)
                Cookies.set('mainData', mainData)
                window.location.reload()
            } else {
                setTimeout(() => { window.location.replace("/Login"); }, 1000);
            }
        } else {
            this.setState({ submit: true })
        }
    }
    render() {
        const { submit,allFields } = this.state
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
                            <div className="inputs">
                                <div className="label">Email<sup>*</sup></div>
                                <MTInput
                                    className="username"
                                    name="email"
                                    type="text"
                                    onChange={(e) => this.change(e)}
                                />
                                {submit === true && !allFields[0].email && <span style={{ fontSize: "12px", color: "#b90000" }}>email is required</span>}

                            </div>
                            <div className="inputs">
                                <div className="label">Password<sup>*</sup></div>
                                <MTInput
                                    className="username"
                                    name="password"
                                    type="password"
                                    onChange={(e) => this.change(e)}
                                />
                                {submit === true && !allFields[0].password && <span style={{ fontSize: "12px", color: "#b90000" }}>password is required</span>}
                            </div>
                            <Link to={'/ForgetPassword'} >
                                <div className="forgetpw">Forgot password?</div>
                            </Link>
                            <div className="submitContent">
                                <MTButton className="submit" onClick={() => this.submit()}>Login now</MTButton>
                            </div>
                        </div>
                    </div>
                </div>
            </SignInWrapper>
        );
    }
}

export default SignIn;
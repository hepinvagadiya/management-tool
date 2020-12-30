import React, { Component } from 'react';
import Logo from '../../../../images/logo.svg'
import { MTButton, MTInput } from '../../../component/MTForm';
import ForgetpwStyle from "./forgetpwStyle";
import { Link } from 'react-router-dom';

class Forgetpw extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <ForgetpwStyle>
                <div className="signinContent">
                    <div className="leftContainer">
                        <img className="logo" src={Logo} alt="dsff"></img>
                        <div className="login">Forgot Password</div>
                        <div className="inputs">
                            <div className="label">Enter Registered Email<sup>*</sup></div>
                            <MTInput
                                className="username"
                                type="email"
                            />
                        </div>
                        <div className="forgetpw">You’ll receive OTP via email.</div>
                        <Link to={'/OTP'} >
                            <div className="submitContent"><MTButton className="submit">Request OTP</MTButton></div>
                        </Link>
                    </div>
                </div>
            </ForgetpwStyle>
        );
    }
}

export default Forgetpw;
import React, { Component } from 'react';
import Logo from '../../../../images/logo.svg'
import { MTButton, MTInput } from '../../../component/MTForm';
import OtpStyle from "./OtpStyle";
import { Link } from 'react-router-dom';

class Otp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <OtpStyle>
                <div className="signinContent">
                    <div className="leftContainer">
                        <img className="logo" src={Logo} alt="dsff"></img>
                        <div className="login">Verify OTP</div>
                        <div className="welcome">Enter 6 digit OTP received via mail.</div>
                        <div className="inputs">
                            <div className="label">Enter OTP<sup>*</sup></div>
                            <MTInput className="username" type="email" />
                        </div>
                        <Link to={'/NewPassword'} >
                            <div className="submitContent"><MTButton className="submit">Verify OTP</MTButton></div>
                        </Link>
                    </div>
                </div>
            </OtpStyle>
        );
    }
}

export default Otp;
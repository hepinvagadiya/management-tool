import React, { Component } from 'react';
import Logo from '../../../../images/logo.svg'
import { MTButton, MTInput } from '../../../component/MTForm';
import OtpStyle from "./OtpStyle";
import { Link } from 'react-router-dom';

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
        if (allFields[0].otp === "") {
            this.setState({ submit: true })
        }
    }
    render() {
        const { allFields, submit } = this.state
        return (
            <OtpStyle>
                <div className="signinContent">
                    <div className="leftContainer">
                        <img className="logo" src={Logo} alt="dsff"></img>
                        <div className="login">Verify OTP</div>
                        <div className="welcome">Enter 6 digit OTP received via mail.</div>
                        <div className="inputs">
                            <div className="label">Enter OTP<sup>*</sup></div>
                            <MTInput className="username" type="text" name="otp" onChange={(e) => this.change(e)} />
                            {submit === true && !allFields[0].otp && <span style={{ fontSize: "12px", color: "#b90000" }}>OTP is required</span>}
                        </div>
                        <div className="submitContent" onClick={this.submit}>
                            {!allFields[0].otp ? <MTButton className="submit">Verify OTP</MTButton> : <Link to={'/NewPassword'} ><MTButton className="submit">Verify OTP</MTButton></Link>}
                        </div>
                    </div>
                </div>
            </OtpStyle>
        );
    }
}

export default Otp;
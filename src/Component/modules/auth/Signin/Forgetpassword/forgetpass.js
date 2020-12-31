import React, { Component } from 'react';
import Logo from '../../../../images/logo.svg'
import { MTButton, MTInput } from '../../../component/MTForm';
import ForgetpwStyle from "./forgetpwStyle";
import { Link } from 'react-router-dom';

class Forgetpw extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submit: false,
            allFields: [{ email: "" }],
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
        if (allFields[0].email === "") {
            this.setState({ submit: true })
        }
    }
    render() {
        const { allFields, submit } = this.state
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
                                onChange={(e) => this.change(e)}
                                name="email"
                            />
                            {submit === true && !allFields[0].email && <span style={{ fontSize: "12px", color: "#b90000" }}>email is required</span>}
                        </div>
                        <div className="forgetpw">You’ll receive OTP via email.</div>
                        <div className="submitContent" onClick={this.submit}>
                            {!allFields[0].email ? <MTButton className="submit">Request OTP</MTButton> : <Link to={'/OTP'} ><MTButton className="submit">Request OTP</MTButton></Link>}
                        </div>
                    </div>
                </div>
            </ForgetpwStyle>
        );
    }
}

export default Forgetpw;
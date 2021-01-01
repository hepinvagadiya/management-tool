import React, { Component } from 'react';
import Logo from '../../../../../core/images/logo.svg'
import { MTButton, MTInput } from '../../../component/MTForm';
import NewpwStyle from "./newpwStyle";
import { Link } from 'react-router-dom';

class NewPw extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submit: false,
            allFields: [{ newpassword: "", confirmpassword: "" }],
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
        if (allFields[0].newpassword === "" || allFields[0].confirmpassword === "") {
            this.setState({ submit: true })
        }
    }
    render() {
        const { allFields, submit } = this.state
        return (
            <NewpwStyle>
                <div className="signinContent">
                    <div className="leftContainer">
                        <img className="logo" src={Logo} alt="dsff"></img>
                        <div className="login">Change Password</div>
                        <div className="inputs">
                            <div className="label">New Password<sup>*</sup></div>
                            <MTInput className="username" onChange={(e) => this.change(e)} type="password" name="newpassword" />
                            {submit === true && !allFields[0].newpassword && <span style={{ fontSize: "12px", color: "#b90000" }}>NewPaswword is required</span>}
                        </div>
                        <div className="inputs">
                            <div className="label">Confirm Password<sup>*</sup></div>
                            <MTInput className="username" onChange={(e) => this.change(e)} type="password" name="confirmpassword" />
                            {submit === true && !allFields[0].confirmpassword && <span style={{ fontSize: "12px", color: "#b90000" }}>ConfirmPaswword is required</span>}

                        </div>
                        <div className="submitContent" onClick={this.submit}>
                            {!allFields[0].newpassword || !allFields[0].confirmpassword ? <MTButton className="submit">Change Password</MTButton> : <Link to={'/Login'}><MTButton className="submit">Change Password</MTButton></Link>}
                        </div>
                    </div>
                </div>
            </NewpwStyle>
        );
    }
}

export default NewPw;
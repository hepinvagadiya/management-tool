import React, { Component } from 'react';
import Logo from '../../../../images/logo.svg'
import { MTButton, MTInput } from '../../../component/MTForm';
import NewpwStyle from "./newpwStyle";
import { Link } from 'react-router-dom';

class NewPw extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <NewpwStyle>
                <div className="signinContent">
                    <div className="leftContainer">
                        <img className="logo" src={Logo} alt="dsff"></img>
                        <div className="login">Change Password</div>
                        <div className="inputs">
                            <div className="label">New Password<sup>*</sup></div>
                            <MTInput className="username" type="password" />
                        </div>
                        <div className="inputs">
                            <div className="label">Confirm Password<sup>*</sup></div>
                            <MTInput className="username" type="password" />
                        </div>
                        <Link to={'/Login'}>
                        <div className="submitContent"><MTButton className="submit">Change Password</MTButton></div>
                        </Link>
                    </div>
                </div>
            </NewpwStyle>
        );
    }
}

export default NewPw;
import React, { Component } from 'react';
import SignInWrapper from './SigninStyle';
import Logo from '../../../images/logo.svg'
import { MTInput } from '../../component/MTForm';


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        console.log("h")
        return (
            <SignInWrapper >
                <div className="signinContent">
                    <div className="leftContainer">
                        <div className="left">
                            <img className="logo" src={Logo} alt="dsff"></img>
                            <div className="logoInformation">
                                <p>  We are Zeronsec, team of passionate security engineers and industry<br></br>
                           veterans spread across the globe, specializing in niche information security<br></br>
                           areas. We exist to protect our customers.<br></br>

                           Our obsession to engineer robust & meaningful solutions drives us forward<br></br>
                           every day. We are the company where passion meets detailed engineering.</p>
                            </div>
                        </div>
                    </div>
                    <div className="rightContainer">
                        <div className="right">
                            <div className="welcome">Welcome back</div>
                            <div className="login">Login to your account</div>
                            <div className="inputs">
                                <div className="label">Email<sup>*</sup></div>
                                <MTInput className="username" type="text" />
                            </div>
                            <div className="inputs">
                                <div className="label">Password<sup>*</sup></div>
                                <MTInput className="username" type="password" />
                            </div>
                            <div className="forgetpw">Forgot password?</div>
                        </div>
                    </div>
                </div>
            </SignInWrapper>
        );
    }
}

export default SignIn;
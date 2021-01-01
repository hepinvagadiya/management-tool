import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Forgetpw from './Signin/Forgetpassword/forgetpass';
import SignIn from './Signin/signin';
import NewPw from './Signin/Newpassword/newpass'
import Otp from './Signin/OTP/otp'

const AuthRouter = () => {
    return <div>
        <Switch>
            <Route exact path={`/Login`} component={SignIn} />
            <Route exact path={`/ForgetPassword`} component={Forgetpw} />
            <Route exact path={`/OTP`} component={Otp} />
            <Route exact path={`/NewPassword`} component={NewPw} />
        </Switch>
    </div>

};

export default AuthRouter;
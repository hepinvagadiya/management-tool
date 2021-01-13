import React, { useState } from 'react';
import Logo from '../../../../../core/images/logo.svg'
import { MTButton } from '../../../component/MTForm';
import ForgetpwStyle from "./forgetpwStyle";
import { Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ForgetPassword } from '../../../../../core/Redux/auth/authAction';

export const Forgetpw = () => {
    const dispatch = useDispatch()
    let user = useSelector(state => state)
    const [email, setEmail] = React.useState();
    const [submitErr, setSubmit] = useState(false);
    React.useEffect(() => {
        dispatch(ForgetPassword())
    }, [dispatch])

    const onFinish = () => {
        dispatch(ForgetPassword(email))
        setTimeout(function () { setSubmit(true) }, 4000);
    };
    const validateMessages = {
        required: 'Email is required!',
        types: {
            email: 'Email is not a valid email!',
        },
    };
    return (
        <ForgetpwStyle>
            <div className="signinContent">
                <div className="leftContainer">
                    <img className="logo" src={Logo} alt="dsff"></img>
                    <div className="login">Forgot Password</div>
                    <Form onFinish={onFinish} requiredMark={"requiredMark"} validateMessages={validateMessages}>
                        <div className="inputs">
                            <div className="label">Enter Registered Email<sup>*</sup></div>
                            <Form.Item name={['user', 'email']} rules={[{ type: 'email', required: true }]} >
                                <Input
                                    className="username"
                                    name="email"
                                    placeholder="Enter email address"
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </Form.Item>
                        </div>
                        <div className="forgetpw">You’ll receive OTP via email.</div>
                        <span className="submitContent" >
                            <MTButton className="submit" htmlType="submit">Request OTP</MTButton>
                        </span>
                        {submitErr === true && <span style={{ fontSize: "12px", color: "rgb(255 0 0)" }}>{user.email.email === undefined ? 'please Input Valid Email Address!' : null}</span>}
                    </Form>
                </div>
            </div>  
        </ForgetpwStyle>
    );
}

export default Forgetpw;
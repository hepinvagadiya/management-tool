import React, { useState } from 'react';
import Logo from '../../../../../core/images/logo.svg'
import { MTButton } from '../../../component/MTForm';
import OtpStyle from "./OtpStyle";
import { Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { GetOtp } from '../../../../../core/Redux/auth/authAction';

export const Otp = () => {
    const dispatch = useDispatch()
    const [otp, setOtp] = React.useState();
    let user = useSelector(state => state)
    const [submitErr, setSubmit] = useState(false);

    React.useEffect(() => {
        dispatch(GetOtp())
    }, [dispatch])

    const submit = () => {
        dispatch(GetOtp(otp))
        setSubmit(true)
    }
    const validateMessages = {
        required: 'Otp is required!',
    };
    const checkPrice = () => {
        if (otp > 9999 && otp < 999999) {
            return Promise.resolve();
        }
        return Promise.reject('Otp must be in 6 digits!');
    };
    return (
        <OtpStyle>
            <div className="signinContent">
                <div className="leftContainer">
                    <img className="logo" src={Logo} alt="dsff"></img>
                    <div className="login">Verify OTP</div>
                    <div className="welcome">Enter 6 digit OTP received via mail.</div>
                    <Form onFinish={submit} requiredMark={"requiredMark"} validateMessages={validateMessages}>
                        <div className="inputs">
                            <div className="label">OTP<sup>*</sup></div>
                            <Form.Item name={['user', 'number']} rules={[{ validator: checkPrice, required: true, }]}>
                                <Input
                                    className="username"
                                    name="otp"
                                    type="number"
                                    placeholder="Enter otp"
                                    onChange={e => setOtp(e.target.value)}
                                />
                            </Form.Item>
                        </div>
                        {submitErr === true && <span style={{ fontSize: "12px", color: "rgb(255 0 0)" }}>{user.otp.otp.message}</span>}
                        <div className="submitContent" >
                            <MTButton className="submit" htmlType="submit">Verify OTP</MTButton>
                        </div>
                    </Form>
                </div>
            </div>
        </OtpStyle >
    );
}

export default Otp;
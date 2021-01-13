import React from 'react';
import Logo from '../../../../../core/images/logo.svg'
import { MTButton } from '../../../component/MTForm';
import NewpwStyle from "./newpwStyle";
import { Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { ChangePassword } from '../../../../../core/Redux/auth/authAction';

export const NewPw = () => {
    const dispatch = useDispatch()
    const [password, setPassword] = React.useState();
    const [confirmPassword, setConfirmPassword] = React.useState();

    React.useEffect(() => {
        dispatch(ChangePassword())
    }, [dispatch])

    const submit = () => {
        dispatch(ChangePassword(password, confirmPassword))
    }
    return (
        <NewpwStyle>
            <div className="signinContent">
                <div className="leftContainer">
                    <img className="logo" src={Logo} alt="dsff"></img>
                    <div className="login">Change Password</div>
                    <Form onFinish={submit}>
                        <div className="inputs">
                            <div className="label">New Password<sup>*</sup></div>
                            <Form.Item
                                name="password"
                                hasFeedback
                                rules={[{
                                    required: true,
                                    message: 'Please input your password!'
                                }]}
                            >
                                <Input.Password
                                    className="username"
                                    placeholder="Enter password"
                                    onChange={e => setPassword(e.target.value)}
                                    type="password"
                                    name="newpassword"
                                />
                            </Form.Item>
                        </div>
                        <div className="inputs">
                            <div className="label">Confirm Password<sup>*</sup></div>
                            <Form.Item
                                name="confirm"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please confirm your password!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject('The two passwords that you entered do not match!');
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password
                                    placeholder="Enter confirm password"
                                    className="username"
                                    onChange={e => setConfirmPassword(e.target.value)}
                                    type="password"
                                    name="confirmpassword"
                                />
                            </Form.Item>
                        </div>
                        <div className="submitContent">
                            <MTButton className="submit" htmlType="submit">Change Password</MTButton>
                        </div>
                    </Form>
                </div>
            </div>
        </NewpwStyle >
    );
}

export default NewPw;
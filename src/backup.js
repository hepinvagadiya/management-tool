
import axios from 'axios';


axios.post(`http://10.1.1.20:8080/login`, {})
    .then(res => {
        console.log(res.data, "res")
    })

const FormData = require('form-data');
const form = new FormData();
form.append('username', 'hepin');
form.append('password', 'hepinvagdiya');

axios.post('http://10.1.1.20:8080/login', form, { headers: form.getHeaders() })
    .then(function (response) {
        console.log(response, "res");
    })
    .catch(function (error) {
        console.log(error, "err");
    });




axios.post('http://10.1.1.20:8080/login', {
    username: 'hepin',
    password: 'hepinvagdiya'
})
    .then(function (response) {
        console.log(response, "res");
    })
    .catch(function (error) {
        console.log(error, "err");
    });



axios.post(`http://10.1.1.20:8080/login`, { "username": "hepin", "password": "hepinvagdiya" })
    .then(res => {
        console.log(res, "res")
        console.log(res.data, " res")
    })


axios({
    method: 'post',
    url: 'http://10.1.1.20:8080/login',
    data: {
        "username": "hepin",
        "password": "hepinvagdiya"
    }
});


axios.post(`http://10.1.1.20:8080/login`, {
    withCredentials: true,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
}, {

    "username": "hepin",
    "password": "hepinvagadiya"
}).then(function (response) {
    console.log('Authenticated', response);
}).catch(function (error) {
    console.log('Error on Authentication', error);
});

// scuss
axios({
    method: 'post',
    url: 'http://10.1.1.20:8080/login',
    data: {
        "username": "hepin",
        "password": "hepinvagadiya"
    }
}).then((response) => {
    console.log(response);
}, (error) => {
    console.log(error);
});



// ===========================================sign in  ===================================
import React, { Component } from 'react';
import SignInWrapper from './SigninStyle';
import Logo from '../../../../core/images/logo.svg';
import { Link } from 'react-router-dom';
import { MTButton } from '../../component/MTForm';
import { Form, Input } from 'antd';
import { connect } from 'react-redux';
// import { GET } from '../../../../core/Redux/auth/authAction';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allFields: [{ userName: "", password: "" }],
        };
    }
    change = (e) => {
        const { allFields } = this.state
        const { name, value } = e.target;
        allFields[0][name] = value;
        this.setState({ allFields });
    }
    submit = () => {
        const { dispatch } = this.props;
        const { allFields } = this.state
        console.log(allFields)
        dispatch((allFields));
    }
    render() {
        return (
            <SignInWrapper >
                <div className="signinContent">
                    <div className="leftContainer">
                        <div className="left">
                            <img className="logo" src={Logo} alt="dsff"></img>
                            <div className="logoInformation">
                                <p>
                                    We are Zeronsec, team of passionate security engineers and industry<br></br>
                                    veterans spread across the globe, specializing in niche information security<br></br>
                                    areas. We exist to protect our customers.<br></br>
                                    Our obsession to engineer robust & meaningful solutions drives us forward<br></br>
                                    every day. We are the company where passion meets detailed engineering.
                                </p>
                                <ul>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="rightContainer">
                        <div className="right">
                            <div className="welcome">Welcome back</div>
                            <div className="login">Login to your account</div>
                            <Form onFinish={this.onFinish} >
                                <div className="inputs">
                                    <div className="label">UserName<sup>*</sup></div>
                                    <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]} >
                                        <Input
                                            name="userName"
                                            type="text"
                                            placeholder="Username"
                                            onChange={(e) => this.change(e)}
                                        />
                                    </Form.Item>
                                </div>
                                <div className="inputs">
                                    <div className="label">Password<sup>*</sup></div>
                                    <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]} >
                                        <Input.Password
                                            className="username"
                                            name="password"
                                            type="password"
                                            placeholder="Password"
                                            onChange={(e) => this.change(e)}
                                        />
                                    </Form.Item>
                                </div>

                                <Link to={'/ForgetPassword'} >
                                    <div className="forgetpw">Forgot password?</div>
                                </Link>
                                <div className="submitContent">
                                    <MTButton className="submit" htmlType="submit" onClick={() => this.submit()}>Login now</MTButton>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </SignInWrapper>
        );
    }
}

export default connect()(SignIn);



import React, { Component } from 'react';
import Logo from '../../../../../core/images/logo.svg'
import { MTButton } from '../../../component/MTForm';
import ForgetpwStyle from "./forgetpwStyle";
import { Form, Input } from 'antd';


class Forgetpw extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allFields: [{ email: "" }],
        };
    }
    change = (e) => {
        const { allFields } = this.state
        const { name, value } = e.target;
        allFields[0][name] = value;
        this.setState({ allFields });
    }
    T
    onFinish = () => {
        const { allFields } = this.state
        if (allFields[0].email !== "") {
            window.location.replace('/OTP')
        }
    };
    render() {
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
                        <Form onFinish={this.onFinish} requiredMark={"requiredMark"} validateMessages={validateMessages}>
                            <div className="inputs">
                                <div className="label">Enter Registered Email<sup>*</sup></div>
                                <Form.Item name={['user', 'email']} rules={[{ type: 'email', required: true }]} >
                                    <Input
                                        className="username"
                                        name="email"
                                        placeholder="Enter email address"
                                        onChange={(e) => this.change(e)}
                                    />
                                </Form.Item>
                            </div>
                            <div className="forgetpw">You’ll receive OTP via email.</div>
                            <span className="submitContent" >
                                <MTButton className="submit" htmlType="submit">Request OTP</MTButton>
                            </span>
                        </Form>
                    </div>
                </div>
            </ForgetpwStyle>
        );
    }
}

export default Forgetpw;

import React, { Component } from 'react';
import Logo from '../../../../../core/images/logo.svg'
import { MTButton } from '../../../component/MTForm';
import OtpStyle from "./OtpStyle";
import { Form, Input } from 'antd';

class Otp extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        if (allFields[0].otp !== "") {
            window.location.replace('/NewPassword')
        }
    }
    render() {
        const { allFields } = this.state
        const validateMessages = {
            required: 'Otp is required!',
        };
        const checkPrice = () => {
            if (allFields[0].otp > 99999 && allFields[0].otp < 999999) {
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
                        <Form onFinish={this.submit} requiredMark={"requiredMark"} validateMessages={validateMessages}>
                            <div className="inputs">
                                <div className="label">OTP<sup>*</sup></div>
                                <Form.Item name={['user', 'number']} rules={[{ validator: checkPrice, required: true, }]}>
                                    <Input
                                        className="username"
                                        name="otp"
                                        type="number"
                                        placeholder="Enter otp"
                                        onChange={(e) => this.change(e)}
                                    />
                                </Form.Item>
                            </div>
                            <div className="submitContent" >
                                <MTButton className="submit" htmlType="submit">Verify OTP</MTButton>
                            </div>
                        </Form>
                    </div>
                </div>
            </OtpStyle >
        );
    }
}

export default Otp;

import React, { Component } from 'react';
import Logo from '../../../../../core/images/logo.svg'
import { MTButton } from '../../../component/MTForm';
import NewpwStyle from "./newpwStyle";
import { Form, Input } from 'antd';

class NewPw extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        if (allFields[0].newpassword !== "" && allFields[0].confirmpassword !== "") {
            window.location.replace('/')
        }
    }
    render() {
        const { allFields } = this.state
        return (
            <NewpwStyle>
                <div className="signinContent">
                    <div className="leftContainer">
                        <img className="logo" src={Logo} alt="dsff"></img>
                        <div className="login">Change Password</div>
                        <Form onFinish={this.submit}>
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
                                        onChange={(e) => this.change(e)}
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
                                        onChange={(e) => this.change(e)}
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
}

export default NewPw;


import React, { useEffect, useState } from 'react';
import { MTButton } from '../../component/MTForm';
import { UserStyle } from './userStyle'
import { Table } from 'antd';
import MTModal from '../../component/MTmodel/modal';
import { Button, Form, Input, Radio, } from 'antd';
import { Select } from 'antd';
import { UserData } from '../../../../core/Redux/User/userAction';
import { useDispatch, useSelector } from 'react-redux';
import Icons from '../../../modules/component/Icons/icons'

export const User = () => {
    let user = useSelector(state => state)
    const [newUser, setNewUser] = useState(false);
    const [form] = Form.useForm();
    const { Option } = Select;
    const dispatch = useDispatch()

    const [username, setUsername] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [contact, setContact] = useState();
    const [designation, setDesignation] = useState();
    const [BloodGroup, setBloodGroup] = useState();
    const [gender, setGender] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const Designation = ['Graphic Designer', 'Web Devloper'];
    const bloodGroup = ['A+', 'A', 'AB+'];
    const validateMessages = {
        required: 'Email is required!',
        types: { email: 'Email is not a valid email!', },
    };
    const columns = [
        {
            "title": "User Name",
            render: listUsers => `${listUsers.firstName} ${listUsers.lastName}`,
            "key": "firstName",
            "width": '15%',
        },
        {
            "title": "Designation",
            "dataIndex": "designation",
            "key": "designation",
            "width": '15%',
        },
        {
            "title": "Email",
            "dataIndex": "email",
            "key": "email",
            "width": '20%',
        },
        {
            "title": "Contect",
            "dataIndex": "contact",
            "key": "contact",
            "width": '15%',
        },
        {
            "title": "Created Time",
            "dataIndex": "createdTime",
            "key": "createdTime",
            "width": '25%',
        },
        {
            "title": "Action",
            "dataIndex": "action",
            "key": "action",
            render: () => (
                <span> <Icons type="post_edit" />   <span onClick={deleteTableRow}><Icons type="post_delete" /> </span></span>
                ),
            },
            
        ];
        useEffect(() => {
            dispatch(UserData())
        }, [dispatch])
        
        console.log(user.userdata.table,"knjsbndjfns")
        const deleteTableRow = () => {
            console.log("delete")
        }
        
        const CreateNewUser = () => {
        document.body.classList.remove('ReactModal__Body--before-close')
        document.body.classList.add('ReactModal__Body--open')
        setNewUser(true)
        // dispatch(Registration(firstName, lastName,  email, username, contact, designation, BloodGroup, gender, password, confirmPassword))
    }

    const createUser = () => {
        document.body.classList.add('ReactModal__Body--before-close')
        setNewUser(false)
    }

    const checkMobileNo = () => {
        if (contact === "") {
            return Promise.reject('Contect is required');
        }
        if (contact < 9999999999) { return Promise.resolve(); }
        return Promise.reject('Please input valid phone no!');
    };

    return (
        <UserStyle>
            <div className="heading">
                <div className="title">User</div>
                <div><MTButton className="createEle" onClick={CreateNewUser}>Create</MTButton></div>
            </div>
            <MTModal
                visible={newUser}
                title="New User"
                onOk={form.submit}
                onCancel={createUser}
                closable={true}
                maskClosable={false}
                footer={[
                    <Button key="submit" htmlType="submit" form="userform" className="deleteEle">Save</Button>,
                ]}
            >
                <Form layout="inline" validateMessages={validateMessages} id="userform" form={form} onFinish={createUser}>
                    <div className="inputs-inline">
                        <div className="label">First Name</div>
                        <Form.Item name={['user', 'firstname']} rules={[{ required: true, message: 'Please input First Name!' }]} >
                            <Input
                                name="firstname"
                                type="text"
                                placeholder="Enter First Name"
                                onChange={e => setFirstName(e.target.value)}
                            />
                        </Form.Item>
                    </div>
                    <div className="inputs-inline">
                        <div className="label">Last Name</div>
                        <Form.Item name={['user', 'lastname']} rules={[{ required: true, message: 'Please input Last Name!' }]} >
                            <Input
                                name="lastname"
                                type="text"
                                placeholder="Enter Last Name"
                                onChange={e => setLastName(e.target.value)}
                            />
                        </Form.Item>
                    </div>
                    <div className="inputs-inline">
                        <div className="label">Email</div>
                        <Form.Item name={['user', 'email']} rules={[{ type: 'email', required: true }]}>
                            <Input
                                name="email"
                                type="text"
                                placeholder="Enter Email Address"
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Form.Item>
                    </div>
                    <div className="inputs-inline">
                        <div className="label">Contect No.</div>
                        <Form.Item name="phone" rules={[{ validator: checkMobileNo, required: true }]}>
                            <Input
                                name="number"
                                placeholder="Enter Contect No"
                                onChange={e => setContact(e.target.value)}
                            />
                        </Form.Item>
                    </div>
                    <div className="inputs-inline">
                        <div className="label">Designation</div>
                        <Form.Item rules={[{ required: true, message: 'Please Select Any Option!' }]} >
                            <Select defaultValue={Designation[0]} onChange={e => setDesignation(e.target.value)}>
                                {Designation.map(province => (
                                    <Option value={province} key={province}>{province}</Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </div>
                    <div className="inputs-inline">
                        <div className="label">Blood Group</div>
                        <Form.Item rules={[{ required: true, message: 'Please Select Any Option!' }]} >
                            <Select defaultValue={bloodGroup[0]} onChange={e => setBloodGroup(e.target.value)}>
                                {bloodGroup.map(city => (
                                    <Option value={city} key={city}>{city}</Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </div>
                    <div className="inputs-inline" style={{ padding: "14px 10px 0px 13px" }}>
                        <div className="label">Gender</div>
                        <Form.Item name="radio-button" rules={[{ required: true, message: 'Please pick an item!' }]} >
                            <Radio.Group onChange={e => setGender(e.target.value)}>
                                <Radio value="a" style={{ padding: "5px" }}>Male</Radio>
                                <Radio value="b" style={{ padding: "5px" }}>female</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </div>
                    <div className="inputs-inline" style={{ padding: "14px 10px 0px 13px" }}>
                        <div className="label">Username</div>
                        <Form.Item name={['user', 'username']} rules={[{ required: true, message: 'Please input Username!' }]} >
                            <Input
                                name="username"
                                type="text"
                                placeholder="Enter User Name"
                                onChange={e => setUsername(e.target.value)}
                            />
                        </Form.Item>
                    </div>
                    <div className="inputs-inline">
                        <div className="label">Password<sup>*</sup></div>
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
                                placeholder="password"
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                                name="newpassword"
                            />
                        </Form.Item>
                    </div>
                    <div className="inputs-inline">
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
                                        return Promise.reject('The passwords are not match!');
                                    },
                                }),
                            ]}
                        >
                            <Input.Password
                                placeholder="confirm password"
                                className="username"
                                onChange={e => setConfirmPassword(e.target.value)}
                                type="password"
                                name="confirmpassword"
                            />
                        </Form.Item>
                    </div>
                </Form>
            </MTModal>
            <div className="tableContent">
                <Table
                    pagination={{ pageSize: 12 }}
                    columns={columns}
                    dataSource={user.userdata.registration.data}
                    scroll={{ y: 'calc(77.5vh - 4em)' }}
                    sticky
                />
            </div>
        </UserStyle>
    );
}

export default User;


  // case 'USER_REGISTRATION':
        //     state.table.push(action.payload.data)
        //     // console.log(state.table,"table")
        //     console.log(state.table,"last")
        //     state = {
        //         ...state,
        //         // table: [state.table, action.payload.data]
        //         // createUser: action.payload,
        //     }
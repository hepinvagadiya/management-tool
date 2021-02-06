import React, { useState, useEffect } from 'react';
import { HeaderStyle } from './headerStyle';
import { PageHeader } from 'antd';
import Logo from '../../../core/images/logo.svg'
import MTModal from '../../modules/component/MTmodel/modal';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { FindUser } from '../../../core/Redux/User/userAction';
import Icons from '../../modules/component/Icons/icons'

export const Topbar = () => {
    const [Task, setTask] = useState(false);
    const dispatch = useDispatch()
    const username = useSelector(state => state).table.findUser

    useEffect(() => {
        dispatch(FindUser(JSON.parse(sessionStorage.getItem('Login')).data.usertoken))
    }, [dispatch])

    const LogoutModalOpen = () => {
        document.body.classList.add('ReactModal__Body--open')
        setTask(true);
    }
    const LogoutOk = () => {
        document.body.classList.add('ReactModal__Body--before-close')
        sessionStorage.clear()
        window.location.replace("/");
        setTask(false);
    }
    const onCancel = () => {
        document.body.classList.add('ReactModal__Body--before-close')
        setTask(false);
    }
    return (
        <HeaderStyle>
            <PageHeader
                className="site-page-header"
                title={<img className="logo" src={Logo} alt="dsff"></img>}
                extra={[
                    <div key='0' className="user" onClick={LogoutModalOpen} style={{ cursor: "pointer" }}>
                        <div className="pic" >
                            {username !== undefined ? `${username.data[0].firstName[0].toUpperCase()}${username.data[0].lastName[0].toUpperCase()}` : 'HV'}
                        </div>
                    </div>
                ]}
            />
            <MTModal
                visible={Task}
                title="Profile"
                onOk={LogoutOk}
                closable={false}
                maskClosable={false}
                footer={[
                    <Button key="back" className="cancelEle" onClick={onCancel}>Cancel</Button>,
                    <Button key="submit" className="deleteEle" onClick={LogoutOk}>Logout</Button>
                ]}
            >
                <span style={{ display: 'grid' }}>
                    <span>
                        <span className="profile"><Icons type="usersMenu" /></span>
                        <span className="titlePro">{username !== undefined ? `${username.data[0].firstName.toUpperCase()}  ${username.data[0].lastName.toUpperCase()}` : null}</span>
                    </span>
                    <span className="email" >{username !== undefined ? username.data[0].email : null}</span>
                    <span className="email" >{username !== undefined ? username.data[0].designation : null}</span>
                    <span className="email" >{username !== undefined ? username.data[0].contact : null}</span>
                </span>
            </MTModal>
        </HeaderStyle>
    );
}

export default Topbar;
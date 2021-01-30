import React, { useState } from 'react';
import { HeaderStyle } from './headerStyle';
import { PageHeader } from 'antd';
import Logo from '../../../core/images/logo.svg'
import MTModal from '../../modules/component/MTmodel/modal';
import { Button } from 'antd';
import Icons from '../../modules/component/Icons/icons'

export const Topbar = () => {
    const [Task, setTask] = useState(false);
    const LogoutModalOpen = () => {
        document.body.classList.add('ReactModal__Body--open')
        setTask(true);
    }
    const LogoutOk = () => {
        document.body.classList.add('ReactModal__Body--before-close')
        localStorage.clear()
        window.location.replace("/");
        setTask(false);
    }
    const onCancel = () => {
        document.body.classList.add('ReactModal__Body--before-close')
        setTask(false);
    }
    const data = JSON.parse(localStorage.getItem('Login')).data.username
    const user = data.toUpperCase();
    return (
        <HeaderStyle>
            <PageHeader
                className="site-page-header"
                title={<img className="logo" src={Logo} alt="dsff"></img>}
                extra={[
                    <div key='0' className="user" onClick={LogoutModalOpen} style={{ cursor: "pointer" }}>
                        <div className="pic" >{user[0]}{user[1]}</div>
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
                <span className="profile"><Icons type="usersMenu" /></span>
                <span className="titlePro">{user}</span>
            </MTModal>
        </HeaderStyle>
    );
}

export default Topbar;
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
                        <div className="pic">HV</div>
                    </div>
                ]}
            />
            <MTModal
                visible={Task}
                title="Profile"
                onOk={LogoutOk}
                onCancel={onCancel}
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
                        <span className="titlePro">HEPIN VAGADIYA</span>
                    </span>
                </span>
            </MTModal>
        </HeaderStyle>
    );
}

export default Topbar;
import React, { Component } from 'react';
import { HeaderStyle } from './headerStyle';
import { PageHeader } from 'antd';
import Logo from '../../images/logo.svg'
import Cookies from 'js-cookie';


class Topbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    logout = () => {
        console.log("object")
        Cookies.remove('mainData')
        window.location.replace("/Login");
    }
    render() {
        return (
            <HeaderStyle>
                <PageHeader
                    className="site-page-header"
                    title={<img className="logo" src={Logo} alt="dsff"></img>}
                    extra={[
                        <div className="user" onClick={this.logout} style={{cursor:"pointer"}}>
                            <div className="pic" >VH</div>
                        </div>
                    ]}
                />
            </HeaderStyle>
        );
    }
}

export default Topbar;
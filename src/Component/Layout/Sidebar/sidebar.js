import React, { Component } from 'react';
import Icons from '../../modules/component/Icons/icons';
import { SidebarStyle } from './sidebarStyle';
import { Link } from "react-router-dom";
import { Menu, Tooltip } from 'antd';
import Cookies from 'js-cookie';


class Topbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { current } = this.props
        var auth = JSON.parse(Cookies.get('mainData'))
        return (
            <SidebarStyle>
                {auth[1].SideMenu.map((menu, index) => (
                    <Tooltip key={index} placement="right" title={menu.name}>
                        <Menu
                            mode="inline"
                            selectedKeys={[current]}
                            className="menu"
                            onClick={this.props.handleClick}
                        >
                            <Menu.Item key={index}>
                                <Link to={{ pathname: "/ZeronSec" + menu.routingPath, }}>
                                    <Icons type={menu.iconName} />
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Tooltip>
                ))}
            </SidebarStyle >
        );
    }
}

export default Topbar;
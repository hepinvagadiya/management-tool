import React, { Component } from 'react';
import Icons from '../../modules/component/Icons/icons';
import { SidebarStyle } from './sidebarStyle';
import { Link } from "react-router-dom";
import { Menu, Tooltip } from 'antd';
import {sideBar} from '../../../core/Array/array'

class Topbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { current } = this.props
        return (
            <SidebarStyle>
                {sideBar[0].SideMenu.map((menu, index) => (
                    <Tooltip key={index} placement="right" title={menu.name}>
                        <Link to={{ pathname: "/ZeronSec" + menu.routingPath, }}>
                            <Menu
                                mode="inline"
                                selectedKeys={[current]}    
                                className="menu"
                                onClick={this.props.handleClick}
                            >
                                <Menu.Item key={index}>
                                    <Icons type={menu.iconName} />
                                </Menu.Item>
                            </Menu>
                        </Link>
                    </Tooltip>
                ))}
            </SidebarStyle >
        );
    }
}

export default Topbar;
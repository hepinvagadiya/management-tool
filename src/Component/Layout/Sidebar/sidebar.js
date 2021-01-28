import React from 'react';
import Icons from '../../modules/component/Icons/icons';
import { SidebarStyle } from './sidebarStyle';
import { Link } from "react-router-dom";
import { Menu, Tooltip } from 'antd';
import { sideBar } from '../../../core/Array/array'

export const SideBar = (props) => {
    const current = props.current
    return (
        <SidebarStyle>
            {sideBar[0].SideMenu.map((menu, index) => (
                <Tooltip key={index} placement="right" title={menu.name}>
                    <Link to={{ pathname: "/ZeronSec" + menu.routingPath, }}>
                        <Menu
                            mode="inline"
                            selectedKeys={[current]}
                            className="menu"
                            onClick={props.handleClick}
                        >
                            <Menu.Item key={index} className="menu_item">
                                <Icons type={menu.iconName} />
                            </Menu.Item>
                        </Menu>
                    </Link>
                </Tooltip>
            ))}
        </SidebarStyle >
    );
}

export default SideBar;
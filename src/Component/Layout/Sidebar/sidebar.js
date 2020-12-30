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
                <Menu
                    mode="inline"
                    selectedKeys={[current]}
                    style={{ height: '100%', borderRight: 0, backgroundColor: "transparent", marginTop: "5px" }}
                    onClick={this.props.handleClick}
                >
                    {auth[1].SideMenu.map((menu, index) => (
                        <Menu.Item key={index}>
                            <Link to={{ pathname: "/admin/" + menu.module, }} >
                                <Tooltip placement="rightBottom" title={menu.module}>
                                    <Icons type={menu.module} />
                                </Tooltip>
                            </Link>
                        </Menu.Item>
                    ))}
                </Menu>
            </SidebarStyle>
        );
    }
}

export default Topbar;
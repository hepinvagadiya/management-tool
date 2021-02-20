// import React, { PropTypes } from "react";
import React from "react";
import Icons from "../../modules/component/Icons/icons";
import { SidebarStyle } from "./sidebarStyle";
import { NavLink } from "react-router-dom";
import { Menu, Tooltip } from "antd";
import { sideBar } from "../../../core/Array/array";
import PropTypes from 'prop-types';

export const SideBar = (props) => {
  const { current } = props;
  return (
    <SidebarStyle>
      {sideBar[0].SideMenu.map((menu, index) => (
        <Tooltip key={index} placement="right" title={menu.name}>
          <NavLink to={{ pathname: "/ZeronSec" + menu.routingPath }}>
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
          </NavLink>
        </Tooltip>
      ))}
    </SidebarStyle>
  );
};

export default SideBar;

SideBar.propTypes = {
  current: PropTypes.string,
  handleClick: PropTypes.string,
};

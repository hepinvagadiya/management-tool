import styled from 'styled-components';

const SidebarStyle = styled.div`
.ant-menu-inline .ant-menu-item, .ant-menu-inline .ant-menu-submenu-title {
    width: 42px !important;
    padding: 11px 0px 11px 22px !important;
    background: #2B2B2B !important; 
    margin: auto;
    margin-top: 1px;
}

.ant-menu{
  .ant-menu-item-selected::after, .ant-menu-item-selected::before, .ant-menu-item:after{
      border-right: none !important;
  }
}
`;

export { SidebarStyle };

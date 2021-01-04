import styled from 'styled-components';

const SidebarStyle = styled.div`
.ant-menu-inline .ant-menu-item, .ant-menu-inline .ant-menu-submenu-title {
    width: 39px !important;
    padding: 13px 0px 13px 22px !important;
    background: ${props => props.theme.header.background} !important; 
    margin: auto;
    margin-top: 1px;
}

.menu{
  max-height: 75vh;
  border-right: 0;
  background-color: transparent;
  overflow: auto;
}

.ant-menu{
  .ant-menu-item-selected::after, .ant-menu-item-selected::before, .ant-menu-item:after{
    border: 1px solid #394D5C;
    color: ${props => props.theme.sidestyleColor};
    left: 0;
  }
  svg{
    path{
      fill: #8FA8BA;
    }
  }
  &:hover{
    svg{
      path{
        fill: #57A1D8;
      }
    }
  }
  .ant-menu-item-selected{
    a{
      span{
        svg{
          path{
            fill: #57A1D8;
          }
        }
      }
    }
  }
}

`;

export { SidebarStyle };

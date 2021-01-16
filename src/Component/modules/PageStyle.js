import styled from 'styled-components';

const PageStyle = styled.div`
.ant-layout{
    background: ${props=>props.theme.background};
}

// header
.ant-layout-header {
    background:  ${props=>props.theme.header.background};
    height: 50px;
    color: white;
    line-height: 50px;
}

// sidebar
aside{
    background: ${props=>props.theme.sidebar.background};
    width: 200px !important;
    flex: 0 0 56px !important;
    max-width: 100px !important;
    min-width: 64px !important;
    margin: 5px;
} 

//Footer
.ant-layout-footer {
    padding:0;
    padding-left: 47%;
    color: ${props=>props.theme.headColor};
    font-size: 12px;
    background: ${props=>props.theme.header.background};
    letter-spacing:0.65px;
}
`;

export { PageStyle };

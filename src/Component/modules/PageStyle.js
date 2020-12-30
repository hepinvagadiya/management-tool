import styled from 'styled-components';

const PageStyle = styled.div`
.ant-layout{
    background: #222222;
}

// header
.ant-layout-header {
    background:  #2B2B2B;
    height: 50px;
    color: white;
    line-height: 50px;
}

// sidebar
aside{
    background: #1B1616;
    width: 200px !important;
    flex: 0 0 56px !important;
    max-width: 100px !important;
    min-width: 64px !important;
} 

// body
.pageLayout{
    background-color: gray;
    max-height: 90vh%;
    margin-top: 0.1%;
    margin-left: 0px;
    overflow-y: hidden;
    overflow-x: hidden;
    position: relative;
    border-radius: 8px;
}

//Footer
.ant-layout-footer {
    padding:0;
    padding-left: 45%;
    color: #E5E5E5;
    font-size: 12px;
    background: #2b2b2b;
    letter-spacing:0.65px;
}
`;

export { PageStyle };

import styled from 'styled-components';

const UserGroStyle = styled.div`
    .heading{
        display: flex;
        justify-content: space-between;
        padding: 9px;
        border-bottom: 1px solid #e5e5e51f;
        
        .title{
            color: ${props => props.theme.headColor};
            font-size: 14px;
            letter-spacing: 0.75px;
            font-weight: ${props => props.theme.fontBold};
        }
           .createEle{
            background-color: ${props => props.theme.body.createElebgColor};
            letter-spacing: 0.82px;
            font-size: 13px;
            color: ${props => props.theme.body.createEleColor};
            border: none;
            padding: 2px 14px 2px 14px;
            margin: -9px 11px 0px 0px;
           } 
    }
    @media only screen and (max-height: 896px) {
        .ant-table-body{
            overflow-y: scroll;
            max-height: calc(76vh - 4em) !important;
        }
    }
    @media only screen and (max-height: 825px) {
        .ant-table-body{
            overflow-y: scroll;
            max-height: calc(75vh - 4em) !important;
        }
    }
    @media only screen and (max-height: 800px) {
        .ant-table-body{
            overflow-y: scroll;
            max-height: calc(70vh - 4em) !important;
        }
    }
    @media only screen and (max-height: 660px) {
        .ant-table-body{
            overflow-y: scroll;
            max-height: calc(64vh - 4em) !important;
        }
    }
    @media only screen and (max-height: 566px) {
        .ant-table-body{
            overflow-y: scroll;
            max-height: calc(60vh - 4em) !important;
        }
    }
    @media only screen and (max-height: 500px) {
        .ant-table-body{
            overflow-y: scroll;
            max-height: calc(50vh - 4em) !important;
        }
    }
    @media only screen and (max-height: 418px) {
        .ant-table-body{
            overflow-y: scroll;
            max-height: calc(45vh - 4em) !important;
        }
    }
    .usergrContent{
        max-height: 80vh;
        overflow: auto;
        justify-content: space-around;
    }
`;

export { UserGroStyle };

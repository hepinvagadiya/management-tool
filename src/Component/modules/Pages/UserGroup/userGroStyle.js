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
    .ant-table {
        background-color: #222222;
        color: darkgray;
        max-height: 77vh;
    }
    .ant-table-tbody{
        background-color: #191818;
        
    }
    .ant-table-thead > tr > th {
        color: darkgray;
        background: #121212;
        border-bottom: 1px solid #429fe45e;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        &:hover{
                background-color: #121212;
        }
    }
    .ant-table-cell-scrollbar {
        box-shadow: 0 1px 0 1px #121212;
    }
    .ant-table-tbody > tr > td {
        border-bottom: 1px solid #2b2b2b;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .ant-table-tbody > tr.ant-table-row-selected > td {
        background: #12181c;
    }
    .ant-table-tbody > tr.ant-table-row:hover > td {
        background: transparent;
     }
    .ant-checkbox-inner {
        background-color: transparent;
        border-color: #029891;
    }
           
    .ant-pagination-item-link {
        background-color: #191818;
        border: none;
    }
    .ant-pagination-item-active {
        font-weight: 500;
        background: #121212 !important;
        border: none;
    }
    .ant-pagination-item {
        background-color: #191818;
        border: none;
    }
    .ant-pagination-item a{
        color: darkgray;
    }
    .ant-pagination-item-link {
        color: rgb(2 152 129);
    }
    .ant-pagination-disabled:hover .ant-pagination-item-link, .ant-pagination-disabled:focus .ant-pagination-item-link {
        color: #52c41a;
        border-color: #faad144d;
        cursor: not-allowed;
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
        padding: 10px;
        max-height: 80vh;
        overflow: auto;
        justify-content: space-around;
    }
`;

export { UserGroStyle };

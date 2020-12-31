import styled from 'styled-components';

const TaskManStyle = styled.div`
    .heading{
        display: flex;
        justify-content: space-between;
        padding: 9px;
        border-bottom: 1px solid #e5e5e51f;
        
        .title{
            color: ${props=>props.theme.headColor};
            font-size: 14px;
            letter-spacing: 0.75px;
            font-weight: ${props=>props.theme.fontBold};
        }
           .createEle{
            background-color:${props=>props.theme.body.createElebgColor};
            letter-spacing: 0.82px;
            font-size: 13px;
            color: ${props=>props.theme.body.createEleColor};
            border: none;
            padding: 2px 14px 2px 14px;
            margin: -9px 11px 0px 0px;
           } 
    }
`;

export { TaskManStyle };

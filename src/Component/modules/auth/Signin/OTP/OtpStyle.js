import styled from 'styled-components';

const OtpStyle = styled.div`
.signinContent{
    background-color: ${props=>props.theme.background};
    height: 100vh;
    width: 100vw;
    
    .leftContainer {
        height: fit-content;
        width: fit-content;
        position: absolute;
        margin: auto;
        top:0;
        bottom:0;
        right:0;
        left:0;

        .logo{
            height: 40px;
        }
        .login{
            font-weight: ${props=>props.theme.fontBold};
            color: ${props=>props.theme.headColor};
            font-size: 30px;  
        }
        .welcome{
            color: ${props=>props.theme.sidestyleColor};
            font-size: 16px;
        }
        .inputs{
            padding: 19px 0px 0px 0px;
            width: 96%;
            
            .label{
                font-size: 16px;
                color: #979797;
            }
            .username{
                background-color: transparent;
                color: ${props=>props.theme.color};
                border: 1px solid E8E8E8;
                font-size: 14px;
            }
        }
        .forgetpw{
            color: ${props=>props.theme.sidestyleColor}                                               ;
            font-size: 14px;
            float: right;
            padding-top: 8px;
            margin-right: 10px;
        }
        .submitContent{
            padding: 19% 0px 0px 0%;
            .submit{
                background-color: #04C35C;
                color: ${props=>props.theme.color};
                font-weight: ${props=>props.theme.fontBold};
                font-size: 16px;
                width: 94.2%;
                border: 1px solid transparent;
                border-radius: 4px;
            }
        }
    }
}
`;

export default OtpStyle;

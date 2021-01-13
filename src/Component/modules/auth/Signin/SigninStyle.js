import styled from 'styled-components';

const SignInWrapper = styled.div`
.signinContent{
    background-color: ${props => props.theme.background};
    display: flex;
    
    .leftContainer {
        width: 50vw;
        position:relative;
        height: 100vh;
        
        .left{
            height: fit-content;
            position: absolute;
            margin: auto;
            top:0;
            bottom:0;
            right:0;
            left:0;
            padding: 0px 0px 0px 6rem;

            .logo{
                height: 40px;
            }
            .logoInformation{
                font-size: 16px;
                color: ${props => props.theme.signin.information};
                padding: 17px 1px 0px 3px;
            }
        }
    }
    
    .rightContainer{
        position:relative;
        width: 50vw;
        height: 100vh;
        
        .right{
            position: absolute;
            height: fit-content;
            width: fit-content;
            margin: auto;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            padding: 0% 0% 10% 0%;

            .welcome{
                color: ${props => props.theme.sidestyleColor};
                font-size: 16px;
            }
            .login{
                font-weight: ${props => props.theme.fontBold};
                color: ${props => props.theme.headColor};
                font-size: 30px;    
            }
            .inputs{
                width: 96%;
               
                .ant-input {
                    background-color: transparent;
                    border-radius: 2px;
                    color: ${props => props.theme.color};
                }
                .label{
                    font-size: 16px;
                    color: #979797;
                }
                .username{
                    background-color: transparent;
                    font-size: 14px;
                }
                .ant-input-suffix {
                    margin-left: 4px;
                    span{
                      svg{
                        path{
                          fill: #429FE4;
                        }
                      }
                    }
                }
            }
            .submitContent{
                padding: 19% 0px 0px 0%;
                .submit{
                    background-color:  ${props => props.theme.signin.submit};
                    color: ${props => props.theme.color};
                    font-weight: ${props => props.theme.fontBold};
                    font-size: 16px;
                    width: 94.2%;
                    border: 1px solid transparent;
                    border-radius: 4px;
                }
            }
            .forgetpw{
                color: ${props => props.theme.sidestyleColor};
                font-size: 14px;
                float: right;
                cursor: pointer;  
            }
        }
    }
    @media only screen and (max-width: 810px) {
        .leftContainer {
          display: none;
        }
        .rightContainer{
            position: abolute;
            height: 100vh;
            width: 100vw;
        }
    }

}
`;

export default SignInWrapper;

import styled from 'styled-components';

const SignInWrapper = styled.div`
.signinContent{
    background-color: #222222;
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
                color: #E8E8E8;
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
                color: #57A1D8;
                font-size: 16px;
            }
            .login{
                font-weight: bold;
                color: #E5E5E5;
                font-size: 30px;    
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
                    color: #FFFFFF;
                    border: 1px solid E8E8E8;
                    font-size: 14px;
                }
            }
            .submitContent{
                padding: 19% 0px 0px 0%;
                .submit{
                    background-color: #04C35C;
                    color: #ffffff;
                    font-weight: bold;
                    font-size: 16px;
                    width: 94.2%;
                    border: 1px solid transparent;
                    border-radius: 4px;
                }
            }
            .forgetpw{
                color: #57A1D8;
                font-size: 14px;
                float: right;
                padding-top: 8px;
                margin-right: 10px;
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

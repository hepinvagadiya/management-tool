import styled from 'styled-components';

const BlogStyle = styled.div`
.mainContent{
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
    .cardcontent{
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        max-height: 80vh;
        overflow: auto;
        color: red;

        .card{
            background-color: ${props => props.theme.body.blog.cardBgcolor};
            border: none;
            border-radius: 5px;
            width: 21rem;
            padding: 2px;
            margin: 9px;

            &:hover{
                background-color: #536675;
                transition: 1.2s;
                span{
                    .editDel{
                        span{
                            svg{
                                path{
                                    fill: #88cdff;  
                                }
                            }
                        } 
                    }
                }
            }
            
            .ant-card-cover img {
                /* border-radius: 2px 2px 0 0; */
                border-radius: 5px;
            }
            .user{
                padding: 2px 0px 0px;
                position: absolute;
            }
            .author{
                margin: 0px 0px 0px 17px;
            }
            .editDel{
                float: right;
                span{
                    svg{
                        path{
                            fill: transparent;  
                        }
                    }
                } 
            }
           
        }
        .ant-card-meta-title {
            color: ${props => props.theme.color};
            font-size: 16px;
            letter-spacing:0.75px;
            white-space: nowrap;
            text-overflow: ellipsis;
            }
        .ant-card-body {
            padding: 9px;
        }
        .ant-card-meta-description {
            color: ${props => props.theme.headColor};
            letter-spacing:0.75px;
            font-size: 10px;
        }

    }
    @media only screen and (max-height: 700px) {
        .cardcontent{
            max-height: 79vh;
        }
    }
    @media only screen and (max-height: 648px) {
        .cardcontent{
            max-height: 65vh;
        }
    }
    @media only screen and (max-height: 400px) {
        .cardcontent{
            max-height: 60vh;
        }
    }

    @media only screen and (max-width: 1915px) {
        .cardcontent{
            .card{
                width: 20rem;
                margin: 15px;
            }
        }
    }
    @media only screen and (max-width: 1680px) {
        .cardcontent{
            .card{
                width: 22rem;
                margin: 15px;
            }
        }
    }
    @media only screen and (max-width: 1600px) {
        .cardcontent{
            .card{
                width: 20.3rem;
                margin: 15px;
            }
        }
    }
    @media only screen and (max-width: 1440px) {
        .cardcontent{
            .card{
                width: 25rem;
                margin: 15px;
            }
        }
    }   
    @media only screen and (max-width: 1366px) {
        .cardcontent{
            .card{
                width: 22.8rem;
                margin: 15px;
            }
        }
    }   
    @media only screen and (max-width: 1280px) {
        .cardcontent{
            .card{
                width: 21.8rem;
                margin: 15px;
            }
        }
    }   
    @media only screen and (max-width: 1152px) {
        .cardcontent{
            .card{
                width: 18.8rem;
                margin: 15px;
            }
        }
    }
    @media only screen and (max-width: 1024px) {
        .cardcontent{
            .card{
                width: 16rem;
                margin: 18px;
            }
        }
    }
    @media only screen and (max-width: 800px) {
        .cardcontent{
            .card{
                width: 18.5rem;
                margin: 15px;
            }
        }
    }
   
}
`;

export { BlogStyle };

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
    .body{
        overflow: auto;
        height: 85vh;
        
        .cardcontent{
            padding: 10px;
            height: calc(100% - 55px);
            
            .cardBox{
                display: grid;
                grid-template-columns: repeat(auto-fill,minmax(347px, 1fr));
                grid-gap: 12px;
                
                .card{
                    border: none;
                    width: 100%;
                    background-color: ${props => props.theme.body.blog.cardBgcolor};
                    padding: 2px;
                    border-radius: 5px;
                    height: 100%;
                
                    &:hover{
                        transition: 1.2s;
                        background-color: #536675;
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
                        position: absolute;
                        padding: 2px 0px 0px;
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
                    letter-spacing:0.75px;
                    font-size: 16px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .ant-card-body {
                    padding: 9px;
                }
                .ant-card-meta-description {
                    letter-spacing:0.75px;
                    font-size: 10px;
                    color: ${props => props.theme.headColor};
                }
            }
        }
        .ant-select:not(.ant-select-customize-input) .ant-select-selector {
            position: relative;
            background-color: #191818;
            border: none;
            border-radius: 2px;
            color: #a9a9a9;
            &:focus{
                border: none;
            }
        }
        .ant-select-arrow{
            span{
                svg{
                    path{
                        fill: #048c77;
                    }
                }
            }
        }
    }
    
   
}
`;

export { BlogStyle };

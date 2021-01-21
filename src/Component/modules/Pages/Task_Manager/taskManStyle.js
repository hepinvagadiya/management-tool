import styled from 'styled-components';

const TaskManStyle = styled.div`
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
           background-color:${props => props.theme.body.createElebgColor};
           letter-spacing: 0.82px;
           font-size: 13px;
           color: ${props => props.theme.body.createEleColor};
           border: none;
           padding: 2px 14px 2px 14px;
           margin: -9px 11px 0px 0px;
        } 
    }
    .mainContent{
        display: flex;
        flex-wrap: wrap;
        padding: 5px 1px 0px 1px;
        max-height: 86vh;
        overflow-x: scroll;


        .ant-card {
            color: rgba(0, 0, 0, 0.85);
            font-size: 14px;
            background-color: rgba(90, 94, 98, 0.35);  
            border: none;
            border-radius: 5px;
            margin: 10px;
        }
        .ant-card-body {
           padding: 12px;
        }
        .card-error{
            background-color: rgba(95, 71, 71, 0.6);;
        }
        .card-warning{
            background: rgba(225, 199, 180, 0.24);
        }
        .play{
            position: relative;
        }
        .taskName{
            font-size: 14px;
            font-style: normal;
            letter-spacing: 0.35px;
            font-weight: normal;
            color: #B0E3FF;
            line-height: 16px;
        }

        .toDo-main{
            height: 82.6vh;
            width: 32.1%;
            min-width: 341px;
            overflow-x: auto; 
            background: #2B2B2B;
            max-height: 100%;
            margin: 10px 11px 0px 11px;

            .header-todo{
                height: 40px;
                background: #252A2F; 
                border-bottom: 1px solid rgba(136, 205, 255, 0.13);    
                display: flex;
                justify-content: space-between;

                .todoTitle{
                    padding: 14px;
                    font-style: normal;
                    font-size: 14px;
                    line-height: 16px;
                    font-weight: 700;
                    text-align: left;
                    letter-spacing: 0.3499999940395355px;
                    color: #E5E5E5;
                } 
                .todoFilter{
                    padding: 12px 16px 0px 0px;
                }  
            }
           .filter{
            background-color: #429fe4;
            padding: 5px 11px 5px 13px;
           }
            .footer{
                display: flex;

                .task-left-Content{
                    width: 50vw;
                    position:relative;
                    .user{
                        display: flex;
                        padding-top: 22.2px;
                        
                        .username{
                            font-size: 10px;
                            font-style: normal;
                            font-weight: normal;
                            letter-spacing: 0.65px;
                            line-height: 16px;
                            color: #88CDFF;
                            align-items: center;
                            position: relative;
                            left: 7px;
                        }
                    }
                    .user2{
                        display: flex;
                        .username{
                            font-style: normal;
                            font-size: 10px;
                            letter-spacing: 0.65px;
                            font-weight: normal;
                            color: #88CDFF;
                            line-height: 20px;
                            position: relative;
                            align-items: center;
                            left: 7px;
                        }
                    }
                }
                .task-right-Content{   
                    width: 50vw;
                    position:relative;  
                    .normalContent{
                        text-align-last: right;
                        .normal{
                            font-weight: normal;
                            font-style: normal;
                            line-height: 12px;
                            font-size: 10px;
                            text-align: right;
                            align-items: center;
                            color: #E5E5E5;
                            letter-spacing: 0.65px;
                        }
                    }
                    .workProgress{
                        text-align-last: right;
                        .workDetails{
                            font-style: normal;
                            font-size: 10px;
                            font-weight: normal;
                            line-height: 12px;
                            text-align: right;
                            align-items: center;
                            letter-spacing: 0.65px;
                            color: #88CDFF;
                        }
                    }
                    .calender{
                        text-align-last: right;
                        .Date{
                            font-style: normal;
                            font-size: 10px;
                            font-weight: normal;
                            line-height: 12px;
                            text-align: right;
                            align-items: center;
                            letter-spacing: 0.65px;
                            color: #88CDFF;
                        }
                    }
                }
            }
        }
        .progress-main{
            height: 82.6vh;
            width: 32.1%;
            min-width: 341px;
            max-height: 100%;
            overflow-x: auto; 
            background: #2B2B2B;
            margin: 10px 11px 0px 11px;

            .header-progress{
                height: 40px;
                background: #252A2F;
                border-bottom: 1px solid rgba(136, 205, 255, 0.13);  
                display: flex;
                justify-content: space-between;  

                .progressTitle{
                    padding: 14px;
                    font-style: normal;
                    font-size: 14px;
                    line-height: 16px;
                    font-weight: 700;
                    text-align: left;
                    letter-spacing: 0.3499999940395355px;
                    color: #E5E5E5;
                }
                .todoFilter{
                    padding: 12px 16px 0px 0px;
                }  
            }
            .footer{
                display: flex;
                
                .task-left-Content{
                    width: 50vw;
                    position:relative;

                    .ant-progress {
                        color: rgba(0, 0, 0, 0.85);
                        font-size: 14px;
                        line-height: 0.4;
                        list-style: none;
                        display: flex;
                        flex-direction: column-reverse;
                    }
                    .ant-progress-text {
                        display: inline;
                        width: 2em;
                        color: #69C25B;
                        word-break: normal;
                        font-style: normal;
                        margin-left: 0;
                        font-size: 9px;
                        font-weight: normal;
                        line-height: 11px;
                        letter-spacing: 0.65px;
                        align-items: center;
                    }
                    .ant-progress-inner {
                        position: relative;
                        display: inline-block;
                        width: 70%;
                        overflow: hidden;
                        vertical-align: middle;
                        background: rgba(196, 196, 196, 0.01);
                        border: 1px solid rgba(136, 205, 255, 0.14);
                        border-radius: 0px;
                        .ant-progress-success-bg, .ant-progress-bg {
                            position: relative;
                            background-color: #88CDFF;
                            border-radius: 0px;

                            &::before {
                                background: #222222;
                                border-radius: 0px;
                            }
                        }
                    }
                    .user{
                        display: flex;
                        padding-top: 5px;
                        .username{
                            font-size: 10px;
                            font-style: normal;
                            font-weight: normal;
                            letter-spacing: 0.65px;
                            line-height: 16px;
                            color: #88CDFF;
                            align-items: center;
                            position: relative;
                            left: 7px;
                        }
                    }
                    .user2{
                        display: flex;
                        .username{
                            font-style: normal;
                            font-size: 10px;
                            letter-spacing: 0.65px;
                            font-weight: normal;
                            color: #88CDFF;
                            line-height: 20px;
                            position: relative;
                            align-items: center;
                            left: 7px;
                        }
                    }
                }
                .task-right-Content{ 
                    position:relative;
                    width: 50vw;   
                    
                    .normalContent{
                        text-align-last: right;
                        .normal{
                            font-weight: normal;
                            font-style: normal;
                            line-height: 12px;
                            font-size: 10px;
                            text-align: right;
                            align-items: center;
                            color: #E5E5E5;
                            letter-spacing: 0.65px;
                        }
                    }
                    .workProgress{
                        text-align-last: right;
                        .workDetails{
                            font-style: normal;
                            font-size: 10px;
                            font-weight: normal;
                            line-height: 12px;
                            text-align: right;
                            align-items: center;
                            letter-spacing: 0.65px;
                            color: #88CDFF;
                        }
                    }
                    .calender{
                        text-align-last: right;
                        .Date{
                            font-style: normal;
                            font-size: 10px;
                            font-weight: normal;
                            line-height: 12px;
                            text-align: right;
                            align-items: center;
                            letter-spacing: 0.65px;
                            color: #88CDFF;
                        }
                    }
                }
            }
        }
        .completed-main{
            height: 82.6vh;
            width: 32.1%;
            max-height: 100%;
            min-width: 341px;
            overflow-x: auto; 
            background: #2B2B2B;
            margin: 10px 11px 0px 11px;

            .header-complete{
                height: 40px;
                background: #252A2F;
                border-bottom: 1px solid rgba(136, 205, 255, 0.13);    
                display: flex;
                justify-content: space-between;

                .completedTitle{
                    padding: 14px;
                    font-style: normal;
                    font-size: 14px;
                    line-height: 16px;
                    font-weight: 700;
                    text-align: left;
                    letter-spacing: 0.3499999940395355px;
                    color: #E5E5E5;
                }
                .todoFilter{
                    padding: 12px 16px 0px 0px;
                }  
            }
            .footer{
                display: flex;

                .task-left-Content{
                    width: 50vw;
                    position:relative;
                    .user{
                        display: flex;
                        padding-top: 22.2px;
                        
                        .username{
                            font-size: 10px;
                            font-style: normal;
                            font-weight: normal;
                            letter-spacing: 0.65px;
                            line-height: 16px;
                            color: #88CDFF;
                            align-items: center;
                            position: relative;
                            left: 7px;
                        }
                    }
                    .user2{
                        display: flex;
                        .username{
                            font-style: normal;
                            font-size: 10px;
                            letter-spacing: 0.65px;
                            font-weight: normal;
                            color: #88CDFF;
                            line-height: 20px;
                            position: relative;
                            align-items: center;
                            left: 7px;
                        }
                    }
                }
                .task-right-Content{   
                    width: 50vw;
                    position:relative;  
                    .normalContent{
                        text-align-last: right;
                        .normal{
                            font-weight: normal;
                            font-style: normal;
                            line-height: 12px;
                            font-size: 10px;
                            text-align: right;
                            align-items: center;
                            color: #E5E5E5;
                            letter-spacing: 0.65px;
                        }
                    }
                    .workProgress{
                        text-align-last: right;
                        .workDetails{
                            font-style: normal;
                            font-size: 10px;
                            font-weight: normal;
                            line-height: 12px;
                            text-align: right;
                            align-items: center;
                            letter-spacing: 0.65px;
                            color: #88CDFF;
                        }
                    }
                    .calender{
                        text-align-last: right;
                        .Date{
                            font-style: normal;
                            font-size: 10px;
                            font-weight: normal;
                            line-height: 12px;
                            text-align: right;
                            align-items: center;
                            letter-spacing: 0.65px;
                            color: #88CDFF;
                        }
                    }
                }
            }
        }
    }
`;

export { TaskManStyle };

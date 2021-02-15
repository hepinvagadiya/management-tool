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
    .globalFilter{
        background-color: #1F2022;
        border: 1px solid #54585A;
        border-radius: 5px;
        margin: -3px 18px 0px 5px;
        height: 24px;
        width: 22px;
        padding: 6px 0px 0px 8px;
        cursor: pointer;
    }
    .sideContent{
        .subject{
            background-color: #292A2B;
            font-style: normal;
            font-size: 11px;
            font-weight: 500;
            display: flex;
            line-height: 13px;
            letter-spacing: 0.85px;
            align-items: center;
            color: #8FA8BA;
            width: fit-content;
            padding: 6px;
            border-radius: 8px;
            margin: 0px 13px 0px 8px;
            cursor: pointer;

            .close{
                padding-left: 6px;
                cursor: pointer;
            }
        }
    }
}

.footer{
    display: flex;
    .task-left-Content{
        width: 50vw;
        position:relative;
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

.body-content{
    .filter{
         margin: 10px;
        color: #8FA8BA;
        font-style: normal;
        font-weight: normal;
        font-size: 11px;
        line-height: 13px;
        display: flex;
        align-items: center;
        letter-spacing: 0.85px;
    }
    .subject{
        background-color: #222222;
        font-style: normal;
        font-size: 11px;
        font-weight: 500;
        display: flex;
        line-height: 13px;
        letter-spacing: 0.85px;
        align-items: center;
        color: #8FA8BA;
        width: fit-content;
        padding: 7px;
        border-radius: 8px;
        margin: 5px 0px 0px 13px;

        .close{
            padding-left: 6px;
        }
    }
 }

 .body{
    overflow: auto;
    height: 86vh;
 
    .mainContent{
        height: calc(100% - 55px);
        .content{
            display: grid;
            padding: 9px;
            grid-gap: 13px;
            grid-template-columns: repeat(auto-fill,minmax(452px,1fr));
            
            .ant-card {
                color: rgba(0, 0, 0, 0.85);
                font-size: 14px;
                background-color: rgba(90, 94, 98, 0.35);  
                border: none;
                border-radius: 5px;
                margin: 15px 11px 0px 11px;
            }
            .ant-card-body {
                padding: 12px;
            }
            .card-normal{
                background-color: rgba(72, 85, 95, 0.6);;
            }
            .card-error{
                background-color: rgba(95, 71, 71, 0.6);;
            }
            .card-warning{
                background: rgba(225, 199, 180, 0.24);
            }
            .play{
                position: relative;
                cursor: pointer;
            }
            .taskName{
                font-style: normal;
                font-size: 14px;
                font-weight: normal;
                letter-spacing: 0.35px;
                line-height: 16px;
                color: #B0E3FF;
            }
        
            .tasklistContent{
                height: calc(85vh - 9px);
                width: 100%;
                background: #2B2B2B;
                overflow-x: auto; 
                max-height: 100%;
            
                .header{
                    height: 40px;
                    background: #252A2F; 
                    border-bottom: 1px solid rgba(136, 205, 255, 0.13);    
                    display: flex;
                    justify-content: space-between;
                
                    .title{
                        font-style: normal;
                        padding: 14px;
                        line-height: 16px;
                        font-size: 14px;
                        text-align: left;
                        font-weight: 700;
                        color: #E5E5E5;
                        letter-spacing: 0.3499999940395355px;
                    } 
                    .filter{
                        cursor: pointer;
                        padding: 12px 16px 0px 0px;
                    }  
                }
            }
        }
    }
}
`;

export { TaskManStyle };

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

            .close{
                padding-left: 6px;
            }
        }
    }
}

.filterModal{
    position: absolute;
    background-color: #151617;
    padding: 14px 11px 17px 21px;
    line-height: 1.5715;
    font-size: 14px;
    margin-left: 16.4%;
    z-index: 10;
    width: 236px;
    .inputs{
        width: 100%;
        padding: 0px 0px 20px 0px;
        .label{
            font-size: 12px;
            padding: 4px;
            color: #E5E5E5;
            letter-spacing:0.75px
        }
        .ant-input {
            background-color: #222222;
            border-radius: 2px;
            border: 1px solid #e8e8e82b; 
            color: ${props => props.theme.color};
            &:hover{
              background-color: #222222;
            }
        }
        .ant-form-item-explain, .ant-form-item-extra {
            clear: both;
            position: absolute;
            min-height: 0px;
            padding-top: 0px;
            color: #ff4d4f;
            font-size: 14px;
        }
    }
    .ant-form-inline .ant-form-item-with-help {
        margin-bottom: 5px;
    }
    .addField{
        background-color: #429fe4;
        height: 24px;
        padding: 1px 5px 1px 5px;
        border-radius: 3px;
        width: 16px;
        margin: 106px 0px 0px 21px;
        border: none;
    }
    .subject{
        background-color: #222222;
        font-style: normal;
        font-size: 11px;
        font-weight: 500;
        display: flex;
        line-height: 11px;
        letter-spacing: 0.85px;
        align-items: center;
        color: #8FA8BA;
        width: fit-content;
        padding: 7px;
        border-radius: 6px;
        margin: 8px 0px 0px 0px ;
    }
        .close{
            padding-left: 6px;
        }
    }
    .search{
        background-color: #429FE4;
        font-size: 13px;
        letter-spacing: 0.82px;
        color: #000000;
        padding: 0px 17px;
        margin: 19px 0px 0px 62%;
        border: none;
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

   
    .mainContent{
        display: grid;
        grid-gap: 13px;
        grid-template-columns: repeat(auto-fill,minmax(452px,1fr));
        padding: 11px 1px 0px 1px;
        height: 85vh;
        overflow-x: hidden;
        overflow-y: auto;

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

        .tasklistContent{
            height: calc(85vh - 9px);
            width: 100%;
            overflow-x: auto; 
            background: #2B2B2B;
            max-height: 100%;

            .header{
                height: 40px;
                background: #252A2F; 
                border-bottom: 1px solid rgba(136, 205, 255, 0.13);    
                display: flex;
                justify-content: space-between;

                .title{
                    padding: 14px;
                    font-style: normal;
                    font-size: 14px;
                    line-height: 16px;
                    font-weight: 700;
                    text-align: left;
                    letter-spacing: 0.3499999940395355px;
                    color: #E5E5E5;
                } 
                .filter{
                    padding: 12px 16px 0px 0px;
                }  
            }
        }
    }
`;

export { TaskManStyle };

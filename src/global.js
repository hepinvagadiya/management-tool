import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html, body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ${props => props.theme.background};
}
*, ::after, ::before {
  box-sizing: unset !important;
}
#root {
  filter: none;
}
.backButton{
  margin: 0px 0px 28px 0px;
  span{
      svg{
          height: 2em;
          width: 2em;
          path{
              fill: white;
          }
      }
  }
}
.ant-message-notice-content {
  display: inline-block;
  padding: 10px 16px;
  background: #151617;
  color: white;
  border-radius: 5px;
}
.ant-popover {
  top: 155px !important;
}
.ant-popover-title {
  min-width: 177px;
  min-height: 0px; */
  margin: 0;
  padding: 5px 16px 4px; 
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  border-bottom: none;
  background-color: #151617;
}
.ant-popover-placement-bottomRight > .ant-popover-content > .ant-popover-arrow{
  top: 9px;
  border-top-color: #151617;
  border-left-color: #151617;
}
.ant-popover-inner {
  background-color: #151617;
} 
.filterModal{
    line-height: 1.5715;
    font-size: 14px;
    z-index: 10;
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
        .ant-btn:hover, .ant-btn:focus {
          color: #000000 !important;
          background: #429fe4 !important;
          border-color: #40a9ff;
        }
      }
    .ant-form-inline .ant-form-item {
      -ms-flex: none;
      flex: none;
      -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
      margin-right: 3px;
      margin-bottom: 0;
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
        margin: 106px 0px 0px 32px;
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
        cursor: pointer;
    }
        .close{
            padding-left: 6px;
            cursor: pointer;
        }
    }
    .search{
        background-color: #429FE4;
        font-size: 13px;
        letter-spacing: 0.82px;
        color: #000000;
        padding: 0px 17px;
        margin: 19px 0px 0px 67%;
        border: none;
        &:hover{
          background-color: #429FE4;
          color: #000000;
        }
    }
}

//ToolTip //

.ant-tooltip-inner {
  min-width: 0px !important;
  min-height: 0px !important;
  background-color: ${props => props.theme.tooltipbckColor};
  font-size: 12px;
  letter-spacing:0.65px;
  color: #B9B9B9;
}
.ant-tooltip-arrow-content {
  background-color: rgb(30 28 28);
}
// ant-select-selector
.ant-select-selector{
  background-color: red;
}
// table //
.ant-table {
  background-color: #222222;
  color: darkgray;
  max-height: 77vh;

  td.ant-table-column-sort {
    background: #191818;
  }
  .ant-table-tbody{
    background-color: #191818;
    .ant-empty-normal {
      color: rgb(66 159 228);
      margin: 32px 0;
      background-color: #191818;
    }
  }
  .ant-table-container{
    .ant-table-body{
      height: 72vh;
    }
  }
  .ant-table-thead > tr > th {
    background: #121212;
    color: darkgray;
    white-space: nowrap;
    border-bottom: 1px solid #429fe45e;
    text-overflow: ellipsis;
    overflow: hidden;
    &:hover{
      background-color: #121212;
    }
  }
  .ant-table-cell-scrollbar {
    box-shadow: 0 1px 0 1px #121212;
  }
  .ant-table-tbody > tr > td {
    white-space: nowrap;
    border-bottom: 1px solid #2b2b2b;
    text-overflow: ellipsis;
    overflow: hidden;
    &:hover{
      background-color: #191818;
    }
  }
  .ant-table-tbody > tr.ant-table-row-selected > td {
    background: #12181c;
  }
  .ant-table-tbody > tr.ant-table-row:hover > td {
    background: transparent;
  }
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
  a{
    color: darkgray;
  }
}
.ant-pagination{
  .ant-pagination-item-link {
    background-color: #191818;
    color: rgb(2 152 129);
    border: none;
  }
}
.ant-pagination-disabled:hover .ant-pagination-item-link, .ant-pagination-disabled:focus .ant-pagination-item-link {
  color: #52c41a;
  border-color: #faad144d;
  cursor: not-allowed;
}
.ant-form-item-has-feedback.ant-form-item-has-success .ant-form-item-children-icon, .ant-form-item-has-feedback.ant-form-item-has-warning .ant-form-item-children-icon, .ant-form-item-has-feedback.ant-form-item-has-error .ant-form-item-children-icon, .ant-form-item-has-feedback.ant-form-item-is-validating .ant-form-item-children-icon {
  right: -24px;
  top: 52%;
}
.footer{
  .ant-modal-content{
    .ant-modal-footer{
      display: none;
    }
  }
}
//progress//
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
//Modal// 
.ant-modal-content{
  background-color: #292A2B;
  
  
  .ant-modal-close-x {
    color: #9EA4A9;
    width: 56px;
    height: 56px;
    font-size: 11px;
    line-height: 41px;
  }
  .ant-modal-header{
      padding: 8px 24px;
      text-align: center;
      color: rgb(255 255 255);
      background: #303234;
      border-bottom: none;
      border-radius: 2px 2px 0 0;

      .ant-modal-title{
          color: #8FA8BA;
          font-weight: 0;
          font-size: 14px;
          letter-pacing:0.75px
      }
  }
  .ant-modal-body{
      padding: 22px;
      font-size: 14px;
      line-height: 1.5715;
      color: white;
      word-wrap: break-word;
      
      .ant-select-item-empty{
        .ant-empty-normal {
          color: rgb(66 159 228);
        }
      }
      .warning{
        font-size: 13px;
        color: #ffffff;
        letter-spacing: 0.35px;
      }
      .note{
        font-size: 13px;
        color: #be6d00;
        letter-spacing: 0.35px;
        padding-top: 10px;
      }
      .viewHeader{
        font-size: 16px;
        color: #ffffff;
        padding: 3px 0px 6px 3px;
        letter-spacing:0.75px;
      }
      .title{
        font-size: 12px;
        color: #429FE4;
        position: relative;
        top: -3px;
        padding: 4px;
        letter-spacing: 0.35px;
      }
      .profile{
        // background-color: #1a1a1a;
        border-radius: 50%;
        border: 1px solid #429fe4;
        padding: 9px 9px 5px 9px; 
      }
      .titlePro{
        color: #83a8ba;
        position: relative;
        padding: 8px;
        letter-spacing: 0.35px;
      }
      .email{
        color: #83a8ba;
        padding: 0px 0px 0px 43px;

      }
      .viewImg{
        height: 14rem;
        width: 28rem;
      }
      .sideHeading{
        font-size: 12px;
        color: #88CDFF;
        letter-spacing:0.75px;
      }
      .attech{
        background-color: #222222;
        width: fit-content;
        border-radius: 8px;
        font-size: 11px;
        padding: 3px;
        margin: 3px;
        color: #8FA8BA;
        letter-spacing:0.75px
      }
      .viewContent{
        display: flex;

        .createCont{
          padding: 35px 0px 0px 22px;
        }
        .author{
          padding: 0px 0px 0px 22px;
        }
        .sideHeading{
          font-size: 12px;
          color: #88CDFF;
          letter-spacing:0.75px;

          p{
            color: #E5E5E5;
            font-size: 11px;
            letter-spacing:0.75px;
          }
        }
      }
      .postDetail{
        color: #E5E5E5;
        font-size: 11px;
        padding: 14px;
        letter-spacing:0.75px;
      }
  }
  .ant-modal-footer{
    padding: 4px 16px;
      text-align: right;
      background: #303234;
      border-top: none;
      border-radius: 0 0 2px 2px;

      .deleteEle{
        background-color: ${props => props.theme.body.createElebgColor};
        letter-spacing: 0.82px;
        font-size: 13px;
        padding: 0px 17px;
        color: ${props => props.theme.body.createEleColor};
        border: none;
       } 

       .cancelEle{
        background-color: #181818f0;
        letter-spacing: 0.82px;
        font-size: 13px;
        padding: 0px 17px;
        color: #c8f2ff;
        border: none;
       } 
      }
      .ant-form-item-has-error .ant-select:not(.ant-select-disabled):not(.ant-select-customize-input) .ant-select-selector {
       background-color: #222;
       border-color: #333334 !important;
      }
      .viewtaskName{
        color: #FFFFFF;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.75px;
        padding: 5px;
       }
    .viewMain{
      display: grid;
      grid-gap: 10px;
      grid-template-columns: 30% 70%;
      .leftContent{
        display: grid;
        .content{
          padding: 10px 0px 0px 6px;
          .project{
            font-style: normal;
            font-size: 12px;
            letter-spacing: 0.75px;
            font-weight: 500;
            color: #88CDFF;
            line-height: 14px;
          }
          .projectName{
            font-size: 11px;
            font-style: normal;
            letter-spacing: 0.75px;
            font-weight: normal;
            color: #E5E5E5;
            line-height: 13px;
          }
        }
      }
      .rightContent{
        display: inline-grid;
        .content{
          padding: 10px 0px 0px 6px;
          .project{
            font-size: 12px;
            font-style: normal;
            font-weight: 500;
            letter-spacing: 0.75px;
            line-height: 14px;
            color: #88CDFF;
          }
          .projectDetails{
            font-style: normal;
            font-size: 12px;
            font-weight: normal;
            letter-spacing: 0.75px;
            line-height: 14px;
            color: #E5E5E5;
          }
        }
      }
    }
  .taskName{
    font-style: normal;
    font-size: 12px;
    font-weight: normal;
    letter-spacing: 0.35px;
    line-height: 14px;
    color: #429FE4;
    padding-left: 10px;
  }
  .mainContent{
    margin: 25px;

    .feedContent{
      margin: 16px 0px 18px 7px;

      .topicHading{
        font-weight: normal;
        font-style: normal;
        font-size: 12px;
        line-height: 14px;
        color: #E5E5E5;
        letter-spacing: 0.75px;
    }
    .topicDetails{
      font-style: normal;
      font-size: 12px;
      font-weight: normal;
      letter-spacing: 0.75px;
      line-height: 14px;
      color: #88CDFF;
      margin: 12px 0px 12px 15px;
    }
  }
}
  .inputs{
    width: 96%;
    padding: 6px 10px 0px 13px;
    .ant-form-item-explain, .ant-form-item-extra {
      clear: both;
      position: absolute;
      min-height: 0px;
      padding-top: 0px;
      color: #ff4d4f;
      font-size: 14px;
    }

  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
     margin: 0;
  }
    .inputs-inline {
      width: 45%;
      padding: 6px 10px 0px 13px;

      .ant-form-item-explain, .ant-form-item-extra {
        position: absolute;
        min-height: 0px;
        padding-top: 0px;
        color: #ff4d4f;
        font-size: 14px;
      }
    }
    .ant-select-selection-placeholder {
      opacity: 0.7;
    }
    .ant-form-inline .ant-form-item-with-help {
      margin-bottom: 0px;
    }
    .ant-form-item {
      margin-bottom: 0px;  
      padding-bottom: 10px;
  }
    .ant-input {
        background-color: #222222;
        border-radius: 2px;
        border: 1px solid #e8e8e82b; 
        color: ${props => props.theme.color};
        &:hover{
          background-color: #222222;
        }
        &::placeholder {
          opacity: 0.5;
        }
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
    .ant-radio-inner {
      width: 16px;
      height: 16px;
      background-color: transparent;
      border-color: #979797;
      border-radius: 50%;
    }
    .ant-radio-inner::after {
        top: 4px;
        left: 4.2px;
        border-radius: 50%;
        background-color: #57A1D8 ;
    }
    .ant-radio-wrapper{
      color: #9EA4A9;
      font-size: 12px;
      letter-spacing:0.65px
    }
    .ant-radio-wrapper-checked{
      color: #FFFFFF;
      font-size: 12px;
      letter-spacing:0.65px
    }
    .ant-radio-checked{
      .ant-radio-inner {
        border:1px solid #57A1D8 !important;
      }
    }
      .label{
          font-size: 12px;
          padding: 4px;
          color: #E5E5E5;
          letter-spacing:0.75px
      }
      .username{
          background-color: #222222;
          border: 1px solid #e8e8e82b;
          font-size: 14px;
          &:hover{
            background-color: #222222;
          }
      }
    .select{
      background-color: #4C4D4F;
      letter-spacing: 0.82px;
      font-size: 13px;
      padding: 0px 17px;
      color: #c8f2ff;
      border: none;
    }
    
    .ant-upload-list-item-info {
      height: 100%;
      padding: 0 4px;
      margin: -3px 0px 0px 20px;
      background-color: #222222;
      color:#8FA8BA;
      border-radius: 8px;
      &:hover{
        background-color: #222222;
        color:#8FA8BA;
      }
      .ant-upload-text-icon{
        span{
          svg{
            path{
              fill: transparent;
            }
          }
        }
      }
      .ant-form-item-control-input-content {
        flex: none;
      }
    }
    .ant-upload-list-item-error, .ant-upload-list-item-error .ant-upload-text-icon > .anticon, .ant-upload-list-item-error .ant-upload-list-item-name {
      color: #8FA8BA;
    }
    .upload-list-inline .ant-upload-list-item {
      float: left;
      margin-right: 8px;
    }
    .upload-list-inline{
      display: flex;
    }
    .local{
      display: inline;
    }
    .upload-list-inline [class*='-upload-list-rtl'] .ant-upload-list-item {
      float: right;
    }
    .ant-upload-list-item {
      position: relative;
      height: 26.001px;
      margin-top: 6px;
      font-size: 13px;
  }
  .ant-upload-list-text .ant-upload-list-item-name, .ant-upload-list-picture .ant-upload-list-item-name {
    flex: auto;
    padding: 0px 0px;
  }
    .ant-select:not(.ant-select-customize-input) .ant-select-selector {
      background-color: #222222;
      border-radius: 2px;
      border: 1px solid #e8e8e82b; 
      color: ${props => props.theme.color}; 
    }
    .ant-select-multiple .ant-select-selection-item {
      background: #292A2B;
      border: none;
      border-radius: 8px;
      .ant-select-selection-item-remove{
        .anticon-close{
          svg{
            path{
              fill: #ffffff;
            }
          }
        }
      }
    }
    .ant-select-arrow {
      right: -9px;
      width: 12px;
      height: 12px;
      color: #429FE4;
  }

}
.ant-select-dropdown {
  background-color: #222222;
  border-radius: 2px;
  letter-spacing:0.75px;
}
.ant-select-item-option-content{
  color: #FFFFFF;
  font-size: 11px;
  padding: 4px;

  .ant-select-item-option-selected{
    background-color: #172B3A;
  }
}
.ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
  color: ${props => props.theme.color}; 
  background-color: #172B3A;
  font-weight: none;
}
.ant-select-item-option-active:not(.ant-select-item-option-disabled) {
  background-color: #555657;
}
body.ReactModal__Body--open > #root {
  filter: blur(3px);
}

body.ReactModal__Body--before-close > #root {
  filter: none;
}

.modal-dialog {
  position: revert !important;
}

.modal-backdrop.fade {
  opacity: 0 !important;
}


/ /* scroll */

* {
  scrollbar-width: thin;
  scrollbar-color: #429FE4 transparent;
}

::-webkit-scrollbar {
  width: 3px;
  height: 3px;
}

::-webkit-scrollbar-track {
  border-radius: 0px;
}

::-webkit-scrollbar-thumb {
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  background-color: #429FE4;
  left: 3px;
}

::-webkit-scrollbar-corner {
  background: #429FE4;
}

`;

export { GlobalStyle };

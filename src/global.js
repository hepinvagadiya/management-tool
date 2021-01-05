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

//Modal// 

.ant-modal-content{
  background-color: #292A2B;

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

      .warning{
        font-size: 13px;
        color: #ffffff;
        letter-spacing: 0.35px;
      }
      .title{
        font-size: 12px;
        color: #429FE4;
        position: relative;
        top: -3px;
        padding: 4px;
        letter-spacing: 0.35px;
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
  .inputs{
    width: 96%;

    .ant-input {
        background-color: #222222;
        border-radius: 2px;
        border: 1px solid #e8e8e82b; 
        color: ${props => props.theme.color};
    }
    
    .label{
        font-size: 12px;
        padding: 4px;
        color: #E5E5E5;
        letter-spacing:0.75px
    }
    .username{
        background-color: transparent;
        font-size: 14px;
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
      border-radius:8px;
      
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
    .upload-list-inline [class*='-upload-list-rtl'] .ant-upload-list-item {
      float: right;
    }
  }
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
  scrollbar-color: #31363f transparent;
}

::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

::-webkit-scrollbar-track {
  border-radius: 0px;
}

::-webkit-scrollbar-thumb {
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  background-color: #31363f;
  left: 4px;
}

::-webkit-scrollbar-corner {
  background: #31363f;
}

`;

export { GlobalStyle };

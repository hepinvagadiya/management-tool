import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html, body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ${props=>props.theme.background};
}
*, ::after, ::before {
  box-sizing: unset !important;
}
.ant-tooltip-inner {
  min-width: 0px !important;
  min-height: 0px !important;
  background-color: ${props=>props.theme.tooltipbckColor};
  font-size: 12px;
  letter-spacing:0.65px;
  color: #B9B9B9;
}
.ant-tooltip-arrow-content {
  background-color: rgb(30 28 28);
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

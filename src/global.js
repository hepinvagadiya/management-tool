import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html, body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #222222;
}
*, ::after, ::before {
  box-sizing: unset !important;
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

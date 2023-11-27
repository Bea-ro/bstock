import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;600;700&display=swap');


@keyframes pulse {
  0% {
    transform: scale(1); 
  }
  100% {
    transform: scale(1.1); 
  }
}

:root {
  --color-primary: #1A334E;
  --color-secondary: #09e1c0;
  --color-white: #ffffff;
  --color-grey:#475B71;
  --color-yellow: #fec807;
  --color-grey-secondary:#E2E2E2;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}


* {
  box-sizing: border-box;
  margin: 0;
  border: none;
  outline: none;
  text-decoration: none;
  font-family: 'Noto Sans', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.1em;
  letter-spacing: 0.5px;
  font-style: normal;
}

a {
  text-decoration: none;
}

ul {
  padding-left: 0
}

li {
 list-style-type: none;
}
`;

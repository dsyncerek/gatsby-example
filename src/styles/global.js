import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { eachBreakpoint } from './utils';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900');
  
  ${reset}
  
  html {
    box-sizing: border-box;
    ${props => eachBreakpoint('font-size', props.theme.fontSizes)};
  }
  
  *, 
  *::before, 
  *::after {
    box-sizing: inherit;
  }

  body {
    background: ${props => props.theme.colorBackgroundDefault};
    font-weight: ${props => props.theme.fontWeight};
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.colorTextDefault};
    line-height: ${props => props.theme.lineHeight};
  }
  
  input,
  button,
  textarea {
    font: inherit;
    border: 0;
    background: none;
    padding: 0;
  }
  
  img {
    vertical-align: middle;
    max-width: 100%;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`;

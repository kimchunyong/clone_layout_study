import reset from 'react-style-reset/string';
import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`
     ${reset};
     a{
         text-decoration:none;
         color:inherit;
     }
     *{
         box-sizing:boerder-box;
     }
     body{
        background-color: #000;
     }
 `;

export default globalStyles;
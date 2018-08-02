// This file injects global style-ings into the head along with specific Styled Component rules.
// See https://www.styled-components.com/docs/api#injectglobal
// Note: this file is imported by `templates/site.jsx`, a global wrapping component for all pages generated by Gatsby
import { injectGlobal } from 'styled-components';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  body {
    margin: 0;
  }
  
  :root {
  // animations
  --transition-time: 0.3s;
  --transition-function: ease-in;
  
  // borders
  --border-radius: 7px;
  --border-color: #CCC;
  
  // colors
  --type-color--component: #7B1FA2;
  --type-color--layout: #FFA000;
  --type-color--typography: #d50000;
  --type-color--icon: #536dfe;
  --type-color--color: #00695c;
  --type-color--none: #000;

  --type-color--component-accent: #f5ddff;
  --type-color--layout-accent: #fff5e6;
  --type-color--typography-accent: #ffdddd;
  --type-color--icon-accent: #e2e7ff;
  --type-color--color-accent: #d0f3ee;
  --type-color--none-accent: #e0e0e0;
  }
  
  * {
    box-sizing: border-box;
  }
  
  .eyebrow {
    color: grey;
    margin-bottom: 0;
  }
`;

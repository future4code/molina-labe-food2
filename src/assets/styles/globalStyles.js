import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
      background: var(--red-color);
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(238, 89, 91, 0.7);
    }
  }
  
  body {
    background-color: white;
    color: #29292e;
  }

  body, input, button, textarea {
    font: 400 16px 'Roboto', sans-serif;
  }

  :root {
    --orange-color: #e86e5a;
    --grey-color: #b8b8b8;
    --red-color: #e02020;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;
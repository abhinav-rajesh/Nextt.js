// styles/GlobalStyles.tsx
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: Arial, sans-serif;
    background-color: #f7f7f7;
    color: #333;
  }
  
  h1 {
    font-size: 2.5rem;
    color: #333;
  }
  
  input, button {
    padding: 10px;
    margin: 5px 0;
    width: 100%;
  }
  
  button {
    background-color: #0070f3;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #005bb5;
  }
  
  .container {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    background-color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
`;

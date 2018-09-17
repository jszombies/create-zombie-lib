import { injectGlobal } from 'styled-components'

export default () =>
  injectGlobal`
    html, body {
      height: 100%;
      width: 100%;
    }

    html {
      font-size: 62.5%;
    }

    body {
      font-family: "Formular", sans-serif;
      font-size: 1.6rem;
      margin: 0;
      padding: 0;
    }

    * {
      box-sizing: border-box;
    }

    ul {
      margin: 0;
      padding: 0;
    }
  `

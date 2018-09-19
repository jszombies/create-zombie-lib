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
      font-size: 1.6rem;
      margin: 0;
      padding: 0;
    }

    * {
      box-sizing: border-box;
    }

    a {
      text-decoration: none;
    }

    ul {
      margin: 0;
      padding: 0;
    }
  `

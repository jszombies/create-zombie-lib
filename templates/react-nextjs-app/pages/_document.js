// @flow

import { ServerStyleSheet } from 'styled-components'
import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'

import injectGlobalStyles from 'styles/global'

injectGlobalStyles()

type Props = {
  renderPage: Function
}

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }: Props) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html>
        <Head>
          <title>My page</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

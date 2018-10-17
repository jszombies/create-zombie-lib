// @flow

import { ThemeProvider } from 'styled-components'
import * as React from 'react'

export const defaultTheme = {
  colors: {
    'pink': '#ff007d',
    'pink-dark': '#f00076'
  }
}

type Props = {
  children: React.Node
}

const DefaultThemeProvider = ({ children }: Props) => (
  <ThemeProvider theme={defaultTheme}>
    {children}
  </ThemeProvider>
)

export default DefaultThemeProvider

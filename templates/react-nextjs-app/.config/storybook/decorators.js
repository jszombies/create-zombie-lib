// @flow

import React from 'react'

import DefaultThemeProvider from 'styles/themes/default'

export const DefaultThemeDecorator = (storyFn: Function) => (
  <DefaultThemeProvider>
    { storyFn() }
  </DefaultThemeProvider>
)

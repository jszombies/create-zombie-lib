import { configure, addDecorator } from '@storybook/react'
import centered from '@storybook/addon-centered'
import injectGlobalStyles from 'styles/global'

import { DefaultThemeDecorator } from './decorators'

injectGlobalStyles()

// automatically import all files ending in *.stories.js
const req = require.context('../../components', true, /.stories.js$/)
function loadStories () {
  req.keys().forEach(filename => req(filename))
}

addDecorator(centered)
addDecorator(DefaultThemeDecorator)
configure(loadStories, module)

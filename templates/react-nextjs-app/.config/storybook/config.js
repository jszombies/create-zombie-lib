import { configure, addDecorator } from '@storybook/react'
import DefaultThemeDecorator from 'components/themes/DefaultThemeDecorator'
import centered from '@storybook/addon-centered'

import injectGlobalStyles from '../../styles/global'

injectGlobalStyles()

// automatically import all files ending in *.stories.js
const req = require.context('../../components', true, /.stories.js$/)
function loadStories () {
  req.keys().forEach(filename => req(filename))
}

addDecorator(centered)
addDecorator(DefaultThemeDecorator)
configure(loadStories, module)

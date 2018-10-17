// @flow

import React from 'react'

import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import Button from './index'
import Readme from './README.md'

storiesOf('Button', module)
  .addDecorator(withDocs(Readme))
  .addDecorator(withKnobs)
  .add('default', () => (
    <Button
      label={text('Label', 'Click me')}
      disabled={boolean('Disabled', false)}
      onClick={action('onClick')}
    />
  ))

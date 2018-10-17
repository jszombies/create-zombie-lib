// @flow

import { mount } from 'enzyme'
import DefaultThemeProvider from 'styles/themes/default'

import Button from './index'

describe('Button', () => {
  it('should render', () => {
    const wrapper = mount(
      <DefaultThemeProvider>
        <Button label='Click me' />
      </DefaultThemeProvider>
    )
    expect(wrapper.find('a').exists()).toBeTruthy()
  })
})

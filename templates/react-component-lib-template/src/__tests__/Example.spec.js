import React from 'react'

import { mount } from 'enzyme'

import Example from '../index'

describe('Example', () => {
  it('should render the Example Component', () => {
    const wrapper = mount(<Example />)
    expect(wrapper.find('div').text()).toEqual('Example component')
  })
})

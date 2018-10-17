import 'jest-extended'
import 'jest-styled-components'

import Adapter from 'enzyme-adapter-react-16'
import enzyme from 'enzyme'

enzyme.configure({ adapter: new Adapter() })

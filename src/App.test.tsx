import Enzyme, { shallow } from 'enzyme'
import React from 'react'

import App from './App'

import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('Render Layouts', () => {
  const app = shallow(<App />)

  it('render main App without crashing', () => {
    expect(app.find('div.App').length).toEqual(1)
  })

  it('render propspect layout without crashing', () => {
    expect(app.containsMatchingElement(<h3>PROSPECTOS</h3>))
  })

  it('render clients layout without crashing', () => {
    expect(app.containsMatchingElement(<h3>CLIENTES</h3>))
  })
})

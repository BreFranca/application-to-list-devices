'use strict'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Tests from './tests'

Enzyme.configure({ adapter: new Adapter() })

describe('Switch should:', () => {
  const wrapperED = shallow(Tests['empty data'])
  const wrapperA = shallow(Tests['activate'])
  const wrapperD = shallow(Tests['deactivate'])
  const jExpect = global.expect

  describe('match snapshot if:', () => {
    it('isDeactivate', () => { jExpect(wrapperA).toMatchSnapshot() })
    it('is disabled', () => { jExpect(wrapperD).toMatchSnapshot() })
  })

  describe('match output if:', () => {
    it('is activate status', () => {
      expect(wrapperA.find('label').prop('className')).toBe('switch switch-active')
    })

    it('is deactivate status', () => {
      expect(wrapperD.find('label').prop('className')).toBe('switch')
    })

    it('is label of activate status', () => {
      expect(wrapperA.find('label').text()).toBe('Active')
    })

    it('is label of deactivate status', () => {
      expect(wrapperD.find('label').text()).toBe('Deactivate')
    })
  })

})
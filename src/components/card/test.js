import { shallow } from 'enzyme'
import Mock from './mock'
import Card from './'

describe('Card should:', () => {
  const { name, unit, date, value, active } = Mock
  const shallowED = shallow(
    <Card
      name={name}
      unit={unit}
      date={moment(date).format('DD.MM.YYYY hh:mm:ss')}
      value={value}
      active={active}
    />
  )

  describe('match output if:', () => {
    it('wrapper exists', () => {
      expect(shallowED).to.be.present()
    })
  })
})
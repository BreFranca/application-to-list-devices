import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import moment from 'moment'
import Mock from './mock'

import React from 'react'
import Card from '.'

Enzyme.configure({ adapter: new Adapter() })

describe('match output if:', () => {
    it('wrapper exists', () => {
        const wrapper = shallow(<Card />)
        expect(wrapper.find('.card')).toHaveLength(1)
    })

    it('render card with props', () => {
        const { name, unit, timestamp, value, active } = Mock
        const wrapper = shallow(<Card
            name={name}
            unit={unit}
            date={moment(timestamp).format('DD.MM.YYYY hh:mm:ss')}
            value={value}
        />)
        expect(wrapper.find('.card-name').text()).toBe('iPhone 11 Pro Max')
        expect(wrapper.find('.card-unit').text()).toBe('unit: GR2WL17FMV')
        expect(wrapper.find('.card-date').text()).toBe('date: 01.03.2021 12:37:39')
        expect(wrapper.find('.card-value').text()).toBe('value: 1099')
    })
})
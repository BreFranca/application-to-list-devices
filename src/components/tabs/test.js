import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Mock from './mock'

import React from 'react'
import Tabs from './'

Enzyme.configure({ adapter: new Adapter() })

describe('match output if:', () => {
    it('wrapper exists', () => {
        const wrapper = shallow(<Tabs />)
        expect(wrapper.find('.tabs')).toHaveLength(1)
    })

    it('render tabs with multiple tab', () => {
        const wrapper = shallow(<Tabs tabs={Mock} />)
        expect(wrapper.find('.tabs li')).toHaveLength(3)
    })
})
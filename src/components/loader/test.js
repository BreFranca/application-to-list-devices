import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import React from 'react'
import Loader from './'

Enzyme.configure({ adapter: new Adapter() })

describe('match output if:', () => {
    it('wrapper exists', () => {
        const wrapper = shallow(<Loader />)
        expect(wrapper.find('.loader')).toHaveLength(1)
    })

    it('is loader loading', () => {
        const wrapper = shallow(<Loader loading={true} />)
        expect(wrapper.find('.loader').hasClass('loading')).toBe(true)
    })
})
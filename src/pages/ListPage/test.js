import 'regenerator-runtime/runtime'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { mountTabs } from './functions'
import { tabsDefault } from './consts'
import MockTabs from './mock'

import React from 'react'
import ListPage from './'

Enzyme.configure({ adapter: new Adapter() })

describe('Testing functions.js:', () => {
    const MockValues = [
        {
            name: 'Iphone 11',
            unit: '4EH1091ABS',
            value: 699,
            timestamp: 1614613059975,
            active: true,
            status: 'activate'
        },
        {
            name: 'Samsung Galaxy Note 20 Ultra',
            unit: '33N7YUMMNA',
            value: 949,
            timestamp: 1614613059975,
            active: false,
            status: 'deactivate'
        },
        {
            name: 'OnePlus 8 Pro',
            unit: '67IFTAJKWU',
            value: 799,
            timestamp: 1614613059975,
            active: true,
            status: 'activate'
        }
    ]

    it('be a function', () => {
        expect(typeof mountTabs).toBe('function')
    })

    it('to return correctly', () => {
        expect(mountTabs({ tabs: tabsDefault, values: MockValues })).toEqual(MockTabs)
    })
})

describe('match output if:', () => {
    it('wrapper exists', () => {
        const wrapper = shallow(<ListPage />)
        expect(wrapper.find('.layout')).toHaveLength(1)
    })
})
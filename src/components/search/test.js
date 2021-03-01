import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Search from './'

Enzyme.configure({ adapter: new Adapter() })


describe('Card should:', () => {
    const wrapper = shallow(<Search value={'Iphone 11'} />);

    it('The wrapper should display new value on the user input', () => {
        wrapper.simulate('change', { target: { value: 'Iphone 11' } });
        const input = wrapper.find('input');
        expect(input.prop('value')).not.toBe('Iphone 12');
        expect(input.prop('value')).toBe('Iphone 11');
    });
})
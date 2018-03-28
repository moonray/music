import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sort from './Sort';

Enzyme.configure({ adapter: new Adapter() });

const setup = (propOverrides) => {
  const props = {
    options: [{ key: 1, value: 'One' }, { key: 2, value: 'Two' }],
    onChange: jest.fn(),
    ...propOverrides,
  };
  return ({
    props,
    wrapper: shallow(<Sort {...props} />),
  });
};

describe('<Sort />', () => {
  it('shallow renders without crashing', () => {
    setup({});
  });

  it('handles a change event', () => {
    const { props: { onChange }, wrapper } = setup({});
    const event = {target: {value: 'released__asc'}};

    wrapper.find('select').simulate('change', event);
    expect(onChange.mock.calls).toHaveLength(1);
    expect(onChange.mock.calls[0]).toEqual(['released', 'asc']);
  });
});

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilterGenre from './FilterGenre';

Enzyme.configure({ adapter: new Adapter() });

const setup = (propOverrides) => {
  const props = {
    options: [{ key: 1, value: 'One' }, { key: 2, value: 'Two' }],
    onChange: jest.fn(),
    ...propOverrides,
  };
  return ({
    props,
    wrapper: (() => {
      return shallow(<FilterGenre {...props} />);
    })(),
  });
};

describe('<FilterGenre />', () => {
  it('shallow renders without crashing', () => {
    setup({});
  });

  it('shallow renders without crashing when no options are provided', () => {
    setup({ options: [] });
  });

  it('handles a change event with value 1', () => {
    const { props: { onChange }, wrapper } = setup({});
    const event = {target: {value: '1'}};

    wrapper.find('select').simulate('change', event);
    expect(onChange.mock.calls).toHaveLength(1);
    expect(onChange.mock.calls[0]).toEqual(['1']);
  });

  it('handles a change event with no value', () => {
    const { props: { onChange }, wrapper } = setup({});
    const event = {target: {value: ''}};

    wrapper.find('select').simulate('change', event);
    expect(onChange.mock.calls).toHaveLength(1);
    expect(onChange.mock.calls[0]).toEqual([false]);
  });
});

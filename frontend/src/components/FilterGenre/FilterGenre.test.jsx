import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilterGenre from './FilterGenre';

Enzyme.configure({ adapter: new Adapter() });

const setup = (propOverrides, genreOverrides = null) => {
  const genres = genreOverrides || [
    { "id": 1, "created_at": "2018-03-26 16:17:44", "updated_at": "2018-03-26 16:17:44", "name": "Dance" },
    { "id": 2, "created_at": "2018-03-26 16:17:44", "updated_at": "2018-03-26 16:17:44", "name": "Electronic" },
    { "id": 3, "created_at": "2018-03-26 16:17:44", "updated_at": "2018-03-26 16:17:44", "name": "Rock" },
  ];
  const props = {
    onChange: jest.fn(),
    ...propOverrides,
  };
  return ({
    props,
    wrapper: (() => {
      fetch.mockResponse(JSON.stringify(genres));
      return shallow(<FilterGenre {...props} />);
    })(),
  });
};

describe('<FilterGenre />', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('shallow renders without crashing', () => {
    setup({});
  });

  it('shallow renders without crashing when no genres are found', () => {
    setup({}, []);
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

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetches from '../../fetches';
import AlbumListContainer from './AlbumListContainer';

jest.mock('../../fetches');

Enzyme.configure({ adapter: new Adapter() });

const setup = (propOverrides) => {
  const props = {
    ...propOverrides,
  };
  const context = {};
  return ({
    props,
    wrapper: shallow(<AlbumListContainer {...props}/>),
  });
};

describe('<AlbumListContainer />', () => {
  it('shallow renders without crashing', () => {
    setup({});
  });

  it('changes state on sort', () => {
    const { props, wrapper } = setup({});

    const column = 'randomColumnName';
    const order = 'desc';

    wrapper.instance().sort(column, order);
    expect(wrapper.instance().state.sort.column).toEqual(column);
    expect(wrapper.instance().state.sort.order).toEqual(order);
  });

  it('changes state on filter', () => {
    const { props, wrapper } = setup({});

    const genreId = 9;

    wrapper.instance().filter(genreId);
    expect(wrapper.instance().state.filter.genre).toEqual(genreId);
  });
});

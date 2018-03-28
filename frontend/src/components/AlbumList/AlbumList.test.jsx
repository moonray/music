import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import testData from "../../testData";
import AlbumList from './AlbumList';

Enzyme.configure({ adapter: new Adapter() });

const setup = (propOverrides, location) => {
  const props = {
    albums: testData.albums,
    filterOptions: [{ key: 1, value: 'One' }, { key: 2, value: 'Two' }],
    filter: jest.fn(),
    sortOptions: [{ key: 1, value: 'One' }, { key: 2, value: 'Two' }],
    sort: jest.fn(),
    ...propOverrides,
  };
  return ({
    props,
    wrapper: shallow(<AlbumList {...props}/>),
  });
};

describe('<AlbumList />', () => {
  it('shallow renders without crashing', () => {
    setup({});
  });
  it('shallow renders without crashing with no albums', () => {
    setup({ albums: [] });
  });
});

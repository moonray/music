import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import testData from "../../testData";
import Album from './Album';

Enzyme.configure({ adapter: new Adapter() });

const setup = (propOverrides) => {
  const props = {
    album: testData.album,
    ...propOverrides,
  };
  return ({
    props,
    wrapper: shallow(<Album {...props}/>),
  });
};

describe('<Album />', () => {
  it('shallow renders without crashing', () => {
    setup({});
  });
});

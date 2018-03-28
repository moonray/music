import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import testData from "../../testData";
import Song from './Song';

Enzyme.configure({ adapter: new Adapter() });

const setup = (propOverrides) => {
  const props = {
    song: testData.song,
    ...propOverrides,
  };
  const context = {};
  return ({
    props,
    wrapper: shallow(
      <table>
        <tbody>
          <Song {...props}/>
        </tbody>
      </table>
    ).find('Song'),
  });
};

describe('<Song />', () => {
  it('shallow renders without crashing', () => {
    setup({});
  });
});

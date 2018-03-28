import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { StaticRouter } from 'react-router-dom';
import fetches from '../../fetches';
import App from '../App';

jest.mock('../../fetches');

Enzyme.configure({ adapter: new Adapter() });

const setup = (propOverrides, location = '/') => {
  const props = {
    ...propOverrides,
  };
  const context = {};
  return ({
    props,
    wrapper: (() => {
      return mount(<StaticRouter location={location} context={context}><App {...props}/></StaticRouter>).find('App')
    })(),
  });
};

describe('<App />', () => {
  it('renders without crashing at /', () => {
    setup({}, '/');
  });

  it('renders without crashing at /album/1', () => {
    setup({}, '/album/1');
  });
});

import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { StaticRouter } from 'react-router-dom';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

const setup = (propOverrides, location = '/') => {
  const props = {
    ...propOverrides,
  };
  const context = {};
  return ({
    props,
    wrapper: (() => {
      // @todo Can't use {} for all responses; some child component responses are [].
      fetch.mockResponse(JSON.stringify({}));
      return mount(<StaticRouter location={location} context={context}><App {...props}/></StaticRouter>).find('App')
    })(),
  });
};

describe('<App />', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('renders without crashing at /', () => {
    setup({}, '/');
  });

  it('renders without crashing at /album/1', () => {
    setup({}, '/album/1');
  });
});

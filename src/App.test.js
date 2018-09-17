import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('has a TODO component', () => {
  const div = document.createElement('div');
  const app = shallow(<App />);
  console.log(app);
})

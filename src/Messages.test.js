import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './Messages';
import renderer from 'react-test-renderer';

/* Test Suite for Messages Component */
describe('Messages component', () => {

  /* SMOKE */
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Messages />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders with no messages', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Messages name="Messages" unread={0}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
 
it('renders with messages', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Messages name="Notifications" unread={10}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
  
/*  SNAPSHOT */
it('renders the UI as expected with messages', () => {
    const tree = renderer
      .create(<Messages name="Messages" unread={4}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
});

it('renders the UI as expected with no messages', () => {
    const tree = renderer
      .create(<Messages name="Messages" unread={0}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
});
});
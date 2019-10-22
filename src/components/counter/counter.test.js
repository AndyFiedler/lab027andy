
import React from 'react';
import Counter from "./counter"
import renderer from 'react-test-renderer';

describe('<counter />', () => {
  it('can add clicks properly', () => {
    let app = shallow(<Counter />);
    let buttonDown = app.find('a.down clicker');
    expect(buttonDown.exists()).toBe(true);
    expect(buttonDown.text()).toBe('-');
  });

  it('can subtract clicks properly', () => {
    let app = shallow(<Counter />);
    let buttonUp = app.find('a.up clicker');
    expect(buttonUp.exists()).toBe(true);
    expect(buttonUp.text()).toBe('+');
  });

  it('can successfully render state changes', () => {
    let app = shallow(<Counter />);
    let buttonUp = app.find('a.up clicker');
    expect(buttonUp.exists()).toBe(true);
    expect(buttonUp.text()).toBe('+');

    buttonUp.simulate('click');
    expect(app.state('counter')).toBe(1);
    buttonUp.simulate('click');
    expect(app.state('counter')).toBe(2);
    buttonDown.simulate('click');
    expect(app.state('counter')).toBe(1);
    buttonDown.simulate('click');
    expect(app.state('counter')).toBe(0);

  });
  it('can pass a snapshot test', () => {
    const tree = renderer
    .create(<Counter />)
    .toJSON();
  expect(tree).toMatchSnapshot();
  });
});
/**
 * @format
 */

import 'react-native';
import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import AddToDo from '../src/AddToDo'

describe('Rendering', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<AddToDo></AddToDo>)
  })

  it('is TextInput visible?', () => {
    expect(wrapper.find('TextInput')).toHaveLength(1);
  })
  it('is Button visibla?', () => {
    expect(wrapper.find('Button')).toHaveLength(1);
  })
})

describe('Interaction', () => {
  let wrapper;
  let props;
  const text = "some ToDo"
  
  beforeEach(() => {
    props = {
      onAdded: jest.fn()
    }

    wrapper = shallow(<AddToDo {...props}></AddToDo>)

    wrapper.find('TextInput').simulate('changeText', text)
    wrapper.find('Button').prop('onPress')();
  })

  it('should call the onAdded callback with input text', () => {
    expect(props.onAdded).toHaveBeenCalledTimes(1);
    expect(props.onAdded).toHaveBeenCalledWith(text);
  })
})
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Form from '../../src/screens/Form/index.js';

describe('render Form Input', () => {
  it('Submit Form inputs', () => {
    const { getAllByPlaceholderText } = render(<Form/>);

    getAllByPlaceholderText("User Name")
    getAllByPlaceholderText("Email")
  });
});

describe('render Submit', () => {
    it('Button Press Submit Form', () => {
      const { getByTestId } = render(<Form/>);

      fireEvent.changeText(getByTestId("UserName"), "Bond")
      fireEvent.changeText(getByTestId("Email"), "poove") 
  
      fireEvent.press(getByTestId("SubmitBtn"))

    });
});


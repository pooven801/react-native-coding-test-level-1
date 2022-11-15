import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MainScreen from '../../src/screens/MainScreen/index.js';

describe('Press Contact Us Btn', () => {
  it('navigates on button press Contact Us', () => {
    const push = jest.fn();
    const { getByText } = render(<MainScreen navigation={{ push }} />);
    fireEvent.press(getByText('Contact Us'));
    expect(push).toHaveBeenCalledWith('Form');
  });
});

describe('Press View Catalog Btn', () => {
    it('navigates on button press View Catalog', () => {
      const push = jest.fn();
      const { getByText } = render(<MainScreen navigation={{ push }} />);
      fireEvent.press(getByText('View Catalog'));
      expect(push).toHaveBeenCalledWith('ViewCatalog');
    });
  });
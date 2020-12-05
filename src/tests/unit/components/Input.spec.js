/* eslint-disable import/first */
import React from 'react';
import { render } from '@testing-library/react';

import Input from 'components/Input';

describe('Input component', () => {
  test('Should be instantiated with the passed props', () => {
    const { getByPlaceholderText } = render(<Input type="number" name="test" placeholder="testPlaceholder" required />);

    getByPlaceholderText('testPlaceholder');
  });
});

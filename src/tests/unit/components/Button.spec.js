import React from 'react';
import { render } from '@testing-library/react';

import Button from 'components/Button';

describe('Button component', () => {
  test('Should be rendered with the text', () => {
    const { getByText } = render(<Button text="lala" />);
    expect(getByText('lala'));
  });
});

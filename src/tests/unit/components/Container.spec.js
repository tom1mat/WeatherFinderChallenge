import React from 'react';
import { render } from '@testing-library/react';

import Container from 'components/Container';

describe('Container component', () => {
  test('Should be rendered with the className and children', () => {
    const { getByText, container } = render(
      <Container className="test">test</Container>,
    );

    getByText('test');
    expect(container.firstChild.className).toBe('test');
  });
});

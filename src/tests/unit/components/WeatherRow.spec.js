/* eslint-disable import/first */
import React from 'react';
import { render } from '@testing-library/react';

import WeatherRow from 'components/WeatherRow';

describe('WeatherRow component', () => {
  test('Should be instantiated property and value', () => {
    const { getByText } = render(<WeatherRow property="propTest" value="valueTest" />);

    getByText('propTest:');
    getByText('valueTest');
  });
});

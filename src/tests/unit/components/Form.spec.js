/* eslint-disable import/first */
import React from 'react';
import {
  render, waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Form from 'components/Form';

describe('Form component', () => {
  describe('When the data is submited with the inputs filled', () => {
    test('Should change the UI', async () => {
      const { getByPlaceholderText, getByText } = render(<Form />);

      // Geting all the inputs
      const inputCity = getByPlaceholderText('Madrid');
      const inputLanguage = getByPlaceholderText('es');
      const submit = getByText('Get Weather');

      // Filling the form
      inputCity.value = 'Madrid';
      inputLanguage.value = 'es';

      expect(submit.disabled).toBe(false);

      // Actioning the submit
      userEvent.click(submit);

      // UI when submitting
      getByText('Loading');
      expect(submit.disabled).toBe(true);

      await waitForElementToBeRemoved(() => getByText('Loading'));

      expect(submit.disabled).toBe(false);
    });
  });
});

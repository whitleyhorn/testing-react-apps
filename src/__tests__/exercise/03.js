// Avoid implementation details
// http://localhost:3000/counter

import * as React from 'react'
import {screen, render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from '../../components/counter'

test('counter increments and decrements when the buttons are clicked', () => {
  render(<Counter />)
  const [decrement, increment] = screen.getAllByRole('button')
  const message = screen.getByText('Current count:', {exact: false})

  expect(message).toHaveTextContent('Current count: 0')
  userEvent.click(increment)
  expect(message).toHaveTextContent('Current count: 1')
  userEvent.click(decrement)
  expect(message).toHaveTextContent('Current count: 0')
})

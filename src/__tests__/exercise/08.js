// testing custom hooks
// http://localhost:3000/counter-hook

import * as React from 'react'
import {render, screen, act} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import useCounter from '../../components/use-counter'

test('exposes the count and increment/decrement functions', async () => {
  let counter
  function TestComponent() {
    counter = useCounter()
    return null
  }

  render(<TestComponent />)
  let {increment, decrement} = counter
  expect(counter.count).toBe(0)
  act(() => increment())
  expect(counter.count).toBe(1)
  act(() => decrement())
  expect(counter.count).toBe(0)
})

test('allows customization of the initial count', async () => {})

test('allows customization of the step', async () => {})

/* eslint no-unused-vars:0 */

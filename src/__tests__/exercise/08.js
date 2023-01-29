// testing custom hooks
// http://localhost:3000/counter-hook

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import useCounter from '../../components/use-counter'

function TestComponent() {
  const {count, increment, decrement} = useCounter()
  return (
    <>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <p>Count: {count}</p>
    </>
  )
}

// 🐨 create a simple function component that uses the useCounter hook
// and then exposes some UI that our test can interact with to test the
// capabilities of this hook
// 💰 here's how to use the hook:
// const {count, increment, decrement} = useCounter()

test('exposes the count and increment/decrement functions', async () => {
  // 🐨 render the component
  render(<TestComponent />)
  // 🐨 get the elements you need using screen
  const incrementBtn = screen.getByRole('button', {name: /increment/i})
  const decrementBtn = screen.getByRole('button', {name: /decrement/i})
  const countText = screen.getByText(/count/i)
  expect(countText).toHaveTextContent(/count: 0/i)
  await userEvent.click(incrementBtn)
  expect(countText).toHaveTextContent(/count: 1/i)
  await userEvent.click(decrementBtn)
  expect(countText).toHaveTextContent(/count: 0/i)
})

/* eslint no-unused-vars:0 */

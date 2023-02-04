// testing custom hooks
// http://localhost:3000/counter-hook

import * as React from 'react'
import {act, renderHook} from '@testing-library/react'
import useCounter from '../../components/use-counter'

test('exposes the count and increment/decrement functions', async () => {
  const {result: counter} = renderHook(() => useCounter())

  expect(counter.current.count).toBe(0)
  act(() => counter.current.increment())
  expect(counter.current.count).toBe(1)
  act(() => counter.current.decrement())
  expect(counter.current.count).toBe(0)
})

test('allows customization of the initial count', async () => {
  const initialCount = 4
  const {result: counter} = renderHook(() => useCounter({initialCount}))
  expect(counter.current.count).toBe(initialCount)
})

test('allows customization of the step', async () => {
  const step = 2
  const {result: counter} = renderHook(() => useCounter({step}))
  expect(counter.current.count).toBe(0)
  act(() => counter.current.increment())
  expect(counter.current.count).toBe(2)
  act(() => counter.current.decrement())
  expect(counter.current.count).toBe(0)
})

/* eslint no-unused-vars:0 */

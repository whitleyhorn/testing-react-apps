// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'

test('submitting the form calls onSubmit with username and password', async () => {
  const handleSubmit = jest.fn()

  const newLogin = render(<Login onSubmit={handleSubmit} />)

  const username = 'hello'
  const password = 'world'

  await userEvent.type(newLogin.getByLabelText(/username/i), username)
  await userEvent.type(newLogin.getByLabelText(/password/i), password)

  await userEvent.click(newLogin.getByRole('button', {text: 'Submit'}))
  expect(handleSubmit).toHaveBeenCalledWith({username, password})
})

/*
eslint
  no-unused-vars: "off",
*/

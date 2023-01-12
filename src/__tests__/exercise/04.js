// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'

test('submitting the form calls onSubmit with username and password', async () => {
  let submittedData = 'test'
  const handleSubmit = data => (submittedData = data)

  const newLogin = render(<Login onSubmit={handleSubmit} />)

  const username = newLogin.getByLabelText('Username')
  const password = newLogin.getByLabelText('Password')

  await userEvent.type(username, 'hello')
  await userEvent.type(password, 'world')

  await userEvent.click(newLogin.getByRole('button', {text: 'Submit'})) // assert that submittedData is correct
  expect(submittedData).toEqual({username: 'hello', password: 'world'})
})

/*
eslint
  no-unused-vars: "off",
*/

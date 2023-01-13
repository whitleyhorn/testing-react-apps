// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'
import {build, fake} from '@jackfranklin/test-data-bot'

function buildLoginForm() {
  const userBuilder = build('User', {
    fields: {
      username: fake(f => f.internet.userName()),
      password: fake(f => f.internet.password()),
    },
  })

  return userBuilder()
}

test('submitting the form calls onSubmit with username and password', async () => {
  const handleSubmit = jest.fn()

  const newLogin = render(<Login onSubmit={handleSubmit} />)
  const {username, password} = buildLoginForm()

  await userEvent.type(newLogin.getByLabelText(/username/i), username)
  await userEvent.type(newLogin.getByLabelText(/password/i), password)

  await userEvent.click(newLogin.getByRole('button', {text: 'Submit'}))
  expect(handleSubmit).toHaveBeenCalledWith({username, password})
})

/*
eslint
  no-unused-vars: "off",
*/

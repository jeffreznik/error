import { GeneralError } from './errors'

// this test is needed because Babel does not support extending built-ins out of the box
// https://stackoverflow.com/questions/33870684
test('Errors can be identified with instanceof', () => {
  const error = new GeneralError()
  expect(error instanceof GeneralError).toBe(true)
})

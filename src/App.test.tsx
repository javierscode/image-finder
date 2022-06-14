import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import App from './App'

test.skip('Renders main page correctly', async () => {
  // Given
  render(<App />)
  const buttonCount = await screen.findByRole('button')
  expect(buttonCount.innerHTML).toBe('count is: 0')

  // When
  await user.click(buttonCount)
  await user.click(buttonCount)

  // Then
  expect(buttonCount.innerHTML).toBe('count is: 2')
})

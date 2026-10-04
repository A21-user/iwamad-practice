import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LikeButton from './LikeButton'
import { LikesProvider } from '../context/LikesContext'

test('increases likes when clicked', async () => {
  const user = userEvent.setup()

  render(
    <LikesProvider>
      <LikeButton />
    </LikesProvider>
  )

  const button = screen.getByRole('button')

  await user.click(button)

  expect(button).toHaveTextContent('Like ♥ 1')
})

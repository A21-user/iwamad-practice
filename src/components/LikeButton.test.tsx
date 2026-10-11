import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, test } from 'vitest'
import { LikesProvider } from '../context/LikesContext'
import LikeButton from './LikeButton'

test('like button adds one like when clicked', async () => {
  render(
    <LikesProvider>
      <LikeButton />
    </LikesProvider>,
  )

  const button = screen.getByRole('button')
  expect(button).toHaveTextContent('♥ 0')

  await userEvent.click(button)

  expect(button).toHaveTextContent('♥ 1')
})
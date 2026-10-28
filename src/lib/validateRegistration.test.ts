
import { describe, expect, it } from 'vitest'
import {
  validateRegistration,
  type RegistrationValues,
} from './validateRegistration'

const validValues: RegistrationValues = {
  fullName: 'Arina Bakyt',
  email: 'ar_bakyt@kbtu.kz',
  password: 'atyrau2026',
  confirmPassword: 'atyrau2026',
  acceptTerms: true,
}

describe('validateRegistration', () => {
  it('returns no errors for valid values', () => {
    expect(validateRegistration(validValues)).toEqual({})
  })

  it('rejects a name containing only spaces', () => {
    const values = { ...validValues, fullName: '   ' }

    expect(validateRegistration(values).fullName).toBe(
      'Enter your full name',
    )
  })

  it('rejects an invalid email', () => {
    const values = { ...validValues, email: 'aliya@example' }

    expect(validateRegistration(values).email).toBe(
      'Enter a valid email, like name@example.com',
    )
  })

  it('accepts a password with at least 8 characters and a digit', () => {
    const values = {
      ...validValues,
      password: 'almaty26',
      confirmPassword: 'almaty26',
    }

    expect(validateRegistration(values)).toEqual({})
  })

  it('rejects a password shorter than 8 characters', () => {
    const values = {
      ...validValues,
      password: 'almaty2',
      confirmPassword: 'almaty2',
    }

    expect(validateRegistration(values).password).toBe(
      'Use at least 8 characters',
    )
  })

  it('rejects a password without a digit', () => {
    const values = {
      ...validValues,
      password: 'almatycity',
      confirmPassword: 'almatycity',
    }

    expect(validateRegistration(values).password).toBe(
      'Include at least one number',
    )
  })

  it('rejects non-matching passwords', () => {
    const values = {
      ...validValues,
      confirmPassword: 'almaty2027',
    }

    expect(validateRegistration(values).confirmPassword).toBe(
      'Passwords do not match',
    )
  })

  it('requires acceptance of the terms', () => {
    const values = { ...validValues, acceptTerms: false }

    expect(validateRegistration(values).acceptTerms).toBe(
      'Accept the terms to continue',
    )
  })
})

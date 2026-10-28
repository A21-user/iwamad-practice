
import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import TextField from '../components/ui/TextField'
import {
  validateRegistration,
  type RegistrationValues,
} from '../lib/validateRegistration'

const initialValues: RegistrationValues = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  acceptTerms: false,
}

type FieldName = keyof RegistrationValues

function RegisterPage() {
  const [values, setValues] = useState<RegistrationValues>(initialValues)
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({})
  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const errors = validateRegistration(values)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = event.target

    setValues((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))

    setSuccessMessage('')
  }

  function handleBlur(event: ChangeEvent<HTMLInputElement>) {
    const field = event.target.name as FieldName

    setTouched((current) => ({
      ...current,
      [field]: true,
    }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitAttempted(true)

    const validationErrors = validateRegistration(values)

    if (Object.keys(validationErrors).length === 0) {
      setSuccessMessage(`Thanks, ${values.fullName.trim()}. You are registered.`)
    } else {
      setSuccessMessage('')
    }
  }

  function visibleError(field: FieldName) {
    return touched[field] || submitAttempted
      ? errors[field]
      : undefined
  }

  return (
    <section className="register-page">
      <h2>Register</h2>
      <p>Create your account by filling in the form.</p>

      <form onSubmit={handleSubmit} noValidate>
        <TextField
          label="Full name"
          name="fullName"
          type="text"
          autoComplete="name"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={visibleError('fullName')}
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={visibleError('email')}
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          autoComplete="new-password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={visibleError('password')}
        />

        <TextField
          label="Confirm password"
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={visibleError('confirmPassword')}
        />

        <div className="field terms-field">
          <label>
            <input
              name="acceptTerms"
              type="checkbox"
              checked={values.acceptTerms}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={visibleError('acceptTerms') ? true : undefined}
              aria-describedby={
                visibleError('acceptTerms') ? 'acceptTerms-error' : undefined
              }
            />
            I accept the terms and conditions
          </label>

          {visibleError('acceptTerms') && (
            <p id="acceptTerms-error" className="field-error">
              {visibleError('acceptTerms')}
            </p>
          )}
        </div>

        <button type="submit">Create account</button>

        {successMessage && (
          <p role="status" className="success-message">
            {successMessage}
          </p>
        )}
      </form>
    </section>
  )
}

export default RegisterPage

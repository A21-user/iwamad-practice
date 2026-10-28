
import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";

import TextField from "./ui/TextField";
import Button from "./ui/button";
import { validateSignup } from "../lib/validateSignup";
import type {
  SignupValues,
} from "../lib/validateSignup";

type EventSignupFormProps = {
  seatsLeft: number;
  onBooked: (tickets: number, name: string) => void;
};

export default function EventSignupForm({
  seatsLeft,
  onBooked,
}: EventSignupFormProps) {
  const [values, setValues] = useState<SignupValues>({
    fullName: "",
    email: "",
    tickets: "1",
  });

  const [touched, setTouched] = useState<
    Partial<Record<keyof SignupValues, boolean>>
  >({});

  const [submitAttempted, setSubmitAttempted] = useState(false);

  // Recalculate validation errors on every render.
  const errors = validateSignup(values, seatsLeft);

  function handleChange(
    event: ChangeEvent<HTMLInputElement>
  ) {
    const { name, value } = event.target;

    setValues((previous) => ({
      ...previous,
      [name]: value,
    }));

    setTouched((previous) => ({
      ...previous,
      [name]: true,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitAttempted(true);

    setTouched({
      fullName: true,
      email: true,
      tickets: true,
    });

    if (Object.keys(errors).length > 0) {
      return;
    }

    onBooked(Number(values.tickets), values.fullName.trim());

    setValues({
      fullName: "",
      email: "",
      tickets: "1",
    });

    setTouched({});
    setSubmitAttempted(false);
  }

  return (
    <section>
      <h2>Book a seat</h2>

      <p>Seats left: {seatsLeft}</p>

      <form onSubmit={handleSubmit} noValidate>
        <TextField
          name="fullName"
          label="Full name"
          value={values.fullName}
          onChange={handleChange}
          error={
            (touched.fullName || submitAttempted)
              ? errors.fullName
              : undefined
          }
        />

        <TextField
          name="email"
          label="Email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={
            (touched.email || submitAttempted)
              ? errors.email
              : undefined
          }
        />

        <TextField
          name="tickets"
          label="Tickets"
          type="number"
          min={1}
          max={4}
          value={values.tickets}
          onChange={handleChange}
          error={
            (touched.tickets || submitAttempted)
              ? errors.tickets
              : undefined
          }
        />

        <Button type="submit">Book</Button>
      </form>
    </section>
  );
}

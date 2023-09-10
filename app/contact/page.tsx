'use client';

import Heading from '@/components/shared/Heading';
import { sendEmailToMe } from '@/lib/actions/contact.actions';
import { contactSchema } from '@/lib/validations/contact';
import { ErrorType } from '@/types';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    message: '',
    email: '',
  });

  const newForm = {
    name: form.name,
    message: form.message,
    email: form.email,
  };

  const result = contactSchema.safeParse(newForm);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [errors, setErrors] = useState<ErrorType[]>([]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });

    if (hasSubmitted) {
      if (!result.success) {
        setErrors(
          result.error.issues.map((issue) => ({
            name: issue.path[0],
            message: issue.message,
          }))
        );
      } else {
        setErrors([]);
      }
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setHasSubmitted(true);
    if (!result.success) {
      setErrors(
        result.error.issues.map((issue) => ({
          name: issue.path[0],
          message: issue.message,
        }))
      );
      return;
    }

    setErrors([]);
    setForm({
      name: '',
      message: '',
      email: '',
    });
    setHasSubmitted(false);
    await sendEmailToMe({
      name: result.data.name,
      message: result.data.message,
      email: result.data.email,
    });
  }

  console.log(errors);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10">
      <Heading daText="Kontakt Mig" enText="Contact Me" />
      <input
        className="bg-gray-300"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      {errors?.find((error) => error.name === 'name') && <p>Error: Name</p>}
      <input
        className="bg-gray-300"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      {errors?.find((error) => error.name === 'email') && <p>Error: Email</p>}
      <textarea
        className="bg-gray-300"
        name="message"
        value={form.message}
        onChange={handleChange}
      />
      {errors?.find((error) => error.name === 'message') && (
        <p>Error: Message</p>
      )}
      <button type="submit">Send Email</button>
    </form>
  );
}

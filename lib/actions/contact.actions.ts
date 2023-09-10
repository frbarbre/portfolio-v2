'use server';

import { Resend } from 'resend';
import MailToMe from '@/email/MailToMe';
import { contactSchema } from '../validations/validation.contact';
import MailToSender from '@/email/MailToSender';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailToMe({
  email,
  name,
  message,
}: {
  email: string;
  name: string;
  message: string;
}) {
  try {
    let newArray = {
      name: name,
      message: message,
      email: email,
    };

    const result = contactSchema.safeParse(newArray);

    if (!result.success) {
      console.log(result.error.errors);
      return;
    }

    await resend.emails.send({
      from: result.data.name + ' <contact@frederikbarbre.dk>',
      to: 'fr.barbre@gmail.com',
      subject: 'New message from ' + result.data.name,
      reply_to: result.data.email,
      react: MailToMe({
        name: result.data.name,
        message: result.data.message,
        email: result.data.email,
      }),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function sendEmailToSender({
  email,
  name,
  message,
  language,
}: {
  email: string;
  name: string;
  message: string;
  language: string;
}) {
  try {
    let newArray = {
      name: name,
      message: message,
      email: email,
    };

    const result = contactSchema.safeParse(newArray);

    if (!result.success) {
      console.log(result.error.errors);
      return;
    }

    await resend.emails.send({
      from: 'Frederik Barbre' + ' <contact@frederikbarbre.dk>',
      to: email,
      subject:
        language === 'en' ? 'Thank you for your message!' : 'Tak for din besked!',
      reply_to: 'fr.barbre@gmail.com',
      react: MailToSender({
        name: result.data.name,
        message: result.data.message,
        email: result.data.email,
        language: language,
      }),
    });
  } catch (error) {
    console.log(error);
  }
}

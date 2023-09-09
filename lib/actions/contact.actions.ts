'use server';

import { Resend } from 'resend';
import Welcome from '@/email/Welcome';

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
    await resend.emails.send({
      from: name + ' <contact@frederikbarbre.dk>',
      to: 'fr.barbre@gmail.com',
      subject: 'replyt to me',
      reply_to: email,
      text: message,
      react: Welcome({ username: name }),
    });
  } catch (error) {
    console.log(error);
  }
}

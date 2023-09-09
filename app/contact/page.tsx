'use client';

import Heading from '@/components/shared/Heading';
import { sendEmailToMe } from '@/lib/actions/contact.actions';

export default function Contact() {
  async function send() {
    await sendEmailToMe({
      name: 'Sophia',
      message: 'Sophia as like ok at math i guess',
      email: 'sophia.barbre@gmail.com',
    });
  }

  return (
    <section>
      <Heading daText="Kontakt Mig" enText="Contact Me" />
      <button onClick={send}>Send Email</button>
    </section>
  );
}

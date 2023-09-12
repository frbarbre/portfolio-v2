import Form from '@/components/contact/Form';
import Heading from '@/components/shared/Heading';

export default function Contact() {
  return (
    <section className='max-w-custom mx-auto'>
      <Heading daText="Kontakt Mig" enText="Contact Me" />
      <Form />
    </section>
  );
}

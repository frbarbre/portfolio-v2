import {
  sendEmailToMe,
  sendEmailToSender,
} from '@/lib/actions/contact.actions';
import { contactSchema } from '@/lib/validations/contact.validation';
import { ErrorType, FormType } from '@/types';
import { useEffect, useState } from 'react';
import Input from './Input';
import { useStore } from '@/app/store';
import SquareButton from '../shared/SquareButton';
import Magnetic from '../shared/Magnetic';
import RoundButton from '../shared/RoundButton';
import Image from 'next/image';
import contactPic from '../../public/images/contact.png';
import PopUpModal from '../shared/PopUpModal';

export default function Form() {
  let parsedForm: FormType;
  
  if (typeof window !== 'undefined') {
    const savedForm = localStorage.getItem('form');
    if (savedForm) {
      parsedForm = JSON.parse(savedForm);
    }
  }

  const [form, setForm] = useState({
    name: '',
    message: '',
    email: '',
  });

  useEffect(() => {
    if (parsedForm) {
      setForm(parsedForm);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('form', JSON.stringify(form));
  }, [form]);

  const result = contactSchema.safeParse(form);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errors, setErrors] = useState<ErrorType[]>([]);
  const language = useStore((state) => state.language);
  const theme = useStore((state) => state.theme);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (hasSubmitted) {
      if (!result.success) {
        setErrors(
          result.error.issues.map((issue) => {
            const messageSplit = issue.message.split('&&');

            return {
              name: issue.path[0],
              message: {
                en: messageSplit[0],
                da: messageSplit[1],
              },
            };
          })
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
        result.error.issues.map((issue) => {
          const messageSplit = issue.message.split('&&');
          return {
            name: issue.path[0],
            message: {
              en: messageSplit[0],
              da: messageSplit[1],
            },
          };
        })
      );
      return;
    }
    setErrors([]);
    setHasSubmitted(false);
    setIsSending(true);
    await sendEmailToMe({
      name: result.data.name,
      message: result.data.message,
      email: result.data.email,
    });
    await sendEmailToSender({
      name: result.data.name,
      message: result.data.message,
      email: result.data.email,
      language: language,
    });
    setForm({
      name: '',
      message: '',
      email: '',
    });
    setIsPopUpOpen(true);
    setIsSending(false);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="px-[24px] md:px-[103px] flex flex-col lg:flex-row gap-[50px] lg:gap-[75px] mb-[100px]"
      >
        <div
          className={`flex flex-col gap-[25px] md:gap-[50px] w-full ${
            isSending && 'opacity-25 pointer-events-none'
          }`}
        >
          <Input
            label={
              language === 'en'
                ? `Name <span className=${
                    theme === 'light'
                      ? 'text-primary-light'
                      : 'text-primary-dark'
                  }>/</span> Company`
                : `Navn <span className=${
                    theme === 'light'
                      ? 'text-primary-light'
                      : 'text-primary-dark'
                  }>/</span> Firma`
            }
            errors={errors}
            handleChange={handleChange}
            name="name"
            placeholder={
              language === 'en'
                ? 'Write your name or your company...'
                : 'Skriv dit navn eller dit firma...'
            }
            value={form.name}
          />
          <Input
            label={language === 'en' ? 'Email Address' : 'Email Adresse'}
            errors={errors}
            handleChange={handleChange}
            name="email"
            placeholder={
              language === 'en'
                ? 'Write your email address...'
                : 'Skriv din email adresse...'
            }
            value={form.email}
          />
          <Input
            label={language === 'en' ? 'Message' : 'Besked'}
            errors={errors}
            handleChange={handleChange}
            name="message"
            placeholder={
              language === 'en'
                ? 'Write your message...'
                : 'Skriv din besked...'
            }
            value={form.message}
            isTextarea
          />
        </div>
        <article className="lg:min-w-[603px] lg:pt-[56px] flex flex-col gap-[58px]">
          <Image
            src={contactPic}
            alt="Contact Picture"
            width={603}
            height={366}
            placeholder="blur"
            className={`hidden lg:block rounded-[5px] md:rounded-[10px] w-full max-h-[366px] object-about object-cover border-[2px] ${
              theme === 'light' ? 'border-black/20' : 'border-white/20'
            }`}
          />
          <button
            type="submit"
            className={`w-full lg:w-max transition-opacity ${
              isSending && 'opacity-25 pointer-events-none'
            }`}
          >
            <div className="lg:hidden">
              <SquareButton daText="Send" enText="Send" variant="long" />
            </div>
            <div
              className={`hidden lg:block w-max transition-opacity ${
                isSending && 'opacity-25 pointer-events-none'
              }`}
            >
              <Magnetic padding="p-0">
                <RoundButton daText="Send" enText="Send" variant="lg" />
              </Magnetic>
            </div>
          </button>
        </article>
      </form>

      <PopUpModal setIsOpen={setIsPopUpOpen} isOpen={isPopUpOpen}>
        <section className="flex flex-col gap-[16px]">
          <h2
            className={`text-[26px] tracking-[1.56px] uppercase font-bold ${
              theme === 'light' ? 'text-primary-light' : 'text-primary-dark'
            }`}
          >
            Succes!
          </h2>
          <p className="text-[18px] tracking-[1.08px] pb-[24px]">
            {language === 'en'
              ? 'A confirmation email has been sent to your inbox!'
              : 'En bekræftelses email er blevet sendt til din indbakke!'}
          </p>
          <SquareButton daText="OK" enText="OK" variant="long" />
        </section>
      </PopUpModal>
    </>
  );
}

import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Tailwind,
  Text,
  Font,
} from '@react-email/components';
import * as React from 'react';

interface Props {
  name: string;
  email: string;
  message: string;
  language: string;
}

const placeholderMail =
  "Dear Frederik Barbre,\n\n I'm Frank, and I'm impressed by your portfolio showcasing your skills in Next.js, React, Tailwind CSS, and TypeScript. I'm currently expanding my team at our company and believe your talents align perfectly with our needs.\n\n Your expertise in these technologies is precisely what we're seeking in a front-end developer or a similar role. Can we schedule a brief chat or video call next week to discuss this opportunity further? I'm keen to learn more about your background and how you see yourself contributing to our success.\n\n Please share your availability, and we'll set up a suitable time. Feel free to contact me via email at frank@gmail.com or by phone at +45 88 88 88 88.\n\n Thank you for considering this opportunity. I look forward to connecting with you.\n\n Best regards,\n Frank Herbert";

export default function MailToSender({
  name = 'Frank Herbert',
  email = 'frank@gmail.com',
  message = placeholderMail,
  language = 'en',
}: Props) {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Barlow"
          fallbackFontFamily="Helvetica"
          fontWeight={700}
          webFont={{
            url: 'https://fonts.gstatic.com/s/barlow/v12/7cHqv4kjgoGqM7E3t-4s51os.woff2',
            format: 'woff2',
          }}
          fontStyle={'bold'}
        />
        <Font
          fontFamily="Barlow"
          fallbackFontFamily="Helvetica"
          fontWeight={600}
          webFont={{
            url: 'https://fonts.gstatic.com/s/barlow/v12/7cHqv4kjgoGqM7E30-8s51os.woff2',
            format: 'woff2',
          }}
          fontStyle={'semibold'}
        />
        <Font
          fontFamily="Barlow"
          fallbackFontFamily="Helvetica"
          fontWeight={500}
          webFont={{
            url: 'https://fonts.gstatic.com/s/barlow/v12/7cHsv4kjgoGqM7E_CfPI42ouvTo.woff2',
            format: 'woff2',
          }}
          fontStyle={'italic'}
        />
        <Font
          fontFamily="Barlow"
          fallbackFontFamily="Helvetica"
          fontWeight={500}
          webFont={{
            url: 'https://fonts.gstatic.com/s/barlow/v12/7cHqv4kjgoGqM7E3_-gs51os.woff2',
            format: 'woff2',
          }}
          fontStyle={'medium'}
        />
      </Head>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto">
          <Container className="bg-white my-[50px]">
            <Heading className="uppercase text-[#2764FF] font-bold text-[42px] tracking-[2.52px] m-0">
              {language === "en" ? "Hey" : "Hej"} {name}👋
            </Heading>
            <Heading className="uppercase text-[34px] tracking-[2.04px] m-0">
              {language === "en" ? "Thanks for your message" : "Tak for din besked"} 
            </Heading>
            <Hr className="my-[20px] w-full bg-black/20" />
            <Text className='text-[#2764FF] uppercase text-[14px] font-medium tracking-[0.84px]'>{language === "en" ? "Your message" : "Din Besked"}:</Text>
            <Text className="whitespace-pre-line font-medium italic text-[#0E0E0E] text-[14px] tracking-[0.84px] opacity-50">
              {message}
            </Text>
            <Hr className="my-[20px] w-full bg-black/20" />
            <Heading className="uppercase text-[22px] tracking-[1.32px] font-bold m-0">
              {language === "en" ? "I'll get back to you as quick as possible." : "Jeg vender tilbage til dig så hurtigt som muligt."} 
            </Heading>
            <Heading className="uppercase text-[14px] tracking-[0.84px] font-semibold m-0 mt-[19px]">
              {language === "en" ? "Best Regards" : "Bedste Hilsner"} 
            </Heading>
            <Heading className='text-[#2764FF] text-[18px] tracking-[1.08px] font-semibold mt-[13px] uppercase inline-block'>Frederik Barbre</Heading>
            <Img src='https://avatars.githubusercontent.com/u/64972229?v=4' alt='Frederik Barbre' className='w-[40px] h-[40px] rounded-full object-cover inline-block ml-[10px] translate-y-[10px]' />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

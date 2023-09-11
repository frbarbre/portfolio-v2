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
}

const placeholderMail =
  "Dear Frederik Barbre,\n\n I'm Frank, and I'm impressed by your portfolio showcasing your skills in Next.js, React, Tailwind CSS, and TypeScript. I'm currently expanding my team at our company and believe your talents align perfectly with our needs.\n\n Your expertise in these technologies is precisely what we're seeking in a front-end developer or a similar role. Can we schedule a brief chat or video call next week to discuss this opportunity further? I'm keen to learn more about your background and how you see yourself contributing to our success.\n\n Please share your availability, and we'll set up a suitable time. Feel free to contact me via email at frank@gmail.com or by phone at +45 88 88 88 88.\n\n Thank you for considering this opportunity. I look forward to connecting with you.\n\n Best regards,\n Frank Herbert";

export default function MailToMe({
  name = 'Frank Herbert',
  email = 'frank@gmail.com',
  message = placeholderMail,
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
      </Head>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto">
          <Container className="bg-white mt-[50px]">
            <Heading className="uppercase text-[#2764FF] font-bold text-[42px] tracking-[2.52px] m-0">
              {name}
            </Heading>
            <Heading className="uppercase text-[34px] tracking-[2.04px] m-0">
              Has sent you a message
            </Heading>
            <Heading className="font-semibold text-[#2764FF] m-0 mt-[15px]">
              {email}
            </Heading>
            <Hr className="my-[20px] w-full bg-black/20" />
            <Text className="whitespace-pre-line font-medium italic text-[#0E0E0E] text-[14px] tracking-[0.84px]">
              {message}
            </Text>
            <Hr className="my-[20px] w-full bg-black/20" />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface Props {
  name: string;
  email: string;
  message: string;
}

const placeholderMail =
  "Dear Frederik Barbre, I'm Frank, and I'm impressed by your portfolio showcasing your skills in Next.js, React, Tailwind CSS, and TypeScript. I'm currently expanding my team at our company and believe your talents align perfectly with our needs. Your expertise in these technologies is precisely what we're seeking in a front-end developer or a similar role. Can we schedule a brief chat or video call next week to discuss this opportunity further? I'm keen to learn more about your background and how you see yourself contributing to our success. Please share your availability, and we'll set up a suitable time. Feel free to contact me via email at frank@gmail.com or by phone at +45 88 88 88 88. Thank you for considering this opportunity. I look forward to connecting with you. Best regards, Frank Herbert";

export default function MailToMe({
  name = 'Frank Herbert',
  email = 'frank@gmail.com',
  message = placeholderMail,
}: Props) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="bg-white shadow-lg border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Heading>Hello {name}</Heading>
            <Text className="whitespace-pre-line">{message}</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

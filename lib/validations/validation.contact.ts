import { z } from 'zod';

export const contactSchema = z.object({
  email: z.string().email("That doesn't look like an email&&Det ligner ikke en email"),
  name: z
    .string()
    .min(
      2,
      'Name / Company must be at least 2 characters long&&Navn / Firma skal længere end 2 tegn'
    )
    .max(
      50,
      'Name / Company must be less than 50 characters long&&Navn / Firma skal være kortere end 50 tegn'
    ),
  message: z
    .string()
    .min(
      10,
      'Message must be at least 10 characters long&&Beskeden skal mindst være 10 tegn langt'
    )
    .max(
      1000,
      'Message must be less than 1000 characters long&&Beskeden skal være kortere end 1000 tegn'
    ),
});

export type ContactSchema = z.infer<typeof contactSchema>;

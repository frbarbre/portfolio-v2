import { z } from 'zod';

export const contactSchema = z.object({
  email: z.string().email("That doesn't look like an email"),
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters long')
    .max(50, 'Name must be less than 50 characters long'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters long')
    .max(1000, 'Message must be less than 1000 characters long'),
});

export type ContactSchema = z.infer<typeof contactSchema>;

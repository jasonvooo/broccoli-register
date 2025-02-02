import { z } from 'zod'

export const inviteFormSchema = z
    .object({
        name: z.string().trim().min(3, { message: 'Name must have at least 3 characters' }),
        email: z.string().email({ message: 'Invalid email' }),
        confirmEmail: z.string().email({ message: 'Invalid email' }),
    })
    .refine((data) => data.email && data.confirmEmail && data.email === data.confirmEmail, {
        message: "Emails don't match",
        path: ['confirmEmail'],
    })

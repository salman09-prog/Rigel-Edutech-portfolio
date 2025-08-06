import { z } from "zod";

export const messageSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be of 2 characters")
    .max(20, "Name must be no more than 20 characters"),
  email: z.string(),
  subject: z.string().min(2),
  message: z
    .string()
    .min(10, "Messsage must be of atleast 10 characters")
    .max(300, "Message must not exceed 300 characters"),
});

import { z } from "zod";

export const userSchema = z.object({
  name: z.string(),
  age: z.number().min(20, { message: "You must be at least 20 years old" }),
  timestamp: z.coerce.date(),
  email: z.string({ message: "Email is required" }).email({ message: "Invalid email address" }),
});

export type User = z.infer<typeof userSchema>;

import { z } from "zod";

export const userSchema = z.object({
  name: z.string(),
  age: z.number(),
  timestamp: z.coerce.date(),
  email: z.string({ message: "Email is required" }).email({ message: "Invalid email address" }),
});

export type User = z.infer<typeof userSchema>;

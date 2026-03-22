import * as z from "zod";

export const RegisterBody = z
  .object({
    username: z.string().trim().max(50),
    email: z.email(),
    password: z.string().min(6).max(100),
    confirmPassword: z.string().min(6).max(100),
  })
  .strict()
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Mật khẩu không khớp",
        path: ["confirmPassword"],
      });
    }
  });
export type RegisterBodyType = z.infer<typeof RegisterBody>;

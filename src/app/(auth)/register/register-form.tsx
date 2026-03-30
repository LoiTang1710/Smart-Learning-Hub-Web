"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import {
  RegisterBody,
  RegisterBodyType,
} from "@/src/schemaValidation/auth.schema";
import envConfig from "@/src/config";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<RegisterBodyType>({
    resolver: zodResolver(RegisterBody),
    defaultValues: {
      email: "",
      fullName: "",
      password: "",
      confirmPassword: "",
    },
  });
  const formRegisterFields: Array<{
    name: keyof RegisterBodyType;
    label: string;
    type: string;
    placeholder: string;
  }> = [
    {
      name: "fullName",
      label: "Họ và tên",
      type: "text",
      placeholder: "Nguyễn Văn A",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "example@gmail.com",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "••••••••`",
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      type: "confirmPassword",
      placeholder: "••••••••`",
    },
  ];

  async function onSubmit(values: RegisterBodyType) {
    const result = await fetch(
      `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/auth/register`,
      {
        body: JSON.stringify(values),
        headers: {
          "Content-type": "Application/json",
        },
        method: "POST",
      },
    ).then((res) => res.json());
    console.log(result);
  }
  return (
    <form id="form-rhf-register" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup className="gap-2">
        {formRegisterFields.map((item) => (
          <Controller
            key={item.name}
            name={item.name}
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-1 mt-2">
                <FieldLabel htmlFor={`form-rhf-register-${item.name}`}>
                  {item.label}
                </FieldLabel>
                <div className="relative">
                  <Input
                    {...field}
                    id={`form-rhf-${item.name}`}
                    type={(item.type === "password" && showPassword) ? "text" : item.type}
                    placeholder={item.placeholder}
                  />
                  {item.type === "password" && (
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <Eye
                          size={20}
                          className="opacity-40 hover:opacity-100"
                        />
                      ) : (
                        <EyeOff
                          size={20}
                          className="opacity-40 hover:opacity-100"
                        />
                      )}
                    </button>
                  )}
                </div>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        ))}
      </FieldGroup>
    </form>
  );
};

export default RegisterForm;

"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { toast } from "sonner";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { LoginBody, LoginBodyType } from "@/src/schemaValidation/auth.schema";
import envConfig from "@/src/config";

const LoginForm = () => {
  const form = useForm<LoginBodyType>({
    resolver: zodResolver(LoginBody),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const formLoginFields: Array<{
    name: keyof LoginBodyType;
    label: string;
    type: string;
    placeholder: string;
  }> = [
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
      placeholder: "********",
    },
  ];

  async function onSubmit(values: LoginBodyType) {
    try {
      const result = await fetch(
        `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/auth/login`,
        {
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "Application/json",
          },
          method: "POST",
        },
      ).then(async (res) => {
        const payload = await res.json();
        const data = {
          status: res.status,
          payload,
        };
        if (!res.ok) throw data;
        return data;
      });
    } catch (error: unknown) {
      const errorResponse = error as {
        status: number;
        payload: {
          error: string;
          message: string;
        };
      };
      if (errorResponse.status === 401) {
        form.setError("password", {
          type: "server",
          message: errorResponse.payload.message,
        });
      }
      else {
        toast.error(errorResponse.payload.message)
      }
    }
  }
  return (
    <form id="form-rhf-login" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup className="gap-2">
        {formLoginFields.map((item) => (
          <Controller
            key={item.name}
            name={item.name}
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-1 mt-2">
                <FieldLabel htmlFor={`form-rhf-login-${item.name}`}>
                  {item.label}
                </FieldLabel>
                <Input
                  {...field}
                  id={`form-rhf-${item.name}`}
                  type={item.type}
                  placeholder={item.placeholder}
                />
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

export default LoginForm;

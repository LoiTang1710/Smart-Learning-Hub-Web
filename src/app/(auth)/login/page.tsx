"use client"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field } from "@/components/ui/field";
import LoginForm from "./login-form";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full sm:max-w-md ">
        <CardHeader>
          <CardTitle className="text-2xl font-extrabold">
            Chào mừng trở lại
          </CardTitle>
          <CardDescription className="mt-1">
            Bắt đầu hành trình học tập của bạn
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter>
          <Field orientation="vertical">
            <Button
              type="submit"
              form="form-rhf-login"
              variant="default"
              className="ct-auth-card-button"
            >
              Đăng nhập
            </Button>
            <div className="ct-auth-asking-father">
              <span>Bạn chưa có tài khoản?</span>
              <Link href="/register" className="ct-auth-asking-input">
                Đăng ký
              </Link>
            </div>
          </Field>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;

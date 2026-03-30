"use client";
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
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-w-screen w-screen h-screen">
      <div className="w-1/2 h-full flex items-center justify-center p-8">
        <Card className=" w-full sm:max-w-md">
          <CardHeader>
            <CardContent className="mb-8 p-0 flex">
              <Image
                src="/Logo-ĐH-Công-Nghệ-Sài-Gòn-STU.svg"
                alt="logo"
                width={80}
                height={80}
              />
              <CardContent className="p-0 pl-4 flex flex-col justify-center">
                <CardTitle className="text-2xl">Smart Learning Hub</CardTitle>
                <CardDescription>
                  Trường Đại học Công Nghệ Sài Gòn
                </CardDescription>
              </CardContent>
            </CardContent>
            <CardTitle className="text-4xl font-semibold">
              Chào mừng trở lại
            </CardTitle>
            <CardDescription className="mt-2 text-md">
              Đăng nhập để bắt đầu hành trình học tập của bạn
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
                  Đăng ký ngay
                </Link>
              </div>
            </Field>
          </CardFooter>
        </Card>
      </div>
      <div className="w-1/2 h-full block bg-linear-to-br from-primary/10 to-ai-gradient-end/10 flex-1">
        <div className="flex flex-col mx-auto p-8 items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-primary-400 text-center">
            Nền tảng học tập <br />
            thông minh với AI
          </h1>
          <p className="text-center mt-6 text-primary-700/40">
            Trải nghiệm học tập được cá nhân hóa với trợ lý AI, lộ trình <br />
            học tập thông minh và hàng nghìn khóa học chất lượng cao
          </p>
          <div className="grid grid-cols-3 gap-16 mt-12"> 
            <div className="flex flex-col text-center"> 
              <span className="text-3xl font-bold text-primary-500">1000+</span>
              <span className="text-primary-900/60">Khoá học</span>
            </div>
            <div className="flex flex-col text-center"> 
              <span className="text-3xl font-bold text-primary-500">5000+</span>
              <span className="text-primary-900/60">Học viên</span>
            </div>
            <div className="flex flex-col text-center"> 
              <span className="text-3xl font-bold text-primary-500">100+</span>
              <span className="text-primary-900/60">Giảng viên</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

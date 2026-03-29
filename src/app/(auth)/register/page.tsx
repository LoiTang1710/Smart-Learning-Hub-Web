import RegisterForm from "./register-form";
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
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full sm:max-w-md ">
        <CardHeader>
          <CardTitle className="text-2xl font-extrabold">
            Tạo tài khoản mới
          </CardTitle>
          <CardDescription className="mt-1">
            Bắt đầu hành trình học tập của bạn
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
        <CardFooter>
          <Field orientation="vertical">
            <Button
              type="submit"
              form="form-rhf-register"
              variant="default"
              className="ct-auth-card-button"
            >
              Tạo tài khoản
            </Button>
            <div className="ct-auth-asking-father">
              <span>Bạn đã có tài khoản?</span>
              <Link className="ct-auth-asking-input" href="/login">
                Đăng nhập
              </Link>
            </div>
          </Field>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegisterPage;

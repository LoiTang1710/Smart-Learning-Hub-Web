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
          <Field orientation="horizontal">
            <Button
              type="submit"
              form="form-rhf-login"
              variant="default"
              className="w-full py-5 bg-[#F39C12] hover:bg-[#E67E22]"
            >
              Đăng nhập
            </Button>
          </Field>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;

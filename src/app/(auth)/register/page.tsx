
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
          <Field orientation="horizontal">
            <Button
              type="submit"
              form="form-rhf-register"
              variant="default"
              className="w-full py-5 bg-[#F39C12] hover:bg-[#E67E22]"
            >
              Tạo tài khoản
            </Button>
          </Field>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegisterPage;

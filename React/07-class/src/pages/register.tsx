import RegisterForm from "../components/molecules/RegisterForm";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const register = () => {
  return (
    <main className="flex flex-col h-screen justify-center items-center gap-4">
      <h1 className="text-4xl font-bold">Register</h1>
      <p>Enter your Email to Login</p>
      <Card className="w-1/3">
        <CardHeader>
          <CardTitle>Hello User</CardTitle>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
      </Card>
    </main>
  );
};

export default register;

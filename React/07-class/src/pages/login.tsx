import { Link } from "react-router-dom";
import LoginForm from "../components/molecules/LoginForm";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const Login = () => {
  return (
    <main className="flex flex-col h-screen justify-center items-center gap-4">
      <h1 className="text-4xl font-bold">Login</h1>
      <p>Enter your Email to Login</p>
      <Card className="w-1/3">
        <CardHeader>
          <CardTitle>Hello User</CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter>
          <Link to="/register" className="underline">
            New here? Create an account
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
};

export default Login;

import { Button, Card, CardFooter, CardHeader, Input } from "@nextui-org/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import { useStore } from "../../stores/authStores"; // Adjust the path as needed
import { auth } from "../../lib/firebase"; // Adjust the path as needed

interface LoginFormInterface {
  email: string;
  password: string;
}

const Login = () => {
  const { logIn } = useStore();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInterface>();

  const onSubmit: SubmitHandler<LoginFormInterface> = async (values) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      console.log("Login successful");
      logIn();
      navigate("/"); // Redirect to home or another page after successful login
    } catch (error) {
      console.error("Error logging in with email and password", error);
      alert("Login failed. Please check your credentials and try again.");
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      console.log("Google Sign-In successful");
      logIn();
      navigate("/"); // Redirect to home or another page after successful login
    } catch (error) {
      console.error("Error with Google Sign-In", error);
      alert("Google Sign-In failed. Please try again.");
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <Card className="w-96 p-8 flex flex-col gap-4">
        <CardHeader>
          <h1 className="text-2xl text-violet-600 font-bold">Login Here</h1>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <Input
              {...register("email", { required: "Email is required" })}
              type="email"
              label="Email"
              variant="bordered"
              className="max-w-xs"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email?.message}</span>
            )}
          </div>
          <div>
            <Input
              {...register("password", { required: "Password is required" })}
              type="password"
              label="Password"
              variant="bordered"
              className="max-w-xs"
            />
            {errors.password && (
              <span className="text-red-500">{errors.password?.message}</span>
            )}
          </div>
          <Button type="submit" color="primary">
            Login
          </Button>
          <Button color="secondary" onClick={handleGoogleSignIn}>
            Sign In with Google
          </Button>
        </form>
        <CardFooter>
          <Link to="/signup" className="underline text-purple-600">
            New Here? Register Now
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;

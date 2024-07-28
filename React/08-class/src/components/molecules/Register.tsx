import { Button, Card, CardFooter, CardHeader, Input } from "@nextui-org/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { auth } from '../../lib/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

interface RegisterFormInterface {
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormInterface>();

  const onSubmit: SubmitHandler<RegisterFormInterface> = async (values) => {
    if (values.password === values.confirmPassword) {
      try {
        await createUserWithEmailAndPassword(auth, values.email, values.password);
        alert('Registration successful!');
      } catch (error) {
        console.error("Error registering user:", error);
        alert('Registration failed. Please try again.');
      }
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <Card className="w-96 p-8 flex flex-col gap-4">
        <CardHeader>
          <h1 className="text-2xl text-violet-600 font-bold">Register Here</h1>
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
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </div>
          <div>
            <Input
              {...register("password", { required: "Password is required" })}
              type="password"
              label="Password"
              variant="bordered"
              className="max-w-xs"
            />
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
          </div>
          <div>
            <Input
              {...register("confirmPassword", { required: "Confirm Password is required" })}
              type="password"
              label="Confirm Password"
              variant="bordered"
              className="max-w-xs"
            />
            {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}
          </div>
          <Button type="submit" color="secondary">
            Register
          </Button>
        </form>
        <CardFooter>
          <Link to='/login' className="underline text-purple-600">Already registered? Login Here</Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;

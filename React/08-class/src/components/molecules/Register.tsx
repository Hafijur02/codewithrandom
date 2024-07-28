import { Button, Card, CardHeader, Input } from "@nextui-org/react";

const Register = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <Card className="w-96 p-8 flex flex-col gap-4">
        <CardHeader>
          <h1 className="text-2xl text-violet-600 font-bold">Register Here</h1>
        </CardHeader>
        <Input
          type="email"
          label="Email"
          variant="bordered"
          className="max-w-xs"
        />
        <Input
          type="password"
          label="Password"
          variant="bordered"
          className="max-w-xs"
        />
        <Input
          type="password"
          label="Confirm Password"
          variant="bordered"
          className="max-w-xs"
        />
        <Button color="secondary">Login</Button>
      </Card>
    </div>
  );
};

export default Register;

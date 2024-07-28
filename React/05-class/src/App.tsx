import { Label } from "@radix-ui/react-label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { useState } from "react";
import { EyeIcon, EyeOff } from "lucide-react";

const App = () => {
  const [passwordVisibility, setPasswordVisibility] = useState("password");
  return (
    <main className="flex flex-col h-screen justify-center items-center">
      <h1>Login</h1>
      <p>Enter your Email to Login</p>
      <Card className="w-1/3">
        <CardHeader>
          <CardTitle>Hello User</CardTitle>
        </CardHeader>
        <CardContent>
          <Label>Enter your Email</Label>
          <Input type="email" className="mt-1" />
          <Label>Password</Label>
          <div className="flex mt-1">
            <Input type={passwordVisibility} />

            <Button
              size={"icon"}
              className="ml-2"
              onClick={() => {
                if (passwordVisibility === "password") {
                  setPasswordVisibility("text");
                } else {
                  setPasswordVisibility("password");
                }
              }}
            >
              {passwordVisibility === "text" ? <EyeIcon /> : <EyeOff />}
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Login</Button>
        </CardFooter>
      </Card>
    </main>
  );
};

export default App;

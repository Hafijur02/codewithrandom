import LoginForm from "./components/molecules/LoginForm";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";

const App = () => {
  return (
    <main className="flex flex-col h-screen justify-center items-center">
      <h1>Login</h1>
      <p>Enter your Email to Login</p>
      <Card className="w-1/3">
        <CardHeader>
          <CardTitle>Hello User</CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm/>
        </CardContent>
      </Card>
    </main>
  );
};

export default App;

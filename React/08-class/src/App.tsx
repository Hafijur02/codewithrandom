import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/molecules/Layout";
import Feed from "./components/molecules/Feed";
import Chat from "./components/molecules/Chat";
import Account from "./components/molecules/Account";
import Login from "./components/molecules/Login";
import Register from "./components/molecules/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Feed />} />
          <Route path="chat" element={<Chat />} />
          <Route path="account" element={<Account />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

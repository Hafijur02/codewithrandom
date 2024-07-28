import { Button } from "@nextui-org/button";
import Navbar from "../ui/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <Button className="fixed z-50 top-4 right-4" color="secondary">Logout</Button>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;

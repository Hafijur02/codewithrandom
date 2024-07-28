import { Button } from "@nextui-org/button";
import Navbar from "../ui/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react"; // Adjust the import path if needed
import { auth } from "../../lib/firebase";
import { signOut } from "firebase/auth";

const Layout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Logged out");
      navigate("/login"); // Redirect to the login page after logout
    } catch (error) {
      console.error("Error logging out:", error);
      alert("Logout failed. Please try again.");
    }
  };

  return (
    <div>
      <Button
        className="fixed z-50 top-4 right-4"
        color="secondary"
        onClick={handleLogout}
      >
        <LogOut className="h-5" />
        Logout
      </Button>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;

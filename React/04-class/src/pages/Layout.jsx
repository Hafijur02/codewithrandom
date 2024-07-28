import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Layout = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <nav className="fixed top-0 w-screen h-8 bg-blue-400">
        <ul className="hidden md:flex w-full justify-center items-center gap-4 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="flex sm:hidden">
          {open ? (
            <div>
              <ul className="flex w-full justify-center items-center gap-4 ">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
              <X onClick={() => setOpen(false)} />
            </div>
          ) : (
            <Menu onClick={() => setOpen(true)} />
          )}
        </div>
      </nav>
      <div className="mt-16">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;

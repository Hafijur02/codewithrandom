import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-[340px] h-14 bg-zinc-200 opacity-90 backdrop-blur-lg rounded-full flex justify-center items-center fixed bottom-0 z-50">
      <ul className="w-full flex justify-around">
        <li>
          <Link to="/">Feed</Link>
        </li>
        <li>
          <Link to="/chat">Chat</Link>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

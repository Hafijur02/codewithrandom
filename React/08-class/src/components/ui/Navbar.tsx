import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center items-center fixed bottom-4 z-50">
      <nav className="w-11/12 sm:w-[340px] h-14 bg-zinc-300 opacity-90 backdrop-blur-lg rounded-full flex justify-around items-center shadow-lg">
        <ul className="w-full flex justify-around items-center">
          <li>
            <Link
              to="/"
              className="text-lg text-violet-600 font-semibold hover:text-gray-800 transition-colors duration-300"
            >
              Feed
            </Link>
          </li>
          <li>
            <Link
              to="/chat"
              className="text-lg text-violet-600 font-semibold hover:text-gray-800 transition-colors duration-300"
            >
              Chat
            </Link>
          </li>
          <li>
            <Link
              to="/account"
              className="text-lg text-violet-600 font-semibold hover:text-gray-800 transition-colors duration-300"
            >
              Account
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

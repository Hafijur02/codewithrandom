import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-11/12 sm:w-1/2 h-16 bg-violet-600 fixed bottom-4 z-50 flex justify-center items-center rounded-full shadow-lg mx-auto left-1/2 transform -translate-x-1/2">
      <ul className="w-full flex flex-col sm:flex-row justify-around items-center sm:space-x-4 space-y-2 sm:space-y-0">
        <li>
          <Link
            to="/"
            className="text-lg text-white font-semibold hover:text-gray-200 transition-colors duration-300 px-4 py-2 rounded"
          >
            Feed
          </Link>
        </li>
        <li>
          <Link
            to="/chat"
            className="text-lg text-white font-semibold hover:text-gray-200 transition-colors duration-300 px-4 py-2 rounded"
          >
            Chat
          </Link>
        </li>
        <li>
          <Link
            to="/account"
            className="text-lg text-white font-semibold hover:text-gray-200 transition-colors duration-300 px-4 py-2 rounded"
          >
            Account
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

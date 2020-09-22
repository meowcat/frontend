import React, { useState } from 'react';
import { Link, useNavigate } from '@reach/router';

interface HeaderProps {
  routes: Array<{ name: string; path: string }>;
  path?: string;
}

const Header = ({ routes, path }: HeaderProps) => {
  const [toogle, setToogle] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.clear();
    navigate('/signin');
  };

  return (
    <nav className="bg-gray-800">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
              aria-label="Main menu"
              aria-expanded="false"
              onClick={() => setToogle(!toogle)}
            >
              {/* Icon when menu is closed. */}
              <svg
                className={`${toogle ? 'hidden' : 'block'} w-6 h-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open. */}
              <svg
                className={`${toogle ? 'block' : 'hidden'} w-6 h-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
            <div className="flex">
              <span className="px-3 py-2 text-lg leading-5 text-gray-300 font-large">
                MYLIMS
              </span>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex">
                {routes.map(({ name, path: key }) => (
                  <Link
                    key={key}
                    to={key}
                    className={
                      path === key
                        ? 'mx-1 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md focus:outline-none focus:text-white focus:bg-gray-700 '
                        : 'mx-1 px-3 py-2 text-sm font-medium leading-5 text-gray-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'
                    }
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Profile dropdown */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3">
              <div>
                <button
                  className="p-1 text-gray-400 transition duration-150 ease-in-out border-4 border-transparent rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
                  id="user-menu"
                  aria-label="User menu"
                  aria-haspopup="true"
                  onClick={() => setUserMenu(!userMenu)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </button>
              </div>

              <div
                className={`${
                  userMenu ? 'absolute' : 'hidden'
                } right-0 w-48 origin-top-right rounded-md mt-1 shadow-lg`}
              >
                <div
                  className="py-1 bg-white rounded-md shadow-xs"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <Link
                    to="/profile"
                    role="menuitem"
                    className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                  >
                    My profile
                  </Link>
                  <button
                    className="block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                    role="menuitem"
                    onClick={signOut}
                  >
                    Sign out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, toggle classNamees based on menu state */}
      <div className={`${toogle ? 'block' : 'hidden'} sm:hidden`}>
        <div className="px-2 pt-2 pb-3">
          {routes.map(({ name, path: key }) => (
            <Link
              key={key}
              to={key}
              className={
                path === key
                  ? 'block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md focus:outline-none focus:text-white focus:bg-gray-700'
                  : 'block px-3 py-2 mt-1 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'
              }
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;

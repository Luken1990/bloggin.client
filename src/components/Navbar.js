import { Fragment, useState, useContext } from 'react';
import * as FaIcons from 'react-icons/fa';
import { userContext } from '../context/userContext';
import { Link } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';

//nav component
export const Navbar = () => {
  const token = JSON.parse(sessionStorage.getItem('token'));
  const [user, setUser] = useContext(userContext);
  const [show, setShow] = useState(false);

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  //on click remove user token from session storage
  const handleLogout = (e) => {
    sessionStorage.removeItem('token');
    setUser('');
  };

  //nav element containing a logo and button to allow user to login and navigate the website
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to={'/'}>
                    <h6 className="text-xl font-bold tracking-wide text-white">
                      BloggIn.
                    </h6>
                  </Link>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      {token ? (
                        <>
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full object-cover"
                            src={user.picture}
                            alt={user.name}
                          />
                        </>
                      ) : (
                        <FaIcons.FaUserCircle className="text-3xl text-white" />
                      )}
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {token ? (
                        <>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/profile"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          {user.admin ? (
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="/admin"
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  Admin
                                </a>
                              )}
                            </Menu.Item>
                          ) : null}
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                onClick={handleLogout}
                                href="/"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </>
                      ) : (
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/sign"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Login / Register
                            </a>
                          )}
                        </Menu.Item>
                      )}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Sign = () => {
  const [signIn, setSignIn] = useState(true);
  const nameRef = useRef('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const data = { email, password };

    const response = await fetch(
      'https://bloggin-api.onrender.com/users/login',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.status === 200) {
      const currentUser = await response.json();
      sessionStorage.setItem('token', JSON.stringify(currentUser.token));
      navigate('/profile');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      email,
      password,
    };

    const response = await fetch(
      'https://bloggin-api.onrender.com/users/register',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.status === 201) {
      const currentUser = await response.json();
      sessionStorage.setItem('token', JSON.stringify(currentUser.token));
      navigate('/profile');
    }
  };

  return (
    <div className="flex h-[calc(100vh-216px)] items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h6 className="text-center text-xl font-bold tracking-wide text-darkBlue">
            BloggIn.
          </h6>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            {signIn ? 'Sign in to your account' : 'Start your bloggin journey'}
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            {signIn ? null : (
              <div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-midBlue focus:outline-none focus:ring-midBlue sm:text-sm"
                  placeholder="Full name"
                  ref={nameRef}
                />
              </div>
            )}
            <div>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-midBlue focus:outline-none focus:ring-midBlue sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-midBlue focus:outline-none focus:ring-midBlue sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              onClick={signIn ? handleSignIn : handleRegister}
              // type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-lightBlue py-2 px-4 text-sm font-medium text-white hover:bg-midBlue focus:outline-none focus:ring-2 focus:ring-midBlue focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                {signIn ? (
                  <AiIcons.AiOutlineLock
                    className="h-5 w-5 text-midBlue group-hover:text-white"
                    aria-hidden="true"
                  />
                ) : (
                  <BsIcons.BsPencilSquare
                    className="h-5 w-5 text-midBlue group-hover:text-white"
                    aria-hidden="true"
                  />
                )}
              </span>
              {signIn ? 'Sign in' : 'Sign up'}
            </button>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            <button
              className="font-medium text-lightBlue hover:text-midBlue"
              onClick={(e) => {
                e.preventDefault();
                setSignIn(!signIn);
                setEmail('');
                setPassword('');
              }}
            >
              {signIn ? 'Register' : 'Login'}
            </button>
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sign
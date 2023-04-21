import { useContext, useEffect, Fragment, useRef, useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import { userContext } from '../../context/userContext';
import { MdBlogCard } from '../../components/MdBlogCard';
import { AddForm } from './AddForm';
import { UserInfoModal } from './UserInfoModal';

const Profile = () => {
  const [user, setUser] = useContext(userContext);

  if (!user) return '';

  return (
    <div className="container mx-auto my-24 max-w-7xl">
      <div className="mx-6 lg:mx-8">
        <div className="md:grid md:grid-cols-4 md:gap-6">
          <div className="md:col-span-2 ">
            <div className="shadow sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                <div className="relative flex flex-col items-center justify-center">
                  {user.picture ? (
                    <figure className="mb-5 h-40 w-40 overflow-hidden rounded-full">
                      <img
                        className="h-full w-full object-cover"
                        src={user.picture}
                        alt={user.name}
                      />
                    </figure>
                  ) : null}
                  <UserInfoModal user={user} />
                  <h3 className="mb-1 text-xl">{user.name}</h3>
                  <p className="mb-1 text-sm text-midGrey">{user.email}</p>
                  {/* <p className="text-xs text-midGrey">{user.country}</p> */}
                </div>

                <div className="flex justify-center gap-3 text-2xl text-midBlue ">
                  <>
                    {user.linkedin ? (
                      <a className="hover:text-darkBlue" href={user.linkedin}>
                        <AiIcons.AiOutlineLinkedin />
                      </a>
                    ) : null}
                    {user.github ? (
                      <a className="hover:text-darkBlue" href={user.github}>
                        <AiIcons.AiOutlineGithub />
                      </a>
                    ) : null}
                    {user.website ? (
                      <a className="hover:text-darkBlue" href={user.website}>
                        <BsIcons.BsGlobe2 />
                      </a>
                    ) : null}
                  </>
                </div>
              </div>
            </div>
            <AddForm />
          </div>

          <div className="mt-5 md:col-span-2 md:mt-0">
            <MdBlogCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

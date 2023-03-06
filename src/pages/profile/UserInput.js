import { useContext, useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import { userContext } from '../../context/userContext';
import { editUserInfo } from '../../apiCalls/userApiCalls';

export const UserInput = ({ data, closeModal }) => {
  // const token = JSON.parse(sessionStorage.getItem('token'));
  const [user, setUser] = useContext(userContext);
  const [updateUser, setUpdatedUser] = useState(data);

  const socials = [
    {
      name: 'picture',
      icons: <AiIcons.AiOutlinePicture />,
      placeholder: 'Profile Picture',
      value: updateUser.picture,
    },
    {
      name: 'linkedin',
      icons: <AiIcons.AiOutlineLinkedin />,
      placeholder: 'LinkedIn Account',
      value: updateUser.linkedin,
    },
    {
      name: 'github',
      icons: <AiIcons.AiOutlineGithub />,
      placeholder: 'GitHub Account',
      value: updateUser.github,
    },
    {
      name: 'website',
      icons: <BsIcons.BsGlobe2 />,
      placeholder: 'www.website.com',
      value: updateUser.website,
    },
  ];

  const handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUpdatedUser({ ...updateUser, [name]: value });
  };

  const handleUpdate = async () => {
    editUserInfo('https://bloggin-api.onrender.com/users/update', updateUser);
    setUser(updateUser);
    closeModal();
  };

  return (
    <form className="mx-auto my-12 max-w-xs px-4">
      {socials.map(({ name, icons, placeholder, value }, index) => {
        return (
          <div
            key={index}
            className="mb-3 flex items-center rounded-md border text-gray-400"
          >
            <div className="rounded-l-md border-r bg-gray-50 px-3 py-2.5">
              {icons}
            </div>
            <input
              className="mx-2 w-full border-none bg-transparent p-1 text-sm outline-none"
              type="text"
              name={name}
              placeholder={placeholder}
              value={value}
              onChange={handleInput}
            />
          </div>
        );
      })}
      <button
        type="button"
        onClick={handleUpdate}
        className="w-full rounded-md bg-nightBlue py-2.5 text-center font-semibold text-white hover:bg-darkBlue"
      >
        Save
      </button>
    </form>
  );
};

import * as AiIcons from 'react-icons/ai';

//footer component which return all social media links and copyright info
export const Footer = () => {
  const socials = [
    {
      logo: <AiIcons.AiFillGithub />,
      link: '#',
    },
    {
      logo: <AiIcons.AiFillLinkedin />,
      link: '#',
    },
    {
      logo: <AiIcons.AiOutlineInstagram />,
      link: '#',
    },
    {
      logo: <AiIcons.AiOutlineTwitter />,
      link: '#',
    },
    {
      logo: <AiIcons.AiFillFacebook />,
      link: '#',
    },
  ];

  return (
    <footer className=" bg-nightBlue text-center">
      <div className="pt-9">
        <div className="mb-9 flex justify-center">
          {socials.map((icon, index) => {
            return (
              <a
                key={index}
                className="mr-9 text-2xl text-midBlue hover:text-white"
                href={icon.link}
              >
                {icon.logo}
              </a>
            );
          })}
        </div>
      </div>

      <div className="bg-nightBlue p-4 text-center text-white ">
        © 2023 Copyright:
        <a href="#"> Bloggin.</a>
      </div>
    </footer>
  );
};

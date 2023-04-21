import { formatISO9075 } from 'date-fns';
import { Link } from 'react-router-dom';

export const Hero = ({ newBlog }) => {
  const { _id, heading, text, image, createdAt } = newBlog;

  return (
    <div
      style={{ '--image-url': `url(${image})` }}
      className="h-[50dvh] bg-[image:var(--image-url)] bg-cover bg-center"
    >
      <div className="container mx-auto flex h-full max-w-7xl items-center px-6 xl:px-0">
        <div className="rounded-lg bg-white p-6 lg:max-w-lg">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight  md:text-5xl xl:text-5xl">
            {heading}
          </h1>
          <small className="text-xs text-midGrey">
            {formatISO9075(new Date(createdAt))}
          </small>
          <div
            className='className="mb-6 lg:text-xl" mt-2 max-w-2xl font-light text-darkGrey md:text-lg lg:mb-8'
            dangerouslySetInnerHTML={{
              __html: text.length > 200 ? text.substring(0, 200) + '...' : text,
            }}
          />

          <div className="mt-6 flex flex-col space-y-3 lg:flex-row lg:space-y-0">
            <Link to={`/article/${_id}`}>
              <p
                href={`/article/${_id}`}
                className="text-nighBlue text-sm font-semibold leading-6 hover:text-midBlue"
              >
                Continue Reading <span aria-hidden="true">→</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
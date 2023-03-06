import { formatISO9075 } from 'date-fns';

export const Hero = ({ newBlog }) => {
  const { _id, heading, text, image, createdAt } = newBlog;

  return (
    <div className="gap-4 container mx-auto flex flex-col space-y-6 px-6 py-10 lg:h-[32rem] lg:flex-row lg:items-center lg:py-16 xl:gap-0">
      <div className="w-full lg:w-1/2">
        <div className="lg:max-w-lg">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight  md:text-5xl xl:text-6xl">
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
            <a
              href={`/article/${_id}`}
              className="text-nighBlue text-sm font-semibold leading-6 hover:text-midBlue"
            >
              Continue Reading<span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="flex h-96 w-full items-center justify-center lg:w-1/2">
        <img
          className="h-full w-full max-w-2xl rounded-md object-cover"
          src={image}
          alt="glasses photo"
        />
      </div>
    </div>
  );
};

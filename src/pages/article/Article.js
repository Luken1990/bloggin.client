import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { userContext } from '../../context/userContext';
import { formatISO9075 } from 'date-fns';

export const Article = () => {
  const [article, setArticle] = useState(null);
  const [author, setAuthor] = useState('');
  const { id } = useParams();

  const getBlog = async () => {
    const response = await fetch(`https://bloggin-api.onrender.com/blogs/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const blogData = await response.json();
    setArticle(blogData);

    const authorResponse = await fetch(
      `https://bloggin-api.onrender.com/users/${blogData.user}`,
      {
        headers: {
          headers: { 'Content-Type': 'application/json' },
        },
      }
    );
    const authorData = await authorResponse.json();
    setAuthor(authorData);
  };

  useEffect(() => {
    getBlog();
  }, []);

  if (!article) return '';

  const { _id, image, heading, tags, text, createdAt, likes } = article;
  return (
    <div className="container mx-auto my-24 max-w-7xl">
      <div className="md:grid md:grid-cols-4 md:gap-10 px-8">
        <figure className="mb-10 overflow-hidden rounded-2xl md:col-span-2 md:mb-0">
          <img
            className="h-full w-full object-cover"
            src={image}
            alt={heading}
          />
        </figure>
        <div className="md:col-span-2 ">
          <div id="tags" className="mb-5 flex flex-wrap gap-3">
            {tags.map((item, index) => {
              return (
                <span
                  key={index}
                  className="rounded-md bg-midBlue px-2 py-1 text-xs text-white"
                >
                  {item}
                </span>
              );
            })}
          </div>
          <h1 className="mb-5 text-3xl">{heading}</h1>
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center justify-center gap-3">
              <figure className="h-10 w-10 overflow-hidden rounded-full">
                <img
                  className="h-full w-full object-cover"
                  src={author.picture}
                  alt={author.name}
                />
              </figure>
              <p className="text-sm font-semibold">{author.name}</p>
            </div>
            <small className="text-xs text-midGrey">
              {formatISO9075(new Date(createdAt))}
            </small>
          </div>
          <div
            className="leading-relaxed text-darkGrey"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
      </div>
    </div>
  );
};

//       <h4 className="mb-10 text-sm italic">{article.subHeading}</h4>

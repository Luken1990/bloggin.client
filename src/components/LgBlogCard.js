import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { formatISO9075 } from 'date-fns';
import * as AiIcons from 'react-icons/ai';
import { blogsContext } from '../context/blogsContext';

export const LgBlogCard = (prop) => {
  const { _id, image, heading, tags, text, createdAt, likes, user } = prop.post;
  const token = JSON.parse(sessionStorage.getItem('token'));
  const [author, setAuthor] = useState('');
  const [blogs, setBlogs] = useContext(blogsContext);

  // patch request that store user id to indicate the user has liked the blog
  const handleLikes = async () => {
    const response = await fetch(`https://bloggin-api.onrender.com/blogs/${_id}`, {
      method: 'PATCH',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();

    //map through blogs
    //if blog id matches id update the blog else return blog
    const filteredBlog = blogs.map((blog) =>
      blog._id === _id ? (blog = result) : blog
    );
    //if response is ok set blog to the updated blog
    if (response.status === 200) {
      setBlogs(filteredBlog);
    }
  };

  //get the author of the current blog
  const getAuthor = async () => {
    const response = await fetch(`https://bloggin-api.onrender.com/users/${user._id}`, {
      headers: {
        headers: { 'Content-Type': 'application/json' },
      },
    });
    const authorInfo = await response.json();
    setAuthor(authorInfo);
  };

  useEffect(() => {
    getAuthor();
  }, []);

  //copy the blog article link to clipboard
  const handleLink = (e) => {
    navigator.clipboard.writeText(`https://bloggin-ncif.onrender.com//article/${_id}`);
  };

  //return a article containing user blog information
  return (
    <article className="box-border p-8 shadow sm:overflow-hidden sm:rounded-md">
      <figure className="mb-5 ">
        <Link to={`/article/${_id}`}>
          <img className="h-72 w-full object-cover" src={image} alt={heading} />
        </Link>
      </figure>

      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <figure className="h-9 w-9 overflow-hidden rounded-full">
            <img
              className="h-full w-full object-cover"
              src={author.picture}
              alt={author.name}
            />
          </figure>
          <div>
            <h6 className="text-sm font-semibold">{author.name}</h6>
            <small className="text-xs text-midGrey">
              {formatISO9075(new Date(createdAt))}
            </small>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <Link to={`/article/${_id}`}>
          <h3 className="mb-2 text-2xl font-bold text-midBlue">{heading}</h3>
        </Link>
        <div
          dangerouslySetInnerHTML={{
            __html: text.length > 80 ? text.substring(0, 80) + '...' : text,
          }}
        />
      </div>

      <div className="mb-5 flex items-center gap-3">
        <button
          onClick={handleLink}
          type="button"
          className="box-border rounded-full border p-1 hover:border-midBlue"
        >
          <AiIcons.AiOutlineShareAlt />
        </button>
        <button
          onClick={handleLikes}
          type="button"
          className="box-border rounded-full border p-1 hover:border-midBlue"
        >
          <AiIcons.AiOutlineLike />
        </button>
        <small className="text-midGrey">{likes.length}</small>
      </div>

      <div className="flex gap-3">
        {tags.map((item, index) => {
          return (
            <a
              key={index}
              className="rounded-full border p-2 py-1 text-xs"
              href=""
            >
              {item}
            </a>
          );
        })}
      </div>
    </article>
  );
};

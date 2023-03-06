import { Fragment, useState, useEffect, useContext } from 'react';
import { userContext } from '../context/userContext';
import { Link } from 'react-router-dom';
import { formatISO9075 } from 'date-fns';
import EditBlogModal from '../pages/profile/EditBlogModal';
import * as MdIcons from 'react-icons/md';
import { deleteBlog } from '../apiCalls/blogApiCalls';

export const MdBlogCard = () => {
  // const [user, setUser] = useContext(userContext);
  const token = JSON.parse(sessionStorage.getItem('token'));
  const [post, setPost] = useState([]);

  //get request to retrieve user blogs
  const getUserBlogs = async () => {
    const response = await fetch('https://bloggin-ncif.onrender.com/blogs', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    const blogData = await response.json();

    setPost(blogData);
  };

  //re-render if there are any changes to the post
  useEffect(() => {
    getUserBlogs();
  }, [post]);

  //delete request that take in an id
  //filter out the blog that matches the id
  //pass user token into the header
  //set blogs to filtered blogs
  const handleDelete = async (id) => {
    const filteredBlog = post.filter((item) => item._id !== id);
    const response = await fetch(`https://bloggin-ncif.onrender.com/blogs/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(filteredBlog),
    });

    setPost(filteredBlog);
  };

  //map through the entire blog array and return an element containing all blog information
  //add button to let user delete and edit post
  return (
    <>
      {post.map((blog) => {
        return (
          <div
            key={blog._id}
            className="mb-6 overflow-hidden rounded-md shadow lg:flex"
          >
            <Link to={`/article/${blog._id}`}>
              <img
                className="h-56 w-full rounded-lg object-cover lg:w-64"
                src={blog.image}
                alt=""
              />
            </Link>

            <div className="flex w-full flex-col justify-between py-6 px-6 lg:mx-6 lg:w-1/2  lg:px-0">
              <div className="flex flex-wrap gap-3">
                {blog.tags.map((item, index) => {
                  return (
                    <span
                      key={index}
                      className="rounded-full border p-2 py-1 text-xs"
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
              <div className="mt-6">
                <Link to={`/article/${blog._id}`}>
                  <h3 className="text-xl">{blog.heading}</h3>
                </Link>
                <small className="text-midGrey">
                  {formatISO9075(new Date(blog.createdAt))}
                </small>
              </div>
              <div className="mt-6 flex flex-row gap-4">
                <EditBlogModal data={blog} />
                <button
                  type="button"
                  onClick={() => handleDelete(blog._id)}
                  className="text-xl text-midBlue transition-colors duration-200 hover:text-nightBlue focus:outline-none"
                >
                  <MdIcons.MdDeleteOutline />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

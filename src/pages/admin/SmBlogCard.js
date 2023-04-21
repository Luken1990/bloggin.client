import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogsContext } from '../../context/blogsContext';
import EditBlogModal from '../profile/EditBlogModal';
import { formatISO9075 } from 'date-fns';
import * as FiIcons from 'react-icons/fi';
import * as MdIcons from 'react-icons/md';

export const SmBlogCard = (prop) => {
  const [blogs, setBlogs] = useContext(blogsContext);
  const token = JSON.parse(sessionStorage.getItem('token'));

  //delete request that take in an id
  //filter out the blog that matches the id
  //pass user token into the header
  //set blogs to filtered blogs
  const handleDelete = async (id) => {
    const filteredBlog = blogs.filter((item) => item._id !== id);
    const response = await fetch(`https://bloggin-api.onrender.com/blogs/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(filteredBlog),
    });
    if (response.status === 200) {
      setBlogs(filteredBlog);
    }
  };

  //map through blog array and return a table row containing user info and blog info
  //add button to let user delete and edit post
  return (
    <>
      {blogs.map((blog) => {
        return (
          <tr className='bg-white' key={blog._id}>
            <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-700">
              <div className="inline-flex items-center gap-x-3">
                <div className="flex items-center gap-x-2">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src={blog.user.picture}
                    alt={blog.user.name}
                  />
                  <div>
                    <h2 className="font-medium text-gray-800">
                      {blog.user.name}
                    </h2>
                  </div>
                </div>
              </div>
            </td>

            <td className="whitespace-nowrap px-4 py-4 text-sm text-midBlue transition-colors duration-200 hover:text-nightBlue">
              <Link to={`/article/${blog._id}`}>{blog.heading}</Link>
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
              {blog.user.email}
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
              {formatISO9075(new Date(blog.createdAt))}
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-sm">
              <div className="flex items-center gap-x-6">
                <EditBlogModal data={blog} />

                <button
                  type="button"
                  onClick={() => handleDelete(blog._id)}
                  className="text-xl text-midBlue transition-colors duration-200 hover:text-nightBlue focus:outline-none"
                >
                  <MdIcons.MdDeleteOutline />
                </button>
              </div>
            </td>
          </tr>
        );
      })}
    </>
  );
};

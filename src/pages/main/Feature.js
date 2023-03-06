import { LgBlogCard } from '../../components/LgBlogCard';
import * as BsIcons from 'react-icons/bs';
import { useState, useContext } from 'react';
import { blogsContext } from '../../context/blogsContext';
import { Pagination } from '../../components/Pagination';

export const Feature = () => {
  const [blogs, setBlogs] = useContext(blogsContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  const indexOfLastBlog = currentPage * postPerPage;
  const indexOfFirstBlog = indexOfLastBlog - postPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNum) => {
    setCurrentPage(pageNum);
  };

  return (
    <section className="mx-auto max-w-7xl">
      <div className="mb-12 flex justify-between pt-24">
        <h2 className="text-4xl">Articles</h2>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 ">
        {currentBlogs.map((item, index) => {
          return <LgBlogCard key={index} post={item} />;
        })}
      </div>
      <Pagination
        postPerPage={postPerPage}
        totalPost={blogs.length}
        paginate={paginate}
      />
    </section>
  );
};
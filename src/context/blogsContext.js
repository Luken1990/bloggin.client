import { createContext, useState } from 'react';

//create use context, set initial value
export const blogsContext = createContext({ blogs: {}, setBlogs: () => {} });

//create content provider to share blog state amongst components
export const BlogsContextProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  return (
    <blogsContext.Provider value={[blogs, setBlogs]}>
      {children}
    </blogsContext.Provider>
  );
};

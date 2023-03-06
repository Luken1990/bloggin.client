import { Navbar } from './components/Navbar';
import { Main } from './pages/main/Main';
import { Profile } from './pages/profile/Profile';
import { Sign } from './pages/signIn/Sign';
import { Article } from './pages/article/Article';
import { Footer } from './components/Footer';
import { Admin } from './pages/admin/Admin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { blogsContext } from './context/blogsContext';
import { userContext } from './context/userContext';

function App() {
  const token = JSON.parse(sessionStorage.getItem('token'));
  const [blogs, setBlogs] = useContext(blogsContext);
  const [user, setUser] = useContext(userContext);
  const [newBlog, setNewBlog] = useState(null);

  //get request to retrieve all blogs
  const getBlogs = async () => {
    const response = await fetch('https://bloggin-ncif.onrender.com/blogs/all', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const blogData = await response.json();
    //get the latest blog based on created date and set state
    const latestBlogs = blogData.reduce((a, b) =>
      a.createdAt > b.createdAt ? a : b
    );
    setNewBlog(latestBlogs);
    setBlogs(blogData);
  };

  //get the current logged in user
  const getCurrentUser = async () => {
    const response = await fetch('https://bloggin-ncif.onrender.com/users', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    const currentUser = await response.json();
    setUser(currentUser);
  };

  //if token is true get the current user 
  useEffect(() => {
    if (token) {
      getCurrentUser();
    }
    getBlogs();
  }, [blogs]);

  if (!newBlog) return '';

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main newBlog={newBlog} />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin blogs={blogs} />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

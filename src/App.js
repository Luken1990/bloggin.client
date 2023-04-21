import { Navbar } from './components/Navbar';
import { Main } from './pages/main/Main';
import { Footer } from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext, useEffect, useState, Suspense, lazy } from 'react';
import { blogsContext } from './context/blogsContext';
import { userContext } from './context/userContext';

const Sign = lazy(() => import('./pages/signIn/Sign'));
const Profile = lazy(() => import('./pages/profile/Profile'));
const Admin = lazy(() => import('./pages/admin/Admin'));
const Article = lazy(() => import('./pages/article/Article'));

function App() {
  const token = JSON.parse(sessionStorage.getItem('token'));
  const [blogs, setBlogs] = useContext(blogsContext);
  const [user, setUser] = useContext(userContext);
  const [newBlog, setNewBlog] = useState(null);

  //get request to retrieve all blogs
  const getBlogs = async () => {
    const response = await fetch('https://bloggin-api.onrender.com/blogs/all', {
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
    const response = await fetch('https://bloggin-api.onrender.com/users', {
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
        <Route
          path="/sign"
          element={
            <Suspense>
              <Sign />
            </Suspense>
          }
        />
        <Route
          path="/profile"
          element={
            <Suspense>
              <Profile />
            </Suspense>
          }
        />
        <Route
          path="/admin"
          element={
            <Suspense>
              <Admin blogs={blogs} />
            </Suspense>
          }
        />
        <Route
          path="/article/:id"
          element={
            <Suspense>
              <Article />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

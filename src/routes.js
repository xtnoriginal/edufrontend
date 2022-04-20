import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Products';
import Blog from './pages/Blog';
import User from './pages/User';
import NotFound from './pages/Page404';
import AppLayout from "./layouts/app";
import HomeApp from "./pages/app/HomeApp";
import SubjectList from "./pages/app/SubjectList";
import Quiz from "./pages/quiz/Quiz";
import StartQuiz from "./pages/quiz/StartQuiz";
import WebsiteLayout from "./layouts/website/WebsiteLayout";
import Home from "./pages/website/Home";
import About from "./pages/website/About";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";


// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <WebsiteLayout />,
      children: [
        { path: 'home', element: <Home/> },
        { path: 'blog', element: <Blog /> },
        { path: 'about', element: <About /> },


      ]}
      ,
    {
      path: '/app',
      element: <AppLayout />,
      children: [
        { path: '', element: <HomeApp /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> },
        { path: 'subject/:id', element: <SubjectList/> },
        { path: 'quiz', element: <Quiz/> },
        { path: 'startquiz', element: <StartQuiz/> },
        { path: 'profile', element: <Profile/> },
        { path: 'settings', element: <Settings/> },


      ]
    },

    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/login" /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}

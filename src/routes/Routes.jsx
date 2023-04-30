import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/Home/About/About";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import TremsCondtion from "../pages/TremsCondtion/TremsCondtion";



const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path:'/',
        element: <Navigate to="/catagoriy/0"></Navigate>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'terms',
        element: <TremsCondtion></TremsCondtion>
      }
    ]
  },
  {
    path: "catagoriy",
    element: <Main></Main>,
    children: [
      // {
      //   path: '/',
      //   // element: <Home></Home>
      //   element: <Category></Category>,
      //   loader: () => fetch('http://localhost:5000/news') 
      // },
      {
        path: ':id',
        element: <Category></Category>,
        loader: ({ params }) => fetch(`https://the-news-dragon-server-manik1010.vercel.app/catagories/${params.id}`)
      },

      // {
      //   path: '/about',
      //   element: <About></About>
      // }

    ]
  },
  {
    path: "news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ':id',
        // element: <News></News>,
        element: <PrivateRoute><News></News></PrivateRoute>,
        loader: ({params}) => fetch(`https://the-news-dragon-server-manik1010.vercel.app/news/${params.id}`)
      }
    ]
  },
]);

export default router;
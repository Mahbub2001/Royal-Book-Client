import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import Blogs from "../../pages/Blogs/Blogs";
import Books from "../../pages/Books/Books";
import Categories from "../../pages/Categories/Categories";
import Contact from "../../pages/Contact/Contact";
import AllBuyers from "../../pages/DashBoard/Admin/AllBuyers";
import AllSellers from "../../pages/DashBoard/Admin/AllSellers";
import ReportedItems from "../../pages/DashBoard/Admin/ReportedItems";
import Dashboard from "../../pages/DashBoard/Dashboard";
import Payment from "../../pages/DashBoard/Payment";
import Profile from "../../pages/DashBoard/Profile";
import AddProducts from "../../pages/DashBoard/Seller/AddProducts";
import MyBuyers from "../../pages/DashBoard/Seller/MyBuyers";
import MyProducts from "../../pages/DashBoard/Seller/MyProducts";
import MyOrders from "../../pages/DashBoard/User/MyOrders";
import Welcome from "../../pages/DashBoard/Welcome";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import ErrorPage from "../../pages/Shared/Errorpage/ErrorPage";
import SignUp from "../../pages/Signup/SignUp";
import AdminRoute from "../AdminRoute";
import PrivateRoute from "../PrivateRoute";
import SellersRoute from "../SellersRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/singup",
        element: <SignUp />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/categories/:name",
        element: <PrivateRoute><Books/></PrivateRoute>,
        loader: ({ params }) =>fetch(`${process.env.REACT_APP_API_URL}/categories/${params.name}`),
      },
      {
        path:'/contact',
        element:<Contact/>,
      }
    ],
  },
  {
    path:'/dashboard',
    errorElement:<ErrorPage/>,
    element: <PrivateRoute><DashboardLayout></DashboardLayout> </PrivateRoute>,
    children:[
      {
        path: '',
        element: (
          <PrivateRoute>
            <Welcome />
          </PrivateRoute>
        ),
      },
      {
        path:'/dashboard/payment/:id',
        element:<PrivateRoute><Payment/></PrivateRoute>,
        loader:({params})=>fetch(`${process.env.REACT_APP_API_URL}/payment/${params.id}`)
      },
      {
        path:'/dashboard/all-sellers',
        element:<AdminRoute><AllSellers/></AdminRoute>,
      },
      {
        path:'/dashboard/all-buyers',
        element:<AdminRoute><AllBuyers/></AdminRoute>,
      },
      {
        path:'/dashboard/reported-items',
        element:<AdminRoute><ReportedItems/></AdminRoute>,
      },
      {
        path:'/dashboard/profile',
        element:<PrivateRoute><Profile/></PrivateRoute>,
      },
      {
        path:'/dashboard/my-orders',
        element:<PrivateRoute><MyOrders/></PrivateRoute>,
      },
      {
        path:'/dashboard/add-products',
        element:<SellersRoute><AddProducts/></SellersRoute>,
      },
      {
        path:'/dashboard/my-products',
        element:<SellersRoute><MyProducts/></SellersRoute>,
      },
      {
        path:'/dashboard/my-buyers',
        element:<SellersRoute><MyBuyers/></SellersRoute>,
      },
    ]
  }
]);

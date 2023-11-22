import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "menu",
        element: <Menu />
      },
      {
        path: "/order/:category",
        element: <Order />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "signup",
        element: <SignUp />
      },
      // {
      //   path: "secret",
      //   element: <PrivateRoutes><Secret /></PrivateRoutes>
      // },

    ]
  },
  {
    path: "dashboard",
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children: [
      // normal user routes
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path: 'paymentHistory',
        element: <PaymentHistory />
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'userHome',
        element: <UserHome />
      },

      // admin only routes
      {
        path: 'adminHome',
        element: <AdminRoutes><AdminHome /></AdminRoutes>
      },
      {
        path: 'addItems',
        element: <AdminRoutes><AddItems /></AdminRoutes>
      },
      {
        path: 'manageItems',
        element: <AdminRoutes><ManageItems /></AdminRoutes>
      },
      {
        path: 'updateItem/:id',
        element: <AdminRoutes><UpdateItem /></AdminRoutes>,
        loader: ({ params }) => fetch(`https://bistro-boss-server-lake-two.vercel.app/menu/${params.id}`)
      },
      {
        path: 'users',
        element: <AdminRoutes><AllUsers /></AdminRoutes>
      },


    ]
  }
]);



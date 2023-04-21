import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Footer from "./src/components/Footer";
import Header from "./src/components/Header";
import Body from "./src/Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./src/components/header/Contact";
import Cart from "./src/components/header/Cart";
// import Error from "./src/components/header/Error";
import ErrorPage from "./src/components/error/ErrorPage"
import Restaurentmenu from "./src/components/Restaurentmenu";
import About from "./src/components/header/About";
import Login from "./src/components/header/Login";
import Home from "./src/components/Home";
import Classprofile from "./src/components/about/Classprofile";
// import Instamart from "./src/components/header/Instamart";
// import Shimmer from "./src/components/Shimmer";
import { Provider } from "react-redux";
import Store from "./src/utils/Store";
// import Pricecard from "./src/components/Pricecard";

// below code is called LazyLoading
// const Instamart = lazy(() => import("./src/components/header/Instamart"));
//Upon On Demand Loading -> upon render -> suspends loading



// AppLayout component to render: Header, Body and Footer Component
const AppLayout = () => {
  return (
    <Provider store={Store} >
    <React.Fragment>
      <Header />
      
      <Outlet />
      <Footer />
    </React.Fragment>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    // errorElement: <Error />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Classprofile />,
          },
        ],
      },
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/home",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/restaurant/:id",
        element: <Restaurentmenu />,
      },
        ],
      },
      // {
      //   path: "/instamart",
      //   element: ( <Suspense fallback={<Shimmer/>}>
      //     <Instamart />
      //     </Suspense>
            
      //       ),
      // },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

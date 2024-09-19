import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "../pages/login";
import Signup from "../pages/signup";
import Classes from "../pages/home";
import Subjects from "../pages/subjects";
import Chapters from "../pages/chapters";
import SubChapters from "../pages/subChapters";
import Materials from "../pages/materials";
import Main from "../pages/main";
import ErrorPage from "../pages/error";

const index = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage notFound/>
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/classes",
      element: <Classes />,
      errorElement: <ErrorPage page/>
    },
    {
      path: "/subjects",
      element: <Subjects />,
      errorElement: <ErrorPage page/>
    },
    {
      path: "/chapters",
      element: <Chapters />,
      errorElement: <ErrorPage page/>
    },
    {
      path: "/sub_chapters",
      element: <SubChapters />,
      errorElement: <ErrorPage page/>
    },
    {
      path: "/materials",
      element: <Materials />,
      errorElement: <ErrorPage page/>
    },
  ]);
  return <RouterProvider router={router} />;
};

export default index;

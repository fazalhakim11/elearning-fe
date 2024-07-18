import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"

import Login from "../pages/login"
import Signup from "../pages/signup"
import Classes from "../pages/home"
import Subjects from "../pages/subjects"
import Chapters from "../pages/chapters"


const index = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Login/>,
        },
        {
          path: "/signup",
          element: <Signup/>
        },
        {
        path: "/classes",
        element: <Classes/>
        },
        {
        path: "/subjects",
        element: <Subjects/>
        },
        {
        path: "/chapters",
        element: <Chapters/>
        },
      ])
    return (
      <RouterProvider router={router} />
    )
};

export default index

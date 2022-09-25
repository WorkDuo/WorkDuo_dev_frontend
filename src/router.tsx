import {createBrowserRouter, Route} from "react-router-dom";
import Root from "./components/Root";
import Home from "./routes/Home";
import Member from "./routes/Member";
import NotFound from "./routes/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "member",
        element: <Member />,
      },
    ],
  },
]);

export default router;

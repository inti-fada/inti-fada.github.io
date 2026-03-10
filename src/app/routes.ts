import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import ArticlePage from "./pages/ArticlePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/article",
    Component: ArticlePage,
  },
]);

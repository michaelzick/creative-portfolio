import { createBrowserRouter } from "react-router";
import { AppLayout } from "./components/AppLayout";
import { Home } from "./components/Home";
import { ProductDesign } from "./components/ProductDesign";
import { WebDesign } from "./components/WebDesign";
import { Photography } from "./components/Photography";
import { Writing } from "./components/Writing";
import { Article } from "./components/Article";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      { index: true, Component: Home },
      { path: "product-design", Component: ProductDesign },
      { path: "web-design", Component: WebDesign },
      { path: "photography", Component: Photography },
      { path: "writing", Component: Writing },
      { path: "writing/:slug", Component: Article },
    ],
  },
]);

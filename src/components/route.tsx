import { createBrowserRouter } from "react-router";
import Root from "./layout/Root";
import Home from "./pages/home/Home";
import CocktailSearch from "./pages/cocktail-search/CocktailSearch";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "cocktail-search", Component: CocktailSearch },
    ]
  },
]);

export { router };
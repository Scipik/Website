import { Outlet, createBrowserRouter } from "react-router";
import { Home } from "./home/Home";
import { CocktailSearch } from "./cocktail-search/CocktailSearch"


const Root = () => {
  return <>
    <header>Header</header>
    <main>
      <Outlet />
    </main>
  </>;
};

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
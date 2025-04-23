import { Outlet } from "react-router";
import Header from "./Header";

/**
 * Root component, wraps the page content with a header 
 * @returns The Root component
 */
const Root: React.FC = () => {
  return <>
    <Header />
    <main>
      <Outlet />
    </main>
  </>;
};

export default Root;
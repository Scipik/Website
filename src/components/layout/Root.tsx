import { useState } from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Stars from "../decorative/Stars";
import { LanguageContext } from './LanguageContext';

/**
 * Root component, wraps the page content with a header 
 * @returns The Root component
 */
const Root: React.FC = () => {
  const [language, setLanguage] = useState("en");
  const value = { language, setLanguage };

  return <LanguageContext value={value}>
    <Header />
    <Stars />
    <main>
      <Outlet />
    </main>
  </LanguageContext>;
};

export default Root;
import { Link } from "react-router";
import LangDropdown from "./LangDropdown";

const linkStyles = "uppercase font-bold";

const Header: React.FC = () => {
  return (<header className="sticky top-0 flex bg-black shadow-2xl px-8">
    <div className="flex justify-between w-full max-w-400 m-auto gap-4">
      <div className="grid grid-cols-1">
        <span>Francis Tang</span>
        <sub>Front End Web Developer</sub>
      </div>
      <nav className="grow flex justify-start items-center gap-2">
        <Link className={linkStyles} to="/">About</Link>
        {/* <Link to="cocktail-search">Cocktail Search Link</Link> */}
      </nav>
      <LangDropdown />
    </div>
  </header>);
}

export default Header;
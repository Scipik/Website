import LangDropdown from "./LangDropdown";

const Header: React.FC = () => {
  return (<header className="sticky top-0 flex bg-black shadow-2xl">
    <div className="flex justify-between w-full max-w-400 m-auto">
      <div className="grid grid-cols-1">
        <span>Francis Tang</span>
        <sub>Front End Web Developer</sub>
      </div>
      <LangDropdown />
    </div>
  </header>);
}

export default Header;
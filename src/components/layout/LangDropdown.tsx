import { useState, HTMLProps } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { FaCheck } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";

type ObjectOfObjects<T> = {
  [key: string]: T;
};

type Language = { label: string };

const languages: ObjectOfObjects<Language> = {
  "en": { label: "English" },
  "es": { label: "Spanish" },
  "fr": { label: "French" },
}

interface MenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean,
  children?: React.ReactNode
}

const MenuItemComponent = ({checked = false, children, ...props}: MenuItemProps) => {
  return <MenuItem>
    <button className={` cursor-pointer w-full px-4 py-2 text-right flex justify-end items-center gap-2 ${checked ? "bg-blue-100 pointer-events-none text-black": "data-[focus]:bg-blue-200 data-[focus]:text-black"}`} {...props}>
      {children}
    </button>
  </MenuItem>;
}

const LangDropdown: React.FC = () => {
  const [selLang, setSelLang] = useState("en");

  return (<Menu>
    <MenuButton className="cursor-pointer">
      <GrLanguage className="text-2xl" />
    </MenuButton>
    <MenuItems anchor={{ "to" : "bottom end", "gap": 4, "padding": 4}} className="bg-black rounded">
      {Object.keys(languages).map((lang) => <MenuItemComponent checked={selLang === lang} onClick={() => setSelLang(lang)}>{languages[lang].label}</MenuItemComponent>)}
    </MenuItems>
  </Menu>);
}

export default LangDropdown;
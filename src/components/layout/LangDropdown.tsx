import { useEffect, useState, useContext } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { GrLanguage } from "react-icons/gr";
import { LanguageContext } from './LanguageContext';
import { Spinner } from "../widgets/spinner";

type ObjectOfObjects<T> = {
  [key: string]: T;
};

type Language = { label: string }

/**
 * Available language selections
 * Could easily expand if we depend on the ai
 */
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

const checkTranslator = async (lang : string) => {
  if (lang === "en") return true;
  const Translator = (window as any).Translator;
  const translatorCapabilities = await Translator.availability({
    sourceLanguage: 'en',
    targetLanguage: lang,
  });
  return translatorCapabilities;
}

/**
 * Language dropdown component in the header, uses the language context for reading and setting the language
 * @returns Component
 */
const LangDropdown: React.FC = () => {
  const [aiAvailableLangs, setAIAvailableLangs] = useState<string[]>([]);
  const { language, setLanguage } = useContext(LanguageContext);

  useEffect(() => {
    if ('Translator' in self) {
      const checkEachLang = async () => {
        const availableLangs = [];
        
        const langKeys = Object.keys(languages);
        for (let i = 0; i < langKeys.length; i++) {
          if (await checkTranslator(langKeys[i])) availableLangs.push(langKeys[i]);
        }
        setAIAvailableLangs(availableLangs);
      }
      checkEachLang();
    }

  }, []);

  if ('Translator' in self) {
    // Display spinner while we check if language are available
    return aiAvailableLangs === null ? <Spinner /> : (<Menu>
      <MenuButton className="cursor-pointer">
        <GrLanguage className="text-2xl" />
      </MenuButton>
      <MenuItems anchor={{ "to" : "bottom end", "gap": 4, "padding": 4}} className="bg-black rounded">
        {aiAvailableLangs.map((lang) => <MenuItemComponent key={`header-lang-menu-item-${lang}`} lang={lang} checked={language === lang} onClick={() => setLanguage(lang)}>{languages[lang].label}</MenuItemComponent>)}
      </MenuItems>
    </Menu>);
  }
  return (<Menu>
    <MenuButton className="cursor-pointer">
      <GrLanguage className="text-2xl" />
    </MenuButton>
    <MenuItems anchor={{ "to" : "bottom end", "gap": 4, "padding": 4}} className="bg-black rounded">
      <div className="p-4 max-w-2xs">Translation API not enabled/supported in this Browser. On Chrome you may enable it by going to "chrome://flags/#translation-api".</div>
    </MenuItems>
  </Menu>);
}

export default LangDropdown;
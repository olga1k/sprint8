import eng from "../assets/eng.png";
import sp from "../assets/sp.png";
import cat from "../assets/cat.png";
import { useTranslation } from "react-i18next";

export default function Languages() {
  const { i18n } = useTranslation();

  return (
    <div className="lang-wrapper">
      <img
        className="lang"
        alt="english_lang_icon"
        src={eng}
        onClick={() => i18n.changeLanguage("en")}
      />
      <img
        className="lang"
        alt="spanish_lang_icon"
        src={sp}
        onClick={() => i18n.changeLanguage("sp")}
      />
      <img
        className="lang"
        alt="catalan_lang_icon"
        src={cat}
        onClick={() => i18n.changeLanguage("cat")}
      />
    </div>
  );
}

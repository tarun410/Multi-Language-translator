import React from "react";
import Menu from "../component/menu";
import Languageoption from "../component/language_dropdown";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
const Home = () => {
  const { t } = useTranslation();
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
  };
  return (
    <div style={{ marginTop: "50px" }}>
      <Menu />
      <Languageoption onChange={(e) => handleClick(e)} />
      <h1 style={{color:"palevioletred"}}>
        {t("Welcome")} {t("to")}  {t("Multi")}  {t("Language")}  {t("Translator")} 
      </h1>
    </div>
  );
};
export default Home;

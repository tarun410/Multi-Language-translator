import React from "react";
import Menu from "../component/menu";
import Languageoption from "../component/language_dropdown";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Aboutus = () => {
  const { t } = useTranslation();
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
  };
  return (
    <div style={{ marginTop: "50px" }}>
      <Menu />
      <Languageoption onChange={(e) => handleClick(e)} />
      <h1 style={{color:"orange"}}>
        {t("My")} {t("Name")} {t("is")} {t("Tarun")} {t("Verma")}
        <br />
        {t("working")} {t("as")} {t("Front")} {t("End")} {t("Developer")}{" "}
        {t(".")} <br />
        {t("I")} {t("have")} {t("graduated")} {t("from")} {t("Rabindranath")}{" "}
        
        <br />{t("Tagore")}
        {t("University")} {t(".")} {t("After")} {t("graduation")} {t("I")}{" "}
       
        <br />
         {t("joined")}&nbsp;
         {t("Affimintus")} {t("Technologies")} {t(".")} {t("I")} {t("have")}{" "}
        
        <br />
        {t("1")} {t("year")} {t("experience")} {t("as")} {t("")} {t("Front")} {t("End")}{" "}
        {t("Developer")}
      </h1>
    </div>
  );
};
export default Aboutus;

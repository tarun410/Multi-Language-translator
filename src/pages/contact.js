import React from "react";
import Menu from "../component/menu";
import { useNavigate } from "react-router-dom";
import Languageoption from "../component/language_dropdown";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
const Contactus = () => {
  const history = useNavigate();
  const handleRedirect = () => {
    history("/aboutus");
  };
  const { t } = useTranslation();
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
  };
  return (
    <div style={{ marginTop: "50px" }}>
      <Menu />
      <Languageoption onChange={(e) => handleClick(e)} />
      <h1 style={{color:"darkgray"}}>
        {t("Mobile")} &nbsp;{t("-")} &nbsp; {t("9669445805")} <br /> <br />
        &nbsp;&nbsp;{t("Mail")}&nbsp;{"-"}&nbsp;&nbsp;
        {t("tarunv410@gmail.com")}
      </h1>
      <input />
      <button onClick={handleRedirect}>Submit</button>
    </div>
  );
};
export default Contactus;

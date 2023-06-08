
import React from "react";
import  "./header-option.css";
import Avatar from '@mui/material/Avatar';

function HeaderOption({ avatar ,Icon , title}) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headeroption_icon"/>}
      {avatar && (<Avatar className="headerOption_icon" src={avatar}/>)}
      <h3 className="headeroption_title">{title}</h3>
    </div>
  );
}

export default HeaderOption;

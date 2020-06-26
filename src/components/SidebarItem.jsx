import React from "react";

const SidebarItem = ({ active, icon, alt }) => {
  return (
    <a href="##" className={active}>
      <img src={icon} alt={alt} />
    </a>
  );
};

export default SidebarItem;

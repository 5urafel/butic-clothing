import React from "react";
import { useNavigate } from "react-router-dom";

import "./menu-item.styles.scss";

function MenuItem(props) {
  const navigate = useNavigate();

  return (
    <div
      className={`${props.size} menu-item`}
      onClick={() => navigate(`/${props.linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${props.url})` }}
      />

      <div className="content">
        <h1 className="title">{props.title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;

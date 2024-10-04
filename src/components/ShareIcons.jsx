import React from "react";
import { ShareSocial } from "react-share-social";

const ShareIcons = () => {
  const url = window.location.href;
  console.log("url", url)
  const style = {
    root: {
      background: "#edf2f7",
      borderRadius: 3,
      border: 0,
      color: "white",
      padding: 0,
      minWidth: 180,
    },
    copyContainer: {
      border: "1px solid blue",
      background: "rgb(0,0,0,0.7)",
      display: "none",
    },
    title: {
      color: "aquamarine",
      fontStyle: "italic",
    },
  };
  return (
    <ShareSocial
      url={url}
      style={style}
      socialTypes={["facebook", "whatsapp", "twitter", "linkedin", "telegram"]}
    />
  );
};

export default ShareIcons;

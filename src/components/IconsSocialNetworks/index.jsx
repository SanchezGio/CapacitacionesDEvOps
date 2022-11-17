import React from "react";
import Icon_TiktokW from "../../assets/icons/TikTok.webp";
import Icon_TiktokP from "../../assets/icons/TikTok.png";
import Icon_InstagramW from "../../assets/icons/Instagram.webp";
import Icon_InstagramP from "../../assets/icons/Instagram.png";
import Icon_SnapchatW from "../../assets/icons/Snapchat.webp";
import Icon_SnapchatP from "../../assets/icons/Snapchat.png";
import Icon_TelegramW from "../../assets/icons/Telegram.webp";
import Icon_TelegramP from "../../assets/icons/Telegram.png";
import Icon_PinterestW from "../../assets/icons/Pinterest.webp";
import Icon_PinterestP from "../../assets/icons/Pinterest.png";

const IconsSocialNetworks = () => {
  return (
    <>
      <picture>
        <source srcSet={Icon_TiktokW} type="image/webp" />
        <img src={Icon_TiktokP} alt="BackgroundMobile" />
      </picture>
      <picture>
        <source srcSet={Icon_InstagramW} type="image/webp" />
        <img src={Icon_InstagramP} alt="BackgroundMobile" />
      </picture>
      <picture>
        <source srcSet={Icon_SnapchatW} type="image/webp" />
        <img src={Icon_SnapchatP} alt="BackgroundMobile" />
      </picture>
      <picture>
        <source srcSet={Icon_TelegramW} type="image/webp" />
        <img src={Icon_TelegramP} alt="BackgroundMobile" />
      </picture>
      <picture>
        <source srcSet={Icon_PinterestW} type="image/webp" />
        <img src={Icon_PinterestP} alt="BackgroundMobile" />
      </picture>
    </>
  );
};

export default IconsSocialNetworks;

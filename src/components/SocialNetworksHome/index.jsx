import React from "react";
import styles from "./SocialNetworksHome.module.css";
import IconsSocialNetworks from "../IconsSocialNetworks";

const SocialNetworksHome = () => {
  return (
    <div className={`text-center ${styles.SocialNetworks}`}>
      <div className="text-center">
        <p className={styles.SocialNetworks__TextGift}>
          Tú y tu amigo se llevan de regalo
        </p>
        <p className={styles.SocialNetworks__BigText}>3 GB Gratis</p>
        <p className={`mb-3 ${styles.SocialNetworks__SmallText}`}>
          para usar en las siguientes apps
        </p>
      </div>
      <div
        className={`flex justify-center gap-3 lg:gap-5 ${styles.SocialNetworks__Icons}`}
      >
        <IconsSocialNetworks />
      </div>
      <p className="text-[#707070] text-[14px] fontTelefonicaLight">
        La SIM y el envío a todo Colombia es <strong>GRATIS</strong>
      </p>
      <p className="mt-2 text-lg">
        <span className="fontTelefonicaBold">Vigencia de las gigas:</span> 15
        días
      </p>
    </div>
  );
};

export default SocialNetworksHome;

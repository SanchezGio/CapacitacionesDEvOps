import React from "react";
import styles from "./SocialNetworksPlans.module.css";
import IconsSocialNetworks from "../IconsSocialNetworks";

const SocialNetworksPlans = () => {
  return (
    <div className="flex flex-col items-center space-y-4 text-center">
      <div className="w-full z-10">
        <span className={styles.SocialNetworks__TextGift}>
          Pide tu portabilidad y recibe
        </span>
      </div>
      <div className="flex flex-col space-x-0 space-y-2 sm:space-y-0 sm:flex-row sm:space-x-12 items-center z-10">
        <div>
          <span className={styles.SocialNetworks__BigText}>
            3 GB <span>Gratis</span>
          </span>
        </div>
        <div className="flex flex-col space-y-2">
          <div>
            <span className={styles.SocialNetworks__SmallText}>
              Para usar en las siguientes apps
            </span>
          </div>
          <div
            className={`flex flex-row space-x-2 justify-center ${styles.SocialNetworks__Icons}`}
          >
            <IconsSocialNetworks />
          </div>
          <p className="text-[#707070] text-[14px] fontTelefonicaLight">
            La SIM y el envío a todo Colombia es <strong>GRATIS</strong>
          </p>
          <div>
            <span className="text-sm fontTelefonicaBold">
              Vigencia de las gigas:
            </span>{" "}
            15 días
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialNetworksPlans;

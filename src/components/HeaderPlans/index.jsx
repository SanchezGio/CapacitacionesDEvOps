import React from "react";
import styles from "./Header_Plans.module.css";
import HeaderPlansDesktopW from "../../assets/images/Header-Deskto-Plans.webp";
import HeaderPlansDesktopP from "../../assets/images/Header-Deskto-Plans.png";
import HeaderPlansMobileW from "../../assets/images/Header_Plans_Mobile.webp";
import HeaderPlansMobileP from "../../assets/images/Header_Plans_Mobile.png";
import BgWhitePlansMobile from "../../assets/icons/Shadow_Plans_Mobile.svg";
import BgMaskPlansW from "../../assets/images/Mask_plans_Mobile.webp";
import BgMaskPlansP from "../../assets/images/Mask_plans_Mobile.png";
import SocialNetworksPlans from "../../components/SocialNetworksPlans";

const HeaderPlans = () => {
  return (
    <div
      className={`relative mt-10 overflow-hidden ${styles.Plans__Container}`}
    >
      <picture className={`${styles.Plans__BgDesktop}`}>
        <source srcSet={HeaderPlansDesktopW} type="image/webp"/>
        <img className="object-cover object-center_bottom" src={HeaderPlansDesktopP} alt="Background"/>
      </picture>
      <picture className={`w-full object-cover top-0 ${styles.Plans__BgMobile}`}>
        <source srcSet={HeaderPlansMobileW} type="image/webp"/>
        <img className="object-cover object-top" src={HeaderPlansMobileP} alt="BackgroundMobile"/>
      </picture>
      <img
        alt=""
        src={BgWhitePlansMobile}
        className={`mobile absolute w-full -translate-y-2/4 ${styles.Bg__White}`}
      />
      <div className={styles.Plans__Title}>
        <picture className={styles.Mask__White}>
          <source srcSet={BgMaskPlansW} type="image/webp"/>
          <img src={BgMaskPlansP} alt="BackgroundMobile2"/>
        </picture>
        <SocialNetworksPlans />
      </div>
    </div>
  );
};

export default HeaderPlans;

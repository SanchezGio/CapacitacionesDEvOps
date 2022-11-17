import React, { useEffect } from "react";
import styles from "./portabilidad.module.css";
import { data } from "../../data/portabilidad";
import BanderaColombia from "../../assets/icons/Colombia.svg";
import Banderas from "../../assets/icons/Banderas.svg";
import { marcacionPlanes } from "../../utils/analytics";

const Plans = () => {
  const dataPlans = data();

  useEffect(() => {
    window.onload = (event) => {
      if (window.dataLayer) {
        window.dataLayer.push({
          event: "trackPageview",
          pageName: "/referidos_prepago_planes",
        });
      }
    };
  }, []);

  const handleClickMarcacionPlanes = async (plan, URL) => {
    await marcacionPlanes(plan);
    window.open(URL);
  };

  return (
    <div className={`mb-5 ${styles.new_lineMobile}`}>
      <div className={styles.new_lineMobile_plans}>
        {dataPlans.plans.map((plan) => (
          <div key={plan.id} className={styles.new_lineMobile_plan}>
            <div className={styles.description}>
              <p className={styles.sendSim}>
                <strong className={styles.greenColor}>
                  {plan.recomendado}
                </strong>
                <strong className={styles.iconCarSim}>
                  SIM y envío GRATIS a todo Colombia
                </strong>
              </p>
            </div>
            <div className={styles.bonds}>
              <div className={styles.bonds_item}>
                <p>
                  <strong>Bono de bienvenida</strong>
                </p>
                <p>
                  <b>{plan.bonoGb} GB</b>
                </p>
                <p>Vigencia {plan.vigenciaBono} días</p>
              </div>
              <div className={styles.bonds_item}>
                <p>
                  <strong>Doble de datos</strong>
                </p>
                <p className="relative">
                  <span className={`${styles.sizeDatos} absolute`}>
                    {plan.datos} GB
                  </span>
                  <b>{plan.dobleDatos} GB</b>
                </p>
                <p>Vigencia {plan.vigenciaDatos} días</p>
              </div>
            </div>
            <div className={styles.apps}>
              {dataPlans.socialNetworks.map((icon) => (
                <img key={icon.name} src={icon.image} alt="" />
              ))}
              <p>
                Apps <strong>ilimitadas</strong>
              </p>
            </div>
            <div className={styles.minutes}>
              <img src={BanderaColombia} alt="Icon banderas Colombia" />
              <p>
                Minutos y SMS <strong>ilimitados a todo operador</strong>
              </p>
            </div>
            <div className={styles.flags}>
              <img src={Banderas} alt="Icon banderas" />
              <p>
                <strong>{plan.minutos} Minutos</strong> larga distancia
                internacional
              </p>
            </div>
            <div className={styles.box_price}>
              {plan.precioConDescuento ? (
                <div className={styles.price}>
                  <p className="font-light">
                    <del>{plan.precio}</del>
                  </p>
                  <p className={styles.bold_price}>
                    <strong>{plan.precioConDescuento}</strong>
                  </p>
                </div>
              ) : (
                <div className={styles.price}>
                  <p className={styles.bold_price}>
                    <strong>{plan.precio}</strong>
                  </p>
                </div>
              )}

              <div className={styles.shop}>
                <div
                  className={styles.button}
                  onClick={() =>
                    handleClickMarcacionPlanes(plan.precio, plan.link)
                  }
                  tabIndex="0"
                >
                  Comprar ahora
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;

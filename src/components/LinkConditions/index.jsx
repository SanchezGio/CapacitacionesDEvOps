import React from "react";
import { marcacionTerminosCondiciones } from "../../utils/analytics";

const LinkConditions = () => {
  
  const handleClickTerminosCondiciones = async () => {
    await marcacionTerminosCondiciones();
  }

  return (
    <section className="my-14 text-center">
      <a
        href="https://www.movistar.co/documents/117302439/415483623/TC+Campa%C3%B1a+Referidos.pdf/0128aa37-a6e4-72ab-0939-448d58eaf7dd"
        className="text-[#019df4] FontTelefonicaLight"
        rel="noopener noreferrer"
        target="_blank"
      >
        <button onClick={handleClickTerminosCondiciones}>
          Aplican términos y condiciones.
        </button>
      </a>
    </section>
  );
};

export default LinkConditions;

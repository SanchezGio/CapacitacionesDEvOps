import React from 'react';
import Plans from "../components/Plans";
import HeaderPlans from "../components/HeaderPlans"
import LinkConditions from "../components/LinkConditions";

function PagePortabilidad() {
  return (
    <>
      <HeaderPlans/>
      <Plans/>
      <div className="text-center">
        <p className="text-[#707070] text-[13px] fontTelefonicaLight">Las Gigas adicionales las disfrutarás cuando actives tu línea portada y se entregarán por una única vez.</p>
      </div>
      <LinkConditions/>
    </>
  );
}

export default PagePortabilidad;

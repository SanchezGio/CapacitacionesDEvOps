import React, { useEffect, useState } from "react";
import HeaderPlans from "../../components/HeaderPlans";
import Form from "../../components/Form";
import LinkConditions from "../../components/LinkConditions";
import Loading from "../../components/Loading";
import StepByStep from "../../components/StepByStep";

const Information = () => {
  const [showLoading, _setShowLoading] = useState(false);
  const [invalidLine, setInvalidLine] = useState(false);
  const [showSteps, _setShowSteps] = useState(1);

  useEffect(() => {
    window.onload = (event) => {
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'trackPageview',
          pageName: '/referidos_prepago_Invitado'
        })
      }
    };
  }, [])

  return (
    <>
      <HeaderPlans />
      <StepByStep />
      <Form
        onChangeShowLoading={_setShowLoading}
        invalidLine={invalidLine}
        onChangeInvalidLine={setInvalidLine}
        onChangeShowSteps={_setShowSteps}
        showSteps={showSteps}
      />
      <LinkConditions />
      <Loading show={showLoading} />
    </>
  );
};

export default Information;

import React, { lazy, Suspense } from "react";
import { ReferidosContextProvider } from "./context/ReferidosContext";
import { Routes, Route, useLocation } from "react-router-dom";
import Invita from "./pages/Invite";
import PagePortabilidad from "./pages/PagePortabilidad";
import Information from "./pages/Information";
import Header from "./components/Header";
import MaskHomeW from "./assets/images/Mask_Home.webp";
import MaskHomeP from "./assets/images/Mask_Home.png";
import MaskPlansW from "./assets/images/Mask_PlansForm.webp";
import MaskPlansP from "./assets/images/Mask_PlansForm.png";
import useSupportWebp from "./hooks/useSupportWebp";
const FAQS = lazy(() => import("./components/FAQS"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const location = useLocation().pathname;
  const bgSupported = useSupportWebp();

  const bgIndex2 = () => {
    if (bgSupported && location === "/") {
      return `${MaskHomeW}`;
    } else if (bgSupported && location !== "/") {
      return MaskPlansW;
    } else if (!bgSupported && location === "/") {
      return `${MaskHomeP}`;
    } else if (!bgSupported && location !== "/") {
      return MaskPlansP;
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${bgIndex2()})` }}
      className={`${location === "/" ? "bgHome" : "bgPlansForm"}`}
    >
      <ReferidosContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Invita />} />
          <Route path="plans" element={<PagePortabilidad />} />
          <Route path="information" element={<Information />} />
        </Routes>
        <Suspense fallback={<></>}>
          <FAQS />
          <Footer />
        </Suspense>
      </ReferidosContextProvider>
    </div>
  );
}

export default App;

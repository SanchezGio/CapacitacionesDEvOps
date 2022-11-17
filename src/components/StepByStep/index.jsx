import React from "react";
import Step1 from "../../assets/images/step-1.png";
import Step2 from "../../assets/images/step-2.png";
import Step3 from "../../assets/images/step-3.png";
import styles from "./StepByStep.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  className: "center",
  centerMode: true,
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 2,
  dotsClass: styles.button__bar,
  arrows: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
};

const StepByStep = () => {
  return (
    <div className="w-[90%] max-w-[600px] flex flex-col space-y-4 text-center items-stretch mx-auto">
      <div>
        <span className="font-extrabold telefonica-font">
          ¡Comienza tu portabilidad sin cambiar de número!
        </span>
      </div>
      <div className="block sm:hidden w-[90%] mx-auto">
        <Slider {...settings}>
          <Step
            icon={Step1}
            number="1. "
            title="Ingresa los datos solicitados"
          />
          <Step icon={Step2} number="2. " title="Escoge tu plan favorito" />
          <Step
            icon={Step3}
            number="3. "
            title="Realiza tu portabilidad y"
            subtitle=" recibe tus beneficios"
            classNameTitle="whitespace-pre-line"
          />
        </Slider>
      </div>
      <div className="hidden sm:flex sm:flex-row sm:space-x-4">
        <Step icon={Step1} number="1. " title="Ingresa los datos solicitados" />
        <Step icon={Step2} number="2. " title="Escoge tu plan favorito" />
        <Step
            icon={Step3}
            number="3. "
            title="Realiza tu portabilidad y"
            subtitle=" recibe tus beneficios"
            classNameTitle="whitespace-pre-line"
          />
      </div>
    </div>
  );
};

const Step = ({ icon = "", title = "", number = "", subtitle = "", classNameTitle = "" }) => (
  <div className="bg-[#0b2739] w-full sm:w-1/3 h-32 rounded-lg p-4 flex flex-col space-y-3 justify-center items-center text-center break-words">
    <div>
      <img src={icon} alt="step" />
    </div>
    <div className="text-white fontTelefonicaLight text-[14px]">
      <span className="font-extrabold">{number}</span>
      <span className={classNameTitle}>{title}</span>
      <p>{subtitle}</p>
    </div>
  </div>
);

export default StepByStep;

import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import close from "../../assets/images/X-POPUP-GRIS.png";
import styles from "./Modal.module.css";
import { Button } from "@mui/material";
import logo from "../../assets/icons/logo-movistar-blue.svg";
import { marcacionTratamientoDatosPersonales } from "../../utils/analytics";

const HabeasData = ({checked = false, setChecked}) => {
  const [openModal, setOpenModal] = useState(false);

  const handleChangeCheckbox = (event) => {
    setChecked(event.target.checked);
  };

  const handleOpenModal = async () => {
    await marcacionTratamientoDatosPersonales();
    setOpenModal(true)
  };

  const handleCloseModal = () => setOpenModal(false);

  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={handleChangeCheckbox}
              inputProps={{ "aria-label": "controlled" }}
              sx={{
                color: "#019df4",
                "&.Mui-checked": {
                  color: "#019df4",
                },
              }}
            />
          }
          label={
            <span className="text-center text-[12px] sm:text-[14px]">
              Autorizo el{" "}
              <button onClick={handleOpenModal} type="button">
                <span className="text-[#019df4] underline">
                  Tratamiento de mis datos personales
                </span>
              </button>
            </span>
          }
        />
      </FormGroup>
      <ModalHabeasData
        open={openModal}
        handleClose={handleCloseModal}
        handleChecked={setChecked}
      />
    </div>
  );
};

const ModalHabeasData = ({ open = false, handleClose, handleChecked }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div py="1em" className={`${styles.paper} ${styles.modalStyle} `}>
        <Box
          component="div"
          px="0.50em"
          className={styles.buttonClose}
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          <img
            alt=""
            className={styles.imgClose}
            src={close}
            onClick={() => {
              handleClose();
              handleChecked(true);
            }}
          />
        </Box>
        <div className="flex flex-col space-y-4 items-center">
          <div>
            <img className="icon-standard1 -mt-2" src={logo} alt="" />
          </div>
          <div className="px-8 md:px-0 text-center md:text-left">
            <span className="font-bold text-[16px] leading-[16px] text-[#65696f]">
              Tratamiento y Protección de Datos de Carácter Personal.
            </span>
          </div>
          <div
            className={`h-[379px] md:h-[223px] overflow-y-scroll overflow-x-hidden px-2 md:px-[24px] ${styles.scrollModal}`}
          >
            <p className="h-auto w-[258px] md:w-[415px] text-[13px] text-[#65696f] FontTelefonica">
              El titular de los datos personales autoriza a Telefónica (Av. Suba
              No.114 A-55 de Bogotá, tel. 091 7050000) para recolectar,
              almacenar, conservar, usar, suprimir, actualizar, compartir y
              circular a terceros, sus datos personales de orden demográfico,
              económico, biométricos, de servicios, comercial y de localización;
              para obtención y suministro de información relativa al
              cumplimiento de sus obligaciones y el cálculo de riesgo económico
              o crediticio (de manera irrevocable), la publicación de
              directorios telefónicos, la prevención y control de fraudes, y
              para beneficio propio o de terceros con los que Telefónica haya
              celebrado convenio para envío y recepción de cualquier tipo de
              información, con fines comerciales o publicitarios en Colombia o
              en el exterior. La información para el cálculo de riesgo
              crediticio podrá ser consultada en cualquier operador de banco de
              datos, por las entidades financieras con las cuales Telefónica
              celebre convenios comerciales en favor de los titulares. Los datos
              serán tratados de conformidad con las Políticas para el
              Tratamiento de Datos Personales que se encuentran a disposición de
              los interesados y/o titulares de los datos en la página web
              www.movistar.co El titular de los datos tiene derecho de conocer,
              actualizar, rectificar, suprimir los datos, y revocar la
              autorización salvo las excepciones legales. Los datos biométricos
              son datos sensibles y el titular no está obligado a autorizar su
              tratamiento, estos serán usados para verificación de identidad y
              suscripción de contratos.
            </p>
          </div>
          <div className={styles.containerButton}>
            <Button
              className={`FontTelefonicaLigth ${styles.buttonExit}`}
              variant="contained"
              onClick={() => {
                handleClose();
                handleChecked(true);
              }}
            >
              <span className="capitalize">Cerrar</span>
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default HabeasData;

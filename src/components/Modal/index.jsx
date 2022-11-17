/* import PropTypes from 'prop-types'; No borrar */
import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import styles from "./Modal.module.css";
import IconError from "../../assets/icons/IconError.svg";
import IconIngresaDatos from "../../assets/icons/IconIngresaDatos.svg";
import close from "../../assets/images/X-POPUP-GRIS.png";
import { ReferidosContext } from "../../context/ReferidosContext";

const textNoCreditRecharge = [
  {
    idCase: 1,
    image: IconIngresaDatos,
    text: "Por favor verifica los datos ingresados e intentalo nuevamente",
    buttonText: 'Salir',
  },
  {
    idCase: 2,
    image: IconError,
    text: "Estamos presentando algunos inconvenientes tecnicos. Por favor intenta mas tarde.",
    buttonText: 'Regresar',
  },
];

const ModalError = () => {
  const { modalError, setModalError, modalCase } = useContext(ReferidosContext);

  const handleClose = () => {
    setModalError(false);
  };

  return (
    <div>
      <Modal
        open={modalError}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div py="1em" className={`${styles.paper} ${styles.modalStyle} `}>
          <Box
            component="div"
            px="0.25em"
            className={styles.buttonClose}
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
          >
            <img alt="" src={close} onClick={handleClose} />
          </Box>
          <Box>
            <Box
              pt="1.5em"
              pb="0.5em"
              component="div"
              className="imgContainer"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <img src={textNoCreditRecharge[modalCase].image} alt="Case1" />
            </Box>
            <Box
              component="div"
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              pt="1em"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                className={`fontTelefonicaBold ${styles.modalTitleBold}`}
              >
                ¡Ups! Algo no salió bien
              </Typography>
            </Box>
            <Box
              component="div"
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              pt="1em"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                align="center"
                className={`FontTelefonicaLight ${styles.modalTitleRegular}`}
                paragraph
              >
                {textNoCreditRecharge[modalCase].text}
              </Typography>
            </Box>
            <div className={styles.containerButton}>
              <Button
                className={`FontTelefonicaLigth ${styles.buttonExit}`}
                variant="contained"
                onClick={handleClose}
              >
                <span>Salir</span>
              </Button>
            </div>
          </Box>
        </div>
      </Modal>
    </div>
  );
};

/* ModalCredit.propTypes = {
  show: PropTypes.bool.isRequired,
  case: PropTypes.number.isRequired,
  phone: PropTypes.number.isRequired,
  request: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  data: PropTypes.func.isRequired,
}; No borrar */

export default ModalError;

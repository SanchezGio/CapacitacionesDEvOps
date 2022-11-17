import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { dataForm } from "../../services/serviceAPI";
import styles from "./Form.module.css";
import ModalError from "../../components/Modal";
import { ReferidosContext } from "../../context/ReferidosContext";
import HabeasData from "../HabeasData";
import { marcacionDocumento, marcacionLineaInvitado, marcacionLineaPortar, marcacionNombreCompleto, marcacionSiguiente } from "../../utils/analytics";

const Form = ({ onChangeShowLoading }) => {
  let navigate = useNavigate();
  const { modalError, setModalError, modalCase, setModalCase } =
    useContext(ReferidosContext);
  const [name, setName] = useState("");
  const [document, setDocument] = useState("");
  const [numberReferred, setNumberReferred] = useState("");
  const [phoneNumber, setNumber] = useState("");
  const [checked, setChecked] = useState(false);

  const phoneValidation = {
    pattern: "[0-9]*",
    maxLength: 10,
    max: 9999999999,
    autoComplete: "off",
    inputMode: "numeric",
    type: "number",
  };
  const documentValidation = {
    pattern: "[0-9]*",
    maxLength: 20,
    max: 999999999999999,
    autoComplete: "off",
    inputMode: "numeric",
    type: "number",
  };
  const nameValidation = {
    autoComplete: "off",
    inputMode: "text",
    type: "text",
  };

  async function validateForm(e) {
    e.preventDefault();
    onChangeShowLoading(true);
    if (
      name.length <= 3 ||
      numberReferred.length <= 3 ||
      document.length <= 3 ||
      phoneNumber.length <= 9
    ) {
      setModalError(true);
      setModalCase(0);
      return onChangeShowLoading(false);
    }

    const promesaDos = Promise.resolve(
      dataForm({name, document: Number(document), numberReferred: Number(numberReferred), phoneNumber: Number(phoneNumber)})
    );
    promesaDos
      .then(() => {
        onChangeShowLoading(true);
        onChangeShowLoading(false);
        navigate("../plans");
      })
      .catch(() => {
        onChangeShowLoading(true);
        onChangeShowLoading(false);
        setModalCase(1);
        setModalError(true);
      });
  }

  const handleClickNombreCompleto = async () => {
    await marcacionNombreCompleto();
  }

  const handleClickDocumento = async () => {
    await marcacionDocumento();
  }

  const handleClickLineaPortar = async () => {
    await marcacionLineaPortar();
  }

  const handleClickLineaInvitado = async () => {
    await marcacionLineaInvitado();
  }

  const handleClickSiguiente = async () => {
    await marcacionSiguiente();
  }

  return (
    <div className="mb-20 mt-4">
      <form onSubmit={(e) => validateForm(e)}>
        <div className="flex flex-col mx-auto items-center space-y-4 w-[90%] max-w-[600px] min-w-[310px]">
          <div className="w-full flex-wrap gap-4 flex flex-col items-center space-x-0 space-y-4 md:space-y-0 md:flex-row md:space-x-0">
            <div className={styles.Form__Items}>
              <TextField
                name="nombre"
                value={name}
                onInput={(e) =>
                  setName(e.target.validity.valid ? e.target.value : name)
                }
                onBlur={handleClickNombreCompleto}
                label="Nombres y apellidos completos"
                inputProps={nameValidation}
                variant="standard"
                size="small"
              />
            </div>
            <div className={styles.Form__Items}>
              <TextField
                label="Documento"
                name="document"
                variant="standard"
                size="small"
                onBlur={handleClickDocumento}
                onInput={(e) =>
                  setDocument(
                    e.target.validity.valid ? e.target.value : document
                  )
                }
                value={document}
                inputProps={documentValidation}
              />
            </div>
            <div className={styles.Form__Items}>
              <TextField
                label="Número de línea a portar"
                name="numero"
                value={numberReferred}
                onBlur={handleClickLineaPortar}
                onInput={(e) =>
                  setNumberReferred(
                    e.target.validity.valid ? e.target.value : numberReferred
                  )
                }
                variant="standard"
                inputProps={phoneValidation}
                size="small"
              />
            </div>
            <div className={styles.Form__Items}>
              <TextField
                label="Número de quién te invitó"
                type="number"
                size="small"
                variant="standard"
                fullWidth
                name="phoneNumber"
                onBlur={handleClickLineaInvitado}
                onInput={(e) =>
                  setNumber(
                    e.target.validity.valid ? e.target.value : phoneNumber
                  )
                }
                value={phoneNumber}
                inputProps={phoneValidation}
              />
            </div>
          </div>
          <HabeasData checked={checked} setChecked={setChecked} />
          <div className="w-full flex mt-8">
            <button
              type="submit"
              onClick={handleClickSiguiente}
              disabled={!checked}
              className="w-[12rem] m-auto p-[0.8rem] bg-[#019df4] rounded-[50px] text-white"
            >
              Siguiente
            </button>
          </div>
        </div>
      </form>

      <ModalError case={modalCase} show={modalError} />
    </div>
  );
};

export default Form;

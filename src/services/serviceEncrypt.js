const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const aes256 = require("aes256");

/**
 * Arma las opciones del header authorization para el consumo de servicio del backEnd
 */
export async function getOptions(token) {
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  };
}

/**
 * Contruccion del token para la autorizacion expedicion de 1 min
 */

export async function buildTokenJWT(dateStamp) {
  const newExp = dateStamp + 120000;
  const payload = { time: dateStamp, expiresIn: newExp };
  return jwt.sign(payload, `${process.env.REACT_APP_KEY_AUTH_JWT}`, {
    algorithm: "HS256",
  });
}

/**
 * Encriptacion de informacion , valor generico para .net
 */
export function Encrypt(word) {
  let key = CryptoJS.enc.Utf8.parse(`${process.env.REACT_APP_KEY_AES}`);
  let iv = CryptoJS.enc.Utf8.parse(`${process.env.REACT_APP_IV_AES}`);
  let celular = CryptoJS.enc.Utf8.parse(word);
  let encrypted = CryptoJS.AES.encrypt(celular, key, {
    keySize: 128 / 8,
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.toString();
}

/**
 * Encriptacion de informacion , valor generico para validarNumero
 */
export async function encryptAES(dateStamp, value) {
  const key = `${process.env.REACT_APP_KEY_AUTH_URL}${dateStamp}`;
  return aes256.encrypt(key, value);
}

import axios from "axios";
import {
  buildTokenJWT,
  Encrypt,
  getOptions,
} from "./serviceEncrypt";

export async function dataForm(infoReferred) {
  let dateStamp = Date.now();
  let tokenJWT = await buildTokenJWT(dateStamp);
  let options = await getOptions(tokenJWT);
  let nameEncrypt = Encrypt(infoReferred.name);
  let documentEncrypt = Encrypt(infoReferred.document);
  let phoneReferrerEncrypt = Encrypt(infoReferred.phoneNumber);
  let phoneReferredEncrypt = Encrypt(infoReferred.numberReferred);
  let userReferred = JSON.stringify({
    Name: nameEncrypt,
    Document: documentEncrypt,
    Phone_referrer: phoneReferrerEncrypt,
    Phone_referred: phoneReferredEncrypt,
  });

  return axios.post(process.env.REACT_APP_CONTRATAR, userReferred, options);
}

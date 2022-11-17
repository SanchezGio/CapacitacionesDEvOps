import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import styles from "./Invite.module.css";
import Title_Refers from "../../assets/images/Title_Refers_Home.svg";
import Icon_Arrows from "../../assets/icons/arrows.svg";
import SocialNetworksHome from "../../components/SocialNetworksHome";
import LinkConditions from "../../components/LinkConditions";
import Icon_LoveW from "../../assets/icons/Icon_Love.webp";
import Icon_EmojiSorpriseW from "../../assets/icons/Group_3296@3x.webp";
import Icon_EmojiSmileW from "../../assets/icons/Emoji_Smile.webp";
import Icon_WhatsappW from "../../assets/icons/Icons_Whatsapp.webp";
import Icon_LoveP from "../../assets/icons/Icon_Love.png";
import Icon_EmojiSorpriseP from "../../assets/icons/Group_3296_3x.png";
import Icon_EmojiSmileP from "../../assets/icons/Emoji_Smile.png";
import Icon_WhatsappP from "../../assets/icons/Icons_Whatsapp.png";
import DOMPurify from "dompurify";
import { marcacionCopiarDireccion, marcacionInvitarAmigos } from "../../utils/analytics";

function Invita() {
  const URL = DOMPurify.sanitize(process.env.REACT_APP_URL_REFERIDOS);

  const handleClickInvitarAmigos = async () => {
    await marcacionInvitarAmigos();
    window.open(`https://api.whatsapp.com/send?text=Hola!%20Quiero%20que%20disfrutes%20de%20beneficios%20increíbles!%20😃%20Te%20invito%20a%20cambiarte%20a%20Movistar%20Prepago.%20Además%20nos%20dan%203%20GB%20x%2015%20días%20para%20nuestras%20apps%20favoritas%20por%20ser%20mi%20referid@%20🤩%20Cámbiate%20👉🏼%20${URL}%20y%20ganemos%20los%20dos!%20🚀`,'_blank')
  }

  const handleClickAca = async () => {
    await marcacionCopiarDireccion();
  }

  return (
    <main className="lg:mt-5">
      <div
        className={`absolute right-0 ${styles.Invite__EmojiLove}`}
      >
        <picture>
          <source srcSet={Icon_LoveW} type="image/webp"/>
          <img src={Icon_LoveP} alt="Icon_Love"/>
        </picture>
      </div>
      <div
        className={`absolute lg:left-6 ${styles.Invite__EmojiSorprise}`}
      >
        <picture>
          <source srcSet={Icon_EmojiSorpriseW} type="image/webp"/>
          <img src={Icon_EmojiSorpriseP} alt="Icon_Love"/>
        </picture>
      </div>
      <div
        className={`absolute ${styles.Invite__EmojiSmile}`}
      >
        <picture>
          <source srcSet={Icon_EmojiSmileW} type="image/webp"/>
          <img src={Icon_EmojiSmileP} alt="Icon_Love"/>
        </picture>
      </div>
      <section className="info__Refers mb-18 lg:flex">
        <div className={`${styles.info__Gigas}`}>
          <div className={`${styles.info__Mask}`}>
            <img alt="" src={Title_Refers} className={styles.title__Img} />
            <h1 className={styles.info__Title}>Movistar Prepago</h1>
          </div>
          <SocialNetworksHome />
          <div className={`flex items-center ${styles.info__Arrow}`}>
            <img
              alt=""
              src={Icon_Arrows}
              className={`${styles.info__ImgRotate}`}
            />
          </div>

          <section className={`${styles.howFunction}`}>
            <h2 className={`text-center fontTelefonicaBold text-2xl ${styles.howFunction__MarginB}`}>
              ¿Cómo funciona?
            </h2>
            <div
              className={`w-4/5 mx-auto text-white flex flex-col ${styles.howFunction__Container}`}
            >
              <div
                className={`flex rounded-t-xl items-center ${styles.howFunction__Height}`}
              >
                <h3 className="text-5xl fontTelefonicaBold ml-3 mr-6">
                  1
                </h3>
                <p className="leading-6 relative fontTelefonicaLight">
                  Invita a tus amigos{" "}
                  <span className="absolute w-6 ml-2">
                    {/* <img alt="" src={Icon_Whatsapp} /> */}
                    <picture>
                      <source srcSet={Icon_WhatsappW} type="image/webp"/>
                      <img src={Icon_WhatsappP} alt="Icon_Love"/>
                    </picture>
                  </span>
                </p>
              </div>
              <div
                className={`flex rounded-t-xl items-center ${styles.howFunction__Height}`}
              >
                <h3 className="text-5xl fontTelefonicaBold ml-3 mr-6">
                  2
                </h3>
                <p className="leading-6 fontTelefonicaLight">
                  Tus amigos se cambian a Movistar
                </p>
              </div>
              <div
                className={`flex rounded-xl items-center ${styles.howFunction__Height}`}
              >
                <h3 className="text-5xl fontTelefonicaBold ml-3 mr-6">
                  3
                </h3>
                <p className="leading-6 fontTelefonicaLight">
                  ¡Listo! Te regalamos{" "}
                  <span className="fontTelefonicaBold">3GB GRATIS</span> para
                  Apps
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section>
        <div className={`text-center ${styles.button}`}>
          <a
            className={`text-white rounded-full`}
            href={`https://api.whatsapp.com/send?text=Hola!%20Quiero%20que%20disfrutes%20de%20beneficios%20increíbles!%20😃%20Te%20invito%20a%20cambiarte%20a%20Movistar%20Prepago.%20Además%20nos%20dan%203%20GB%20x%2015%20días%20para%20nuestras%20apps%20favoritas%20por%20ser%20mi%20referid@%20🤩%20Cámbiate%20👉🏼%20${URL}%20y%20ganemos%20los%20dos!%20🚀`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <button onClick={handleClickInvitarAmigos}>
              Invitar amigos
            </button>
          </a>
        </div>
        <div className="text-center">
          <p className="w-60 lg:w-96 m-auto text-sm leading-4">
            o haz click{" "}
            <CopyToClipboard text={URL}>
              <a
                className="underline-offset-1 text-[#019df4]"
                href="/"
                onClick={(e) => e.preventDefault()}
              >
                <button onClick={handleClickAca}>
                  acá
                </button>
              </a>
            </CopyToClipboard>{" "}
            para copiar la dirección y mandarla a tus amigos
          </p>
        </div>
      </section>
      <LinkConditions />
    </main>
  );
}

export default Invita;

import React from 'react';
import IconFacebook from '../../assets/icons/Facebook_Footer.svg'
import IconInstagram from '../../assets/icons/INSTAGRAM_NEG.png'
import IconTwitter from '../../assets/icons/Twitter_Footer.svg'
import IconYoutube from '../../assets/icons/YouTube__Footer.svg'
import IconLogo from '../../assets/icons/logo-t.svg'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={`bg-white ${styles.footer}`}>
        <div>
            <p className={styles.textFooter}>Una marca de <span><img className={styles.imgLogoFooter} src={IconLogo} alt="logo"/></span> <span>Telefonica</span></p>
        </div>
        <div className={styles.containerIcons}>
            <a href="https://facebook.com/movistarcolombiaoficial" target="_blank" rel="noreferrer noopener">
                <img src={IconFacebook} alt="Facebook"/>
            </a>
            <a href="https://www.instagram.com/movistarcolombia/" target="_blank" rel="noreferrer noopener">
                <img src={IconInstagram} alt="Instagram"/>
            </a>
            <a href="https://twitter.com/MovistarCo" target="_blank" rel="noreferrer noopener">
                <img src={IconTwitter} alt="Twitter"/>
            </a>
            <a href="https://www.youtube.com/Movistar%20Colombia" target="_blank" rel="noreferrer noopener">
                <img src={IconYoutube} alt="Youtube"/>
            </a>
        </div>
    </footer>
  )
}

export default Footer;
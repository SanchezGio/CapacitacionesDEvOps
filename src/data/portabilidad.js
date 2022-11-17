import  IconWhatsapp from "../assets/icons/WhatsApp.webp";
import  IconFacebook from "../assets/icons/facebook.webp";
import  IconMessenger from "../assets/icons/Facebook-Messenger-logo.webp";
import  IconTwitter from "../assets/icons/Twitter.webp";
import  IconWaze from "../assets/icons/Waze.webp";


export const data = () => {
    return {
        "socialNetworks":[
            {
                "name": "whatsapp",
                "image": IconWhatsapp
            },
            {
                "name": "facebook",
                "image": IconFacebook
            },
            {
                "name": "messenger",
                "image": IconMessenger
            }, 
            {
                "name": "waze",
                "image": IconWaze
            }, 
            {
                "name": "twitter",
                "image": IconTwitter
            }
        ],
        "plans": [
            {
                "id": 1,
                "bonoGb": 2,
                "vigenciaBono": 7,
                "datos": 1.7,
                "dobleDatos": 3.5,
                "vigenciaDatos": 7,
                "minutos": 15,
                "precioConDescuento": "$3.500",
                "precio": "$7.500",
                "link": "https://mimovistar.movistar.co/cwp/baas/selfservice/html/offer/mainoffer.html?offeringId=11zu000000Z3bMxmppD6&utm_source=web&utm_medium=escalera&utm_campaign=porta7&utm_term=prepago#/mainoffer",
                "recomendado": ""
            },
            {
                "id": 2,
                "bonoGb": 3,
                "vigenciaBono": 15,
                "datos": 7.5,
                "dobleDatos": 15,
                "vigenciaDatos": 30,
                "minutos": 200,
                "precio": "$25.000",
                "link": "https://mimovistar.movistar.co/cwp/baas/selfservice/html/offer/mainoffer.html?offeringId=11zu000000gVdoMT0lkG&utm_source=web&utm_medium=escalera&utm_campaign=porta25&utm_term=prepago#/mainoffer",
                "recomendado": "Recomendado"
            },
            {
                "id": 3,
                "bonoGb": 3,
                "vigenciaBono": 15,
                "datos": 13.5,
                "dobleDatos": 27,
                "vigenciaDatos": 30,
                "minutos": 350,
                "precio": "$41.000",
                "link": "https://mimovistar.movistar.co/cwp/baas/selfservice/html/offer/mainoffer.html?offeringId=11zu000000i8c7LFG4ky&utm_source=web&utm_medium=escalera&utm_campaign=porta40&utm_term=prepago#/mainoffer",
                "recomendado": ""
            }
        ]
    }
}



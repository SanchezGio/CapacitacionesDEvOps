/* Marcacion Evento Estándar: Invitar amigos */
export const marcacionInvitarAmigos = async () => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: "trackEvent",
      eventCategory: "Referidos Prepago",
      eventAction: "click",
      eventLabel: "Invitar amigos",
    });
  }
};

/* Marcacion Evento Estándar: Copiar dirección */
export const marcacionCopiarDireccion = async () => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: "trackEvent",
      eventCategory: "Referidos Prepago",
      eventAction: "click",
      eventLabel: "Copiar dirección",
    });
  }
};

/* Marcacion Evento Estándar: Términos y condiciones */
export const marcacionTerminosCondiciones = async () => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: "trackEvent",
      eventCategory: "Referidos Prepago",
      eventAction: "click",
      eventLabel: "Términos y condiciones_Invitar",
    });
  }
};

/* Marcacion Evento Estándar: Nombres y apellidos completos */
export const marcacionNombreCompleto = async () => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: "trackEvent",
      eventCategory: "Referidos Prepago",
      eventAction: "click",
      eventLabel: "Nombres y apellidos completos",
    });
  }
};

/* Marcacion Evento Estándar: Documento */
export const marcacionDocumento = async () => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: "trackEvent",
      eventCategory: "Referidos Prepago",
      eventAction: "click",
      eventLabel: "Documento",
    });
  }
};

/* Marcacion Evento Estándar: Línea a portar */
export const marcacionLineaPortar = async () => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: "trackEvent",
      eventCategory: "Referidos Prepago",
      eventAction: "click",
      eventLabel: "Linea a portar",
    });
  }
};

/* Marcacion Evento Estándar: Linea de invitado */
export const marcacionLineaInvitado = async () => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: "trackEvent",
      eventCategory: "Referidos Prepago",
      eventAction: "click",
      eventLabel: "Linea de invitado",
    });
  }
};

/* Marcacion Evento Estándar: Siguiente */
export const marcacionSiguiente = async () => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: "trackEvent",
      eventCategory: "Referidos Prepago",
      eventAction: "click",
      eventLabel: "Siguiente_invitado",
    });
  }
};

/* Marcacion Evento Estándar: Tratamiento de mis datos personales */
export const marcacionTratamientoDatosPersonales = async () => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: "trackEvent",
      eventCategory: "Referidos Prepago",
      eventAction: "click",
      eventLabel: "Tratamiento de mis datos personales",
    });
  }
};

/* Marcacion Evento Estándar: Planes referidos */
export const marcacionPlanes = async (plan) => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: "trackEvent",
      eventCategory: "Referidos Prepago",
      eventAction: "click",
      eventLabel: plan,
    });
  }
};


const faqs = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Cuántos amigos puedo referir?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            '<ul><li>Puedes referir a todos los amigos que quieras; Por los primeros 5 que se porten exitosamente, te entregaremos el beneficio de 3 GB.</li></ul>',
        },
      },
      {
        '@type': 'Question',
        name: '¿Solo puede referir números prepago?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            '<ul><li>Si, solo se puede referir números prepago de cualquier operador.</li></ul>',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué beneficios recibo por referir a mis amigos por portarse a Movistar Prepago?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            '<ul><li>Tu y tu amigo recibirán 3 GB GRATIS para usar en: Tiktok, Instagram, Snapchat, Pinterest y Telegram. Vigencia de 15 días.</li><li>Por medio de un SMS te informaremos cuando el beneficio este cargado para que disfrutes de este.</li></ul>',
        },
      },
    ],
  };
  
  export default faqs;
  
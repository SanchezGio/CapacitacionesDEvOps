import { useState, useEffect } from "react";

function useSupportWebp() {
    const [bgSupported, setBgSupported] = useState(false);

    async function WebpIsSupported() {
        if (!window.createImageBitmap) return false;
        const webpData =
          "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA=";
        const blob = await fetch(webpData).then((r) => r.blob());
        return createImageBitmap(blob).then(
          () => true,
          () => false
        );
      }
    
      useEffect(() => {
        (async () => {
          if (await WebpIsSupported()) {
            setBgSupported(true);
          } else {
            setBgSupported(false);
          }
        })();
      }, []);

      return bgSupported;
}

export default useSupportWebp;
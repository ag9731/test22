import { useEffect } from "react";

const TawkTo = () => {
  useEffect(() => {
    var Tawk_API = {};
    var Tawk_LoadStart = new Date();

    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/69a9cb02ddd7fc1c34850e39/1jivk2165";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);
  }, []);

  return null;
};

export default TawkTo;

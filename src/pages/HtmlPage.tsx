import React, { useEffect, useState } from "react";

type HtmlPageProps = {
  file: string;
};

export default function HtmlPage({ file }: HtmlPageProps): React.ReactElement {
  const [html, setHtml] = useState<string>("<p>Cargando...</p>");

  useEffect(() => {
    let mounted = true;

    fetch(file)
      .then((response) => response.text())
      .then((text) => {
        if (!mounted) return;

        try {
          const doc = new DOMParser().parseFromString(text, "text/html");
          setHtml(doc.body.innerHTML);
        } catch {
          setHtml(text);
        }
      })
      .catch(() => setHtml("<p>Error cargando la página.</p>"));

    return () => {
      mounted = false;
    };
  }, [file]);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

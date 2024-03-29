"use client";
import { Lato } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";

const lato = Lato({
  weight: ["100", "300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

// export const metadata = {
//   title: 'Royale touche',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  useEffect(() => {
    console.log(window);
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-MTKLKTNEJT");

    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-W6VNSPT6");
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Royale Touche Plywood",
    url: "https://plywood.royaletouche.com/",
    logo: "https://plywood.royaletouche.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FfinalNavbarLogo.f0efe1b4.png&w=256&q=75",
  };

  const jsonLd2 = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "Royale Touche Plywood",
    url: "https://plywood.royaletouche.com/",
    potentialAction: {
      "@type": "SearchAction",
      target: "{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MTKLKTNEJT"
        ></script>
        <link rel="canonical" href="https://plywood.royaletouche.com/" />
      </head>

      <body className={lato.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W6VNSPT6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        ></script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd2) }}
        ></script>
        {children}
      </body>
    </html>
  );
}

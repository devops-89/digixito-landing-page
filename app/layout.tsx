import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import MUIProvider from "@/components/MUIProvider";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Digixito — AI Transformation, Business Transformation, Product Engineering & Design Intelligence",
  description:
    "Digixito partners with ambitious businesses to engineer intelligent AI systems, scale digital products, modernize business operations, and craft high-impact user experiences.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f9f7f2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T636P2LT');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T636P2LT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Statcounter code for campaign https://us.digixito.com/ */}
        <Script id="statcounter-config" strategy="afterInteractive">
          {`
            var sc_project=13361723; 
            var sc_invisible=1; 
            var sc_security="3685d0a0"; 
            window.sc_project = 13361723;
            window.sc_invisible = 1;
            window.sc_security = "3685d0a0";
          `}
        </Script>
        <Script
          id="statcounter-script"
          src="https://www.statcounter.com/counter/counter.js"
          strategy="afterInteractive"
        />
        <noscript>
          <div className="statcounter">
            <a
              title="Web Analytics Made Easy - Statcounter"
              href="https://statcounter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="statcounter"
                src="https://c.statcounter.com/13361723/0/3685d0a0/1/"
                alt="Web Analytics Made Easy - Statcounter"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </a>
          </div>
        </noscript>
        {/* End of Statcounter Code */}

        <MUIProvider>
          {children}
          {process.env.NODE_ENV === "production" && <Analytics />}
          {process.env.NODE_ENV === "production" && <SpeedInsights />}
        </MUIProvider>
      </body>
    </html>
  );
}

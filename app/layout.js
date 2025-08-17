import { inter, syne } from "./fonts";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// react modal video css
import "react-modal-video/css/modal-video.css";

// fonts
import "./../public/css/fontawesome.css";
import "./../public/css/icomoon.css";

//  Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ImportBsJS from "@/components/BootstrapClient";
import Footer from "@/components/footer";
import Header from "@/components/header";
import MetricoolTracker from "@/hooks/MetricoolTracker.js";
import Script from "next/script";

// main css
import "@/public/css/app.css";
import "@/public/css/main.css";
import "@/public/css/mobile-nav.css";

export const metadata = {
  title: "Clipot | We Know About Leads",
  description:
    "Agencia de marketing digital especializada en la generación de leads.",
};

export default function HomeOneLayout({ children }) {
  return (
    <html lang="en">
      <script
        dangerouslySetInnerHTML={{
          __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PLSBG8GJ');
            `,
        }}
      />
      <body className={`${syne.variable} ${inter.variable}`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5LZX1NZ1TR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
						 	window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());

							gtag('config', 'G-5LZX1NZ1TR');
					`}
        </Script>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PLSBG8GJ"
height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />

        <MetricoolTracker />
        <ImportBsJS />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

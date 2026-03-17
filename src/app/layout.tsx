import "@/styles/globals.css";
import { type Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans } from "next/font/google";
import WOWInitializer from "@/components/WOWInitializer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Octopus Talent | Cabinet de Recrutement",
  description: "Accélérateur de carrière et de croissance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  try {
    return (
      <html lang="fr">
        <head>
          <link rel="icon" href="/favicon.ico" />
          {/* Bootstrap Css */}
          <link href="/assets/css/bootstrap.min.css" rel="stylesheet" media="screen" />
          {/* SlickNav Css */}
          <link href="/assets/css/slicknav.min.css" rel="stylesheet" />
          {/* Swiper Css */}
          <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
          {/* Font Awesome Icon Css*/}
          <link href="/assets/css/all.min.css" rel="stylesheet" media="screen" />
          {/* Animated Css */}
          <link href="/assets/css/animate.css" rel="stylesheet" />
          {/* Magnific Popup Core Css File */}
          <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
          {/* Mouse Cursor Css File */}
          <link rel="stylesheet" href="/assets/css/mousecursor.css" />
          {/* Main Custom Css */}
          <link href="/assets/css/custom.css" rel="stylesheet" media="screen" />
        </head>
        <body className={`${plusJakartaSans.variable} font-sans`}>
          <WOWInitializer />
          {children}

          {/* Scripts are outside the try block because they are Next.js components */}
          <Script src="/assets/js/jquery-3.6.0.min.js" strategy="afterInteractive" />
          <Script src="/assets/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
          <Script src="/assets/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
          <Script src="/assets/js/swiper-bundle.min.js" strategy="afterInteractive" />
          <Script src="/assets/js/jquery.waypoints.min.js" strategy="afterInteractive" />
          <Script src="/assets/js/jquery.counterup.min.js" strategy="afterInteractive" />
          <Script src="/assets/js/isotope.pkgd.min.js" strategy="afterInteractive" />
          <Script src="/assets/js/jquery.slicknav.js" strategy="afterInteractive" />
          <Script src="/assets/js/jquery.mb.YTPlayer.min.js" strategy="afterInteractive" />
          <Script src="/assets/js/wow.min.js" strategy="afterInteractive" />
          <Script src="/assets/js/function.js" strategy="afterInteractive" />
        </body>
      </html>
    );
  } catch (error) {
    return (
      <html lang="fr">
        <body>
          <div style={{ padding: "2rem", textAlign: "center", color: "red" }}>
            <h1>Layout Error</h1>
            <pre>{error instanceof Error ? error.message : String(error)}</pre>
          </div>
        </body>
      </html>
    );
  }
}

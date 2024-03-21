import NavBar from "./components/NavBar";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
export const metadata = {
  title: "Bono's Portfolio",
  description: "Space of writing and memorizing",
  openGraph: {
    title: "Bono's Portfolio & dev blog",
    description: "Space of writing and memorizing",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta
          name="google-site-verification"
          content="r_m0EEK6mbjStYggwq2kM_YuQ8Ab3BpZGY0mnDHeWkM"
        />
        <meta
          name="naver-site-verification"
          content="68146474f338dfba7095d4e4f04d22d88ac44267"
        />
      </head>
      <body
        className="bg-[#ECEFF1] dark:bg-gray-900 scrollbar-hide"
        suppressHydrationWarning={true}
      >
        <NavBar>{children}</NavBar>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

import NavBar from "./components/NavBar";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className="bg-[#ECEFF1] dark:bg-[#121212] scrollbar-hide"
        suppressHydrationWarning={true}
      >
        <NavBar>{children}</NavBar>
      </body>
    </html>
  );
}
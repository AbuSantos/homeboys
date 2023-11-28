import "./globals.css";
import NavBar from "../components/NavBar";
import { Roboto } from "next/font/google";
import "../styles/globall.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: "Home Boys",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} h-screen  p-6 w-screen flex justify-center `}
      >
        <div className="w-11/12 divider ">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}

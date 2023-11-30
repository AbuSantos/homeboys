import "./globals.css";
import NavBar from "../components/NavBar";
import { Roboto } from "next/font/google";
// import "../styles/globall.css";
import Footer from "../components/Footer";

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
        className={`${roboto.className} h-screen  p-6 w-screen divider flex justify-center `}
      >
        <div className="w-screen  ">
          <NavBar />
          {children}
          <div className="hidden md:inline-block">
            <div className="text-gray-100 text-2xl bottom-0 left-0 absolute bg-color h-10 w-full flex justify-end">
              Massage
            </div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

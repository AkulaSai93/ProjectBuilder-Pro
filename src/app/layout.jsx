import { Inter, Montserrat, Nunito_Sans, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-inter-family" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["500", "600"], style: ["normal", "italic"], variable: "--font-montserrat-family" });
const nunitoSans = Nunito_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "800", "900"], variable: "--font-nunito-sans" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400"], variable: "--font-poppins-family" });

export const metadata = {
  title: "BuildSpace — Learn, Build & Ship",
  description: "Hands-on projects. AI code review. Real engineering practice.",
};

export const viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${nunitoSans.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}

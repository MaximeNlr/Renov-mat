import { Geist, Geist_Mono, Rubik_Wet_Paint } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rubik = Rubik_Wet_Paint({
  variable: "--rubik-wet-paint",
  subsets: ["latin"],
  weight: '400'
});

export const metadata = {
  title: "Renov'mat",
  description: "Materiaux de seconde main",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${rubik.variable}`}
    >
      <head>
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik+Wet+Paint&display=swap"
        rel="stylesheet"
      />
      </head>
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}

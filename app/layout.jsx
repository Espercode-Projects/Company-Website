import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ClientRootLayout from "./ClientRootLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable : "--font-space-grotesk",
  subsets : ["latin"]
})

export const metadata = {
  title: "Espercode",
  description: "  Transform your ideas into powerful digital products",
  icons: {
    icon: '/img/espercode.ico', // Path relative to the public directory or app directory
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable}  antialiased`}
      >
        <ClientRootLayout>{children}</ClientRootLayout>
      </body>
    </html>
  );
}

import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/app/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JerkSpit",
  description: "JerkSpit is a Edtech Platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          {children}
        </Providers>
      </body>
    </html>
  );
}

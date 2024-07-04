import { Inter } from "next/font/google";
import Navbar from "@/app/navbar/page";
import styles from "@/styles/global.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "INTELEC",
  description: "Venta de material y servicios de Automatizacion y Control Electrico Industrial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <head>
        
 
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body  className={`h-full ${inter.className}`}>
        <header>
          <Navbar />
        </header>
        <main className="h-full">
          {children}
        </main>
      </body>
    </html>
  );
}

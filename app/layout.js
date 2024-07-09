import { Inter } from "next/font/google";
import Navbar from "@/app/navbar/page";
import "@/styles/global.css"; // Asegúrate de que esta ruta sea correcta
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "INTELEC",
  description: "Venta de material y servicios de Automatización y Control Eléctrico Industrial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`h-full flex flex-col ${inter.className}`}>
        <header>
          <Navbar />
        </header>
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-gray-200 text-black py-4">
          <div className="container mx-auto px-4">
            <p>&copy; {new Date().getFullYear()} INTELEC. Todos los derechos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

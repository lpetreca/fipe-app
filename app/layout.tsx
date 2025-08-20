import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Consulta Tabela FIPE",
  description: "Aplicação para consultar preços de veículos na Tabela FIPE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
        {/* Cabeçalho */}
        <header className="bg-blue-600 text-white py-4 shadow-md">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold">🚗 Consulta Tabela FIPE</h1>
          </div>
        </header>

        {/* Conteúdo dividido em duas colunas */}
        <main className="flex flex-grow mx-auto w-full mt-2 gap-2 px-2">
          {/* Coluna da direita: Resultado */}
          <section className="w-full bg-white p-6 rounded shadow">
            {/* children representa o conteúdo da página */}
            {children}
          </section>
        </main>

        {/* Rodapé */}
        <footer className="bg-blue-600 text-white py-4 mt-10">
          <div className="text-center text-sm">
            Desenvolvido por Paloma Andrade © 2025
          </div>
        </footer>
      </body>
    </html>
  );
}

import "./globals.css"; // importa os estilos globais (Tailwind + CSS padrão)
import { Inter } from "next/font/google"; // fonte do Google
import { Navbar } from "@/components/Navbar"; // nosso menu de navegação
import { Footer } from "@/components/Footer"; // rodapé

// configuração da fonte Inter
const inter = Inter({ subsets: ["latin"] });

// SEO básico do site
export const metadata = {
  title: "Portfólio Jailson",
  description: "Meu portfólio moderno em Next.js",
};

// layout raiz do Next.js, engloba todas as páginas
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br"> 
      <body className={`${inter.className} bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}>
        <Navbar />   {/* aparece em todas as páginas */}
        <main className="container mx-auto px-6">{children}</main> {/* conteúdo dinâmico */}
        <Footer />   {/* rodapé em todas as páginas */}
      </body>
    </html>
  );
}

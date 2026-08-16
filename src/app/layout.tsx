import { Manrope } from "next/font/google";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import "../styles/globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: "normal",
  display: "swap",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={`${manrope.className}`}>
        <Header />
        <main className="pt-28 md:pt-50 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "next-themes";
import config from "./siteconfig";
import Footer from "./components/Footer";

// TODO: Add more information here for social media posts

export const metadata: Metadata = {
  title: config.defaultSeo.title,
  description: config.defaultSeo.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="bg-white dark:bg-black transition-colors duration-300 scroll-smooth"
    >
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <body className="sfpro antialiased overflow-x-hidden ">
          <Navbar />
          {children}
          <div className="bg-background">
            <Footer />
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}

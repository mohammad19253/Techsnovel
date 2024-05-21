import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { MainFooter } from "@/components";
import { ReduxProvider } from "@/providers/redux";
import { ReactQueryProvider } from "@/providers/react-query";
import type { ChildrenProps } from "@/types";

export const metadata = {
  description:
    "Develop a single-page application (SPA) using Next.js, which features a user interface capable of performing Create, Read, Update, and Delete (CRUD) operations on a list of users. The application will interact with the API found at: https://reqres.in/.",
  keywords:
    "next, typescript, tailwind css, prettier, eslint, redux, react-query",
  title: "Techsnovel",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export default async function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-full flex flex-col justify-between `}
      >
        <ReduxProvider>
          <ReactQueryProvider>
            <section className="flex-1">{children}</section>
            <MainFooter />
          </ReactQueryProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}

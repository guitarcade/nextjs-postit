import Nav from "./auth/nav";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Next.JS Postit Demo App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} mx-auto max-w-5xl bg-gray-200`}>
        <div className="m-4">
          {/* @ts-expect-error Server Component */}
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}

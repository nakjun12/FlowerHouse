import "@/app/shared/globals.css";
import type { Metadata } from "next";
import { MockProvider } from "../shared/components/msw-component";

// if(typeof window === "undefined")
// register();

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <MSWComponent /> */}
      <body>
        <MockProvider>{children}</MockProvider>
      </body>
    </html>
  );
}

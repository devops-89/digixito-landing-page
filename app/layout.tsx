import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import MUIProvider from "@/components/MUIProvider";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
export const metadata: Metadata = {
  title:
    "Digixito — AI Transformation, Business Transformation, Product Engineering & Design Intelligence",
  description:
    "Digixito partners with ambitious businesses to engineer intelligent AI systems, scale digital products, modernize business operations, and craft high-impact user experiences.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f9f7f2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <MUIProvider>
          {children}
          {process.env.NODE_ENV === "production" && <Analytics />}
          {process.env.NODE_ENV === "production" && <SpeedInsights />}
        </MUIProvider>
      </body>
    </html>
  );
}

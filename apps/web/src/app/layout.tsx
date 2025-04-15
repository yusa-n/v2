import "@v2/ui/globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Provider as AnalyticsProvider } from "@v2/analytics/client";
import { cn } from "@v2/ui/cn";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import localFont from "next/font/local";

const DepartureMono = localFont({
  src: "../fonts/DepartureMono-Regular.woff2",
  variable: "--font-departure-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://v2.run"),
  title: "Create v2",
  description:
    "A free, open-source starter kit for your next project, built with insights from Midday.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          `${DepartureMono.variable} ${GeistSans.variable} ${GeistMono.variable}`,
          "antialiased dark",
        )}
      >
        <Header />
        {children}
        <Footer />

        <AnalyticsProvider />
      </body>
    </html>
  );
}

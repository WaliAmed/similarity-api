import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/Toast";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bodyStyle = {
    height: "calc(100vh - 1px)",
  };

  return (
    <html
      lang="en"
      className={cn("bg-white text-slate-900 antialiased", inter.className)}
    >
      <body className="bg-slate-50 min-h-screen w-full dark:bg-slate-900 antialiased">
        <Providers>
          {children}

          <Toaster position="bottom-right" />

          {/* @ts-expect-error Srver Component*/}
          <Navbar />
        </Providers>

        {/* Allow more height on mobile devices */}
        <div className="h-40 md:hidden" />
      </body>
    </html>
  );
}

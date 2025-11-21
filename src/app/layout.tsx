import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { DataProvider } from "@/contexts/DataContext";
import { FilterProvider } from "@/contexts/FilterContext";
import { UIProvider } from "@/contexts/UIContext";

export const metadata: Metadata = {
  title: "NEST+m College Map",
  description: "Senior College Destinations Map",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider>
            <DataProvider>
                <FilterProvider>
                    <UIProvider>
                        {children}
                    </UIProvider>
                </FilterProvider>
            </DataProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

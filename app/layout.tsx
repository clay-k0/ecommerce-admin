import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import { ToasterProvider } from "@/providers/toast-provider";
import { ModalProvider } from "@/providers/modal-provider";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-commerce Admin Dashboard",
  description: "E-commerce Admin Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#41a67f",
        },

        layout: {
          helpPageUrl: "https://clerk.dev/support",
          logoImageUrl: "https://clerk.dev/logo.png",
          logoPlacement: "inside",
          privacyPageUrl: "https://clerk.dev/privacy",
          showOptionalFields: true,
          socialButtonsPlacement: "bottom",
          socialButtonsVariant: "iconButton",
          termsPageUrl: "https://clerk.dev/terms",
        },
        baseTheme: dark,
      }}
    >
      <html lang='en'>
        <body className={inter.className}>
          <ModalProvider />
          <ToasterProvider />
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

import { Toaster } from "sonner";
import { AuthProvider } from "./customLayOut/AuthContext";
import "./globals.css";
import ReactQueryProviders from "@/hooks/use-react-query";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen">
        <ReactQueryProviders>
          <AuthProvider>{children}</AuthProvider>
        </ReactQueryProviders>
        <Toaster />
      </body>
    </html>
  );
}

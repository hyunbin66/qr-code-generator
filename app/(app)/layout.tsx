import { getCurrentUser } from "@/utils/supabase/auth";
import Providers from "../Providers";
import "../globals.css";
import Header from "./Header";
import { ReactNode } from "react";
import { Tables } from "@/type/supabaseType";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

interface LayoutProps {
  children: ReactNode;
}

export default async function RootLayout({ children }: LayoutProps) {
  // requireAuth를 사용하여 사용자 데이터 가져오기
  const user: Tables<'members'> | null = await getCurrentUser();

  return (
    <html lang="en">
      <body>
        <Header user={user} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

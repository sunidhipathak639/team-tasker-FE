import { ClerkProvider } from '@clerk/nextjs';
// import { QueryClient, QueryClientProvider } from 'react-query';
import { Be_Vietnam_Pro } from "next/font/google";
import type { Metadata } from "next";
import DashboardHeader from '@/components/DashboardHeader';
import DashboardMain from '@/components/DashboardMain';
import '@/styles/globals.css';

// const queryClient = new QueryClient();
const FontBeVietnamPro = Be_Vietnam_Pro({
  weight: ["400", "500", "700"],
  subsets: ["vietnamese", "latin"],
});

export const metadata: Metadata = {
  title: "LarkLAb Ai",
  description: "team productivity app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bodyStyles = {
    "--global-actions-bar-height": "56px",
  } as React.CSSProperties;
  return (
    <ClerkProvider>

      <html lang="en">
        <body className={FontBeVietnamPro.className} style={bodyStyles}>
          {/* <QueryClientProvider client={queryClient}> */}
          <DashboardHeader />
          <DashboardMain>{children}</DashboardMain>          {/* </QueryClientProvider> */}
        </body>
      </html>
    </ClerkProvider>

  );
}

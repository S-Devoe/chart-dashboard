"use client";
import Sidebar from "@/components/homepage/Sidebar";
import "./globals.css";
import Providers from "@/context/Providers";
import { styled } from "styled-components";
import { DarkModeProvider } from "@/context/DarkModeContext";

export const metadata = {
  title: "Dashboard",
  description: "Coded by DeeVoe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Body>
        <DarkModeProvider>
          <Providers>
            <Sidebar />
            <Main>{children} </Main>
          </Providers>
        </DarkModeProvider>
      </Body>
    </html>
  );
}

const Body = styled.body`
  background: ${(props: any) => props.theme.background};
  display: flex;
  flex-direction: row;
  gap: 40px;
  width: 100%;
`;

const Main = styled.main`
  width: 100%;
`;

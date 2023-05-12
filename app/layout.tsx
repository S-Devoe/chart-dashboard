"use client";
import Sidebar from "@/components/homepage/Sidebar";
import "./globals.css";
import Providers from "@/context/Providers";
import { styled } from "styled-components";

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
      <Providers>
        <Body>
          <Sidebar />
          <Main>{children} </Main>
        </Body>
      </Providers>
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

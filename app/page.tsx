"use client";
import ChartInfo from "@/components/homepage/ChartInfo";
import Header from "@/components/homepage/Header";
import Sidebar from "@/components/homepage/Sidebar";
import { ReactNode } from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <HomeSection>
      <Header />
      <ChartInfo />
    </HomeSection>
  );
}

const HomeSection = styled.section`
  padding-block: 25px;
  padding-right: 40px;
`;

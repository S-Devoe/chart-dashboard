"use client";
import { styled } from "styled-components";
import LogoIcon from "../icons/LogoIcon";
import DashboardIcon from "../icons/DashboardIcon";
import { FC } from "react";
import ResearchIcon from "../icons/ResearchIcon";
import ReportIcon from "../icons/ReportIcon";
import TeamIcon from "../icons/TeamIcon";
import BoxIcon from "../icons/BoxIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NotificationIcon from "../icons/NotificationIcon";
import SettingsIcon from "../icons/SettingsIcon";
import CtaIcon from "../icons/CtaIcon";
import Avatar from "../assets/images/Avatar.png";
import Image from "next/image";

interface NavInfoType {
  title: string;
  icon: any;
  link: string;
}

interface LinkType {
  $isActive: boolean;
}

const Sidebar = () => {
  const pathname = usePathname();

  console.log(pathname);

  const navDetails: NavInfoType[] = [
    { link: "/", title: "Dashboard", icon: <DashboardIcon /> },
    { link: "/research", title: "Research", icon: <ResearchIcon /> },
    { link: "#", title: "Credit Report", icon: <ReportIcon /> },
    { link: "#", title: "Teams", icon: <TeamIcon /> },
    { link: "#", title: "Box", icon: <BoxIcon /> },
  ];

  const bottomNav = [
    { link: "#", title: "CTA", icon: <CtaIcon /> },
    { link: "#", title: "Notifications", icon: <NotificationIcon /> },
    { link: "#", title: "Settings", icon: <SettingsIcon /> },
  ];

  return (
    <Aside>
      <Container>
        <LogoIcon />
        <LinkContainer>
          {navDetails.map((item, index) => (
            <DashboardLink
              href={item.link}
              key={index}
              $isActive={pathname === item.link}
            >
              {item.icon}
            </DashboardLink>
          ))}
        </LinkContainer>
        <BottomContainer>
          {bottomNav.map((item, index) => (
            <button key={index}>{item.icon}</button>
          ))}
          <Image src={Avatar} alt='avatar' />
        </BottomContainer>
      </Container>
    </Aside>
  );
};
export default Sidebar;

const Aside = styled.aside`
  /* width: 100px; */
  background: ${({ theme }) => theme.navBg};
  border-right: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 4px 0px 0px 4px;
  display: flex;
  justify-content: center;
  padding-inline: 30px;
  padding-top: 27px;
  padding-bottom: 40px;
`;
const Container = styled.section`
  width: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DashboardLink = styled(Link)<LinkType>`
  background: ${({ $isActive }) => $isActive && "#D4F7F2"};
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ $isActive }) => $isActive && "48px"};
  width: ${({ $isActive }) => $isActive && "48px"};
  border-radius: 4px;
`;
const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  margin-top: 108px;
`;
const BottomContainer = styled.div`
  margin-top: auto;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img{
    cursor: pointer;
  }
`;

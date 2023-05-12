import { styled } from "styled-components";
import SearchIcon from "../icons/SearchIcon";
import HelpIcon from "../icons/HelpIcon";

const Header = () => {
  const date: Date = new Date();

  console.log(date);

  return (
    <HeaderContainer>
      <TextContent>
        <Title>Dashboard</Title>
        <DateContainer>{date.toDateString()}</DateContainer>
      </TextContent>
      <SearchContent>
        <InputContainer>
          <SearchIcon />
          <Input
            type="text"
            autoComplete="on"
            autoCorrect="on"
            placeholder="Search"
          />
        </InputContainer>
        <IconContainer>
          <HelpIcon />
        </IconContainer>
      </SearchContent>
    </HeaderContainer>
  );
};
export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const TextContent = styled.div``;
const SearchContent = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
const Title = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 26px;
  line-height: 31px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.primaryText};
  margin-bottom: 8px;
`;
const DateContainer = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.secondaryText};
`;
const InputContainer = styled.div`
  height: 48px;
  width: 310px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding-inline: 12px;
  background: ${({ theme }) => theme.inputBg};
  border: 1px solid #d0d5dd;
  border-radius: 8px;
`;
const Input = styled.input`
  border: none;
  outline: none;
  background: none;
  font-family: "Lato", san-serif;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.inputBg};
  width: 48px;
  height: 48px;
`;

import { styled } from "styled-components";
import BagIcon from "../icons/BagIcon";

const ChartInfoCard = () => {
  return (
    <Card>
      <TopContent>
        <Title>Total Orders Today</Title>
        <IconContainer>
          <BagIcon />
        </IconContainer>
      </TopContent>
      <BottomContent>Booto</BottomContent>
    </Card>
  );
};
export default ChartInfoCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 24px;
  background: #ffffff;
  border: 1px solid #e7eaee;
  border-radius: 8px;
`;

const TopContent = styled.div`
  display: flex; justify-content: space-between;
`;

const BottomContent = styled.div``;

const Title = styled.h2``;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border-radius: 8px;
  background: #e6faff;
`;

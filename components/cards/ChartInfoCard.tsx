import { styled } from "styled-components";
import BagIcon from "../icons/BagIcon";
import { Line } from "rc-progress";

interface CardProp {
  title: string;
  icon: any;
  iconBg: string;
  value: string;
  gain: boolean;
  percentageChange: string;
  progressPercentage: number;
  strokeColor: string;
}

interface StyleType {
  $iconBackground?: string;
  $gain?: boolean;
}

const ChartInfoCard = ({
  title,
  icon,
  iconBg,
  value,
  percentageChange,
  progressPercentage,
  strokeColor,
  gain,
}: CardProp) => {
  return (
    <Card>
      <TopContent>
        <Title>{title}</Title>
        <IconContainer $iconBackground={iconBg}>{icon}</IconContainer>
      </TopContent>
      <BottomContent>
        <Number>
          <NumberValue>{value}</NumberValue>
          <Percent $gain={gain}>{percentageChange}</Percent>
        </Number>
        <ParagraphText>vs. previous month</ParagraphText>
        <ProgressContainer>
          <PercentContainer>
            <span>0%</span>
            <span>{progressPercentage}%</span>
          </PercentContainer>
          <Line
            className="progress__bar"
            trailColor="#F0F4F8"
            strokeColor={strokeColor}
            percent={[progressPercentage]}
          />
        </ProgressContainer>
      </BottomContent>
    </Card>
  );
};
export default ChartInfoCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 24px;
  background: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 8px;
`;

const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BottomContent = styled.div``;

const Title = styled.h2`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.secondaryText};
`;

const IconContainer = styled.div<StyleType>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border-radius: 8px;
  background: ${(props) => props.$iconBackground};
`;

const Number = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const NumberValue = styled.h3`
  font-weight: 800;
  font-size: 26px;
  line-height: 31px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.primaryText};
`;

const Percent = styled.span<StyleType>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 10px;
  background: ${(props) =>
    props.$gain ? props.theme.gainBg : props.theme.loseBg};
  border-radius: 4px;
  font-weight: 500;
  font-size: 12px;
  line-height: 10px;
  letter-spacing: 0.5px;
  color: ${(props) =>
    props.$gain ? props.theme.greenPercentText : props.theme.redPercentText};
`;

const ParagraphText = styled.p`
  margin-top: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.secondaryText};
`;

const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  > .progress__bar {
    height: 5px;
  }
`;

const PercentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
  margin-top: 12px;

  > span {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.primaryText};
  }
`;

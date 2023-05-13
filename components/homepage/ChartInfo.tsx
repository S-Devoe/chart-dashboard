import { styled } from "styled-components";
import BagIcon from "../icons/BagIcon";
import ChartInfoCard from "../cards/ChartInfoCard";
import SendIcon from "../icons/SendIcon";
import TeamIcon from "../icons/TeamIcon";
import GraphIcon from "../icons/GraphIcon";

const ChartInfo = () => {
  const cardInfo = [
    {
      id: 1,
      title: "Total Orders Today",
      icon: <BagIcon />,
      iconBg: "#E5FAFF",
      value: "1,567",
      percentChng: "▴ 2.89%",
      gain: true,
      progressPercent: 78,
      strokeColor: "#00C7F2",
    },
    {
      id: 2,
      title: "Conversion Rate",
      icon: <SendIcon />,
      iconBg: "#FEF3E7",
      value: "12%",
      percentChng: "▾ 2.89%",
      gain: false,
      progressPercent: 16,
      strokeColor: "#F7A23B",
    },

    {
      id: 3,
      title: "New Clients",
      icon: <TeamIcon height={16} width={16} />,
      iconBg: "#FEF8E6",
      value: "200",
      percentChng: "▴ 12.89%",
      gain: true,
      progressPercent: 36,
      strokeColor: "#FBC62F",
    },
    {
      id: 4,
      title: "Revenue Day Ratio",
      icon: <GraphIcon />,
      iconBg: "#E8E6FE",
      value: "5.5:1",
      percentChng: "▴ 1.09%",
      gain: true,
      progressPercent: 90,
      strokeColor: "#695CFB",
    },
  ];

  return (
    <Container>
      {cardInfo.map((item) => (
        <ChartInfoCard
          key={item.id}
          title={item.title}
          icon={item.icon}
          iconBg={item.iconBg}
          value={item.value}
          gain={item.gain}
          strokeColor={item.strokeColor}
          percentageChange={item.percentChng}
          progressPercentage={item.progressPercent}
        />
      ))}
    </Container>
  );
};
export default ChartInfo;

const Container = styled.section`
  margin-top: 2rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(4, minmax(290px, 1fr));
`;

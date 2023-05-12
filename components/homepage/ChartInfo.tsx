import { styled } from "styled-components";
import BagIcon from "../icons/BagIcon";
import ChartInfoCard from "../cards/ChartInfoCard";

const ChartInfo = () => {
  return (
    <Container>
      <ChartInfoCard />
    </Container>
  );
};
export default ChartInfo;

const Container = styled.section`
  margin-top: 2rem;
`;

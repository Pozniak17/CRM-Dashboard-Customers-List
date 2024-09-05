import Statistic from "../../components/Statistic/Statistic";
import TableSection from "../../components/TableSection/TableSection";
import TopBar from "../../components/TopBar/TopBar";
import { Container } from "./Customers.module";

export default function Customers() {
  return (
    <Container>
      <TopBar />
      <Statistic />
      <TableSection />
    </Container>
  );
}

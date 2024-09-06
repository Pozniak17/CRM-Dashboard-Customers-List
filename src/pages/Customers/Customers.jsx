import axios from "axios";
import Statistic from "../../components/Statistic/Statistic";
import TableSection from "../../components/TableSection/TableSection";
import TopBar from "../../components/TopBar/TopBar";
import { Container } from "./Customers.module";
import { useEffect, useState } from "react";

export default function Customers() {
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get(
        "https://66daaa9ef47a05d55be57f7c.mockapi.io/users",
        {
          params: {
            limit: 8,
            page: 1,
          },
        }
      );
      console.log(response.data);
      setUsers(response.data);
    }

    fetchUsers();
  }, []);

  return (
    <Container>
      <TopBar />
      <Statistic />
      <TableSection data={users} />
    </Container>
  );
}

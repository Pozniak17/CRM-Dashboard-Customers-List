import axios from "axios";
import Statistic from "../../components/Statistic/Statistic";
import TableSection from "../../components/TableSection/TableSection";
import TopBar from "../../components/TopBar/TopBar";
import { Container } from "./Customers.module";
import { useEffect, useState } from "react";

export default function Customers() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  console.log(users);

  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get(
        "https://66daaa9ef47a05d55be57f7c.mockapi.io/users",
        {
          params: {
            limit: 8,
            page,
          },
        }
      );
      console.log(response.data);
      setUsers(response.data);
    }

    fetchUsers();
  }, [page]);

  return (
    <Container>
      <TopBar />
      <Statistic />
      <TableSection data={users} onHandle={setPage} currentPage={page} />
    </Container>
  );
}

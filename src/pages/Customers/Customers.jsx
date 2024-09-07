import axios from "axios";
import Statistic from "../../components/Statistic/Statistic";
import TableSection from "../../components/TableSection/TableSection";
import TopBar from "../../components/TopBar/TopBar";
import { Container } from "./Customers.module";
import { useEffect, useState } from "react";

export default function Customers() {
  const [allUsers, setAllUsers] = useState([]); // всі користувачі
  const [filteredUsers, setFilteredUsers] = useState([]); // відфільтровані користувачі
  const [page, setPage] = useState(1); //сторінки при пагінації
  const [searchQuery, setSearchQuery] = useState(""); // пошуковий запит

  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get(
        "https://66daaa9ef47a05d55be57f7c.mockapi.io/users"
      );
      setAllUsers(response.data); // збереження всіх користувачів
      setFilteredUsers(response.data); // початкове відображення всіх користувачів
    }

    fetchUsers();
  }, []);

  useEffect(() => {
    // Фільтруємо користувачів на основі пошукового запиту
    const filtered = allUsers.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Оновлюємо відфільтрованих користувачів
    setFilteredUsers(filtered);
    setPage(1); // Повертаємося на першу сторінку після фільтрації
  }, [searchQuery, allUsers]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  // Визначаємо, які користувачі мають відображатися на поточній сторінці
  const paginatedUsers = filteredUsers.slice((page - 1) * 8, page * 8);

  return (
    <Container>
      <TopBar onSearch={setSearchQuery} />
      <Statistic />
      <TableSection
        data={paginatedUsers}
        onHandle={handlePageChange}
        currentPage={page}
        onSearch={setSearchQuery}
      />
    </Container>
  );
}

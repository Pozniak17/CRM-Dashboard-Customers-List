import axios from "axios";
import Statistic from "../../components/Statistic/Statistic";
import TableSection from "../../components/TableSection/TableSection/TableSection";
import TopBar from "../../components/TopBar/TopBar";
import { Container } from "./Customers.module";
import { useEffect, useState } from "react";
import Spinner from "../../components/utils/Spinner";

export default function Customers() {
  const [allUsers, setAllUsers] = useState([]); // всі користувачі
  const [filteredUsers, setFilteredUsers] = useState([]); // відфільтровані користувачі
  const [page, setPage] = useState(1); //сторінки при пагінації
  const [searchQuery, setSearchQuery] = useState(""); // пошуковий запит
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://66daaa9ef47a05d55be57f7c.mockapi.io/users"
        );
        setAllUsers(response.data); // збереження всіх користувачів
        setFilteredUsers(response.data); // початкове відображення всіх користувачів
        // } catch (error) {
        // тут помилка
      } finally {
        setLoading(false);
      }
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
      {loading ? (
        <Spinner wrapperStyle={{ marginRight: "450px" }} />
      ) : (
        <>
          <TopBar onSearch={setSearchQuery} />
          <Statistic users={allUsers} />

          {allUsers.length > 0 && (
            <TableSection
              data={paginatedUsers}
              allUsers={allUsers}
              onHandle={handlePageChange}
              currentPage={page}
              onSearch={setSearchQuery}
            />
          )}
        </>
      )}
    </Container>
  );
}

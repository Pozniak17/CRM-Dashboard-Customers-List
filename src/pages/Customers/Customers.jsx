import axios from "axios";
import Statistic from "../../components/Statistic/Statistic";
import TableSection from "../../components/TableSection/TableSection/TableSection";
import TopBar from "../../components/TopBar/TopBar";
import { Container } from "./Customers.module";
import { useEffect, useState } from "react";
import Spinner from "../../components/utils/Spinner";
import { fetchQuery } from "../../components/utils/api";

export default function Customers() {
  const [allUsers, setAllUsers] = useState([]); // всі користувачі
  const [filteredUsers, setFilteredUsers] = useState([]); // відфільтровані користувачі
  const [page, setPage] = useState(1); //сторінки при пагінації
  const [searchQuery, setSearchQuery] = useState(""); // пошуковий запит
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);

        const data = await fetchQuery();

        setAllUsers(data); // збереження всіх користувачів
        setFilteredUsers(data); // початкове відображення всіх користувачів
      } catch (error) {
        console.error("Error fetching users:", error);
        setError(true);
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
      {loading && <Spinner />}

      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {allUsers.length > 0 && (
        <>
          <TopBar onSearch={setSearchQuery} />
          <Statistic users={allUsers} />
          <TableSection
            data={paginatedUsers}
            allUsers={allUsers}
            onHandle={handlePageChange}
            currentPage={page}
            onSearch={setSearchQuery}
          />
        </>
      )}
    </Container>
  );
}

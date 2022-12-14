import { useState } from "react";
import { Title, useGetList } from "react-admin";
import {
  Card,
  TextField,
  Button,
  Toolbar,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@mui/material";

const token = localStorage.getItem("token");

const NewUsers = () => {
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 10;
  const { data, total, isLoading } = useGetList("admin/newusers?newUser=1", {
    headers: {
      Authorization: `Bearer ${JSON.parse(token)}`,
      "Content-Type": "application/json, charset=utf-8",
    },
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div style={{ marginTop: "1.8rem" }}>
      <Title title="Last users list" />
      <h2>Last users</h2>
      {/* <TextField
                label="Search"
                value={filter}
                onChange={e => setFilter(e.target.value)}
                variant="filled"
                size="small"
                margin="dense"
            /> */}
      <Card>
        <Table sx={{ padding: 2 }} size="small">
          <TableHead style={{ backgroundColor: "#069bff" }}>
            <TableRow>
              <TableCell>
                <b style={{ color: "#ffffff" }}>EMAIL</b>
              </TableCell>
              <TableCell>
                <b style={{ color: "#ffffff" }}>NAME</b>
              </TableCell>
              <TableCell>
                <b style={{ color: "#ffffff" }}>LAST NAME</b>
              </TableCell>
              <TableCell>
                <b style={{ color: "#ffffff" }}>USERNAME</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((user) => (
              <TableRow key={user.email}>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.userName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
      <Toolbar>
        {page > 1 && (
          <Button onClick={() => setPage(page - 1)}>Previous page</Button>
        )}
        {page < total / perPage && (
          <Button onClick={() => setPage(page + 1)}>Next page</Button>
        )}
      </Toolbar>
    </div>
  );
};

export default NewUsers;

// const [tableData, setTableData] = useState([])

// const getUsers = async () => {
//   let result = await axios.get('https://wine-supply-back-production.up.railway.app/admin/newusers?newUser=1', {
//       headers: {
//     Authorization: `Bearer ${JSON.parse(token)}`,
//     "Content-Type": "application/json, charset=utf-8",
//   }})

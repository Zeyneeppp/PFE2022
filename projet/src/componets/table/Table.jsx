import "./Table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: "DG-16-0002",
      Site: "CENTRE DE FORMATION EL KHROUB (CFK)",
      Network: "Ooredoo",
      Débit: "20",
      Ligne: 541365275,
      status: "Active",
    },
    {
      id: 2235235,
      Site: "SIEGE DISTRICT BLIDA",
      Network: "Mobilis",
      Débit: "30",
      Ligne: 642565565,
      status: "Active",
    },
    {
      id: 2342353,
      Site: "CENTRE MARINE ANNABA",
      Network: "Adsl",
      Débit: "10",
      Ligne: 21345658547,
      status: "Expiré",
    },
    {
      id: "CBR-16-0004",
      Site: "CM Alger",
      Network: "Adsl",
      Débit: "10",
      Ligne: 21315150616,
      status: "A_renouvlé",
    },
   
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Code Site</TableCell>
            <TableCell className="tableCell">Site</TableCell>
            <TableCell className="tableCell">Network</TableCell>
            <TableCell className="tableCell">Débit</TableCell>
            <TableCell className="tableCell">Ligne</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell"> {row.Site}</TableCell>
              <TableCell className="tableCell">{row.Network}</TableCell>
              <TableCell className="tableCell">{row.Débit}</TableCell>
              <TableCell className="tableCell">{row.Ligne}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import AdmCadastroInstituição from "./CadastroInst";
import { useState } from "react";

const columns = [
  {
    id: "codigo",
    label: "Codigo",
    minWidth: 50,
  },
  {
    id: "nome",
    label: "Nome",
    minWidth: 170,
  },
  {
    id: "municipio",
    label: "Municipio",
    minWidth: 200,
    align: "center",
  },
  {
    id: "telefone",
    label: "Telefone",
    minWidth: 100,
    align: "center",
  },
  {
    id: "dia",
    label: "Dia",
    minWidth: 80,
    align: "center",
  },
  {
    id: "turno",
    label: "Turno",
    minWidth: 80,
    align: "center",
  },
];

const rows = [
  {
    codigo: "1",
    nome: "Jose Faria da Rocha Manchele",
    municipio: "Contagem",
    telefone: "31 999998888",
    dia: "Segunda",
    turno: "Manha",
  },
  {
    codigo: "1",
    nome: "Jose Faria da Rocha Manchele",
    municipio: "Contagem",
    telefone: "31 999998888",
    dia: "Segunda",
    turno: "Manha",
  },
  {
    codigo: "1",
    nome: "Jose Faria da Rocha Manchele",
    municipio: "Contagem",
    telefone: "31 999998888",
    dia: "Segunda",
    turno: "Manha",
  },
  {
    codigo: "1",
    nome: "Jose Faria da Rocha Manchele",
    municipio: "Contagem",
    telefone: "31 999998888",
    dia: "Segunda",
    turno: "Manha",
  },
  {
    codigo: "1",
    nome: "Jose Faria da Rocha Manchele",
    municipio: "Contagem",
    telefone: "31 999998888",
    dia: "Segunda",
    turno: "Manha",
  },
  {
    codigo: "1",
    nome: "Jose Faria da Rocha Manchele",
    municipio: "Contagem",
    telefone: "31 999998888",
    dia: "Segunda",
    turno: "Manha",
  },
  {
    codigo: "1",
    nome: "Jose Faria da Rocha Manchele",
    municipio: "Contagem",
    telefone: "31 999998888",
    dia: "Segunda",
    turno: "Manha",
  },
  {
    codigo: "1",
    nome: "Jose Faria da Rocha Manchele",
    municipio: "Contagem",
    telefone: "31 999998888",
    dia: "Segunda",
    turno: "Manha",
  },
  {
    codigo: "1",
    nome: "Jose Faria da Rocha Manchele",
    municipio: "Contagem",
    telefone: "31 999998888",
    dia: "Segunda",
    turno: "Manha",
  },
  {
    codigo: "1",
    nome: "Jose Faria da Rocha Manchele",
    municipio: "Contagem",
    telefone: "31 999998888",
    dia: "Segunda",
    turno: "Manha",
  },
  {
    codigo: "1",
    nome: "Jose Faria da Rocha Manchele",
    municipio: "Contagem",
    telefone: "31 999998888",
    dia: "Segunda",
    turno: "Manha",
  },
  {
    codigo: "1",
    nome: "Jose Faria da Rocha Manchele",
    municipio: "Contagem",
    telefone: "31 999998888",
    dia: "Segunda",
    turno: "Manha",
  },
  {
    codigo: "1",
    nome: "Jose Faria da Rocha Manchele",
    municipio: "Contagem",
    telefone: "31 999998888",
    dia: "Segunda",
    turno: "Manha",
  },
  {
    codigo: "1",
    nome: "Jose Faria da Rocha Manchele",
    municipio: "Contagem",
    telefone: "31 999998888",
    dia: "Segunda",
    turno: "Manha",
  },
];

export const AdmInstituições = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper elevation={4}>
      <Box display={"flex"} flexDirection={"row"} width={"100%"}>
        <Box p={"2vh 4vh"}>
          <AdmCadastroInstituição />
        </Box>

        <Box p={"2vh 4vh"}>
          <Typography sx={{ fontSize: "3.5vh", mb: "1.5vh", color: "orange" }}>
            Instituições
          </Typography>
          <Paper sx={{ width: "100%", overflow: "hidden" }} elevation={5}>
            <TableContainer sx={{ maxHeight: 440, maxWidth: 1000}}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* Adicionar loading quando tiver buscando os dados */}
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 20, 30, 50]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              showFirstButton={true}
              showLastButton={true}
            />
          </Paper>
        </Box>
      </Box>
    </Paper>
  );
};
export default AdmInstituições;

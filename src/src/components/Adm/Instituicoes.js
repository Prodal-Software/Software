import TablePagination from "@mui/material/TablePagination";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AdmCadastroInstituição from "./CadastroInst";
import { useState } from "react";
import PropTypes from "prop-types";

function createData(codigo, nome, status, municipio, telefone, dia, turno) {
  return {
    codigo,
    nome,
    status,
    info: [
      {
        municipio: municipio,
        telefone: telefone,
        dia: dia,
        turno: turno,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.codigo}
        </TableCell>
        <TableCell>{row.nome}</TableCell>
        <TableCell
          align="right"
          sx={{
            color: row.status == "Ativo" ? "green" : "grey",
            fontWeight: "bold",
          }}
        >
          {row.status}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              {/* <Typography variant="h6" gutterBottom component="div">
                Informações
              </Typography> */}
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: "orange", fontWeight: "bold" }}>
                      Município
                    </TableCell>
                    <TableCell sx={{ color: "orange", fontWeight: "bold" }}>
                      Telefone
                    </TableCell>
                    <TableCell sx={{ color: "orange", fontWeight: "bold" }}>
                      Dia da Semana
                    </TableCell>
                    <TableCell sx={{ color: "orange", fontWeight: "bold" }}>
                      Turno
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.info.map((infoRow) => (
                    <TableRow key={infoRow.municipio}>
                      <TableCell component="th" scope="row">
                        {infoRow.municipio}
                      </TableCell>
                      <TableCell>{infoRow.telefone}</TableCell>
                      <TableCell>{infoRow.dia}</TableCell>
                      <TableCell>{infoRow.turno}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    codigo: PropTypes.number.isRequired,
    nome: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    info: PropTypes.arrayOf(
      PropTypes.shape({
        municipio: PropTypes.string.isRequired,
        telefone: PropTypes.string.isRequired,
        dia: PropTypes.string.isRequired,
        turno: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

const rows = [
  createData(
    1,
    "Jose Faria da Rocha Manchele",
    "Ativo",
    "Contagem",
    "31 99894-6841",
    "Segunda",
    "Manha"
  ),
  createData(
    2,
    "Casa de Apoio à Criança Carente de Contagem",
    "Ativo",
    "Contagem",
    "31 99169-1987",
    "Terça",
    "Tarde"
  ),
  createData(
    3,
    "Associação Irmão Sol",
    "Desativado",
    "Contagem",
    "31 94812-1616",
    "Segunda",
    "Manha"
  ),
  createData(
    4,
    "Associação Lar Amor e Esperança",
    "Ativo",
    "Belo Horizonte",
    "31 97661-1548",
    "Quinta",
    "Noite"
  ),
  createData(
    5,
    "Jose Faria da Rocha Manchele",
    "Ativo",
    "Contagem",
    "31 99894-6841",
    "Segunda",
    "Manha"
  ),
  createData(
    6,
    "Casa de Apoio à Criança Carente de Contagem",
    "Ativo",
    "Contagem",
    "31 99169-1987",
    "Terça",
    "Tarde"
  ),
  createData(
    7,
    "Associação Irmão Sol",
    "Desativado",
    "Contagem",
    "31 94812-1616",
    "Segunda",
    "Manha"
  ),
  createData(
    8,
    "Associação Lar Amor e Esperança",
    "Ativo",
    "Belo Horizonte",
    "31 97661-1548",
    "Quinta",
    "Noite"
  ),
  createData(
    9,
    "Jose Faria da Rocha Manchele",
    "Ativo",
    "Contagem",
    "31 99894-6841",
    "Segunda",
    "Manha"
  ),
  createData(
    10,
    "Casa de Apoio à Criança Carente de Contagem",
    "Ativo",
    "Contagem",
    "31 99169-1987",
    "Terça",
    "Tarde"
  ),
  createData(
    11,
    "Associação Irmão Sol",
    "Desativado",
    "Contagem",
    "31 94812-1616",
    "Segunda",
    "Manha"
  ),
  createData(
    12,
    "Associação Lar Amor e Esperança",
    "Ativo",
    "Belo Horizonte",
    "31 97661-1548",
    "Quinta",
    "Noite"
  ),
  createData(
    13,
    "Jose Faria da Rocha Manchele",
    "Ativo",
    "Contagem",
    "31 99894-6841",
    "Segunda",
    "Manha"
  ),
  createData(
    14,
    "Casa de Apoio à Criança Carente de Contagem",
    "Ativo",
    "Contagem",
    "31 99169-1987",
    "Terça",
    "Tarde"
  ),
  createData(
    15,
    "Associação Irmão Sol",
    "Desativado",
    "Contagem",
    "31 94812-1616",
    "Segunda",
    "Manha"
  ),
  createData(
    16,
    "Associação Lar Amor e Esperança",
    "Ativo",
    "Belo Horizonte",
    "31 97661-1548",
    "Quinta",
    "Noite"
  ),
];

export const AdmInstituições = () => {
  const columns = [
    {
      id: "openInfoBtn",
      label: "",
      minWidth: 10,
    },
    {
      id: "id",
      label: "ID",
      minWidth: 20,
    },
    {
      id: "nome",
      label: "Nome",
      minWidth: 600,
    },
    {
      id: "status",
      label: "Status",
      minWidth: 100,
      align: "center",
    },
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (newPage) => {
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
            <TableContainer sx={{ maxHeight: 800, maxWidth: 1000 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{
                          minWidth: column.minWidth,
                          fontWeight: "bold",
                        }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <Row key={row.nome} row={row} />
                  ))}
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

import TablePagination from "@mui/material/TablePagination";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import AdmCadastroInstituição from "./CadastroInst";
import { useEffect, useState } from "react";
import { get_listagem_instituicoes } from "../../service/instituicao";

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

export const AdmInstituições = () => {
  // Setters
  const rows = [
    {
      codigo: "1",
      nome: "Jose Faria da Rocha Manchele",
      municipio: "Contagem",
      telefone: "31 999998888",
      dia: "Segunda",
      turno: "Manha",
      status: "Ativo",
    },
    {
      codigo: "1",
      nome: "Jose Faria da Rocha Manchele",
      municipio: "Contagem",
      telefone: "31 999998888",
      dia: "Segunda",
      turno: "Manha",
      status: "Desativado",
    },
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [instituicoes, setInstituicoes] = useState([]);

  useEffect(() => {
    listagemInstituicoes();
  }, []);
  
  const listagemInstituicoes = async (event) => {
    get_listagem_instituicoes()
      .then( resp => {
        console.log(resp.data.data);
        setInstituicoes(resp.data.data.map( value => {
          let obj = {
            codigo: value.codigo,
            nome: value.nome,
            status: value.status == 1 ? 'Ativo' : 'Desativado' 
          }
          return obj;
        }));
      })
      .catch( err => {
        console.log(err);
      })
  };

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
          <AdmCadastroInstituição 
            acionaListagem={listagemInstituicoes}
          />
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
                  {/* Adicionar loading quando tiver buscando os dados */}
                  {/* {rows */}
                  {instituicoes
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
                              <TableCell
                                key={column.id}
                                align={column.align}
                                // sx={{color:column.status == 'Ativo'?'green':'grey'}}
                              >
                                {value}
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
              rowsPerPageOptions={[]}
              component="div"
              count={instituicoes.length}
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

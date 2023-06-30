import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  TableRow,
  TableCell,
  IconButton,
  Collapse,
  Box,
  Table,
  TableHead,
  TableBody,
} from "@mui/material";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";

const DetalhesInstituicao = ({ row }) => {
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
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.codigo}
        </TableCell>
        <TableCell>{row.nome}</TableCell>
        <TableCell
          align="right"
          sx={{
            color: row.status === "Ativo" ? "green" : "grey",
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
};

DetalhesInstituicao.propTypes = {
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

export default DetalhesInstituicao;

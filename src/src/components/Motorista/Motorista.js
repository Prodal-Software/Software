import { Box, Typography, Stack } from "@mui/material";
import MotoristaDoaçãoCard from "../Templates/MotoristaDoaçãoCard";
import { get_listagem_instituicoes } from '../../service/instituicao';
import { useEffect, useState } from "react";


export const Motorista = () => {

  const [instituicoes, setInstituicoes] = useState([]);

  useEffect(() => {
    get_listagem_instituicoes()
      .then( resp => {
        setInstituicoes(resp.data.data)
        console.log(resp.data.data);
      })
      .catch( err => {
        console.log(err);
      })
  },[])

  return (
    <Box
      width={"100%"}
      height={"100%"}
      marginTop={"5%"}
      display={"flex"}
      justifyContent={"center"}
    >
      <Stack justifyContent={"space-between"} spacing={5}>
        <Typography color={"black"} variant="h2">
          Motorista
        </Typography>
        <Box
          bgcolor={"#eeeeee"}
          borderRadius={"30px"}
          border={"1px solid grey"}
          padding={"20px"}
        >

          {instituicoes.map( resp => {
            return (
              // <p>{resp.nome}</p>
            <MotoristaDoaçãoCard
              doador={resp.nome}

              endereco={resp.municipio}
              alimento={resp.status == 1 ? "Ativo" : "Inativo"}
              quantidade={resp.telefone}
              // instituicoes={instituicoes}
            />
            )
          })}

        </Box>
      </Stack>
    </Box>
  );
};

export default Motorista;

import { Box, Typography, Stack } from "@mui/material";
import MotoristaDoaçãoCard from "./Templates/MotoristaDoaçãoCard";

export const Motorista = () => {
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
          <MotoristaDoaçãoCard
            doador={"Isabela Ribeiro"}
            endereco={"Rua Omega, 13, Belo Horizonte, Minas Gerais"}
            alimento={"Cebola"}
            quantidade={"10 Caixas"}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default Motorista;

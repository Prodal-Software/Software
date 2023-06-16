import { Box, Typography, Stack } from "@mui/material";
import AdmDoaçãoCard from "./Templates/AdmDoaçãoCard";
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

export const DoaçõesGerenciamento = () => {
  return (
    <Box
      width={"800px"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
    >
      <Typography variant="h4" color={"darkorange"} mb={'20px'}>
        Doações Efetuadas
      </Typography>

      <Box 
      bgcolor={'#eeeeee'}
      borderRadius={'30px'}
      border={'1px solid grey'}
      padding={'20px'}
      >
        <Stack
          justifyContent={"space-between"}
          spacing={2}
          alignItems={'center'}
        >
          <AdmDoaçãoCard
            doador={"Isabela Ribeiro"}
            endereco={"Rua Omega, 13, Belo Horizonte, Minas Gerais"}
            alimento={"Cebola"}
            quantidade={"10 Caixas"}
            status={"Aguardando"}
            icon={<HelpOutlineOutlinedIcon color="warning"/>}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default DoaçõesGerenciamento;

import { Box, Typography, Stack } from "@mui/material";
import AdmDoaçãoCard from "../Templates/AdmDoaçãoCard";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

export const DoaçõesNãoEfetuadas = () => {
  return (
    <Box
      width={"800px"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
    >
      <Typography variant="h4" color={"darkorange"} mb={'20px'}>
        Doações Não Efetuadas
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
            doador={"Loildo Costa"}
            endereco={"Rua Gama, 8009, Betim, Minas Gerais"}
            alimento={"Laranja"}
            quantidade={"2 Caixas"}
            status={"Não Efetuado"}
            icon={<CancelOutlinedIcon color="error"/>}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default DoaçõesNãoEfetuadas;

import { Box, Typography, Stack } from "@mui/material";
import AdmDoaçãoCard from "../Templates/AdmDoaçãoCard";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";


export const DoaçõesEfetuadas = () => {
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
            doador={"Guilherme Simao"}
            endereco={"Rua Alfa, 275, Contagem, Minas Gerais"}
            alimento={"Banana"}
            quantidade={"3 Caixas"}
            status={"Coletado"}
            icon={<CheckCircleOutlineOutlinedIcon color="success"/>}
          />
          <AdmDoaçãoCard
            doador={"Maycon"}
            endereco={"Rua Beta, 900, Contagem, Minas Gerais"}
            alimento={"Berinjela"}
            quantidade={"1 Caixa"}
            status={"Coletado"}
            icon={<CheckCircleOutlineOutlinedIcon color="success"/>}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default DoaçõesEfetuadas;

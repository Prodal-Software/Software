import { Box, Paper, Stack, Typography } from "@mui/material";

export const AdmInstituições = () => {
  // Setters

  return (
    <Paper elevation={4}>
      <Box display={"flex"} flexDirection={"row"} width={"100%"}>
        <Box>Isso deve ser uma coluna</Box>
        <Box m={"0vh 5vh"}></Box>
        <Box>
          <Stack>
            <Typography sx={{ fontSize: "3.5vh", mb: "1vh", color: "orange" }}>
              Instituições
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Paper>
  );
};
export default AdmInstituições;

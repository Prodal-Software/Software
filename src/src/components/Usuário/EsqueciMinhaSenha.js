import {
  Box,
  Typography,
  Button,
  Stack,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Swal from "sweetalert2";
import { useState } from "react";

export const EsqueciMinhaSenha = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (Event) => {
    setEmail(Event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.length !== 0) {
      Swal.fire({
        icon: "success",
        title: "Email de recuperação enviado!",
        allowOutsideClick: true,
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Dados faltando",
        text: "Por favor, preencha com seu email.",
        confirmButtonText: "OK",
        confirmButtonColor: "red",
      });
    }
  };

  return (
    <Box
      width={"100%"}
      height={"100%"}
      m={"30vh 0vh"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Typography sx={{ fontSize: "3.5vh", mb: "1vh", color: "orange" }}>
        Esqueci Minha Senha
      </Typography>
      <Typography sx={{ fontSize: "1.5vh", color: "gray" }}>
        Enviaremos um email para o endereço abaixo para a alteração da senha
      </Typography>

      <Stack
        direction={{ sm: "column", md: "row", lg: "row" }}
        alignItems={"center"}
      >
        <FormControl sx={{ m: "1vh", color: "warning" }} variant="outlined">
          <InputLabel htmlFor="emailInput" color="warning">
            Email
          </InputLabel>
          <OutlinedInput
            sx={{ width: "35vh" }}
            value={email}
            color="warning"
            id="emailInput"
            type="email"
            onChange={handleEmailChange}
            label="Email"
          />
        </FormControl>
        <Button variant="contained" color="warning" onClick={handleSubmit}>
          Enviar Email
        </Button>
      </Stack>
    </Box>
  );
};

export default EsqueciMinhaSenha;

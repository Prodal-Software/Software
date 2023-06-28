import {
  Box,
  Typography,
  Button,
  Stack,
  TextField,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import Swal from "sweetalert2";
import { useState } from "react";

export const AdmCadastroInstituição = () => {
  // Setters
  const [doador, setDoador] = useState("");
  const [codigo, setCodigo] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dia, setDia] = useState("");
  const [turno, setTurno] = useState("");

  // Handlers
  const handleChangeDoador = (Event) => {
    setDoador(Event.target.value);
  };
  const handleChangeCodigo = (Event) => {
    setCodigo(Event.target.value);
  };
  const handleChangeMunicipio = (Event) => {
    setMunicipio(Event.target.value);
  };
  const handleChangeTelefone = (Event) => {
    setTelefone(Event.target.value);
  };
  const handleChangeDia = (Event) => {
    setDia(Event.target.value);
  };
  const handleChangeTurno = (Event) => {
    setTurno(Event.target.value);
  };
  const handleClearTextFields = () => {
    setDoador("");
    setCodigo("");
    setMunicipio("");
    setTelefone("");
    setDia("");
    setTurno("");
  };
  const handleSubmit = async () => {
    // if (doador && codigo && municipio && telefone && dia && turno !== "") {
    if (1) {
      // Realizar o processamento de enviar os dados
      let data = {
        doador,
        codigo,
        municipio,
        telefone: "+55 " + telefone,
        dia,
        turno,
      };

      var formData = new FormData();
      formData.append('informacoes',data);

      // POST the formData to backend
      fetch("https://localhost/api/post/video", {
        method: "POST",
        body: formData,
      })
        .then(function (response) {
          // console.log(response);
          // Checar resposta do backend
          if (response.status === 200) {
            // Resposta Positiva
            Swal.fire({
              icon: "success",
              title: "Instituição Cadastrada!",
              showConfirmButton: false,
              timer: 2000,
            });
          } else {
            // Resposta Negativa
            Swal.fire({
              icon: "error",
              title: "Ocorreu um erro",
              text: "Não foi possível cadastrar a instituição, por favor tente novamente mais tarde. Se o problema persistir, entre em contato com os adiministradores do sistema",
              confirmButtonText: "OK",
              confirmButtonColor: "red",
            });
          }
        })
        // Tratamento de erro
        .catch(function (error) {
          Swal.fire({
            icon: "error",
            title: "Oops!",
            text: "Erro: " + error,
            confirmButtonText: "OK",
            confirmButtonColor: "red",
          });
        });
      // console.log(data);
    } else {
      Swal.fire({
        icon: "error",
        title: "Dados faltando",
        text: "Por favor, preencha todos os campos.",
        confirmButtonText: "OK",
        confirmButtonColor: "red",
      });
    }
  };

  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Stack spacing={1}>
        <Typography sx={{ fontSize: "3.5vh", mb: "1vh", color: "orange" }}>
          Cadastrar Instituição
        </Typography>

        <TextField
          color="warning"
          label="Nome da Instituição"
          type="name"
          value={doador}
          onChange={handleChangeDoador}
        />

        <TextField
          color="warning"
          label="Código"
          type="number"
          value={codigo}
          onChange={handleChangeCodigo}
        />

        <TextField
          color="warning"
          label="Município"
          type="name"
          value={municipio}
          onChange={handleChangeMunicipio}
        />

        <TextField
          color="warning"
          label="Telefone"
          type="name"
          value={telefone}
          onChange={handleChangeTelefone}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">+55</InputAdornment>
            ),
          }}
        />

        <Box marginTop={"2%"}>
          <TextField
            color="warning"
            label="Dia da Semana"
            value={dia}
            onChange={handleChangeDia}
            helperText="Selecione o dia de atendimento reservado da instituição"
            select
            fullWidth
          >
            <MenuItem value={0}>Segunda-Feira</MenuItem>
            <MenuItem value={1}>Terça-Feira</MenuItem>
            <MenuItem value={2}>Quarta-Feira</MenuItem>
            <MenuItem value={3}>Quinta-Feira</MenuItem>
            <MenuItem value={4}>Sexta-Feira</MenuItem>
          </TextField>
        </Box>
        <Box marginTop={"2%"}>
          <TextField
            color="warning"
            label="Turno do dia"
            value={turno}
            onChange={handleChangeTurno}
            helperText="Selecione o turno de atendimento reservado da instituição"
            select
            fullWidth
          >
            <MenuItem value={0}>Manhã</MenuItem>
            <MenuItem value={1}>Tarde</MenuItem>
            <MenuItem value={2}>Noite</MenuItem>
          </TextField>
        </Box>
      </Stack>
      <Stack
        spacing={5}
        direction={"row"}
        justifyContent={"center"}
        marginTop={"2em"}
      >
        <Button
          variant="outlined"
          color="error"
          onClick={handleClearTextFields}
        >
          Limpar Campos
        </Button>

        <Button variant="contained" color="warning" onClick={handleSubmit}>
          Cadastrar Instituição
        </Button>
      </Stack>
    </Box>
  );
};
export default AdmCadastroInstituição;

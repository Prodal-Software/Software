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
import { post_instituicao } from "../../service/instituicao";

export const AdmCadastroInstituição = (props) => {
  // Normal States
  const [doador, setDoador] = useState("");
  const [codigo, setCodigo] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dia, setDia] = useState("");
  const [turno, setTurno] = useState("");

  // Error States
  const [doadorError, setDoadorError] = useState(false);
  const [codigoError, setCodigoError] = useState(false);
  const [municipioError, setMunicipioError] = useState(false);
  const [telefoneError, setTelefoneError] = useState(false);
  const [diaError, setDiaError] = useState(false);
  const [turnoError, setTurnoError] = useState(false);

  // Handlers
  const handleChangeDoador = (Event) => {
    setDoador(Event.target.value);
    setDoadorError(false);
  };
  const handleChangeCodigo = (Event) => {
    setCodigo(Event.target.value);
    setCodigoError(false);
  };
  const handleChangeMunicipio = (Event) => {
    setMunicipio(Event.target.value);
    setMunicipioError(false);
  };
  const handleChangeTelefone = (Event) => {
    setTelefone(Event.target.value);
    setTelefoneError(false);
  };
  const handleChangeDia = (Event) => {
    setDia(Event.target.value);
    setDiaError(false);
  };
  const handleChangeTurno = (Event) => {
    setTurno(Event.target.value);
    setTurnoError(false);
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
    // Checar por campos vazios
    if (!doador || !codigo || !municipio || !telefone || !dia || !turno) {
      // Alterar Error State para campos vazios
      setDoadorError(!doador);
      setCodigoError(!codigo);
      setMunicipioError(!municipio);
      setTelefoneError(!telefone);
      setDiaError(!dia);
      setTurnoError(!turno);

      Swal.fire({
        icon: "error",
        title: "Dados faltando",
        text: "Por favor, preencha todos os campos.",
        confirmButtonText: "OK",
        confirmButtonColor: "red",
      });
      return;
    } else {
      try {
        // Realizar o processamento de enviar os dados
        let data = {
          nome: doador,
          codigo,
          municipio,
          telefone: "+55 " + telefone,
          dia,
          turno,
        };

        // POST the formData to backend
        post_instituicao(data)
          .then(function (response) {
            if (response.status == "200") {
              Swal.fire({
                icon: "success",
                title: "Instituição cadastrada com sucesso",
                showConfirmButton: false,
                timer: 2000,
              });
              props.acionaListagem();
              handleClearTextFields();
            } else {
              Swal.fire({
                icon: "error",
                title: "Erro ao cadastrar instituição",
                text: "Por favor tente novamente mais tarde",
                confirmButtonText: "OK",
                confirmButtonColor: "red",
              });
              console.log(response.status + response.statusText);
            }
          });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Erro ao cadastrar instituição",
          text: "Por favor tente novamente mais tarde",
          confirmButtonText: "OK",
          confirmButtonColor: "red",
        });
        console.log(error);
      }
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
          label="Nome"
          type="name"
          value={doador}
          onChange={handleChangeDoador}
        />

        <TextField
          color="warning"
          label="Codigo"
          type="number"
          value={codigo}
          onChange={handleChangeCodigo}
        />

        <TextField
          color="warning"
          label="Municipio"
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

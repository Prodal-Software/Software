import {
  Box,
  Typography,
  Button,
  Stack,
  TextField,
  MenuItem,
} from "@mui/material";
import Swal from "sweetalert2";
import { useState } from "react";

export const AdmDoação = () => {
  const [doador, setDoador] = useState("");
  const [endereço, setEndereço] = useState("");
  const [alimento, setAlimento] = useState("");
  const [qtd, setQtd] = useState("");
  const [tempo, setTempo] = useState("");

  const handleChangeDoador = (Event) => {
    setDoador(Event.target.value);
  };
  const handleChangeEndereço = (Event) => {
    setEndereço(Event.target.value);
  };
  const handleChangeAlimento = (Event) => {
    setAlimento(Event.target.value);
  };
  const handleChangeQtd = (Event) => {
    setQtd(Event.target.value);
  };
  const handleChangeTempo = (Event) => {
    setTempo(Event.target.value);
  };
  const handleClearTextFields = () => {
    setDoador("");
    setEndereço("");
    setAlimento("");
    setQtd("");
    setTempo("");
  };
  const handleSubmit = () => {
    if (doador && endereço && alimento && qtd && tempo !== "") {
      // Realizar o processamento de enviar os dados
      // OBS: Adicionar +55 no telefone na hora de enviar
      let data = {
        doador,
        endereço,
        alimento,
        qtd,
        tempo,
      };

      console.log(data);

      Swal.fire({
        icon: "success",
        title: "Doação Cadastrada!",
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Dados faltando",
        text: "Por favor, preencha todos os campos.",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <Box display={"flex"} flexDirection={"column"} mt={"5px"}>
      <Stack spacing={1}>
        <Typography variant="h4" color={"darkorange"}>
          Realizar Doação
        </Typography>

        <TextField
          color="warning"
          label="Nome do Doador"
          type="name"
          value={doador}
          onChange={handleChangeDoador}
        />

        {/* Inserir 2 radio buttons para endereco externo e mpl 
        Mostrar campos de acordo com a selecao*/}


        {/* !!!Quebrar campos!!! */}
        <TextField
          color="warning"
          label="Endereço"
          type="text"
          value={endereço}
          onChange={handleChangeEndereço}
        />

        <Box marginTop={"2%"}>
          <TextField
            color="warning"
            label="Alimento"
            value={alimento}
            onChange={handleChangeAlimento}
            helperText="Selecione o alimento da doação"
            select
            fullWidth
          >
            <MenuItem value={0}>Banana</MenuItem>
            <MenuItem value={1}>Berinjela</MenuItem>
            <MenuItem value={2}>Alface</MenuItem>
            <MenuItem value={3}>Couve</MenuItem>
            <MenuItem value={4}>
              <Typography sx={{fontStyle:'italic', fontWeight:'bold'}}>Outro</Typography>
            </MenuItem>
          </TextField>
        </Box>

        <Box marginTop={"2%"}>
          <TextField
            color="warning"
            label="Quantidade"
            value={qtd}
            onChange={handleChangeQtd}
            helperText="Selecione o turno de atendimento reservado da instituição"
            select
            fullWidth
          >
            <MenuItem value={0}>1 Caixa</MenuItem>
            <MenuItem value={1}>2 Caixas</MenuItem>
            <MenuItem value={2}>3 Caixas</MenuItem>
            <MenuItem value={3}>5 Caixas</MenuItem>
            <MenuItem value={4}>10 Caixas</MenuItem>
          </TextField>
        </Box>

        <Box marginTop={"2%"}>
          <TextField
            color="warning"
            label="Tempo para Coleta"
            value={tempo}
            onChange={handleChangeTempo}
            helperText="Selecione o tempo para coletar a doação"
            select
            fullWidth
          >
            <MenuItem value={0}>1h</MenuItem>
            <MenuItem value={1}>1h30m</MenuItem>
            <MenuItem value={2}>2h</MenuItem>
            <MenuItem value={3}>2h30m</MenuItem>
            <MenuItem value={4}>3h</MenuItem>
            <MenuItem value={5}>
              <Typography sx={{ fontStyle: "italic", fontWeight: "bold" }}>
                Outro
              </Typography>
            </MenuItem>
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
          Cadastrar Doação
        </Button>
      </Stack>
    </Box>
  );
};
export default AdmDoação;

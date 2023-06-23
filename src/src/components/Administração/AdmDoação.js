import {
  Box,
  Typography,
  Button,
  Stack,
  TextField,
  MenuItem,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Swal from "sweetalert2";
import { Fragment, useState } from "react";

export const Doação = () => {
  const [doador, setDoador] = useState("");
  const [local, setLocal] = useState("");
  const [box, setBox] = useState("");
  const [endereco, setEndereco] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [complemento, setComplemento] = useState("");
  const [alimento, setAlimento] = useState("");
  const [qtd, setQtd] = useState("");
  const [tempo, setTempo] = useState("");

  const handleChangeDoador = (Event) => {
    setDoador(Event.target.value);
  };
  const handleChangeLocal = (Event) => {
    setLocal(Event.target.value);
  };
  const handleChangeBox = (Event) => {
    setBox(Event.target.value);
  };
  const handleChangeEndereco = (Event) => {
    setEndereco(Event.target.value);
  };
  const handleChangeRua = (Event) => {
    setRua(Event.target.value);
  };
  const handleChangeNumero = (Event) => {
    setNumero(Event.target.value);
  };
  const handleChangeBairro = (Event) => {
    setBairro(Event.target.value);
  };
  const handleChangeCidade = (Event) => {
    setCidade(Event.target.value);
  };
  const handleChangeComplemento = (Event) => {
    setComplemento(Event.target.value);
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
    setLocal("");
    setEndereco("");
    setRua("");
    setNumero("");
    setBairro("");
    setCidade("");
    setComplemento("");
    setBox("");
    setAlimento("");
    setQtd("");
    setTempo("");
  };
  const handleSubmit = () => {
    try {
      let data = {};
      /*
      A sequencia de condicionais aninhados é para verificar se todos 
      os campos foram preenchidos e enviar o endereço de acordo com
      o local selecionado.
      */
      if (
        doador &&
        local &&
        ((rua && numero && bairro && cidade) || box) &&
        alimento &&
        qtd &&
        tempo !== ""
      ) {
        if (local === "Externo") {
          data = {
            doador,
            endereço:
              rua +
              ", " +
              numero +
              ", " +
              bairro +
              ", " +
              cidade +
              ", " +
              complemento,
            alimento,
            qtd,
            tempo,
          };
        } else {
          data = {
            doador,
            endereço: box,
            alimento,
            qtd,
            tempo,
          };
        }
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
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Ocorreu um erro",
        text: "Por favor, tente novamente mais tarde",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Stack spacing={1}>
        <Typography variant="h4" color={"darkorange"}>
          Realizar Doação
        </Typography>

        <TextField
          fullWidth
          color="warning"
          label="Nome do Doador"
          type="name"
          value={doador}
          onChange={handleChangeDoador}
        />

        {/* Inserir 2 radio buttons para endereco externo e mpl 
        Mostrar campos de acordo com a selecao*/}
        <FormControl>
          <Stack direction={"row"} spacing={2}>
            <FormLabel
              id="radio-buttons-group-label"
              color="warning"
              sx={{ alignSelf: "center" }}
            >
              Local :
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="radio-buttons-group-label"
              value={local}
              onChange={handleChangeLocal}
            >
              <FormControlLabel
                value="Externo"
                control={<Radio color="warning" />}
                label="Externo"
              />
              <FormControlLabel
                value="MLP"
                control={<Radio color="warning" />}
                label="MLP"
              />
              <FormControlLabel
                value="Lojista"
                control={<Radio color="warning" />}
                label="Lojista"
              />
            </RadioGroup>
          </Stack>
        </FormControl>

        {local === "Externo" && (
          <Fragment>
            <Stack direction={"row"} spacing={1}>
              <TextField
                fullWidth
                color="warning"
                label="Rua"
                type="text"
                value={rua}
                onChange={handleChangeRua}
              />
              <TextField
                sx={{ width: "150px" }}
                color="warning"
                label="Numero"
                type="number"
                value={numero}
                onChange={handleChangeNumero}
              />
            </Stack>

            <Stack direction={"row"} spacing={1}>
              <TextField
                color="warning"
                label="Bairro"
                type="text"
                value={bairro}
                onChange={handleChangeBairro}
              />
              <TextField
                color="warning"
                label="Cidade"
                type="text"
                value={cidade}
                onChange={handleChangeCidade}
              />
            </Stack>

            <TextField
              multiline
              color="warning"
              label="Complemento"
              type="text"
              value={complemento}
              onChange={handleChangeComplemento}
            />
          </Fragment>
        )}

        {local === "MLP" && (
          <Fragment>
            <TextField
              multiline
              color="warning"
              label="Box"
              type="text"
              value={box}
              onChange={handleChangeBox}
            />
          </Fragment>
        )}

        {local === "Lojista" && (
          <Fragment>
            <TextField
              multiline
              color="warning"
              label="Endereço"
              type="text"
              value={endereco}
              onChange={handleChangeEndereco}
            />
          </Fragment>
        )}

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
              <Typography sx={{ fontStyle: "italic", fontWeight: "bold" }}>
                Outro
              </Typography>
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
        marginTop={"10px"}
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
export default Doação;

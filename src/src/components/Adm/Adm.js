import { Box, Typography, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";

import DoaçõesGerenciamento from "./GerenciamentoDoacao";
import DoaçõesEfetuadas from "./DoacaoEfetuada";
import DoaçõesNãoEfetuadas from "./DoacaoNaoEfetuada";
import Doação from "./Doacao";
import CadastroInstituição from "./CadastroInst";
import AdmInstituições from "./Instituicoes";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const Administração = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ pt: "40px" }}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Typography variant="h2">Administração</Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          textColor="primary"
          indicatorColor="primary"
          onChange={handleChange}
          aria-label="basic tabs"
        >
          <Tab label="Gerenciamento de Retiradas" {...a11yProps(0)} />
          <Tab label="Doações Coletadas" {...a11yProps(1)} />
          <Tab label="Doações Não Efetuadas" {...a11yProps(2)} />
          <Tab label="Cadastro de Doação" {...a11yProps(3)} />
          <Tab label="Instituições" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <DoaçõesGerenciamento />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DoaçõesEfetuadas />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DoaçõesNãoEfetuadas />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Doação />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <AdmInstituições />
      </TabPanel>
    </Box>
  );
};

export default Administração;

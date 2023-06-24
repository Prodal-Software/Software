import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

import AdmCadastroInstituição from "./CadastroInst";

import { useState } from "react";

export const AdmInstituições = () => {
  // Setters
  const [expanded, setExpanded] = useState(false);

  // Handlers
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Paper elevation={4}>
      <Box display={"flex"} flexDirection={"row"} width={"100%"}>
        <Box p={"2vh 4vh"}>
          <AdmCadastroInstituição />
        </Box>
        <Box>
          
        </Box>
        <Box p={"2vh 4vh"}>
          <Stack>
            <Typography sx={{ fontSize: "3.5vh", mb: "1vh", color: "orange" }}>
              Instituições
            </Typography>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography
                  sx={{
                    textAlign: "start",
                    width: "80%",
                    flexShrink: 0,
                    m: "0vh 2vh",
                  }}
                >
                  Nome da instituição
                </Typography>
                <Typography sx={{ color: "text.secondary", mr: "1vh" }}>
                  Status:
                </Typography>
                <Typography sx={{ color: "green" }}>Ativo</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography width={'80vh'} textAlign={'start'} color={'gray'}>
                  Doador: {'doador'}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Stack>
        </Box>
      </Box>
    </Paper>
  );
};
export default AdmInstituições;

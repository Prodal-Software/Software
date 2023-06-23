import { Box, Typography, List, ListItem, Icon } from "@mui/material";
import {
  Modal,
  ModalClose,
  Sheet,
  ListDivider,
  Link,
  Card,
  CardOverflow,
  Button,
  ModalDialog,
} from "@mui/joy";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Transition } from "react-transition-group";
import { useState } from "react";

function AdmDoaçãoCard({ doador, endereco, alimento, quantidade, status, icon }) {
  const [open, setOpen] = useState("");
  return (
    <>
      <Card
        onClick={() => setOpen("detalhes")}
        variant="contained" //contained outlined
        orientation="horizontal"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "600px",
          gap: 2,
          bgcolor: "white",
          "&:hover": {
            boxShadow: "md",
            borderColor: "neutral.outlinedHoverBorder",
          },
        }}
      >
        <Box width={"600px"}>
          <Typography
            display={"flex"}
            justifyContent={"start"}
            level="h2"
            fontSize="lg"
            id="card-description"
            sx={{ color: "darkorange", fontSize: "20px" }}
          >
            {doador}
          </Typography>
          <Typography
            display={"flex"}
            justifyContent={"start"}
            fontSize="sm"
            aria-describedby="card-description"
            mb={1}
          >
            <Link
              overlay
              underline="none"
              href="#interactive-card"
              sx={{ color: "text.tertiary" }}
            >
              {endereco}
            </Link>
          </Typography>
          <Box
            display={"flex"}
            justifyContent={"space-around"}
            fontSize="sm"
            aria-describedby="card-description"
            alignItems={"center"}
            mb={1}
          >
            <Typography>Alimento: {alimento}</Typography>
            <Typography>Quantidade: {quantidade}</Typography>
            <Box display={'flex'} flexDirection={'row'}>
              <Typography>
                Status: 
              </Typography>
              {icon}
            </Box>
          </Box>
        </Box>
        <CardOverflow
          variant="soft"
          color="neutral"
          sx={{
            display: "flex",
          }}
        >
          <Button
            color="neutral"
            variant="plain"
            onClick={() => setOpen("detalhes")}
          >
            <SearchIcon></SearchIcon>
          </Button>
        </CardOverflow>
      </Card>

      <Transition in={open === "detalhes"} timeout={400}>
        {(state) => (
          <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            keepMounted
            open={!["exited", "exiting"].includes(state)}
            onClose={() => setOpen(false)}
            slotProps={{
              backdrop: {
                sx: {
                  opacity: 0,
                  backdropFilter: "none",
                  transition: `opacity 400ms, backdrop-filter 400ms`,
                  ...{
                    entering: { opacity: 1, backdropFilter: "blur(8px)" },
                    entered: { opacity: 1, backdropFilter: "blur(8px)" },
                  }[state],
                },
              },
            }}
            sx={{
              // maxWidth: 500,
              borderRadius: "lg",
              p: 4,
              boxShadow: "lg",
              visibility: state === "exited" ? "hidden" : "visible",
            }}
          >
            <ModalDialog
              aria-labelledby="fade-modal-dialog-title"
              aria-describedby="fade-modal-dialog-description"
              sx={{
                opacity: 0,
                transition: `opacity 300ms`,
                ...{
                  entering: { opacity: 1 },
                  entered: { opacity: 1 },
                }[state],
              }}
            >
              <Sheet
                variant="outlined"
                sx={{
                  maxWidth: 500,
                  borderRadius: "lg",
                  p: 4,
                  boxShadow: "lg",
                }}
              >
                <ModalClose
                  variant="outlined"
                  sx={{
                    top: "calc(-1/4 * var(--IconButton-size))",
                    right: "calc(-1/4 * var(--IconButton-size))",
                    boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.3)",
                    borderRadius: "50%",
                    bgcolor: "background.body",
                  }}
                />
                <Typography
                  component="h1"
                  id="modal-title"
                  level="h4"
                  textColor="inherit"
                  fontWeight="lg"
                  mb={1}
                  display={"flex"}
                  fontSize={"2em"}
                  justifyContent={"center"}
                >
                  Detalhes
                </Typography>
                <Typography id="modal-desc" textColor="text.tertiary">
                  <List aria-labelledby="basic-list-demo">
                    <ListItem>
                      <Typography variant="body2" pr={"10px"}>
                        Doador:
                      </Typography>
                      <Typography fontWeight={"bold"} color={"orangered"}>
                        {doador}
                      </Typography>
                    </ListItem>
                    <ListDivider />

                    <ListItem>
                      <Typography variant="body2" pr={"10px"}>
                        Local:
                      </Typography>
                      {endereco}
                    </ListItem>
                    <ListDivider />

                    <ListItem>
                      <Typography variant="body2" pr={"10px"}>
                        Alimento:
                      </Typography>
                      {alimento}
                    </ListItem>
                    <ListDivider />

                    <ListItem>
                      <Typography variant="body2" pr={"10px"}>
                        Quantidade:
                      </Typography>
                      {quantidade}
                    </ListItem>
                    <ListDivider />

                    <ListItem>
                      <Typography variant="body2" pr={"10px"}>
                        Status:
                      </Typography>
                      <Typography>
                        {status}
                      </Typography>
                    </ListItem>
                  </List>
                </Typography>
              </Sheet>
            </ModalDialog>
          </Modal>
        )}
      </Transition>
    </>
  );
}
export default AdmDoaçãoCard;

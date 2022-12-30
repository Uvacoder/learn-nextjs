import { AccessTime } from "@mui/icons-material";
import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";
import "../../styles/TodoCard.module.css";

const StyledImg = styled.img`
  height: 3rem;
  width: 100%;
`;
function TodoCard({ id, title, url }) {
  return (
    <Grid item xs={3}>
      <Paper elevation={10} sx={{ marginTop: 3 }}>
        <img
          style={{ width: "100%", height: "5rem", objectFit: "fill" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaEiKpObtNizcc7B_VGDqSMvODtNQEIju7HA&usqp=CAU"
          alt={id}
          className="img"
        />

        <Box paddingX={1}>
          <Typography variant="subtitle1" component="h2">
            Hello
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <AccessTime sx={{ width: 10.5 }} />
            <Typography variant="body2" component="p">
              5 hours
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}

export default TodoCard;

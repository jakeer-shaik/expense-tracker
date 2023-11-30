import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const AllTransactions = ({ transactions, setTransactions }) => {
  const handlerDelete = (id) => {
    const filtered = transactions.filter((item) => item.id !== id);
    setTransactions(filtered);
  };

  return (
    <Box sx={{ padding: 3, marginX: 'auto' }}>
  <Typography variant="h6">Transaction History:</Typography>
  <List
    sx={{
      height: "fit-content",
      display: "flex",
      justifyContent: "start",
      overflowX: "scroll",
      "::-webkit-scrollbar": { display: "none" },
    }}
  >
    {transactions.length ? (
      transactions.map((item) => {
        return (
          <Card
            sx={{
              minWidth: 200,
              marginX: 2,
              backgroundColor: '#aaf0d1',
              color: "#004953",
            }}
            key={item.id}
          >
            <CardContent>
              <Typography variant="h5" component="div" sx={{textTransform:'capitalize'}}>
                {item.title}
              </Typography>
              <Typography variant="h6">Amount</Typography>
              <Typography
                variant="h6"
                sx={{ color: item.amount > 0 ? "#228b22" : "red" }}
              >
                ₹  {item.amount}
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                startIcon={<DeleteIcon />}
                sx={{ textTransform: 'unset',bgcolor:'#29ab87' }}
                onClick={() => handlerDelete(item.id)}
                size="small"
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        );
      })
    ) : (
      <ListItem
        sx={{
          bgcolor: "#36454F",
          color: "white",
          marginY: 0.5,
          borderRadius: 3,
        }}
      >
        <ListItemText primary="You don't have any transactions." />
      </ListItem>
    )}
  </List>
</Box>

  );
};

export default AllTransactions;

import { Alert, Box, Typography } from "@mui/material";
import React from "react";

const Balance = ({ transactions }) => {
  const amount = transactions.map((item) => item.amount);
  const balance = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <Box
        sx={{
          backgroundColor: "blueviolet",
          color: "#fff",
          textAlign: "center",
          padding: 3,
          borderRadius: 3,
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
        }}
      >
        <Typography variant="h5">Balance:</Typography>
        <Typography variant="h4">₹ {balance}</Typography>
      </Box>
      <Box>
        {balance > 0 ? (
          <Alert severity="success">You have some more money</Alert>
        ) : balance < 0 ? (
          <Alert severity="error">You are in Loss.</Alert>
        ) : null}
      </Box>
    </>
  );
};

export default Balance;

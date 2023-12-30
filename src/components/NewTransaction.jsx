import {  Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const NewTransaction = ({ setTransactions }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const addNewTransaction = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 10000) + 1,
      title: title,
      amount: +amount,
    };
    setTransactions((prevState) => [newTransaction, ...prevState]);
    setTitle('');
    setAmount("");
  };

  
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        padding: 3,
      }}
    >
      <Stack spacing={2}>
        <Typography variant="h6">New transaction:</Typography>
        <TextField
          label="Title"
          variant="outlined"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <TextField
          label="Amount"
          variant="outlined"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          title="Mention expenses in negative sign"
        />
        <Button variant="contained" onClick={addNewTransaction}>
          Add Transaction
        </Button>
      </Stack>
    </Box>
  );
};

export default NewTransaction;

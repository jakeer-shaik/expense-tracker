import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const NewTransaction = ({ setTransactions }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const min = 1;
  const max = 10000;
  const randomId = Math.floor(Math.random() * (max - min + 1)) + min;
  const addNewTransaction = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: randomId,
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
        <TextField label="Title" variant="outlined" onChange={(e)=>setTitle(e.target.value)} value={title}/>
        <TextField label="Amount" variant="outlined" onChange={(e)=>setAmount(e.target.value)} value={amount} />
        <Button variant="contained" onClick={addNewTransaction}>
          Add Transcation
        </Button>
      </Stack>
    </Box>
  );
};

export default NewTransaction;

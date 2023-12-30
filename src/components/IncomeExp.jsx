import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

const IncomeExp = ({ transactions }) => {
  const amount = transactions.map((item) => item.amount);
  const incomeFilter = amount.filter((item) => item > 0);
  const income = incomeFilter
    .reduce((acc, curr) => (acc += curr), 0)
    .toFixed(2);
  const expfilter = amount.filter((item) => item < 0);
  const expenses = (
    expfilter.reduce((acc, curr) => (acc += curr), 0) * -1
  ).toFixed(2);
  return (
    <Box
      sx={{
        paddingTop:3,
        paddingX:3,
        display: "flex",
        flexDirection: "row",
        gap: 2, // Adjust the gap between cards
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          width: "300px",
          backgroundColor: "#4CAF50", // Green for income
        }}
      >
        <CardContent>
          <Typography variant="h6" sx={{ color: "#fff" }}>
            Income
          </Typography>
          <Typography variant="h6" sx={{ color: "#fff", fontWeight: "bold" }}>
            ₹ {income}
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          width: "300px",
          backgroundColor: "#EF5350", // Red for expenses
        }}
      >
        <CardContent>
          <Typography variant="h6" sx={{ color: "#fff" }}>
            Expenses
          </Typography>
          <Typography variant="h6" sx={{ color: "#fff", fontWeight: "bold" }}>
            ₹ {expenses}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default IncomeExp;

import { Box, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts";
import React from "react";

const TransactionChart = ({ transactions }) => {
  const transactionAmount = transactions.map((expense) => expense.amount);
  const largest = Math.max(...transactionAmount);
  const transactionTitle = transactions.map((expense) => expense.title);
  if (transactions) {
    return (
      <>
        <Box
          sx={{
            marginX: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            padding: 1,
            height: "fit-content",
            overflow: "auto",
            "&::-webkit-scrollbar": {
              width: "8px", // Adjust the width as needed
            },
            "&::-webkit-scrollbar-track": {
              background: "#f1f1f1",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#888",
              borderRadius: "6px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: "#555",
            },
          }}
        >
          <Typography variant="h5">Transaction Chart</Typography>
          <BarChart
            width={700}
            height={250}
            series={[
              {
                data: transactionAmount,
                label: "amount",
              },
            ]}
            xAxis={[
              {
                data: transactionTitle,
                scaleType: "band",
              },
            ]}
            yAxis={[{ max: largest }]}
          />
        </Box>
      </>
    );
  } else {
    return null;
  }
};

export default TransactionChart;

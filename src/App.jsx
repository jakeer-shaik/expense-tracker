import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Balance from "./components/Balance";
import IncomeExp from "./components/IncomeExp";
import NewTransaction from "./components/NewTransaction";
import AllTransactions from "./components/AllTransactions";
import TransactionChart from "./components/TransactionChart";
import { transactionList } from "./components/transactionSample";
import Loading from "./components/Loading";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <Box
            sx={{
              marginX: "auto",
              borderRadius: 6,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              boxShadow: { md: 8, sm: 0 },
              height: { md: "95vh", sm: "fit-content" },
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                padding: 2,
                marginTop: 3,
                fontStyle: "oblique",
                fontWeight: "medium",
              }}
            >
              Expense Tracker
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: { md: "row", sm: "column", xs: "column" },
                width: "100%",
              }}
            >
              <Box sx={{ width: { md: "30%", sm: "100%" } }}>
                <Balance transactions={transactions} />
                <IncomeExp transactions={transactions} />
                <NewTransaction setTransactions={setTransactions} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: { sm: "100%", md: "70%" },
                }}
              >
                <Box sx={{}}>
                  {transactions.length > 0 ? (
                    <Box>
                      <TransactionChart transactions={transactions} />
                    </Box>
                  ) : null}
                  <AllTransactions
                    transactions={transactions}
                    setTransactions={setTransactions}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
}

export default App;

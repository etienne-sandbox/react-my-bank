import { Header } from "./Header";
import { Accounts } from "./Accounts";

export function App() {
  const data = {
    userName: "Etienne",
    accounts: [
      {
        name: "Courant",
        id: "1",
        balance: 1205.67,
        color: "#1976D2",
        operations: [
          {
            id: "1-001",
            date: "20/07/2019",
            description: "SPOTIFY",
            amount: -9.99,
          },
          {
            id: "1-002",
            date: "18/07/2019",
            description: "CARREFOUR MARKET",
            amount: -23.56,
          },
          {
            id: "1-003",
            date: "18/07/2019",
            description: "DAB",
            amount: -50.0,
          },
          {
            id: "1-004",
            date: "16/07/2019",
            description: "SALAIRE",
            amount: 2183,
          },
        ],
      },
      {
        name: "Livret A",
        id: "2",
        balance: 6300,
        color: "#C2185B",
        operations: [
          {
            id: "2-001",
            date: "15/07/2019",
            description: "MACBOOK",
            amount: -3500,
          },
          {
            id: "2-002",
            date: "01/07/2019",
            description: "EPARGNE",
            amount: 500,
          },
          {
            id: "2-003",
            date: "01/06/2019",
            description: "EPARGNE",
            amount: 500,
          },
          {
            id: "2-004",
            date: "01/05/2019",
            description: "EPARGNE",
            amount: 1000,
          },
        ],
      },
    ],
    selectedOperation: "2-002",
  };

  return (
    <div>
      <Header userName={data.userName} />
      <Accounts accounts={data.accounts} selected={data.selectedOperation} />
    </div>
  );
}

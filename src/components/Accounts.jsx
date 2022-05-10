import { Account } from "./Account";

export function Accounts({ accounts, selected }) {
  return (
    <div className="Accounts">
      {accounts.map((account) => (
        <Account
          key={account.id}
          color={account.color}
          name={account.name}
          balance={account.balance}
          operations={account.operations}
          selected={selected}
        />
      ))}
    </div>
  );
}

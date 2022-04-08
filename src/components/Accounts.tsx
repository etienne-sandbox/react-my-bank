import { Account } from "./Account";
import type { AccountItem } from "./App";

type Props = {
  accounts: AccountItem[];
  selected: string | null;
};

export function Accounts({ accounts, selected }: Props): JSX.Element {
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

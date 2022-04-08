import { User } from "./User";

type Props = {
  userName: string;
};

export function Header({ userName }: Props): JSX.Element {
  return (
    <header className="Header">
      <div className="Header--center">
        <h1>My Bank</h1>
        <div style={{ flex: 1 }} />
        <User userName={userName} />
      </div>
    </header>
  );
}
